// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  
## Description
${data.Description}


## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contribution](#Contibution)
* [Test](#Test)
* [Questions](#Questions)



## Installation
${data.Installation}
## Usage
${data.Usage}
## License
${data.License}
## Contribution
${data.Contrabution}
## Test
${data.Test}
### Questions
${data.Questions}


# [Contact]
${data.GitHubUserName}
${data.Email}`;

}

module.exports = generateMarkdown;
