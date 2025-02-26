#!/bin/bash

sourceDirectory="./application/grades-bit"
codeBaseDumpDirectoryPath="$HOME/CodeBaseDump"

echo -e "\e[32m"

mkdir -p "$codeBaseDumpDirectoryPath"

folders_to_copy=("app" "components")

for folder in "${folders_to_copy[@]}"; do
    if [ -d "$sourceDirectory/$folder" ]; then
        cp -r "$sourceDirectory/$folder" "$codeBaseDumpDirectoryPath/"
        echo "Folder '$folder' successfully copied🗿🗿🗿"
    else
        echo "Folder '$folder' doesent exist in source directory👺👺👺"
    fi
done