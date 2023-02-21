const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "username",
        message: "Hello there! I am your readme generator! Can you tell me who are you?",
        validate: username => {
            if (username) {
                return true;
            } else {
                console.log('All right, then. Keep your secrets.')
                return false;
            }
        }
    },
    {
        type: "input",
        name: "github",
        message: "How about your GitHub username?",
        validate: githubUser => {
            if (githubUser) {
                return true;
            } else {
                console.log('All right, then. Keep your secrets.')
                return false;
            }
        }
    },
    {
        type: "input",
        name: "title",
        message: "What is your project's title?",
        validate: title => {
            if (title) {
                return true;
            } else {
                console.log('All right, then. Keep your secrets.')
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "And your email address?",
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log('All right, then. Keep your secrets.')
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Alright let get started! Can you describe your project to me?",
        validate: description => {
            if (description) {
                return true;
            } else {
                console.log('All right, then. Keep your secrets.')
                return false;
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Hmmm, I need some examples. Can you give me the instructions of usage?",
        validate: usage => {
            if (usage) {
                return true;
            } else {
                console.log('All right, then. Keep your secrets.')
                return false;
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "OK it seems strange-forward. Can you walk me through the installation process.",
        validate: installation => {
            if (installation) {
                return true;
            } else {
                console.log('All right, then. Keep your secrets.')
                return false;
            }
        }
    },
    {
        type: "input",
        name: "contribution",
        message: "Is there any way others can contribute to this project?",
        validate: contribute => {
            if (contribute) {
                return true;
            } else {
                console.log('All right, then. Keep your secrets.')
                return false;
            }
        }
    },
    {
        type: "input",
        name: "tests",
        message: "We are almost there! Can you describe the test written for your application?",
        validate: tests => {
            if (tests) {
                return true;
            } else {
                console.log('All right, then. Keep your secrets.')
                return false;
            }
        }
    },
    {
        type: "input",
        name: "credit",
        message: "Any person assisted in the project you want to credit?",
        validate: creidt => {
            if (creidt) {
                return true;
            } else {
                console.log('All right, then. Keep your secrets.')
                return false;
            }
        }
    },
    {
        type: "list",
        name: "license",
        message: "Finally, what license has you included in this application?",
        choices: [
            "None",
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ],
        validate: license => {
            if (license) {
                return true;
            } else {
                console.log('All right, then. Keep your secrets.')
                return false;
            }
        }
    },
];

// function to write README file
function writeToFile(fileName, data) {
    ("README.md",generateMarkdown.generateMarkdown(data), function (err) {
        if(err) throw err;
        console.log("Done! Please check the newly generated README file in the 'utils' folder!")
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(function(userInfo) {
    const markdownString = generateMarkdown(userInfo);
    fs.writeFile('README.md',markdownString,function(err){
        if (err) {
            console.error(err)
        } else {
            console.log('generated README')
        }
    })
    })
};

// function call to initialize program
init();
