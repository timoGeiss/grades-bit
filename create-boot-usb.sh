#!/usr/bin/env bash
set -euo pipefail

# ------------------------------------------------------------------
# WARNING:
# This script will permanently erase all data on the selected device.
# Make absolutely sure you select the correct USB device.
# The author assumes no responsibility for data loss, hardware damage,
# or any other consequences resulting from the use of this script.
# Use at your own risk.
# ------------------------------------------------------------------

echo "WARNING: This operation will permanently destroy all data on the selected device."
echo "Double-check the device name before proceeding."
echo

DOWNLOAD_DIR="$HOME/Downloads"

echo "Searching for ISO files in: $DOWNLOAD_DIR"
ISO_FILE=$(ls -t "$DOWNLOAD_DIR"/*.iso 2>/dev/null | head -n 1 || true)

if [[ -z "${ISO_FILE:-}" ]]; then
    echo "No ISO file found in the Downloads directory."
    exit 1
fi

echo "Found ISO file:"
echo "  $ISO_FILE"
echo

echo "Available removable devices:"
lsblk -d -o NAME,SIZE,MODEL,RM | awk '$4==1 {print}'

echo
read -rp "Enter device name (e.g., sdb): " DEVNAME

DEVICE="/dev/$DEVNAME"

if [[ ! -b "$DEVICE" ]]; then
    echo "Device $DEVICE does not exist."
    exit 1
fi

echo
echo "All data on $DEVICE will be permanently erased."
read -rp "Type 'yes' to continue: " CONFIRM

if [[ "$CONFIRM" != "yes" ]]; then
    echo "Operation cancelled."
    exit 0
fi

echo "Unmounting any mounted partitions on $DEVICE..."
sudo umount ${DEVICE}?* 2>/dev/null || true

echo "Writing ISO to $DEVICE..."
sudo dd if="$ISO_FILE" of="$DEVICE" bs=4M status=progress oflag=sync

sync
echo
echo "Process completed. The USB stick is now bootable."
