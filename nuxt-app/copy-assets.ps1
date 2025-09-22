<#
PowerShell script to copy static assets from the repository root into this Nuxt app's public folder.
Run this script from inside the `nuxt-app` directory in PowerShell:

  PowerShell -ExecutionPolicy Bypass -File .\copy-assets.ps1

Or call with explicit source root:
  PowerShell -ExecutionPolicy Bypass -File .\copy-assets.ps1 -SourceRoot ".."
#>
[CmdletBinding()]
param(
    [string]$SourceRoot = "..",
    [string]$PublicDir = "public"
)

$src = Resolve-Path -Path $SourceRoot
$dst = Join-Path -Path (Get-Location) -ChildPath $PublicDir
if (-not (Test-Path $dst)) {
    New-Item -ItemType Directory -Path $dst | Out-Null
}

$items = @('css','js','fonts','vahag','images','favicon.png')

foreach ($item in $items) {
    $srcPath = Join-Path $src $item
    if (Test-Path $srcPath) {
        Write-Output "Copying '$srcPath' -> '$dst'"
        # Remove existing destination item if present then copy fresh
        $dstItem = Join-Path $dst $item
        if (Test-Path $dstItem) {
            Remove-Item -Path $dstItem -Recurse -Force -ErrorAction SilentlyContinue
        }
        Copy-Item -Path $srcPath -Destination $dst -Recurse -Force -ErrorAction Stop
    } else {
        Write-Output "Skipped (not found): $srcPath"
    }
}

Write-Output "Asset copy finished."
