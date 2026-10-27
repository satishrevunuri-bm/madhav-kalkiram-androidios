$maps = @(
    @("homePage", "HomePage"),
    @("bhavishyamalikaPage", "BhavishyamalikaPage"),
    @("trisandhyaPage", "TrisandhyaPage")
)

Get-ChildItem -Path "src\app\home" -File | ForEach-Object {
    (Get-Content $_.FullName) -creplace "homePage", "HomePage" | Set-Content $_.FullName
}
Get-ChildItem -Path "src\app\bhavishyamalika" -File | ForEach-Object {
    (Get-Content $_.FullName) -creplace "bhavishyamalikaPage", "BhavishyamalikaPage" | Set-Content $_.FullName
}
Get-ChildItem -Path "src\app\trisandhya" -File | ForEach-Object {
    (Get-Content $_.FullName) -creplace "trisandhyaPage", "TrisandhyaPage" | Set-Content $_.FullName
}

# Update tabs-routing.module.ts
$routing = Get-Content "src\app\tabs\tabs-routing.module.ts" -Raw
$routing = $routing -creplace 'homePageModule', 'HomePageModule'
$routing = $routing -creplace 'bhavishyamalikaPageModule', 'BhavishyamalikaPageModule'
$routing = $routing -creplace 'trisandhyaPageModule', 'TrisandhyaPageModule'
Set-Content -Path "src\app\tabs\tabs-routing.module.ts" -Value $routing
