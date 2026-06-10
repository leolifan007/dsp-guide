# 推送流程检查清单（永久规则 2026-06-10）

每次向 content-polishing 分支执行 push 前，必须完成以下全部检查。

---

## 一、推送前必须给用户的验收表格（SOP 08）

在 commit 前，先给用户一个验收表格：

| 序号 | 文章/文件 | 改动内容 | 渲染效果 | 发布时间 |
|------|-----------|----------|----------|----------|
| 1 | xxx.md | 修改了 hidden/publishDate | [截图] | 2026-06-xx HH:MM |

用户确认后再 push。**禁止在用户确认前直接 push。**

---

## 二、技术检查（SOP 07 + SOP 09）

### 2.1 文件编码
```powershell
# 检查非 ASCII 字符
Get-Content "content/article.md" -Encoding UTF8 | Select-String "[^\x00-\x7F]"
# 中文字符 → 正常；- " ' → 替换；emoji → 删除
```

### 2.2 禁用字符清单
- ❌ em-dash (`—`)、en-dash (`–`)
- ❌ 弯引号 (`" " ' '`)
- ❌ Emoji（文章内）
- ❌ 其他非 ASCII 标点

### 2.3 文件编码必须为 UTF-8 without BOM
- 使用 PowerShell `Set-Content -Encoding UTF8` 或 write_file.py
- 禁止 Windows 记事本直接保存

---

## 三、Git 检查（SOP 09）

- [ ] 所在分支为 `content-polishing`（非 main）
- [ ] Commit message 清晰描述改动内容，含 `[skip ci]` 标签
- [ ] `git status` 无意外变更的文件
- [ ] 已验证 Hugo build 在本地（或通过一次 workflow_dispatch）成功
- [ ] 不直接触发 workflow_dispatch 作为测试手段（让 cron 触发）

---

## 四、内容/图片检查（SOP 03）

### 4.1 SVG 文件完整性
文章引用每个 SVG 前，必须确认文件存在：

```powershell
# 检查文章引用的所有 SVG 是否存在
Select-String -Path "content/article.md" -Pattern '/images/[^"]+\.svg' | ForEach-Object {
  $svg = $_.Matches.Value -replace '/images/',''
  if (Test-Path "static/images/$svg") { "OK: $svg" } else { "MISSING: $svg" }
}
```

### 4.2 SVG 编码（GitHub Pages 限制）
- SVG 文件必须为纯 ASCII（禁止 Unicode 字符）
- 检查方法：`Select-String -Path "static/images/file.svg" -Pattern "[^\x00-\x7F]"`
- 如有非 ASCII 字符，用 Python 脚本清理后重新保存

---

## 五、Shortcode 检查

Hugo build 失败的最常见原因：文章使用了 shortcode 但模板文件缺失。

检查方法：
```powershell
# 列出所有文章使用的 shortcode 名称
Select-String -Path "content/*.md" -Pattern '\{\{< ([^ ]+) ' -AllMatches | ForEach-Object {
  $_.Matches.Groups[1].Value
} | Sort-Object -Unique

# 列出已存在的 shortcode 模板
Get-ChildItem themes/dsp-theme/layouts/shortcodes -Name -Filter "*.html"
```

两者对比，有 shortcode 无对应模板 → 需创建模板或修改文章。

---

## 六、Workflow 配置检查

- [ ] cron 时间未被错误修改（如被临时改到其他时间，必须改回原值）
- [ ] workflow 文件无意外变更

---

## 七、发布后验证

- Hugo build 成功（workflow 状态 = success）
- 目标文章在 dsp-guide.com 上可访问
- SVG/图片正常加载（无 404）
- 链接卡片日期 = publishDate

---

## 常见 Hugo build 失败模式

| 错误信息 | 根因 | 修复 |
|----------|------|------|
| `shortcode "xxx" not found` | shortcode 模板缺失 | 创建 `themes/dsp-theme/layouts/shortcodes/xxx.html` |
| `closing tag for shortcode 'xxx' does not match start tag` | 开闭标签不一致（typo） | 修复文章中的拼写错误 |
| SVG 加载失败（404） | SVG 文件不存在于 `static/images/` | 创建 SVG 文件 |
| Hugo build 全部成功但 deploy 失败 | `git push` 权限问题 | 检查 workflow permissions |

---

## workflow_dispatch 使用规则

- **workflow_dispatch 不应用于测试**：runner 拉取的是 push 前的 SHA，会产生循环失败
- **正确方式**：让 cron 触发，或等 20+ 分钟让 GitHub 刷新
- **唯一例外**：临时分支测试（`git checkout SHA -b temp-test`，触发后删除）

---

## 版本历史

| 日期 | 变更 |
|------|------|
| 2026-06-10 | 创建本检查清单，记录今日 SOP 违规教训 |