// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown')
const inquirer = require('inquirer');
const fs = require('fs');
// We import the `fs` module to enable interaction with the file system


// appendFile() takes in 3 arguments: path, data, and callback function

// TODO: Create an array of questions for user input
const questions = [];



// TODO: Create a function to write README file

const generateREADME = ({ github, ema, pro, lic }) =>
  ` # ${name}# ${location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${github}</li>
      <li class="list-group-item">LinkedIn: ${linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}


inquirer
.prompt([
  {
    type: 'input',
    name: 'gihub',
    message: 'What is your Github?',
  },
  {
    type: 'input',
    name: 'ema',
    message: 'What is your email?',
  },
  {
    type: 'input',
    name: 'pro',
    message: 'What is your project name?',
  },
  {
    type: 'checkbox',
    message: 'What license?',
    name: 'lic',
    choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
  },
  {
    type: 'list',
    message: 'What is your preferred method of communication?',
    name: 'contact',
    choices: ['email', 'phone', 'telekinesis'],
  },
])
.then((answers) => {
  const readMePageContent = generateREADME(answers);

  //const filename = `${answers.name.toLowerCase().split(' ').join('')}.md`;

  fs.writeFile('readme.md', readMePageContent, (err) =>
    err ? console.log(err) : console.log(answers)
  );

});
//This project is licensed under the APACHE 2.0 license
// Function call to initialize app
//Table of contents
//Installation
//Usage
//license//
//contibutinf
//tests
//questions
/*


What is your github
wt is y email adress
whats projects name
short description
what kind of license
A
G
B
none


*/

init();
