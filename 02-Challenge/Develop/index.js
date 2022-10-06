// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { listenerCount } = require('process');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'username',
        message: "what is your Github Username",
    },
    {
        name: 'email',
        message: "What is your email?",
    },
    {
        name: 'project',
        message: "what is your project's name?",
    },
    {
        name: 'description',
        message: "Please write a short discription of your project:",
    },
    {
        type: 'list',
        name: 'license',
        message: "What kind of license should your project have?",
        choices: ["MIT","Apache","Mozilla","none"],
    },
    {
        name: 'install',
        message: "What command should be run to install dependencies?",
        default: "N/A"
    },
    {
        name: 'run',
        message: "What command should be run to run tests?",
    },
    {
        name: 'use',
        message: "What does the user need to know about using the repo?",
    },
    {
        name: 'contribute',
        message: "What does the user need to know about contributing to the repo?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log("success!"))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers)
            generateMarkdown(answers);
        }
        )
        .catch (err => err ? console.log ("Try Again"): console.log("Generating README..."))
}

// Function call to initialize app
init();
