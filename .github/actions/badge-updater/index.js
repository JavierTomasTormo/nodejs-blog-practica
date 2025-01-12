const fs = require('fs');

function updateReadme(outcome) {
    const readmePath = 'README.md';
    let content = fs.readFileSync(readmePath, 'utf8');
    
    const successBadge = 'https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg';
    const failureBadge = 'https://img.shields.io/badge/test-failure-red';
    
    const badge = outcome === 'success' ? successBadge : failureBadge;
    
    content = content.replace(/RESULTAT DELS ÚLTIMS TESTS.*$/m, '');
    
    content += `\nRESULTAT DELS ÚLTIMS TESTS\n![Cypress Tests](${badge})`;
    
    fs.writeFileSync(readmePath, content);
}

const outcome = process.env.INPUT_OUTCOME;
updateReadme(outcome);