# Dockerfile to create a docker image
FROM node:4.2.2

# Add files to the image
RUN mkdir -p /opt/nodejs
ADD . /opt/nodejs
WORKDIR /opt/nodejs
RUN npm install

VOLUME /kubernetes

RUN ln -s /kubernetes /opt/nodejs/k8s

# Expose the container port
EXPOSE 5000

ENTRYPOINT ["node", "index.js"]
