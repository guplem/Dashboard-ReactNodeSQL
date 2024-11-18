# Full Stack Dashboard

This project contains a full-stack compliance dashboard that tracks the conformity progress of multiple LLM-based systems and provides detailed evaluation results.

The frontend utilizes **React** and **React Admin** for the interface, while the backend is powered by **Node.js** with **Express** and **Prisma** ORM for database management. **MySQL** is used as the database to store system evaluation data. The entire application is containerized using **Docker** for ease of development and deployment.

---

## Architecture & Technology Stack

### 1. **Frontend (React with TS)**

The dashboard is built using:

- **React.js**: A JavaScript library for building component-based user interfaces.
- **React Admin**: A framework for quickly building admin applications on top of REST APIs.
- **Recharts**: A charting library built on React, used to display progress and evaluation data in the form of pie charts and bar charts.

### 2. **Backend (Node.js/Express with TS)**

The API is built using:

- **Node.js**: A runtime environment that executes JavaScript on the server-side.
- **Express**: A minimalist web application framework for Node.js, used to handle routing and API logic.
- **Prisma**: An ORM (Object-Relational Mapping) tool for interacting with the database, managing migrations, and seeding data.

### 3. **Database (MySQL)**

The database is build with:

- **MySQL**: A relational database management system to store project and evaluation data.
- **Prisma**: Prisma ORM is used to interface with MySQL, managing migrations and schema changes.

### 4. **Containerization (Docker & Docker Compose)**

The entire project is containerized using:

- **Docker**: Each service (frontend, and API) is packaged into its own Docker container. The database is also containerized, but official MySQL image from Docker Hub is used.
- **Docker Compose**: A tool to define and run multi-container Docker applications. It manages the services, networking, and volumes for the project.

### 5. **Testing**

The API project has been designed with testability in mind, adhering to principles of low coupling and high cohesion, enabling dependency injection and mocking for comprehensive testing.

Although no tests are applied in this specific task, the following tools are available for testing purposes:

- **Jest**: A testing framework for unit and integration testing.
- **Testing Library**: A set of utilities for testing React components in a way that simulates real user interactions.

### 6. **Other Tools**

For code quality and formatting:

- **ESLint**: A linter that identifies potential issues in JavaScript/TypeScript code.
- **Prettier**: An opinionated code formatter that ensures a consistent style across the codebase.

---

## Front-end Dashboard Views

### Main (Dashboard's Home) View

The main dashboard view shows a list of the top 10 performing projects in a bar chart. The chart displays the conformity progress of each project, allowing users to compare the progress visually.

Tapping on a project will navigate to the project's view.

> It also includes a link to the _API test_ view, which displays a simple _hello world_ message from the API if that service is running and accessible.

### Projects List View

A list of all projects is displayed in a table format, showing the project name, type and conformity progress. Users can click on a project to view detailed evaluation results for that project.

> The list can be exported to a CSV file by clicking on the export button.

> The items can be selected and deleted by clicking on the delete button.

### Project View

The page displays the project's name and type alongisde a visual representation of the conformity progress with a pie chart with a needle pointing to the current progress.

In addition, a list of the distincts evaluations performed to the project are displayed, sorted by score, with a pie chart with a needle pointing to the evaluation's score and showing the evaluation's system and dataset.

> Tapping on an evaluation will navigate to the evaluation's view.

### Evaluations List View

A list of all evaluations is displayed in a table format, showing the project they are related to, system, dataset, score, and other metrics (accuracy, relevancy, helpfulness, and toxicity). Users can click on an evaluation to view detailed evaluation results for that system in the Evaluation View.

> The list can be exported to a CSV file by clicking on the export button.

> The items can be selected and deleted by clicking on the delete button.

### Evaluation View

The page displays the evaluation's project, system, dataset, score, and other metrics (accuracy, relevancy, helpfulness, and toxicity) alongside a visual representation of the different performance of the distinct metrics in a radar chart.

### Edit views

From within the project list view, project view, evaluation list view, and evaluation view, users can edit the project and evaluation data by clicking on the edit button. This will open a form to edit the data.

> A delete button is also available to delete the project or evaluation.

### Create views

From within the project list view, and evaluation list view, users can create new projects and evaluations by clicking on the create button. This will open a form to create new data.

## Data Flow

// TODO: Improve the explanation of how the React Admin dataProvider works. Then also explain the data flow between the frontend and the backend, how the data goes through the distinct layers (router, repository, service, ...) and the database interaction using prisma.

The **frontend** fetches project data from the backend API, which includes project names and conformity progress.

---

## Docker Configuration

The application consists of three services: **frontend (React dashboard)**, **backend (API server)**, and **database (MySQL)**. These services are defined in the `docker-compose.yml` file.

### 1. **Frontend (React - Dashboard)**

The **dashboard** (frontend), in _development_, is configured to:

- Build from the Dockerfile in `dashboard/docker/dev/Dockerfile`.
- Expose port `3000` for access to the frontend.
- Be configured with the environment variables from the .env file.

The **dashboard** (frontend), in _production_, is configured to:

- Build from the Dockerfile in `dashboard/docker/prod/Dockerfile`.
- Expose port `8080` for access to the frontend.
- Be configured with the environment variables from GCP .YAML file.

### 2. **Backend (Node.js - API)**

