FROM golang:1.16.3-alpine3.13 as build-stage
WORKDIR /mydir
EXPOSE 8080
COPY . .  
RUN go build  
ENV PORT=8080
ENV REQUEST_ORIGIN=http://localhost:5000

RUN chmod a+x /mydir && adduser -D userapp  
USER appuser

FROM alpine
RUN apk update && apk add ca-certificates && rm -rf /var/cache/apk/*
WORKDIR /mydir
COPY --from=build-stage /mydir /mydir

ENTRYPOINT ["./server" ]