# Jenkins CI/CD Demo API

This project is a simple Node.js backend built for a DevOps learning lab. It exposes a few basic endpoints that are easy to test locally and later integrate into Jenkins CI/CD workflows.

## Project overview

This application includes:
- a root endpoint that returns a welcome message
- a health endpoint used by monitoring and deployment checks
- an API endpoint that returns sample user data

The goal is to keep the project easy to understand while demonstrating the basics of a real backend service.

## Prerequisites

Before running the app, install:
- Node.js LTS
- npm
- Git

## Installation

From the project folder, run:

```powershell
npm install
```

This installs the project dependencies from `package.json` and creates `package-lock.json`.

## Start the application

```powershell
npm start
```

The server starts on port 3000 by default.

## API endpoints

### GET /
Returns a welcome message.

### GET /health
Returns:

```json
{ "status": "UP", "message": "Application is healthy" }
```

### GET /api/users
Returns a JSON array of sample users:

```json
[
  { "id": 1, "name": "Alice Johnson", "email": "alice@example.com" },
  { "id": 2, "name": "Bob Smith", "email": "bob@example.com" },
  { "id": 3, "name": "Charlie Brown", "email": "charlie@example.com" }
]
```

## Run tests

```powershell
npm test
```

This runs the Jest unit tests for the API endpoints.

## File explanations

- `package.json` defines the app name, scripts, and dependencies.
- `package-lock.json` records the exact dependency versions installed.
- `src/app.js` contains the Express API routes.
- `tests/app.test.js` contains the unit tests.
- `.gitignore` ignores local dependencies and temporary files.

## Why this matters in DevOps

- `package.json` tells Node.js and npm how to run the project.
- `package-lock.json` helps keep installations consistent across machines.
- A health endpoint is important because deployment tools and monitoring systems can check whether the app is running correctly.
- Unit tests help confirm that the endpoints still work as the app changes.
