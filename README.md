🚀 Node + MySQL CI/CD Pipeline

This project demonstrates a complete CI/CD pipeline for a Node.js application using Jenkins, Docker, and Docker Compose.

The pipeline automatically builds a Docker image from the source code, pushes it to Docker Hub, and deploys the application along with a MySQL database as multi-container services.

⚙️ Workflow
GitHub → Jenkins → Docker Hub → EC2 (docker-compose)
Code pushed to GitHub
Jenkins builds & pushes Docker image
EC2 pulls image and runs containers using docker-compose
🐳 Services
Node.js App → Runs on port 3000
MySQL Database → Persistent storage with Docker volumes
🔐 Features
Automated CI/CD pipeline
Multi-container deployment
Secure credential handling using Jenkins
Persistent database storage
