From fedora
RUN yum install python3 -y
RUN yum install net-tools -y
RUN yum install httpd -y
COPY index.html /var/www/html/
COPY info.py /var/www/cgi-bin/
RUN chmod ugo+rx /var/www/cgi-bin/info.py
RUN echo 'apache ALL=(ALL) NOPASSWD: ALL' >> /etc/sudoers
EXPOSE 80
ENTRYPOINT ["/usr/sbin/httpd"]
CMD ["-D", "FOREGROUND"]