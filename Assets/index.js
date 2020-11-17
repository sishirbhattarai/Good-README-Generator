// array of questions for user
const inquirer = require("inquirer");
const fs = require ("fs");
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const questions = () => 
inquirer.prompt([
{
 type: 'input',
 name: 'username',
 message: 'What is your name?'
},

{
  type: 'input',
  name: 'githublink',
  message: 'What is your Github link?'
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
//taking userResponse and writing it to the README file. 
.then(function(userResponse) {
    console.log(userResponse)

    const { name, description, username, email, githublink,  } = userResponse;

 let README =`## Project Title: ${name} 

 ## Project Description: ${description}
 
 ## Table of Contents:

 * [Installation](#Installation)
 * [Instructions](#Instructions)
 * [License](#License)
 * [Contributors](#Contributors)
 * [Author](#Author)
 
 ##Installation


## Contributors:

* ${username}
* ${email}
* ${githublink}


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