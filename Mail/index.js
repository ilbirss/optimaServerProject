


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: 'daniyar.alymseitov@gmail.com',
        pass: '1l0v3japanmalikaanddan120719412204ega',
        clientId: '797005382997-b4o7e4seh35i4tjbafi3hv2ifou1pdg5.apps.googleusercontent.com',
        clientSecret: 'AHByxGQaCFK3wB3VNHI1s87l',
        refreshToken: '1//04189eyLh9mRFCgYIARAAGAQSNwF-L9IrbYKqo2fmBava-uasqWMJocEcnbKoMpa8PmgPauRr-CuZ4vXpEKV_9CCTDQnEMqwcFOM'
    }
});

let mailOptions = {
    from: 'daniyar.alymsetiov@gmail.com',
    to: 'RECIPIENT@GMAIL.COM',
    subject: 'Nodemailer Project',
    text: 'Hi from your nodemailer project'
};


transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
        console.log("Error " + err);
    } else {
        console.log("Email sent successfully");
    }
});
