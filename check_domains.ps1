# Check domain registration via nameserver lookup
$domains = @(
    "dsp-guide.com",
    "dysonsphereguide.com", 
    "dspguides.com",
    "dysonspherepro.com",
    "dsp-guide.net",
    "dsp-guide.org"
)

foreach ($d in $domains) {
    $result = nslookup -type=ns $d 2>&1 | Out-String
    $hasNS = ($result -match "nameserver") -and ($result -notmatch "Non-existent|can't find|server can|找不到")
    if ($hasNS) {
        Write-Host "$d : HAS NS (registered)"
    } else {
        Write-Host "$d : NO NS (likely available)"
    }
}
