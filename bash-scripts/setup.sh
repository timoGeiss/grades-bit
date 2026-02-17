#! /bin/bash

USERNAME="ubuntu"

# ---- ensure curl is installed ----
if ! command -v curl >/dev/null 2>&1; then
  echo "Installing curl..."
  apt update
  apt install -y curl
fi

## create alias for setup if not exists
if ! grep -qE "^alias\s+setup=" /home/$USERNAME/.bashrc; then
  echo -e "alias setup=\"gsettings set org.gnome.desktop.input-sources sources \\\"[('xkb','ch')]\\\" && sudo /usr/local/bin/setup.sh\"" | tee -a /home/$USERNAME/.bashrc
fi

#cloning repo
SETUP_C="curl -L https://raw.githubusercontent.com/timoGeiss/grades-bit/main/install.sh | bash"
sudo -u $USERNAME sh -c "cd /home/$USERNAME/ && $SETUP_C"

