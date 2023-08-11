const nodemailer = require('nodemailer');

// 创建邮件传输器 crear transport de email
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'timehubservicio@gmail.com',
        pass: 'jhdrmmiwvwwmqtee'
    },
});

// Definir una función para enviar correo
const sendMail = (to, subject, text) => {
    const mailOptions = {
        from: 'timehubservicio@gmail.com',
        to: to,
        subject: subject,
        text: text,
    };

    // mandar correo
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error occurred while sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
};

module.exports = sendMail;
