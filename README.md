# Full Stack Application with React Admin, Node.js, MySQL, and Docker

This repository contains a full stack application with three main components:

- **Frontend**: A React Admin application powered by React.
- **Backend**: A Node.js (Express) API serving data to the frontend.
- **Database**: A MySQL database storing data that the backend API interacts with.

All components are containerized using Docker, making it easy to run and share the application with just a single command.

## Project Structure

```
Root/
 ├── dashboard/
 ├── api/
 ├── database/
 ├── docker-compose.yml
 └── .env
```

- `dashboard/`: Contains the **React Admin** frontend application built with TypeScript.
- `api/`: Contains the **Express** API backend built with **Prisma** and TypeScript.
- `database/`: Contains the **MySQL** database initialization (database creation).
- `docker-compose.yml`: Defines services for the frontend, backend, and database.
- `.env`: Stores environment variables (e.g., MySQL root password, database name).

## Prerequisites

Before running the application, make sure you have the following installed:

- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Getting Started

### 1. Clone the Repository

Clone this repository to your local machine *(and navigate to the project folder)*:

```bash
git clone https://github.com/guplem/Dashboard-ReacNodeSQL.git
cd full-stack-react-admin-node-mysql-docker
```

### 2. Build and Run with Docker Compose

To build and start the project using Docker Compose, run the following command from the root directory of the project:

```bash
docker-compose up --build
```

This command will:

- Build the Docker images for the frontend (`dashboard`), backend (`api`), and MySQL (`database`).
- Start all containers in the background.

### 3. Access the Application

Once the containers are up and running, you can access the following:

- **Frontend (React Admin)**: Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to interact with the React Admin interface.
- **Backend (Node.js API)**: The backend API is running on [http://localhost:3001](http://localhost:3001) and provides RESTful endpoints.

### 4. Stop the Application

To stop the running containers, use the following command:

```bash
docker-compose down
```

This will stop and remove the containers, but it will keep your data in the MySQL container.

## How It Works

### Frontend (React Admin)

- The frontend uses **React Admin** to provide access to a dashboard interface.
- It fetches data from the backend API on `http://api:3001`.

### Backend (Node.js + Express)

- The backend is built with **Node.js** and **Express**.
- It serves data from the **MySQL database** and exposes API endpoints that could perform CRUD operations.
- The backend uses the **mysql2** package to connect to the MySQL database.

### Database (MySQL)

- The MySQL service is configured using the official `mysql:8.0` Docker image.
- The database is initialized using a custom SQL script located in `database/init.sql`, which creates the database and a tables with some sample data.

### Docker Setup

- The entire application is containerized using **Docker**.
- The `docker-compose.yml` file defines three services: `dashboard`, `api`, and `database`.
- The services are connected through a custom network called `app-network`, allowing the React app to communicate with the backend API and the API to communicate with the MySQL database.

## Docker Compose Commands

- **Build and start the containers**:

  ```bash
  docker-compose up --build
  ```

- **Start containers without rebuilding**:

  ```bash
  docker-compose up
  ```

- **Stop and remove containers**:

  ```bash
  docker-compose down
  ```

- **View logs for all containers**:

  ```bash
  docker-compose logs
  ```

- **Rebuild containers** (useful if you've changed Dockerfiles or configurations):
  ```bash
  docker-compose up --build
  ```

## Troubleshooting

- If the frontend doesn't connect to the API, ensure that the backend (`api`) is running and accessible via the Docker network. Check the API endpoint and make sure it is exposed on the correct port (`3001`).
- If there are issues with the MySQL database, ensure the database container has been properly initialized with the `init.sql` script.