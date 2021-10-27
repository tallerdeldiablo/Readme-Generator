function renderLicenseBadge(license) {

if (license == 'Apache') {
  shield = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'

} else if  (license == 'MIT') {
  shield = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    console.log (shield)
} else if  (license == 'GNU') {
  shield = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  console.log (shield)
}else{

  shield = ' ';
}


return shield;
}

  /*switch (license) {
  case 'MIT':
    shield = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    console.log (shield)
    break;
 
  case 'Apache':
    shield = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    console.log (shield)
    break;
  
  case "GNU":
    shield = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    console.log (shield)
    break;
  default:
    break;
}
   shield ='none';
}

*/
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown({ usage, projectN, installat, descripInput, lic }) {
  
  let shield2 = renderLicenseBadge(lic)

console.log (typeof shield)
console.log (shield)
  return `

   ${shield2}
   # ${projectN}
  #Contents
  ## [Installation](#Installation)
  ## [Usage](#github)
  ## [License](#license)
  ## [Contributing](#Contributing)
  ## [Description](#Description)
  ## [Tests, and Questions](#Tests, and Questions)

## Installation
${installat}
## Usage
${usage}
## License
This project is licensed under the [${lic}] license


## description
  ${descripInput}

  

  
  

`;
}

module.exports = generateMarkdown;
