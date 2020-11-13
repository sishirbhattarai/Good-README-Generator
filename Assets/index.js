// array of questions for user
const inquirer = require("inquirer");
const fs = require ("fs");

const questions = () => inquirer.prompt([
{
 type: 'input',
 name: 'name',
 message: 'What is your name?'
}
]);

questions()
/*
// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
*/