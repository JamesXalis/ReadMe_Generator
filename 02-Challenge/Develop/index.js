// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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
        name: 'license',
        message: "What kind of license should your project have?",
    },
    {
        name: 'dependencies',
        message: "What command should be run to install dependencies?",
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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
