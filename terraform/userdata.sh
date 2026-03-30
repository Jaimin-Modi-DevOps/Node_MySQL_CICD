#!/bin/bash

# Update system
apt-get update -y

# Install Docker
apt-get install -y docker.io
systemctl start docker
systemctl enable docker
usermod -aG docker ubuntu

# Install Git
apt-get install -y git

# Install Java (required for Jenkins)
apt-get install -y openjdk-11-jdk

# Install Jenkins
curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key | tee \
/usr/share/keyrings/jenkins-keyring.asc > /dev/null

echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
https://pkg.jenkins.io/debian-stable binary/ | tee \
/etc/apt/sources.list.d/jenkins.list > /dev/null

apt-get update -y
apt-get install -y jenkins

# Start Jenkins
systemctl start jenkins
systemctl enable jenkins

# Give Jenkins Docker access
usermod -aG docker jenkins

# Restart Jenkins
systemctl restart jenkins

# Install Docker Compose
apt-get install -y docker-compose