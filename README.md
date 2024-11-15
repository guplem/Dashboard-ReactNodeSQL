# Full Stack Application with React Admin, Node.js, MySQL, and Docker

This repository contains a full stack application with three main components:

- **Frontend**: A React Admin application powered by React.
- **Backend**: A Node.js (Express) API serving data to the frontend.
- **Database**: A MySQL database storing data that the backend API interacts with.

All components are containerized using Docker, making it easy to run and share the application with just a single command.

## Project Structure

The following are the main directories and setup files in this project:

Understood! Here’s the updated project structure without mentioning specific `.ts` files and with the same clean and consistent style:

---

## Project Structure

The following are the main directories and setup files in this project:

```
Root/
 ├── dashboard/
 |    └── .env
 ├── api/
 |    ├── prisma/
 |    ├── entrypoint.sh
 |    ├── .env
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
 └── docker-compose.yml
```

### Overview of Key Directories and Files

- **dashboard/**: Contains the **React Admin** frontend application built with TypeScript.

- **api/**: Contains the **Express** API backend built with **Prisma** and TypeScript.

  - **prisma/**: Contains the **Prisma** schema and migrations.
  - **entrypoint.sh**: A shell script that performs database migrations and starts the API server.
  - **.env**: Environment variables for the API service.
  - **src/**:
    - **application/**: Contains the business logic (use cases) that orchestrates interactions between the domain and infrastructure layers.
      - **services/**: Contains business use cases that handle the core operations of the application.
    - **domain/**: Defines the core business models and repository interfaces.
      - **models/**: Contains domain entities, which represent the core data models of the application.
      - **repositories/**: Contains repository interfaces that define methods for interacting with the data layer.
    - **infrastructure/**: Contains concrete implementations for interacting with external systems, like databases or HTTP services.
      - **repositories/**: Implements repository interfaces, interacting with the database or external services.
      - **http/**: Contains the HTTP server setup, including route definitions and middlewares.
    - **tests/**: Contains unit and integration tests for each layer of the application.

- **database/**: Contains the **MySQL** database creation scripts (and, when running with the docker-compose, the database data).

- **docker-compose.yml**: Defines services for the frontend, backend, and database, making it easier to manage the development environment using Docker.

## Prerequisites

Before running the application, make sure you have the following installed:

- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Getting Started

### 1. Clone the Repository

Clone this repository to your local machine _(and navigate to the project folder)_:

```bash
git clone https://github.com/guplem/Dashboard-ReactNodeSQL.git
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
- The database is initialized using a custom SQL script located in `database/init.sql`, which creates the database.

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
