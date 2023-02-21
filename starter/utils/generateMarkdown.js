// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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

  ${data.description}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
    
  This application is covered by the ${data.license} license.

  ## Contribution

  ${data.contribution}

  ## Test

  ${data.test}

  ## Credit

  ${data.credit}

  ## Questions
  
  My GitHub username: ${data.github}

  My GitHub link: (https://github.com/${data.github})
  
  My Contact email: ${data.email}
`;
}

module.exports = generateMarkdown;
