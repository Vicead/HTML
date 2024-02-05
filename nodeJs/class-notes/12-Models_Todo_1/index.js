"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// Accept json data:
app.use(express.json())

// app.all('/', (req, res) => {
//     res.send('WELCOME TO TODO API')
// })

/* ------------------------------------------------------- */
// https://sequelize.org/docs/v6/getting-started/
const { Sequelize, DataTypes } = require('sequelize')
// DB Connection Configs:
// const sequelize = new Sequelize('sqlite:./db.sqlite3')
const sequelize = new Sequelize('sqlite:' + (process.env.SQLITE || './db.sqlite3'))
// Postgresql:
// $ npm i pg pg-hstore
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')
/* ------------------------------------------------------- */
// MODELS:
// sequelize.define('tableName', { columns/fields })

// https://sequelize.org/docs/v7/models/data-types/
const Todo = sequelize.define('todos', {

    //? Not need define ID field, it will create auto.
    // id: {
    //     type: DataTypes.INTEGER,
    //     unique: true, // default: false
    //     allowNull: false, // default: true
    //     field: 'custom_column_name', // Change field name
    //     comment: "description",
    //     primaryKey: true, // default: false,
    //     autoIncrement: true, // id++ // default: false
    //     defaultValue: 0 // Set the value when if blank.
    // },

    title: {
        type: DataTypes.STRING(100), // VARCHAR(100)
        allowNull: false
    },

    // description: {
    //     type: DataTypes.TEXT,
    // },
    description: DataTypes.TEXT, // ShortHand Using

    priority: { // -1: Low, 0: Normal, 1: High
        type: DataTypes.SMALLINT, // postgresql: SMALLINT
        allowNull: false,
        defaultValue: 0
    },

    isDone: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    
    //? Not need define "createdAt" & "updatedAt" fields.
    // createdAt: false, // Unset
    // updatedAt: false, // Unset
})

// Synchronization:
//! SYNC MUST RUN ONCE!
// sequelize.sync() // CREATE TABLE
// sequelize.sync({ force: true }) // DROP TABLE & CREATE TABLE // Data cleared.
// sequelize.sync({ alter: true }) // TO BACKUP & DROP & CREATE & FROM BACKUP // Recommended.

// Connection:
sequelize.authenticate()
    .then(() => console.log('* DB Connected *'))
    .catch(() => console.log('* DB Not Connected *'))

/* ------------------------------------------------------- */
// ROUTERS:
const router = express.Router()

// LIST TODOS:
router.get('/', async (req, res) => {

    // const data = await Todo.findAll()
    const data = await Todo.findAndCountAll()

    res.status(200).send({
        error: false,
        result: data
    })
})

// CREATE TODO
router.post('/', async (req, res) => {

    // const receivedData = req.body
    // console.log(receivedData)

    // const data = await Todo.create({
    //     title: req.body.title,
    //     description: req.body.description,
    //     priority: req.body.priority,
    //     isDone: req.body.isDone
    // })

    const data = await Todo.create(req.body)

    res.status(201).send({
        error: false,
        body: req.body, // Sent Data
        message: "Created",
        result: data // Received Data
    })

})

app.use(router)
/* ------------------------------------------------------- */
const errorHandler = (err, req, res, next) => {
    const errorStatusCode = res.errorStatusCode ?? 500
    // console.log('errorHandler runned.')
    res.status(errorStatusCode).send({
        error: true, // special data
        message: err.message, // error string message
        cause: err.cause, // error option cause
        // stack: err.stack, // error details
    })
}
app.use(errorHandler)
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));