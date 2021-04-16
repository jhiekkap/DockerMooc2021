#!/bin/sh
echo "Gihub repo:"; 
read REPO; 
IFS='/' 
read -r -a array <<< "$REPO"
REPONAME=${array[4]}
rm -rf $REPONAME
IFS=" "
git clone $REPO;
 
DOCKER_FILE='FROM node:latest
\nWORKDIR /mydir
\nEXPOSE 5000
\nCOPY . .
\nRUN npm install
\nRUN npm run build
\nRUN npm install -g serve 
\nCMD ["serve", "-s", "-l", "5000", "build"]'

echo $DOCKER_FILE  > Dockerfile;  
HUBNAME="jhiekkap/${REPONAME}" 
mv Dockerfile $REPONAME
cd $REPONAME
docker build . -t $HUBNAME
docker login
docker push $HUBNAME
docker run -p 5000:5000 $HUBNAME

# https://github.com/jhiekkap/singers-mirror