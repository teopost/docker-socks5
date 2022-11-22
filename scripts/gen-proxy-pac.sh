#!/bin/sh

CONFIG_DIR=/app/hosts.d
OUTPUT_DIR=/app/www

template_head='

function FindProxyForURL(url, host) {
        var useGateway=false;
	host = host.toLowerCase();

	if (dnsDomainIs(host, "fake-domain-head") || '

template_tail='dnsDomainIs(host, "fake-domain-tail") )
        {
                useGateway=true;
        }

        if (useGateway)
	   return "SOCKS5 proxy-gateway.tecla.it:60000";
}
'

lista_hosts=$(cat $CONFIG_DIR/hosts.* | sed -r 's/\t/ /g' | sed -r 's/#.*$'// | sed -r 's/(\b[0-9]{1,3}\.){3}[0-9]{1,3}\b'/""/  |tr ' ' '\n' | grep -v '^[[:space:]]*$')

echo -e "$template_head" > $OUTPUT_DIR/proxy.pac

for a in $lista_hosts 
do
  echo -e "shExpMatch(host, \"$a\".toLowerCase() ) ||"  >> $OUTPUT_DIR/proxy.pac
done
echo -e "$template_tail" >>  $OUTPUT_DIR/proxy.pac

