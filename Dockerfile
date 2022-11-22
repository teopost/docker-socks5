FROM ubuntu:20.04

RUN apt update \
    && apt install -y dante-server \
    && useradd -r -s /bin/false sockd

# Default configuration
COPY config/sockd.conf /etc/danted.conf
COPY scripts/* /usr/local/bin/

ADD entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 1080

ENTRYPOINT ["/entrypoint.sh"]
