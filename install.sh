#!/bin/bash

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

chmod 777 ./DumpCodebase.sh

# Installing nvm
echo "Curling nvm..."
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

sleep 4

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm

echo "Installing node 18"
nvm install 18
nvm use 18

echo "Successfully installed nvm and node 18."

cd application
cd grades-bit

echo "Trying to install node_modules⚙️..."

sleep 2

npm cache clean --force
npm install

echo "Successfully installed node_modules🗿"

#Tries to resolve possible version conflicts
echo "Upgrading expo packages..."
npx expo install --fix

code .
