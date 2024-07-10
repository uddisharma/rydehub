# Ridehub : Go anywhere with Ridehub

## Overview
This project is built using a microservice architecture with Turborepo. It utilizes various technologies and services to deliver a scalable, maintainable, and efficient ride-sharing platform.

## Features and Technologies

### Turborepo
High-performance bundler for React Server Components and TypeScript codebases

### Frontend
- **Next.js**: Used for building the frontend of the application.

### Backend Services
- **User Service**: Manages user authentication and profile data.
- **Driver Service**: Manages driver authentication, profile data, and status.
- **Ride Service**: Calculates fares for car, bike, and auto rickshaw rides; computes distance and time from source to destination.
- **Payment Service**: Handles payment processing and transaction management.
- **Location Service**: Manages geographical data and updates locations using geohashing.
- **Notification Service**: Sends notifications to users and drivers.
- **Ride Matching Service**: Finds the nearest driver, handles ride acceptance/denial in real-time, and updates live location on the map.

### Databases
- **PostgreSQL**: Primary database for storing application data.
- **Redis**: Used for real-time location updates using geohashing and message queues.

### Validation and Error Handling
- **Zod**: Validates data schemas.
- **Global Error Handling**: Catches and logs server crashes globally.

### Type Safety and ORM
- **TypeScript**: Ensures type safety across the codebase.
- **Prisma**: ORM for interacting with the PostgreSQL database.

### Maps and Geolocation
- **Mapbox**: Provides map services for displaying locations and routes.

### Messaging and Real-time Data
- **Redis Queues and Pub/Sub**: Used for message queues and real-time event handling.
- **WebSockets**: Facilitates real-time data transfer, such as live location updates.

### Security and Rate Limiting
- **API Gateway Rate Limiting**: Protects the application from DDoS attacks.

### Code Quality 
- **ESLint**: Ensures code quality by enforcing consistent code style.
- **Prettier**: Formats code for readability and consistency.
- **Pre-commit Hooks**: Runs automated checks before code is committed.

### Testing
- **Vitest**: Used for running unit and integration tests.

### Containerization and Orchestration
- **Docker**: Containerizes the application services.
- **Docker Compose**: Manages multi-container Docker applications with volumes for persistent data storage.
- **Kubernetes**: Deploys and scales the application services.

### Monitoring
- **New Relic**: Monitors application performance.
- **Grafana**: Visualizes logs and metrics.

### File Storage
- **S3**: Stores and retrieves files.

### CI/CD Pipelines
- **S3**: The project includes CI/CD pipelines for automated testing, building, and deployment.