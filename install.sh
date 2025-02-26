#!/bin/bash

# Define variables
BRANCH_NAME="revert"
FOLDER_NAME="grades-bit"
REPO_URL="https://github.com/timoGeiss/grades-bit.git"

echo -e "\e[32m"
# Check if the folder exists and delete it if present
if [ -d "$FOLDER_NAME" ]; then
    echo "Folder $FOLDER_NAME exists. Deleting..."
    rm -rf "$FOLDER_NAME"
else
    echo "Folder $FOLDER_NAME does not exist. Proceeding..."
fi

# Clone the repository
git clone $REPO_URL

cd $FOLDER_NAME

git checkout $BRANCH_NAME && git pull origin $BRANCH_NAME

# Delete .git folder before running npm install
rm -rf .git
echo "Deleted .git folder."

chmod 777 ./DumpCodebase.sh

cd application
cd grades-bit

echo "Trying to install node_modules⚙️..."

sleep 2

npm cache clean --force
npm install

echo "Successfully installed node_modules🗿"
code .
