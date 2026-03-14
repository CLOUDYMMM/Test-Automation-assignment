# TTB Automation Assignment (Playwright)

This project demonstrates automation testing using Playwright for web UI and API tests, along with Python logic validation.

## Project Structure

- **Jenkinsfile**: Jenkins pipeline configuration for CI/CD.
- **Playwright-Test/**: Playwright-based tests.
  - `package.json`: Dependencies and scripts.
  - `playwright.config.ts`: Playwright configuration.
  - `tests/`: Test files.
    - `3-API.spec.ts`: API tests for user profile retrieval (success and not found cases).
    - `2-UI.spec.ts`: UI tests for login functionality (success, invalid password, invalid username).
- **Python-Logic-Test/**: Python scripts for logic testing.
  - `1-Logic.py`: Script to find duplicate items between two lists using set intersection.
  - `5-logic.py`: Simple Caesar cipher decryption to demonstrate string transformation logic.

## Prerequisites

- Node.js (for Playwright tests)
- Python 3.x (for Python logic tests)
- Playwright browsers (installed via npm)

## Setup and Running

### Playwright Tests

1. Navigate to `Playwright-Test/`:
   ```
   cd Playwright-Test
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run tests:
   ```
   npx playwright test
   ```

4. View reports:
   - Open `playwright-report/index.html` in a browser.

### Python Logic Test

1. Navigate to `Python-Logic-Test/`:
   ```
   cd Python-Logic-Test
   ```

2. Run one of the scripts:
   - Duplicate list finder:
     ```
     python 1-Logic.py
     ```

     Expected output:
     ```
     List A: [1, 2, 3, 5, 6, 8, 9]
     List B: [3, 2, 1, 5, 6, 0]
     Duplicate Items: [1, 2, 3, 5, 6]
     ```

   - Caesar cipher decrypt (shift by k):
     ```
     python 5-logic.py
     ```

     Expected output (with k=2):
     ```
     Encrypted: VTAOG (k=2)
     Decrypted: STRING
     ```

## Test Descriptions

### API Tests (3-API.spec.ts)
- **Get user profile success (id=12)**: Verifies successful retrieval of user data from ReqRes API.
- **Get user profile not found (id=1234)**: Verifies 404 response for non-existent user.

### UI Tests (2-UI.spec.ts)
- **Login Success**: Tests successful login, secure area access, and logout.
- **Login Failed - Password incorrect**: Tests login failure with wrong password.
- **Login Failed - Username incorrect**: Tests login failure with wrong username.

### Python Logic (1-Logic.py)
- Finds and sorts duplicate items between two lists using efficient set operations.

## Notes
- API tests use the public ReqRes API (https://reqres.in/).
- UI tests use The Internet Herokuapp (https://the-internet.herokuapp.com/login).
- Ensure internet connection for external API/UI tests.

## Jenkins CI/CD (Pipeline)
This repository includes a `Jenkinsfile` that runs the Playwright tests and publishes results.

### How to run
1. Install Jenkins (e.g., via Windows installer).
2. Create a **Pipeline** job and set **Pipeline script from SCM**.
3. Point Jenkins to this repository and ensure **Script Path** is `Jenkinsfile`.
4. Run the job.

### What it does
- Checks out the repo
- Installs dependencies (`npm ci`)
- Installs Playwright browsers (`npx playwright install --with-deps chromium`)
- Runs tests and generates HTML + JUnit output
- Archives report artifacts and publishes JUnit results
