# Shortcode 修复 - 2026-06-10

## 目标
修复 Hugo build failure: content-polishing 分支的文章使用大量短代码，但 shortcodes 目录在 git 历史中丢失（仅剩 section.html 和新加的 insight.html），导致每次 workflow_dispatch 在 push 后立即触发时遇到不同缺失短代码。

## 根因
themes/dsp-theme/layouts/shortcodes/ 目录在 content-polishing 分支丢失，仅保留 2 个文件。
所有 16 个 shortcode 模板中，11 个可从 commit ceb03c7 的正确路径（layouts/shortcodes/，不是 themes/dsp-theme/layouts/shortcodes/）恢复，5 个需要新建。

## 修复清单

### 从 ceb03c7 恢复（路径修正）
- box.html, callout.html, check.html, diagram.html
- mat-row.html, mat.html, material.html, plus.html
- rawhtml.html, recipe.html, section.html

### 新建
- **insight.html** - 琥珀色左边框高亮提示框
- **stepgroup.html** - 步骤组容器
- **step.html** - 步骤项（标题 + 内容横向布局）
- **resourcegrid.html** - 资源卡片网格容器
- **resourcecard.html** - 资源卡片链接（名称 + 描述）

### CSS 补充（dsp-main.css）
- blockquote.insight-box：琥珀色边框 + 半透明背景
- .step-group / .step-title / .step-body：横向两栏布局
- .resource-grid：auto-fill responsive grid
- .resource-card：卡片样式，hover 高亮

## Git 提交记录
- cfdd89b：恢复 11 个 shortcodes（从 ceb03c7 layouts/shortcodes/ 路径）
- 561f45e：新增 step + stepgroup shortcodes
- f6faf24：新增 resourcegrid shortcode
- 6f71216：新增 resourcecard shortcode
- f6faf24：CSS 新增 step + resourcegrid 样式

## 当前状态
- content-polishing 分支已推送（commit 6f71216）
- 所有 16 个 shortcode 模板已到位
- Hugo build 将在下次 scheduled-release.yml 运行时验证
- 预计下次定时运行：2026-06-11 09:11 CST

## 技术教训
- `git ls-tree ceb03c7` 显示 `layouts/shortcodes/` 但 `git show ceb03c7:layouts/shortcodes/file` 能访问 → Hugo theme 路径会 strip `themes/` 前缀
- PowerShell 字符串比较中 `<=` 是 SideIndicator 符号，不是小于等于
- workflow_dispatch 在 push 后立即运行，但 runner 拉取的是旧 SHA → 每次发现不同缺失短代码
- 建议：统一 commit，一次性推送所有修复，让单个 workflow 验证完整修复