FROM node:latest
WORKDIR /mydir
EXPOSE 5000
RUN node -v && npm -v
COPY . .
RUN npm install
RUN REACT_APP_BACKEND_URL=http://localhost:8080 
RUN npm run build
RUN npm install -g serve

RUN chmod a+x /mydir
RUN useradd -m appuser 
USER appuser

CMD ["serve", "-s", "-l", "5000", "build"]