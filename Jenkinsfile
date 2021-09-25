pipeline {
    agent any

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