The **API** service, in _development_, is configured to:

- Build from the Dockerfile in `api/docker/dev/Dockerfile`, which uses the entrypoint.sh script to handle migrations, seeding and launching the API.
- Expose port `3001` for access to the API.
- Connect to the **MySQL** database and serve the evaluation data.
- Use **Prisma** ORM to perform database migrations, seeding and manage manage interactions.

The **API** service, in _production_, is configured to:

- Build from the Dockerfile in `api/docker/prod/Dockerfile`, which uses the entrypoint.sh script to handle migrations, seeding and launching the API.
- Expose port `8080` for access to the API.
- Connect to the **MySQL** database and serve the evaluation data.
- Use **Prisma** ORM to perform database migrations, seeding and manage manage interactions.

### 3. **Database (MySQL)**

The **MySQL** service, in _development_, is configured to:

- Use the official `mysql:8.0` image.
- Set up environment variables for MySQL credentials and create a persistent volume for the database.
- Expose port `3306` for access to the database.
- Persist data in the `database/data` directory.

The **MySQL** service, in _production_, is using a GCP MySQL instance, which also has exposed port `3306` for access to the database.

### Networking and Volumes

In development:

- The services are connected through a Docker network (`app-network`), ensuring they can communicate securely.
- Database data is persisted through a vlume.
- Volumes are used for the Frontend and API services to allow for hot-reloading and code changes to be reflected in the containers.

In production:

- The services run in Google Cloud Platform (GCP) Cloud Run and Cloud SQL.

---

## Setup Instructions

Before running the application, ensure you have the following installed:

- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/guplem/Dashboard-ReactNodeSQL.git
   cd Dashboard-ReactNodeSQL
   ```

2. **Build and Start the Containers**:

   ```bash
   docker-compose up --build
   ```

3. **Access the Application**:

   - **Frontend**: Access the React Admin interface at [http://localhost:3000](http://localhost:3000).
   - **Backend**: The Express API is running at [http://localhost:3001](http://localhost:3001) (if needed for debugging or development).
   - **Database**: MySQL is accessible on port `3306` (if needed for debugging or direct SQL access).

4. To stop and remove all containers, use:

```bash
docker-compose down
```

---

## Folder Structure Overview

```
Root/
 ├── api/
 |    ├── docker
 |    |   ├── dev
 |    |   |    └── Dockerfile
 |    |   └── prod
 |    |        └── Dockerfile
 |    ├── prisma/
 |    ├── entrypoint.sh
 |    └── .env
 ├── dashboard/
 |    ├── docker
 |    |   ├── dev
 |    |   |    └── Dockerfile
 |    |   └── prod
 |    |        └── Dockerfile
 |    └── .env
 ├── database/
 |    └── data/
 └── docker-compose.yml
```

## How to create a new migration:

1. Update the prisma schema file with the desired changes.
2. Open a terminal within the `api` container

> `container_id` is the _name_ (reported by `docker ps`) of the container you want to get inside of

```bash
docker exec -it <container_id> sh
```

3. Ensure you are in the /app directory (where the prisma schema is located and the app exists)

```bash
cd /app
```

4. Run the following command:

```bash
npx prisma migrate dev
```

5. Deploy Prisma Migrations (usually unnecessary):
   > This is usually not necessary, as the migrations are run automatically when created and when the app starts. However, if you want to deploy the migrations manually.

```bash
npx prisma migrate deploy
```

6. Re-generate the Prisma Client:

```bash
npx prisma generate
```

7. From the host (dev) machine, from within the `api` directory, re-generate the Prisma Client:

```bash
npx prisma generate
```

## Deployment to Google Cloud:

The application is deployed using Google Cloud Platform (GCP) services.

To create a new version no CI/CD pipeline is used, so the following steps are needed:

> Prerequisite: Ensure you have the Google Cloud CLI installed.

> Ensure you are loged in with `docker login`.

Configure docker to upload to gcloud:

```
gcloud auth configure-docker eu.gcr.io
```

### API

1. Build the docker image:

```bash
docker build -f docker/prod/Dockerfile -t dashboard-api .
```

2. Tag the image:

```bash
docker tag dashboard-api eu.gcr.io/dashboard-reactnodesql/dashboard-api:latest
```

> Latest can be replaced with a version number if desired. For example: `gillemp/dashboard-api:1.0.0` (This applies to the tag and upload)

3. Upload the image to Google Cloud's Artifact Registry:

```bash
docker push eu.gcr.io/dashboard-reactnodesql/dashboard-api:latest
```

4. In the Cloud Run of the Google Cloud Console, select `Edit and deploy new revision`. And select the image you just uploaded.

### Dashboard

1. Build the docker image:

```bash
docker build -f docker/prod/Dockerfile -t dashboard-front .
```

2. Tag the image:

```bash
docker tag dashboard-front eu.gcr.io/dashboard-reactnodesql/dashboard-front:latest
```

> Latest can be replaced with a version number if desired. For example: `gillemp/dashboard-api:1.0.0` (This applies to the tag and upload)

3. Upload the image to Google Cloud's Artifact Registry:

```bash
docker push eu.gcr.io/dashboard-reactnodesql/dashboard-front:latest
```

4. In the Cloud Run of the Google Cloud Console, select `Edit and deploy new revision`. And select the image you just uploaded.
