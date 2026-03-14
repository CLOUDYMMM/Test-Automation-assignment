pipeline {
    agent any

    stages {
        stage('1. Checkout Code') {
            steps {
                git 'https://github.com/CLOUDYMMM/Test-Automation-assignment.git'
            }
        }

        stage('2. Install Dependencies') {
            steps {
                dir('Playwright-Test') {
                    bat 'npm install'
                    bat 'npx playwright install chromium --with-deps'
                }
            }
        }

        stage('3. Run Tests') {
            steps {
                dir('Playwright-Test') {
                    bat 'npx playwright test --reporter=html,junit'
                }
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'Playwright-Test/playwright-report/**', allowEmptyArchive: true
            junit testResults: 'Playwright-Test/test-results/**/*.xml', allowEmptyResults: true
        }
    }
}