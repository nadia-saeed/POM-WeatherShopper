# WebDriverIO Project with Cucumber and TypeScript

This project is a boilerplate for setting up WebDriverIO with Cucumber and TypeScript, making it easy to write and manage automated tests using BDD (Behavior-Driven Development) approach.

## Getting Started

Follow these steps to set up the project on your local machine:

1. Clone the repository:

```bash
git clone git@gitlab.com:emumba-qa/wdio-cucumber-js.git

```
2. Navigate to the project directory:
```bash
 cd your-wdio-cucumber-ts-project
```

3. Install dependencies:

```bash
 npm i 
  
```
4. Run Test 

```bash
 npx wdio wdio.conf.ts < Your desired Browser > < Your desired Enviroment > < Your feature file tag >
  
```
1. < Your Desired Browser>:
Name of the browser to use for testing (e.g., chrome, firefox,microsoftEdge).
2. < Your Desired Environment>: 
Name of the environment to use for testing (e.g., QA, staging).
3. < Your Feature Tag>: 
Cucumber feature tag to run (e.g., @smoke, @regression). Setting this option to ALL runs all features.