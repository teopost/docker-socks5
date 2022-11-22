#!/bin/sh
echo "Updating proxy hosts config..."
/usr/local/bin/gen-hosts.sh
/usr/local/bin/gen-proxy-pac.sh
