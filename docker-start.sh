docker run -d -p 8080:3000 api
docker run -d -p 3000:80 app-producer
docker run -d -p 4200:80 app-consumer