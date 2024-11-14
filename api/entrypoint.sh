#!/bin/bash

# Load environment variables from the .env file 
# source .env 

# Wait for MySQL to be ready
echo "Waiting for MySQL to be ready..."
until nc -z -v -w30 $MYSQL_HOST $MYSQL_PORT; do
  echo "Waiting for MySQL server at $MYSQL_HOST:$MYSQL_PORT..."
  sleep 5
done

# Run Prisma migrations
echo "Running Prisma migrations..."
npx prisma migrate deploy

# Start the API server
echo "Starting API server..."
npm run start
