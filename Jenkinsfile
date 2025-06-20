pipeline {
    agent any

    environment {
        IMAGE_NAME = "bodybuilder-app:latest"
    }

    stages {
        stage('Build Docker Image in Minikube') {
            steps {
                sh '''
                    eval $(minikube docker-env)
                    docker build -t $IMAGE_NAME ./app
                '''
            }
        }

        stage('Deploy to Minikube') {
            steps {
                sh 'kubectl apply -f deployment.yaml'
                sh 'kubectl apply -f service.yaml'
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
