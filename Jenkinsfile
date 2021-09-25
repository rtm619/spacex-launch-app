pipeline {
    agent {
        docker {
            image 'node:lts-buster-slim' 
            args '-p 3000:3000' 
        }
    }

    stages {
        stage('Install') {
            steps {
                echo 'Installing NPM packages'
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                echo 'Building the application'
                sh 'npm run build'
            }
        }
        stage('Test Coverage') {
            steps {
                echo 'Running test coverage'
                sh 'npm run test:coverage'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying app'
            }
        }
    }
}
