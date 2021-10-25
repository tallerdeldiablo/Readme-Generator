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
  ` # README GENERATOR
  [GitHub Pages](https://pages.github.com/).
  

  ## ${github}
  
  ###### email ${ema} 

    ##
     poject name${pro}

     # 
     __This project is licensed under the__ ${lic}

     ~~NO license~~
  `;
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {


  inquirer
    .prompt([
      {
        type: 'input',
        name: 'github',
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
        choices: ['Apache', 'Gnu 2', 'Gnu 3', 'none'],
      },
      {
        type: 'input',
        message: 'What is your preferred method of communication?',
        name: 'contact',
        choices:'telekinesis',
      },
      ])
        .then((answers) => {
        const readMePageContent = generateREADME(answers);

        const newContent =  generateMarkdown(answers);

        //const filename = `${answers.name.toLowerCase().split(' ').join('')}.md`;

        //fs.writeFile('readme.md', readMePageContent, (err) =>
        fs.writeFile('readme.md', newContent, (err) =>
          err ? console.log(err) : console.log(answers)
        );

  });
}
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
