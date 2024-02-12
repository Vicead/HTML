"use strict"
/*

BLOG api project

*/
const express = require("express")
const app = express()

require('dotenv').config()
const PORT = process.env.PORT
//DB Connection
require('./src/configs/dbConnection')
// JSON
app.use(express.json()) //konuma dikkat
// send async-errors to errorHandler:
require('express-async-errors')

app.all('/', (req, res) => {
    res.send('WELCOME First ExpressJs Project with Mongo')

})

// routes
app.use('/user', require('./src/routes/userRouter'))
app.use('/blog', require('./src/routes/blogRouter'))


// ERROR HANDLER
app.use(require('./src/middlewares/errorHandler'))

// SYNCRONIZATION:
// require('./src/sync')()

app.listen(PORT, () => console.log('running on http://127.0.0.1:' + PORT))