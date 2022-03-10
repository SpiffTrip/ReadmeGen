const readmeTemplate = () => {
    return `
      # ${repoName}
      ${licenseBadge}
      ## Project Description
      ${description}
      ## Table o' contents
      - ${purpose} (#Purpose)
      - ${license} (#License)
      - ${contributions} (#Contributions)
      - ${questions} (#Questions)
      ## Purpose
      ${Purpose}
      ## License
      ${license}
      ## Contributions 
      ${contributions}
      ## Questions
      For more information or questions about the project, contact ${email} or DM me on GitHub: ${githubUser}.
      `;
};

module.exports = readmeTemplate;