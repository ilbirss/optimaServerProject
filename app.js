const express = require('express')
const cors = require('cors')
const app = express()
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser')
const port = 3000

app.use(cors());

app.use(express.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.post('/send-mail', (req, res) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            port: 25,
            auth: {
                user: 'internet.magazine.com@gmail.com',
                pass: 'Ctujlyzjrnz,hm',
            }
        });
        console.log(req)
        const mailOptions = {
            from: 'internet.magazine.com@gmail.com',
            to: req.body.email,
            subject: req.body.subject,
            text: req.body.text
        };

        console.log(mailOptions)
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                res.status(400).send({message: 'Failed'})
            } else {
                console.log('Email sent: ' + info.response);
                res.status(200).send({message: 'Success'})
            }
        })

     } catch (e) {
        res.status(500).json({
            message: 'Ошибка сервера: ' + e.message
        })
    }
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
