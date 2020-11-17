// array of questions for user
const inquirer = require("inquirer");
const fs = require ("fs");
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const questions = () => 
inquirer.prompt([
{
 type: 'input',
 name: 'user',
 message: 'What is your username?'
},

{
type: 'input',
name: 'email',
message: 'What is your email address?'
},

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
.then(function(userResponse) {
    console.log(userResponse)

    const { name, description } = userResponse;

 let README =`# Project Title: ${name} 

 # Project Description: ${description}
 
 # Table of Contents:

Installation
Usage
Methodology
License
 
 `

 
 fs.writeFile(`README(new).md`, README, function(err) {
  if (err) {
    console.log(err);
  }
   console.log("The README is now generated Successfully")
     
 }); 
});
/*
// function to write README file
function writeToFile(fileName, data) {
    //const fileName = 'README.md'
    //const data = generateReadMe(answers)
   // .then((answers) => writeFileAsync())
}

// function to initialize program
function init() {

}

*/