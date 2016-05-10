FROM openshift3/nodejs-010-rhel7

ADD . /opt/app-root/src/

CMD /bin/bash -c 'env NODE_ENV=openshift npm start'
