https://github.com/jhiekkap/-GrandinkulmaNextBusesTS

A Typescript/GraphQL demo project to get real-time arrival times of HSL vehicles

Install [node](https://nodejs.org/en/download/). 
Install all packages with `npm install`
First you need to build the static files with `npm run build`
This will generate them into `build` folder.

An example for serving static files:

Use npm package called serve to serve the project in port 5000:
- install: `npm install -g serve`
- serve: `serve -s -l 5000 build`
Test that the project is running by going to <http://localhost:5000>

-Docker:
docker build . -t arrival-times
docker tag arrival-times jhiekkap/grandinkulma 
docker push jhiekkap/grandinkulma

docker run -p 5000:5000 arrival-times