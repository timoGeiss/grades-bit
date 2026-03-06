#!/bin/bash

set -e
# Define variables
BRANCH_NAME="revert-easy"
FOLDER_NAME="grades-bit"
REPO_URL="https://github.com/timoGeiss/grades-bit.git"

# install prerequisites
sudo apt update
sudo apt install -y wget gpg apt-transport-https software-properties-common

# remove old vscode repo if exists
sudo rm -f /etc/apt/sources.list.d/vscode.list
sudo rm -f /usr/share/keyrings/microsoft.gpg

# import Microsoft GPG key
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | \
  gpg --dearmor | \
  sudo tee /usr/share/keyrings/microsoft.gpg > /dev/null

# add VS Code repository
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/microsoft.gpg] https://packages.microsoft.com/repos/code stable main" | \
  sudo tee /etc/apt/sources.list.d/vscode.list > /dev/null

# install VS Code
sudo apt update
sudo apt install -y code

# install firefox
sudo snap install firefox

#Part2

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

# Installing nvm
echo "Installing or updating nvm..."

if [ ! -d "$HOME/.nvm" ]; then
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
else
  echo "nvm already installed"
fi

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

echo "Installing latest Node LTS..."
nvm install --lts
nvm use --lts
nvm alias default 'lts/*'

echo "Node and nvm ready."

cd application
cd grades-bit

echo "Trying to install node_modules..."

sleep 2

# optional: alte Installation entfernen
rm -rf node_modules
rm -f package-lock.json

echo "Cleaning npm cache..."
npm cache clean --force

echo "Installing dependencies..."
npm install

echo "Successfully installed node_modules 🗿"

# Expo Upgrade
echo "Upgrading Expo SDK..."
npx expo upgrade

# Fix incompatible dependency versions
echo "Fixing Expo dependency versions..."
npx expo install --fix

echo "Setup finished "

code .
