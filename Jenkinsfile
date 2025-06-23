pipeline {
    agent any

    environment {
        IMAGE_NAME = "bodybuilder-app:latest"
        KUBECONFIG = "/var/lib/jenkins/.kube/config"
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/mayorpasca32/end-to-end-1.git'
            }
        }

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
                sh '''
                    export KUBECONFIG=/var/lib/jenkins/.kube/config
                    kubectl apply -f deployment.yaml
                    kubectl apply -f service.yaml
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Deployment successful!'
        }
        failure {
            echo '❌ Deployment failed!'
        }
    }
}
