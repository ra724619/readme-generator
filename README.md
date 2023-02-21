# Readme Generator

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Test](#test)
  * [Credit](#credit)
  * [Questions](#questions)

  ## Description

For this project, I created a readme generator by using node.js and JavaScript. As the README file can be viewed as the first impression of your project, it is vital to provide a good README file. A good README can showcase what your application and project are about, explain the development process, and even talk about the challenges you faced in the project. All in all, it helps your project to stand out among other developers. This README generator provides a good framework based on the GOOD README GUIDE. You can easily generate a good README file just by answering a few questions.

  ## Installation

Before attempting to use this project, make sure to have these programs installed on your computer:
1. VS code 
2. Node.js. 

Then, you can initialise the project by the following steps: 
1. git clone this repo to your local machine. 
2. Run "npm install" in CMD to install the inquirer (npm install --save inquirer@^8.0.0). 
3. Run node index.js in the command line. 
4. Answer all questions. 
5. The README file will be generated in the utils folder.

  ## Usage

Screenshot:
![Alt text](assets/demo/demo%20screen%20terminal.png)
![Alt text](assets/demo/demo%20screen%20preview%202.jpeg)
![Alt text](assets/demo/demo%20screen%20preview%201.jpeg)
Video demo:
https://user-images.githubusercontent.com/117188356/220404298-aa8c74d2-f418-4849-abaf-ed3f350b4a24.mp4

The README GENERATOR application uses the inquirer package to prompt you in the command line with a series of questions regarding your GitHub account and your project.

Following your responses, the application creates markdown and a table of contents for the README based on the answers you provide to the Inquirer prompts. Additionally, the README will include badges identifying the license you have used.

The last step of the process is to generate a README.md file using the fs.writeFile function. Please check the exampleREADME.md in utils folder as a sample.

  ## License

  ![badge](https://img.shields.io/badge/license-MIT-brightgreen)
    
  This application is covered by the MIT license.

  ## Contribution

N/A

  ## Test

I run the application by the terminal and it successfully generated the README file.

  ## Credit

To my TAs.

  ## Questions
  
My GitHub username: ra724619

My GitHub link: https://github.com/ra724619
  
My Contact email: ra724619@gmail.com


 
