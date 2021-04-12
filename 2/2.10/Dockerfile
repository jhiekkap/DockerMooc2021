FROM node:latest
WORKDIR /mydir
EXPOSE 5000
RUN node -v && npm -v
COPY . .
RUN npm install
RUN REACT_APP_BACKEND_URL=http://localhost:80/api npm run build
RUN npm install -g serve 
CMD ["serve", "-s", "-l", "5000", "build"]