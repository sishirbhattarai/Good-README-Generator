// array of questions for user
const inquirer = require("inquirer");
const fs = require ("fs");

const questions = () => inquirer.prompt([
{
 type: 'input',
 name: 'name',
 message: 'What is the title of the project?'
},

{
type: 'input',
name: 'description',
message: 'What is the project is about?'
},

]);

questions()
.then(function(answers) {
    console.log(answers)

});

/*
// function to write README file
function writeToFile(fileName, data) {
    const fileName = READMEGenerate + '.md'
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
*/