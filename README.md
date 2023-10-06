# Cypress + Allure
## Getting started

clone repo: git clone https://github.com/Baelir100/Cypress_Allure

install cypress: npm install cypress

run tests: npx cypress run --browser chrome --env allure=true

allure report: 

    serve report based on current "allure-results" folder: allure serve
    generate new report based on current "allure-results" folder: allure generate
    open generated report from "allure-report" folder: allure open