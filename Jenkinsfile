pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/mayorpasca32/end-to-end-1.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t mayorpasca32/bodybuilder-app:latest ./app'
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                    sh 'docker push mayorpasca32/bodybuilder-app:latest'
                }
            }
        }

        stage('Deploy to Minikube') {
            steps {
                sh 'kubectl apply -f k8s/deployment.yaml'
                sh 'kubectl apply -f k8s/service.yaml'
            }
        }
    }

    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}
