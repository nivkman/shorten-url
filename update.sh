cd shorten-url
git pull
docker stop shorten-url
docker-compose up -d --no-deps --build shorten-url 

