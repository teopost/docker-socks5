#!/bin/sh 


# refresh hosts file list
/usr/local/bin/gen-hosts.sh
/usr/local/bin/gen-proxy-pac.sh

danted

#/usr/local/bin/dumb-init sockd

