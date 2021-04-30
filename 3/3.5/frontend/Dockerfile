FROM node:16-alpine3.11
WORKDIR /mydir
EXPOSE 5000
RUN node -v && npm -v
COPY . .
RUN npm install && REACT_APP_BACKEND_URL=http://localhost:8080 && \
    npm run build && npm install -g serve && \
    chmod a+x /mydir && adduser -D appuser 
USER appuser

CMD ["serve", "-s", "-l", "5000", "build"]