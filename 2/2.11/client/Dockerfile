FROM node:latest
WORKDIR /usr/src/app/client
COPY package* ./
RUN npm install 
EXPOSE 3000 
CMD ["npm", "start"]