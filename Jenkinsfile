pipeline {
    agent any

    stages {
        stage('Detect change') {
            steps {
                git branch: 'main', url: 'https://github.com/up1/workshop-ci-nodejs-web-api.git'
            }
        }
        stage('Delete all container') {
            steps {
                sh 'sudo docker compose down'
            }
        }
        stage('Deploy MySQL') {
            steps {
                sh 'sudo docker compose up -d mysql'
            }
        }
        stage('Deploy Backend') {
            steps {
                sh 'sudo docker compose up -d backend'
            }
        }
        stage('API Testing') {
            steps {
                sh 'sudo docker compose up postman --remove-orphans'
            }
            post {  
                always {
                    junit 'api-test/reports/*.xml'
                }
            }
        }

    }
}
