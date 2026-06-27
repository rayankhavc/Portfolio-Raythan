$content = Get-Content -Path " "\c:\Users\rir0u\Portfolio-Raythan\components\ui\Navbar.tsx\' -Raw 
$content = $content.replace(" "\src=/logo.png\',\src=/logo-raythan.png\')  
$content = $content.replace(\className=object-contain\',\className=object-contain shrink-0\') 
