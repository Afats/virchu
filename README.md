# Virchu

A covid data aggregator and charity linker web app for the Optiver SENG3011 2021 competition, by team Cracked Pepper. Finished runner-up.
Featuring a minimal, calming UI, choropleth globe and intgeration with Twitter. Built a custom API using the MERN stack for data aggregation, with API documentation.

![Landing page](https://github.com/Afats/virchu/blob/main/screenshots/ss1.png)
![Choropleth globe](https://github.com/Afats/virchu/blob/main/screenshots/ss2.png)
![Covid news](https://github.com/Afats/virchu/blob/main/screenshots/ss3.png)

## API link

- https://crackedpepper.stoplight.io/


# Log files

- Sample backend log file in "SENG3011_Cracked-Pepper/Phase_1/API_SourceCode/access.log"
- A snippet with the team name, time and data source is send in relevant API endpoints.


## Run code
- If you are missing any JS modules, run "npm install" in the root folder.
- You can use nodemon with "npx nodemon" in the root folder.

## Setting up python environment
- Make sure you're using python3
- pip install pyenv (if u haven't already)
- to create a project environment in the root folder run "virtualenv env"
- activate the environment with "source env/bin/activate" in the root folder
- in the environment install dependencies with "pip install -r requirements.txt" in the root folder
- run "pytest tests.py" in the TestScripts directory in the environment to get test results
- deactivate the environment with "deactivate"

## Mocha testing
- Run "npm install" to update dependencies
- Run "npm test" in the root folder.
- Run "npm run test:awesome" to generate an html document with test coverage
- Run "npm run open:report" to open the report in a browser!
- Sometimes a timeout error will occur while making a valid request during testing. This is not an error, Heroku is just a bit bonkers.
