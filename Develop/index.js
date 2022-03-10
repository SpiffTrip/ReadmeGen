const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const createFile = require("./utils/gen-readme");

const questions = [
    {
        type: "input",
        name: "repoName",
        message: "What is your repo's name?",
        validate: (nameInput) => {
            if (nameInput) {
                return true;
            } else {
                console.log("please enter a repo title");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "description",
        message: "Enter repo description",
        validate: (descriptionInput) => {
            if (descriptionInput) {
                return true;
            } else {
                console.log("please enter a repo description");
                return false;
            }
        },
    },

    {
        type: "input",
        name: "purpose",
        message: "Explain what your application is used for/userstory",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Choose which license your application is covered under",
        choices: ["MIT", "GNU GPLv3", "Mozilla", "Apache"],
    },
    {
        type: "input",
        name: "contributions",
        message: "Explain who and how they contributed",
    },
    {
        type: "input",
        name: "email",
        message: "Enter email",
    },
    {
        type: "input",
        name: "githubUser",
        message: "Enter your GitHub",
    },
];

const promptUser = () => {
    return inquirer.prompt(questions);
};


promptUser()
.then((answers) => generateMarkdown(answers))
.then((fileContent) => {
        return createFile(fileContent);
    })






// TODO: Include packages needed for this application
// const inquirer = require("inquirer");
// const fs = require("fs");
// TODO: Create an array of questions for user input
// inquirer
//     .prompt([
//         {
//             type: "input",
//             name: "repoName",
//             message: "what is the name of the Repo?"
//         },

//         {
//             type: "input",
//             name: "Description",
//             message: "what is this app doing?"
//         },

//         {
//             type: "input",
//             name: "resources",
//             message: "what was used to make this app?"
//         },

//         {
//             type: "input",
//             name: "people",
//             message: "who worked on this?"
//         },
//     ])

// TODO: Create a function to write README file
// .then(data => {
//     console.log(data)
//         const filename = `${'README'}.md`;
//     fs.writeFile(filename, data);
// });

// TODO: Create a function to initialize app
//function init() { }

// Function call to initialize app
// init();
// console.log("hello");