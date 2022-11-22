# README #

This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for? ###

Aggiungere nel file /etc/hosts i seguenti tags.
Lo script accoda i files hosts e li mette dentro questi 2 placeholder

```bash
### BEGIN GENERATED CONTENT

### END GENERATED CONTENT
```

# Servizi necessari per il proxy

* HTTP server light per script: systemctl status lighttpd
* Servizio dante proxy: systemctl status sockd
