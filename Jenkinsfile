pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                git 'https://github.com/Jaimin-Modi-DevOps/Node_MySQL_CICD.git'
            }
        }

        stage('Run with Docker Compose') {
            steps {
                sh '''
                docker-compose down || true
                docker-compose up -d --build
                '''
            }
        }
    }
}