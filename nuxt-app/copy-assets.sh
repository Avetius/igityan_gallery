#!/usr/bin/env bash
# Shell script to copy assets from repo root into nuxt-app/public
# Usage: ./copy-assets.sh [SOURCE_ROOT]
SRC=${1:-..}
DST="public"
mkdir -p "$DST"
for item in css js fonts vahag images favicon.png; do
  if [ -e "$SRC/$item" ]; then
    echo "Copying $SRC/$item -> $DST/"
    rm -rf "$DST/$item"
    cp -a "$SRC/$item" "$DST/"
  else
    echo "Skipped (not found): $SRC/$item"
  fi
done

echo "Asset copy finished."
