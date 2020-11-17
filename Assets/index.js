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
message: 'What is the project is about?'
},

{
type: 'input',
name: 'installation',
message: 'What is the process of installation?'
  },

{
type: 'input',
name: 'contributorsname',
message: 'What are the contributors name?'
},

{
type: 'input',
name: 'emails',
message: 'What are the contributors email address?'
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

    const { name, description, contributorsname, emails, githublink, installation, authoremail, authorname,   } = userResponse;

 let README =`### Project Title: 
 ${name} 

 ### Project Description: 
 ${description}
 
 ### Table of Contents:

 * [Installation](#Installation)
 * [Instructions](#Instructions)
 * [License](#License)
 * [Contributors](#Contributors)
 * [Author](#Author)
 
 ## Installation:
 ${installation}


## Contributors:

 ${contributorsname}
 ${emails}
 

 ## Author:

 If you have used this application and it you have any questions, please feel free to contact me with any questions via the information below:

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