$maps = @(
    @("tab1", "home", "Tab1", "Home"),
    @("tab2", "bhavishyamalika", "Tab2", "Bhavishyamalika"),
    @("tab3", "trisandhya", "Tab3", "Trisandhya")
)

foreach ($map in $maps) {
    $old = $map[0]
    $new = $map[1]
    $oldCap = $map[2]
    $newCap = $map[3]

    if (Test-Path "src\app\$old") {
        Rename-Item -Path "src\app\$old" -NewName $new
        Get-ChildItem -Path "src\app\$new" -Filter "*$old*" | Rename-Item -NewName {$_.Name -replace $old, $new}
        
        Get-ChildItem -Path "src\app\$new" -File | ForEach-Object {
            (Get-Content $_.FullName) -replace $old, $new -replace $oldCap, $newCap | Set-Content $_.FullName
        }
    }
}

# Update tabs-routing.module.ts
$routing = Get-Content "src\app\tabs\tabs-routing.module.ts" -Raw
$routing = $routing -replace 'tab1', 'home' -replace 'Tab1', 'Home'
$routing = $routing -replace 'tab2', 'bhavishyamalika' -replace 'Tab2', 'Bhavishyamalika'
$routing = $routing -replace 'tab3', 'trisandhya' -replace 'Tab3', 'Trisandhya'
Set-Content -Path "src\app\tabs\tabs-routing.module.ts" -Value $routing

# Update tabs.page.html
$html = Get-Content "src\app\tabs\tabs.page.html" -Raw
$html = $html -replace 'tab1', 'home'
$html = $html -replace 'tab2', 'bhavishyamalika'
$html = $html -replace 'tab3', 'trisandhya'
Set-Content -Path "src\app\tabs\tabs.page.html" -Value $html
