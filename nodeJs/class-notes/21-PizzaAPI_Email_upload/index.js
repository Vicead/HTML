"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
/*
    $ cp .env-sample .env
    $ npm init -y
    $ npm i express dotenv mongoose express-async-errors morgan
    $ npm i jsonwebtoken
    $ npm i swagger-autogen swagger-ui-express redoc-express
    $ npm i nodemailer multer
    $ mkdir logs
    $ nodemon
*/
const express = require('express')
const app = express()

/* ------------------------------------------------------- */
// Required Modules:

// envVariables to process.env:
require('dotenv').config()
const PORT = process.env?.PORT || 8000

// asyncErrors to errorHandler:
require('express-async-errors')

/* ------------------------------------------------------- */
// Configrations:

// Connect to DB:
const { dbConnection } = require('./src/configs/dbConnection')
dbConnection()

/* ------------------------------------------------------- */
// Middlewares:

// Accept JSON:
app.use(express.json())

// Check Token:
app.use(require('./src/middlewares/authentication'))

// morgan-logger:
app.use(require('./src/middlewares/logger'))

// res.getModelList:
app.use(require('./src/middlewares/findSearchSortPage'))

/* ------------------------------------------------------- */
// Sending E-Mail:
// $ npm i nodemailer

// const nodemailer = require('nodemailer')

// Create Test (Fake) Email Account:
// nodemailer.createTestAccount().then((email) => console.log(email))
/*
{
  user: 'dt2luxwyjdzufq7a@ethereal.email',
  pass: 'RyTdGXyWEbVVuaNFSY',
  smtp: { host: 'smtp.ethereal.email', port: 587, secure: false },
  imap: { host: 'imap.ethereal.email', port: 993, secure: true },
  pop3: { host: 'pop3.ethereal.email', port: 995, secure: true },
  web: 'https://ethereal.email'
}
*/
/*
// Connect to mail-server:
const transporter = nodemailer.createTransport({
     // SMTP
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true, tls, ssl
    auth: {
        user: 'dt2luxwyjdzufq7a@ethereal.email',
        pass: 'RyTdGXyWEbVVuaNFSY'
    }
})
// console.log(transporter)

// SendMail:
transporter.sendMail({
    from: 'dt2luxwyjdzufq7a@ethereal.email',
    to: 'qadir@clarusway.com', // 'a@b.com, b@c.com'
    subject: 'Hello',
    // Message:
    text: 'Hello There. How are you?',
    html: '<b>Hello There.</b> <p>How are you?</p>',
}, (error, success) => { 
    error ? console.log('error:', error) : console.log('success:', success)
 })
*/

// //? GoogleMail (gmail):
// //* Google -> AccountHome -> Security -> Two-Step-Verify -> App-Passwords
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'qadiradamson@gmail.com',
//         pass: 'kjbw usic ovbn lipb'
//     }
// })

// //? YandexMail (yandex):
// const transporter = nodemailer.createTransport({
//     service: 'Yandex',
//     auth: {
//         user: 'username@yandex.com',
//         pass: 'password' // your emailPassword
//     }
// })

// transporter.sendMail({

//     from: 'qadiradamson@gmail.com',
//     to: 'qadir@clarusway.com',
//     subject: 'Hello',
//     text: 'Hello There. How are you?',
//     html: '<b>Hello There.</b> <p>How are you?</p>',

// }, (error, success) => { 
//     error ? console.log('error:', error) : console.log('success:', success)
//  })

/* ------------------------------------------------------- */
// Routes:

// HomePath:
app.all('/', (req, res) => {
    res.send({
        error: false,
        message: 'Welcome to PIZZA API',
        documents: {
            swagger: "/documents/swagger",
            redoc: "/documents/redoc",
            json: "/documents/json",
        },
        user: req.user,
    })
})

// auth:
app.use('/auth', require('./src/routes/auth'))
// user:
app.use('/users', require('./src/routes/user'))
// token:
app.use('/tokens', require('./src/routes/token'))

// order:
app.use('/orders', require('./src/routes/order'))
// pizza:
app.use('/pizzas', require('./src/routes/pizza'))
// topping:
app.use('/toppings', require('./src/routes/topping'))

// document:
app.use('/documents', require('./src/routes/document'))

// static-files:
app.use('/images', express.static('./uploads'))

/* ------------------------------------------------------- */

// errorHandler:
app.use(require('./src/middlewares/errorHandler'))

// RUN SERVER:
app.listen(PORT, () => console.log('http://127.0.0.1:' + PORT))

/* ------------------------------------------------------- */
// Syncronization (must be in commentLine):
// require('./src/helpers/sync')() // !!! It clear database.