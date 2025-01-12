const nodemailer = require('nodemailer');

async function sendEmail() {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.INPUT_RECIPIENT,
        subject: 'Resultat del workflow executat',
        text: `S'ha realitzat un push en la branca main que ha provocat l'execució del workflow nodejs-blog-practica amb els següents resultats:

    - linter_job: ${process.env.INPUT_LINTER_RESULT}
    - cypress_job: ${process.env.INPUT_CYPRESS_RESULT}
    - badge_job: ${process.env.INPUT_BADGE_RESULT}
    - deploy_job: ${process.env.INPUT_DEPLOY_RESULT}
        `
    };

    await transporter.sendMail(mailOptions);
}

sendEmail().catch(console.error);
