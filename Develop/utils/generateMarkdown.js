// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license == "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license == "Mozilla") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (license == "GNU GPLv3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license == "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else {
    return ``;
  }
}
// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  if (license == "MIT") {
    return (mit = "[License: MIT](https://opensource.org/licenses/MIT)");
  } else if (license == "Mozilla") {
    return (mozilla =
      "[License: MPL 2.0](https://opensource.org/licenses/MPL-2.0)");
  } else if (license == "GNU GPLv3") {
    return (gplv = "[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)");
  } else if (license == "Apache") {
    return (apache = "[License](https://opensource.org/licenses/Apache-2.0)");
  } else {
    return "";
  }
}
// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  if (!license || license.length > 1) {
    return "";
  } else {
    return `
This app is covered under ${license} license.
${renderLicenseLink(license)}
    `;
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.repoName}   ${renderLicenseBadge(data.license)}
  ## Project Description
  ${data.description}
  ## Table Of Contents
 
   [Purpose](#Purpose)
   [License](#license)
   [Contribution](#contributing)
   [Questions](#questions)
  
  ## Purpose
  ${data.purpose}
  ## License
  ${renderLicenseSection(data.license)}
  ## Contribution
  ${data.contributiion}
  ## Questions
  For more information or questions about the project, contact ${data.email}
  Contact me on GitHub: [${data.githubuser}](https://github.com/${data.githubuser
    }/).
`;
}

module.exports = generateMarkdown;