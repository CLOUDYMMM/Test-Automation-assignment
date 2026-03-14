pipeline {
    agent any

    stages {
        stage('1. Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/CLOUDYMMM/Test-Automation-assignment.git'
            }
        }

        stage('2. Install Dependencies') {
            steps {
                bat 'npm install'
                bat 'npx playwright install chromium --with-deps'
            }
        }

        stage('3. Run Playwright Tests') {
            steps {
                bat 'npx playwright test --reporter=html,junit'
            }
        }
    }

    post {
        always {

            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
            junit testResults: 'test-results/**/*.xml', allowEmptyResults: true
        }
    }
}