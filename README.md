# shorten-url
Node js application for making urls short and monitored

## Installation
Install with npm.

```bash
npm install
```

or:
```bash
npm i
```

## Environment Variables
create .env file in your root folder with these variables:
- DATABASEURL (db link)

## Docker Build & Run Container
Use docker to build an image and run the container

```bash
sudo docker build -t <image_name>:<version> .
sudo docker run --env-file .\env <image_name>:<version>
```
