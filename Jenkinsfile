pipeline {
  agent any

  stages {
    stage('Checkout Code') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        dir('Playwright-Test') {
          bat 'npm ci'
          bat 'npx playwright install --with-deps chromium'
        }
      }
    }

    stage('Run Playwright Tests') {
      steps {
        dir('Playwright-Test') {
          bat 'npx playwright test --reporter=html'
        }
      }
    }

    stage('Archive Results') {
      steps {
        archiveArtifacts artifacts: 'Playwright-Test\\playwright-report\\**', allowEmptyArchive: true
      }
    }
  }

  post {
    always {
      junit 'Playwright-Test\\test-results\\**\\*.xml'
    }
  }
}
