// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown')
const inquirer = require('inquirer');

// We import the `fs` module to enable interaction with the file system
const fs = require('fs');

//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {


  inquirer
    .prompt([
      {
        type: 'input',
        name: 'projectN',
        message: 'Provide the name of the project.',
      },
      {
        type: 'input',
        name: 'descripInput',
        message: 'Provide a short description.',
      },   
       {
        type: 'input',
        name: 'installat',
        message: 'Provide the installation requirements.',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
      },
      {
        type: 'checkbox',
        message: 'Select the license you want to use.',
        name: 'lic',
        choices: ['Apache', 'GNU', 'MIT', 'none'],
      },
           ])
        .then((answers) => {

        const newContent =  generateMarkdown(answers);
     
  fs.writeFile('readme.md', newContent, (err) =>
  err ? console.log(err) : console.log(answers)
);

  });
}

init();