FROM node:14
WORKDIR /usr/src/app/server
COPY package* ./
RUN npm install
EXPOSE 4001
CMD ["npm", "run", "start"]