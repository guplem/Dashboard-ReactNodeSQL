#!/bin/bash

# Wait for MySQL to be ready
echo "Waiting for MySQL to be ready..."
until nc -z -v -w30 $MYSQL_HOST $MYSQL_PORT; do
  echo "Waiting for MySQL server at $MYSQL_HOST:$MYSQL_PORT..."
  sleep 5
done

# Run Prisma migrations
echo "💽 Running Prisma migrations..."
npx prisma migrate deploy

# Run the API server with hot reloading in development mode
if [ "$NODE_ENV" = "development" ]; then
  echo "\n⚒️ Starting API server in development mode with hot reloading..."
  # npx nodemon --watch . --ext js,ts,json --exec "npm run start"
  # npx nodemon -L --exec "tsx src/index.ts"
  npm run dev
else
  echo "\n🏛️ Starting API server in production mode..."
  npm run start
fi
