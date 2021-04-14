#!/bin/bash

# https://legacy.imagemagick.org/Usage/text/

mkdir -p generated/
rm -f generated/*

while IFS=, read -r title subtitle; do

outfile="$subtitle - $title.png"
header="Hi, I'm "
echo "Generating $outfile"

convert  \
 -size 500x500 xc:none \
 -undercolor white \
    -font SofiaPro -pointsize 40 \
    \( -clone 0 -fill '#1e2742' -gravity center -annotate +0-0 "$header" \) \
    \( -clone 0 -fill '#f97b06' -gravity center -annotate +0-0 "$title"  \) \
    -delete 0 -trim +repage +append -background transparent -flatten  \
    -transparent white \
    -gravity center -extent 820x201 \
    -undercolor white \
    -font SofiaPro -fill '#4a5168' -gravity center -pointsize 18 \
    -annotate +0+30 "$subtitle" \
    -transparent white \
    -size 820x201 background.png \
    -reverse \
    -flatten \
    "generated/$outfile" 
done < data.csv;

echo -e "\e[92mDone\e[0m"
