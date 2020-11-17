// array of questions for user
const inquirer = require("inquirer");
const fs = require ("fs");
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const questions = () => 
inquirer.prompt([
{
type: 'input',
name: 'name',
message: 'What is the title of the project?'
},

{
type: 'input',
name: 'description',
message: 'What is the project is about?',
},

{
type: 'list',
name: 'license',
message: 'What is the license name for yout project?',
choices: ["MIT", "IBM","MOZILLA"],
validate: function badge(choice) {
  if(MIT) {
    return ("[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)")
  }
  else if(IBM) {
    return ("[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)")
  }
  else {
    return("[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)")
  }
}
},

{
type: 'input',
name: 'package',
message: 'What package is required to prompt user inputs?'
},

{
type: 'input',
name: 'installation',
message: 'What command was ran for installation?'
},

{
type: 'input',
name: 'usage',
message: 'What is the usage of this application?'
},

{
type: 'input',
name: 'apprun',
message: 'What command should be run on commandline to run the program?'

},

{
type: 'input',
name: 'contributorsnameemail',
message: 'What are the contributors name and email addresses?'
},
   
{
type: 'input',
name: 'authorname',
message: 'What is your full name?'
},

{
type: 'input',
name: 'authoremail',
message: 'What is your email address?'
},

{
type: 'input',
name: 'githublink',
message: 'What is your Github link?'
},
   


]);

questions()
//taking userResponse and writing it to the README file. 
.then(function(userResponse) {
    console.log(userResponse)

    const { name, description, contributorsnameemail, githublink, package, installation, authoremail, authorname, usage, apprun   } = userResponse;

 let README =`
 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
 
 ### Project Title: 
 ${name} 

 ### Project Description: 
 ${description}
 
 ### Table of Contents:

 * [Installation](#Installation)
 * [Usage](#Usage)
 * [Testing](#Testing)
 * [License](#License)
 * [Contributors](#Contributors)
 * [Author](#Author)
 
 ## Installation:
 ${package} is required to prompt user inputs from command line
 To install the ${package} package, the command to run from command line is ${installation}. 

 ## Testing:


 ## Usage:
 ${usage}
 The application will be invoked with the CLI command ${apprun} and follow the prompts.

 ## License:
 

 ## Contributors:
 ${contributorsnameemail}
 
 ## Author:
 If you have used this application and if you have any questions, please feel free to contact me. My information is as below:

 ${authoremail}
 ${authorname}
 ${githublink}


 `

 
 fs.writeFile(`README(new).md`, README, function(err) {
  if (err) {
    console.log(err);
  }
   console.log("The README(new) is now generated Successfully")
     
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