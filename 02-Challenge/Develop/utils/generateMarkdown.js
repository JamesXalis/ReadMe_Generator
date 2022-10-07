// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (key) {
    case value:
      
      break;
  
    default:
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return`
  <h1 align="center">${data.projectTitle} 👋</h1>
    
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />
  ## Description
  🔍 ${data.description}
  ## Installation
  💾 ${data.installation}
  ## Usage
  💻 ${data.usage}
  ## License
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
  <br />
  This application is covered by the ${data.license} license. 
  ## Contributing
  👪 ${data.contributing}
  ## Tests
  ✏️ ${data.tests}
  ## Questions
  ✋ ${data.questions}<br />
  <br />
  :octocat: Find me on GitHub: [${data.username}](https://github.com/${data.username})<br />
  <br />
  ✉️ Email me with any questions: ${data.email}<br /><br />
  _This README was generated with ❤️ by [README-generator](https://github.com/jpd61/README-generator) 🔥🔥🔥_
      `;
    }


module.exports = generateMarkdown;
