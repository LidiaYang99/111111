const express = require('express');
const dayjs = require('dayjs');
const cors = require('cors');

const sendMail = require('./sendMail')

const app = express();

// config de la app Express
app.use(cors());
app.use(express.json());


// prueba del servidor
app.get('/prueba', (req, res) => {
    res.send('es una prueba');
});

// prueba de mandar correo
app.post('/send-email', (req, res) => {
    const to = req.body.email;
    const subject = 'Has superado la 8 horas del día';
    const text = 'Tu tiempo de trabajo ha superado las 8 horas, por favor toma un descanso.';
    sendMail(to, subject, text);

    res.status(200).json('Email sent successfully!');
});



//Middleware
app.use((req, res, next) => {
    const fechaActual = dayjs().format('DD-MM-YYYY HH:mm.ss');
    console.log(fechaActual);
    next();
});

// gestion de rutas
app.use('/api', require('./routes/api'));


module.exports = app;