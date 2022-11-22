#!/bin/sh

export CONFIG_DIR=/app/hosts.d

cat $CONFIG_DIR/hosts.* > /tmp/tmphostfile

head='### BEGIN GENERATED CONTENT'
tail='### END GENERATED CONTENT'

if [ $(cat /etc/hosts | grep "$head" | wc -l) -eq 0 ]; then
  echo "It's the first time add placeholder to /etc/hosts"
  echo $head >> /etc/hosts
  echo "" >> /etc/hosts
  echo $tail >> /etc/hosts 
fi


echo "Creating working file"
cp /etc/hosts /tmp/hosts.work

echo "Put /tmp/tmphostfile inside placeholder"
sed -i -e "/^$head$/,/^$tail$/{ /^$head$/{p; r /tmp/tmphostfile
        }; /^$tail$/p; d }"  /tmp/hosts.work

cat /tmp/hosts.work > /etc/hosts

echo "Controllo hosts duplicati"
cat $CONFIG_DIR/hosts.* | sed -r 's/\t/ /g' | sed -r 's/#.*$'// | sed -r 's/(\b[0-9]{1,3}\.){3}[0-9]{1,3}\b'/""/  |tr ' ' '\n' | grep -v '^[[:space:]]*$' | uniq -c | awk '{print $2, $1}' | grep -v 1
