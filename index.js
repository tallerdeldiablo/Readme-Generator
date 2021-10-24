// TODO: Include packages needed for this application
// We import the `fs` module to enable interaction with the file system


// appendFile() takes in 3 arguments: path, data, and callback function

// TODO: Create an array of questions for user input
const questions = [];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}
const inquirer = require('inquirer');
const fs = require('fs');

inquirer
.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
  },
  {
    type: 'checkbox',
    message: 'What languages do you know?',
    name: 'stack',
    choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
  },
  {
    type: 'list',
    message: 'What is your preferred method of communication?',
    name: 'contact',
    choices: ['email', 'phone', 'telekinesis'],
  },
])
.then((data) => {
  const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
  console.log(data);
  fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
    err ? console.log(err) : console.log('Success!')
  );
});

// Function call to initialize app
init();
