"use strict";
/* -------------------------------------------------------
    EXPRESSJS - MIDDLEWARES
------------------------------------------------------- *

const middleFunc1 = (req, res, next) => {

    req.message1 = 'middleFunc1 runned.'
    next()
}

const middleFunc2 = (req, res, next) => {
    
    req.message2 = 'middleFunc2 runned.'
    next()
}

// module.exports = middleFunc1
// module.exports = [middleFunc1, middleFunc2]
module.exports = {
    middleFunc1,
    middleFunc2
}

/* ------------------------------------------------------- */

module.exports = {

    middleFunc1: (req, res, next) => {

        req.message1 = 'middleFunc1 runned.'
        next()
    },

    middleFunc2: (req, res, next) => {

        req.message2 = 'middleFunc2 runned.'
        next()
    }
}