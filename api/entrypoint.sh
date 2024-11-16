#!/bin/bash

echo "🚧 Starting build process for the API server..."

# Wait for MySQL to be ready
until mysqladmin ping -h"$MYSQL_HOST"; do
  echo "⏳ Waiting for MySQL server at $MYSQL_HOST:$MYSQL_PORT to be up..."
  sleep 5
done

echo "✅ MySQL server is up."

echo "⏳ Waiting for connection to MySQL server at $MYSQL_HOST:$MYSQL_PORT to be ready..."
/usr/local/bin/wait-for-it.sh $MYSQL_HOST:$MYSQL_PORT --timeout=60 -- echo "✅ MySQL connection is ready."

# Run Prisma generate to ensure the Prisma Client is generated
echo "🔄 Generating Prisma Client..."
npx prisma generate

# Run Prisma migrations
echo "💽 Running Prisma migrations..."
npx prisma migrate deploy

# Seed the database with initial data
echo "🌱 Seeding the database with initial data..."
npx prisma db seed

# Run the API server with hot reloading in development mode
if [ "$NODE_ENV" = "development" ]; then
  echo "⚒️ Starting API server in development mode with hot reloading..."
  npm run dev
else
  echo "🏛️ Starting API server in production mode..."
  npm run start
fi
