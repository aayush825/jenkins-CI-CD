
pipeline {
    agent any

    tools {
        nodejs 'NodeJS-22'
    }

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing Node.js dependencies...'
                sh 'npm ci'
            }
        }

        stage('Unit Testing') {
            steps {
                echo 'Running Jest unit tests...'
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                echo 'Validating application package...'
                sh 'npm pack --dry-run'
            }
        }
    }

    post {
        success {
            echo 'CI Pipeline completed successfully!'
        }

        failure {
            echo 'CI Pipeline failed. Check the logs.'
        }

        always {
            echo 'CI Pipeline execution finished.'
        }
    }
}
