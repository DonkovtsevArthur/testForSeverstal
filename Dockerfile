FROM mhart/alpine-node:12
WORKDIR /usr/src/app
COPY . .
RUN npm install
CMD [ "npm", "start" ]

