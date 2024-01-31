"use strict";
/* -------------------------------------------------------
    EXPRESSJS - MIDDLEWARES
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- *
//? Middleware functions must be has three parameters. 
//? Last parameter is for next().

// Middleware:
app.get('/', (req, res, next) => {

    res.send({
        message: 'Middleware Running.'
    })

    // Go to next function:
    next()
})

// Route-Path:
app.get('/', (req, res) => {
    res.send({
        message: 'Welcome'
    })
})
/* ------------------------------------------------------- *
// Middleware:
app.get('/', (req, res, next) => {

    if (req.query.username == "clarusway") {

        // Send data with req/res:
        req.newVariable = 'Welcome'
        res.username = "clarusway"

        next()

    } else {
        res.send({
            message: 'Username is wrong.'
        })
    }
})

// Route-Path:
app.get('/', (req, res) => {
    res.send({
        message: req.newVariable + ' ' + res.username
    })
})

/* ------------------------------------------------------- *
app.get('/', (req, res, next) => {

    req.message1 = 'middleware-1 runned.'
    next()
})

app.get('/', (req, res, next) => {

    req.message2 = 'middleware-2 runned.'
    next()
})

app.get('/', (req, res, next) => {

    req.message3 = 'middleware-3 runned.'
    next()
})

app.get('/', (req, res, next) => {

    req.message4 = 'middleware-4 runned.'
    next()
})

app.get('/', (req, res) => {
    res.send({
        message1: req.message1,
        message2: req.message2,
        message3: req.message3,
        message4: req.message4,
        message: "Finished",
    })
})
/* ------------------------------------------------------- *

const middleFunc1 = (req, res, next) => {

    req.message1 = 'middleFunc1 runned.'
    next()
    // next('route')
}

const middleFunc2 = (req, res, next) => {
    
    req.message2 = 'middleFunc2 runned.'
    next()
}

// Call middlewares:
// app.use('/', middleFunc1, middleFunc2) // Recommended.

// Call middlewares in array:
// app.use('/', [middleFunc1, middleFunc2])

app.get('/', middleFunc1, middleFunc2, (req, res) => {
    res.send({
        message1: req.message1,
        message2: req.message2,
        message: "Finished",
    })
})

// runned by next('route'):
app.get('/', (req, res) => {
    res.send({
        message: 'next route'
    })
})


/* ------------------------------------------------------- */

// const middleFunc1 = require('./middlewares/')

// call from array:
// const middleFunctionArray = require('./middlewares/')
// console.log(middleFunctionArray)
// const [middleFunc1, middleFunc2] = require('./middlewares/')

// call from object:
const { middleFunc1, middleFunc2 } = require('./middlewares/')

// app.use('/', middleFunc1, middleFunc2)
// app.use(middleFunc1, middleFunc2) // Default: *
app.use('/path', middleFunc1, middleFunc2) // /path/*

// app.get('/', middleFunc1, (req, res) => {
// app.get('/', middleFunctionArray, (req, res) => {
// app.get('/', middleFunc1, middleFunc2, (req, res) => {
app.get('/', (req, res) => {
    res.send({
        message1: req.message1,
        message2: req.message2,
        message: "Finished",
    })
})

app.get('/path', (req, res) => {
    res.send({
        message1: req.message1,
        message2: req.message2,
        message: "Finished",
    })
})

/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));