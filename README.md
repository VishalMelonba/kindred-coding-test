# Kindred-Coding-Test (Saucedemo UI Tests)

## Overview

The project tests the Sauce demo UI. There are 2 features under test namely login feature and place an order feature.

# Project Setup and Test Execution Guide

## Pre-requisites

- **Install Node.js (LTS)**: You need to have Node.js (LTS version) installed on your machine.  
  [Download Node.js](https://nodejs.org/en/)

## Installation

1. **Clone repository:**
   ```bash
   git clone hhttps://github.com/VishalMelonba/kindred-coding-test.git

2. **Install project dependencies:**
    ```bash
    npm install

## Run Tests and Generate reports in single command

1. **To run tests in headless mode and generate reports:**
    ```bash
    npm run cypress:report

## Running Tests

1. **To run tests using Cypress UI:**
    ```bash
    npm run cypress:open

2. **To run tests in headless mode:**
    ```bash
    npm run cypress:run

3. **To run tests by tag:**
   ```bash
   npm run cypress:execution-tags

## Generate Reports

1. **To generate report (it will be shown right after generating, path to report is cypress/reports/index.html):**
    ```bash
      npm run report:generate

# Cypress Project Structure

- **`.github`**: Contains GitHub-related configuration files.
    - **`workflows`**: 
        - **`ci.yml`**: CI workflow configuration.

- **`cypress`**: Root directory for Cypress tests.
    - **`e2e`**: End-to-end testing directory.
        - **`features`**: Contains Cucumber feature files describing test scenarios.
        - **`pages`**: Page Object Model (POM) files for different pages in the application.
        - **`step_definitions`**: Step definition files that implement the Cucumber scenarios.
        - **`test_data`**: Holds test data files used in the tests.
        - **`fixtures`**: Static data files used for mocking or test setup.
        - **`support`**: Contains support files like custom commands and global hooks.


# Manually trigger tests in CI:

1. Go to the GitHub repository.
2. Click on the "Actions" tab at the top.
3. Find "Run Cypress Tests" workflow listed there.
4. Click on the workflow name to open it.
5. Look for the "Run workflow" button on the right side of the page.

# Auto trigger tests in CI:

- Any push event to the main branch will initiate the workflow which includes building the project and running tests.