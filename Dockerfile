FROM ubuntu

MAINTAINER bhupabhupa

RUN apt-get update
RUN apt-get install --yes nodejs
RUN apt-get install --yes npm

RUN mkdir -p /usr/src/node-demo
EXPOSE 3030
WORKDIR /usr/src/node-demo
ADD package.json /usr/src/node-demo/
RUN npm install
ADD . /usr/src/node-demo/
ENTRYPOINT ["npm", "start"]
