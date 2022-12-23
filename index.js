// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const getter = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: "prompt",
    name: "Title",
    message: "What is the title of your README?",
    validate: (value) => {if(value){return true} else {return "Please title your ReadMe!!"}}
    // choices: ["this", "that", "the other"] // example from tutor 
},{
    type: "prompt",
    name: "Description",
    message: "Descripe your application.",
    validate: (value) => {if(value){return true} else {return "Please provide description!!"}}

},{
    type: "prompt",
    name: "Installation",
    message: "Please provide steps to install application.",
    validate: (value) => {if(value){return true} else {return "Please provide installation instructions!!"}}

},{
    type: "prompt",
    name: "Usage",
    message: "Please provide how to use application.",
    validate: (value) => {if(value){return true} else {return "Please provide usage instructions!!"}}

},{
    type: "list",
    name: "License",
    message: "Please provide type of license your application will be using. Please note that this will not generate a license for your application, it will only act as a place holder.",
    choices: ["MIT", "GPL", "Apache", "GNU", "N/A"]

},{
    type: "prompt",
    name: "Contribution",
    message: "Please provide first and last name to all contributing members of application.",
    validate: (value) => {if(value){return true} else {return "Please provide contributors!!"}}

},{
    type: "prompt",
    name: "Tests",
    message: "Please provide ways for troubleshooting or testing application.",
    validate: (value) => {if(value){return true} else {return "Please provide troubleshooting/testing steps!!"}}

},{
    type: "prompt",
    name: "Questions",
    message: "Please provide Point Of Contact (POC) for users to reachout with questions.",
    validate: (value) => {if(value){return true} else {return "Please provide POC!!"}}

},{
    type: "prompt",
    name: "GitHubUserName",
    message: "Please provide Github user name for all contributing members.",
    validate: (value) => {if(value){return true} else {return "Please provide Github user names for contributing memebers!!"}}
},{
    type: "prompt",
    name: "Email",
    message: "Please provide public Emails for all contributing members.",
    validate: (value) => {if(value){return true} else {return "Please provide public emails for contributing memebers!!"}}
}];

// Do I need to create a template with the responses?
const template = `# ${Title}

## Description
${Description}


## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contribution](#Contibution)
* [Test](#Test)
* [Questions](#Questions)



## Installation
${Installation}
## Usage
${Usage}
## License
${License}
## Contribution
${Contrabution}
## Test
${Test}
### Questions
${Questions}


# [Contact]
${GitHubUserName}
${Email}`; // there is a back tick here dont delete it again idiot 


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName}`.md,data,(err) => {
        if(err) {
            console.log("error @ writeToFile funct");
        }
        console.log("README has been generated");
    })
}

// TODO: Create a function to initialize app
// // Do my .then go here or at the end of questions
function init() {
    inquirer.prompt(questions)
    //work here!!!!
    .then(response) => {

    }
    .catch((err) => {
        if(err) {
            console.log("error @ init funct");
        }
    })

}

// Function call to initialize app
init();