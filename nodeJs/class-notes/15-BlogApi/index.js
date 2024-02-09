"use strict"

/* --------------------------------------------------------------------------

BLOG api project 

-------------------------------------------------------------------------- */

const express = require("express")
const app = express()

require('dotenv').config()
const PORT = process.env.PORT 

// DB Connection
require('./src/configs/dbConnection')

// JSON 
app.use(express.json())

// HOME Page
app.all('/', (req, res) => {
    res.send('WELCOME First ExpressJs Project with Mongo')
})

// routes
app.use('/blog', require('./src/routes/blogRouter'))






// ERROR HANDLER
app.use(require('./src/middlewares/errorHandler'))

app.listen(PORT, () => {
    console.log('running on http://127.0.0.1:'+PORT)
})