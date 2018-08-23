
## About
This is an example project to demonstrate how multiple docker containers can communicate 
with a server.

The project consists of three parts:
* api          - express server exposed on port 3000 with operations to POST data and GET data
* app-producer - A simple angular app which POSTs data to the api /data
* app-consumer   - A simple angular app which GETs data to the api /data

## Getting Started
 - Install Docker - https://docs.docker.com/install/#relationship-between-ce-and-ee-code
- Install nodejs - https://nodejs.org/en/download/
 
From the root directory, the images can be built with
```
docker build -t api ./api
docker build -t app-producer ./app-producer
docker build -t app-consumer ./app-consumer
```
Or you can run the script docker-build.sh located in the root directory

To run as docker images, you must map the ports to whichever ports you desire. One configuration could be
```
docker run -d -p 8080:3000 api
docker run -d -p 3000:80 app-producer
docker run -d -p 4200:80 app-consumer
```
Or run the script docker-start.sh located in the root directory (which has the above port mappings).

###### NOTE FOR WINDOWS USERS
- If you are using windows 10 Home edition, install docker tools, otherwise docker for windows
- By default docker is configure to use a default IP address, so localhost will not work, instead to use the IP provided by docker. To find the IP, either start the docker shell (it will be logged at the top), or run `docker-machine ip`