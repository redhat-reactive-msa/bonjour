FROM openshift/nodejs-010-centos7
USER root
ADD . /opt/app-root/src/
RUN chmod -R 777 /opt/app-root
CMD /bin/bash -c 'env NODE_ENV=openshift npm start'
