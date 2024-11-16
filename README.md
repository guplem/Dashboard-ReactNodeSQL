# Full Stack Application with React Admin, Node.js, MySQL, and Docker

This repository contains a full-stack application with three main components:

- **Frontend**: A **React Admin** application powered by React.
- **Backend**: A **Node.js (Express)** API serving data to the frontend.
- **Database**: A **MySQL** database storing data that the backend API interacts with.

All components are containerized using Docker, making it easy to build, run, and share the application with minimal setup.

---

## Project Structure

```
Root/
 ├── dashboard/
 |    ├── Dockerfile
 |    ├── .env
 |    ├── public/
 |    └── src/
 ├── api/
 |    ├── Dockerfile
 |    ├── entrypoint.sh
 |    ├── .env
 |    ├── prisma/
 |    |    ├── schema.prisma
 |    |    └── migrations/
 |    └── src/
 |         ├── application/
 |         │    └── services/
 |         ├── domain/
 |         │    ├── models/
 |         │    └── repositories/
 |         ├── infrastructure/
 |         │    ├── repositories/
 |         │    └── http/
 |         └── tests/
 ├── database/
 |    └── data/
 └── docker-compose.yml
```

### Key Components

- **dashboard/**: Contains the **React Admin** frontend application written in TypeScript and built for interacting with the backend API.
  - Includes environment variables in `.env`.
  - `Dockerfile` builds and runs the React Admin app within a container.

- **api/**: Contains the **Express** backend API built with TypeScript, integrated with **Prisma** for database ORM.
  - **prisma/**: Manages the Prisma schema, database migrations, and seed scripts.
  - **entrypoint.sh**: Ensures that the database is ready, applies migrations, seeds the database, and starts the API.
  - Includes environment variables in `.env`.
  - `Dockerfile` builds and runs the API server within a container.

- **database/**: Contains the **MySQL** database setup, with persistent data stored in the `data/` directory.

- **docker-compose.yml**: Defines services (`dashboard`, `api`, and `database`), their configurations, and how they connect within the `app-network`.

---

## Prerequisites

Before running the application, ensure you have the following installed:

- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## Getting Started

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/guplem/Dashboard-ReactNodeSQL.git
cd Dashboard-ReactNodeSQL
```

### 2. Build and Run the Application

Use Docker Compose to build and start the services:

```bash
docker-compose up --build
```

This will:

- Build Docker images for the frontend (`dashboard`), backend (`api`), and database (`database`).
- Start the containers in the background.

---

## Accessing the Application

- **Frontend**: Access the React Admin interface at [http://localhost:3000](http://localhost:3000).
- **Backend**: The Express API is running at [http://localhost:3001](http://localhost:3001).
- **Database**: MySQL is accessible on port `3306` (if needed for debugging or direct SQL access).

---

## Stopping the Application

To stop and remove all containers, use:

```bash
docker-compose down
```

---

## How It Works

### Frontend (React Admin)

- Built with **React Admin** to provide an interface for managing application data.
- Communicates with the backend via RESTful API endpoints.

### Backend (Node.js + Prisma)

- Built using **Express** with **TypeScript**.
- Uses **Prisma** for database management and ORM.
- Initializes the database using migrations and seeds data during container startup.

### Database (MySQL)

- Uses the official `mysql:8.0` Docker image.
- Data is persisted in the `database/data` folder to retain information between container restarts.

---

## Useful Commands

- **Start the application**:  
  ```bash
  docker-compose up
  ```

- **Rebuild containers**:  
  ```bash
  docker-compose up --build
  ```

- **Stop the application**:  
  ```bash
  docker-compose down
  ```

- **View logs for all services**:  
  ```bash
  docker-compose logs
  ```

---

## Troubleshooting

- **Frontend issues**:
  - Ensure the `dashboard` container is running and properly built.
  - Check the browser console for errors and confirm the API is reachable.

- **Backend issues**:
  - Ensure the `api` container is running and successfully applied Prisma migrations.
  - Check the logs for errors using `docker-compose logs api`.

- **Database issues**:
  - Ensure the `database` container is running and accessible.
  - Check if the persistent data directory (`database/data`) has proper read/write permissions.