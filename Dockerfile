FROM ubuntu

MAINTAINER bhupabhupa

RUN apt-get update
RUN apt-get install --yes nodejs
RUN apt-get install --yes npm

EXPOSE 3033
RUN npm install
ENTRYPOINT ["npm", "start"]