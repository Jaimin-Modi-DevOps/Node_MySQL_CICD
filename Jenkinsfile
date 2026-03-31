pipeline {
    agent any

    environment {
        IMAGE_NAME = "jaiminmodi/node_mysql_cicd"
        TAG = "${BUILD_NUMBER}"
    }

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME:$TAG .'
            }
        }

        stage('Login to DockerHub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'USER',
                    passwordVariable: 'PASS'
                )]) {
                    sh 'echo $PASS | docker login -u $USER --password-stdin'
                }
            }
        }

        stage('Push Image') {
            steps {
                sh '''
                docker push $IMAGE_NAME:$TAG
                docker tag $IMAGE_NAME:$TAG $IMAGE_NAME:latest
                docker push $IMAGE_NAME:latest
                '''
            }
        }
    }
}