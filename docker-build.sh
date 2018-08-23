# make sure angular projects have been builty
cd app-producer
ng build --prod 

cd ../app-consumer
ng build --prod

cd ../
docker build -t api ./api
docker build -t app-producer ./app-producer
docker build -t app-consumer ./app-consumer