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

 let README =`# The title of the project is ${name} 
 # This project is about ${description}`


 fs.writeFile(`README-generated.md`, README, (err) => {
  if (err) {
    console.log(err);
  }
  else {
    console.log("The README is now generated Successfully")
  }
 }); 
});
/*
const generateReadMe = (answers) =>
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${answers.name}</h1>
    <p class="lead">I am from ${answers.description}.</p>`

writeToFile()
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