Useful commands:

# Docker

Run the docker:
```bash
docker-compose up
```

Run and build the docker:
```bash
docker-compose up --build
```

See all containers (running and stopped):
```bash
docker ps -a
```

Get inside a container:
> `container_id` is the *name* (reported by `docker ps -a`) of the container you want to get inside
```bash
docker exec -it <container_id> sh
```

Test API with curl:
```bash
curl http://api:3001/health/hello-world
```




# Deployment to Google Cloud:

> Prerequisite: Ensure you have the Google Cloud CLI installed.

> Ensure you are loged in with `docker login`.

Configure docker to upload to gcloud:
```
gcloud auth configure-docker eu.gcr.io
```

## API

1. Build the docker image:
```bash
docker build -f docker/prod/Dockerfile -t dashboard-api .
```

2. Tag the image:
```bash
docker tag dashboard-api eu.gcr.io/dashboard-reactnodesql/dashboard-api:latest
```

> Latest can be replaced with a version number if desired. For example: `gillemp/dashboard-api:1.0.0` (This applies to the tag and upload)

3. Upload the image to Docker Hub:
```bash
docker push eu.gcr.io/dashboard-reactnodesql/dashboard-api:latest
```

4. In the Cloud Run of the Google Cloud Console, select `Edit and deploy new revision`. And select the image you just uploaded.


## Dashboard

1. Build the docker image:
```bash
docker build -f docker/prod/Dockerfile -t dashboard-front .
```

2. Tag the image:
```bash
docker tag dashboard-front eu.gcr.io/dashboard-reactnodesql/dashboard-front:latest
```

> Latest can be replaced with a version number if desired. For example: `gillemp/dashboard-api:1.0.0` (This applies to the tag and upload)

3. Upload the image to Docker Hub:
```bash
docker push eu.gcr.io/dashboard-reactnodesql/dashboard-front:latest
```

4. In the Cloud Run of the Google Cloud Console, select `Edit and deploy new revision`. And select the image you just uploaded.



# Prisma

Generate and execute Prisma Migrations:
1. Update the prisma schema file with the desired changes.
2. Open a terminal within the `api` container. See "*Get inside a container*" above.
3. Ensure you are in the /app directory (where the prisma schema is located and the app exists)
```bash
cd /app
```
4. Run the following command:
```bash
npx prisma migrate dev
```
5. Re-generate the Prisma Client:
```bash
npx prisma generate
```
6. From the host (dev) machine, from within the `api` directory, re-generate the Prisma Client:
```bash
npx prisma generate
```


How to Deploy Prisma Migrations:
> This is usually not necessary, as the migrations are run automatically when created and when the app starts. However, if you want to deploy the migrations manually.
```bash
npx prisma migrate deploy
```



