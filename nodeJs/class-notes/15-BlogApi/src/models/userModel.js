"use strict"
/* ---------------------------------------- */
//    USER MODEL
/* ---------------------------------------- */

const mongoose = require('mongoose')

const passwordEncrypt = require('../helpers/passwordEncrypt')

// Schema:
const UserSchema = new mongoose.Schema({

    email: {
        type: String,
        trim: true,
        unique: true,
        // required: true,
        required: [true, 'Email field must be required.'],
        // validate: (email) => { return true },
        // validate: [
        //     (email) => {
        //         if (email.includes('@') && email.includes('.'))
        //             return true
        //         else
        //             return false
        //     },
        //     'Email type is incorrect'
        // ]

        // Validate sadece create controller'ında çalışır update controller'ında çalıması için { runValidators } eklenmesi gerekir
        validate: [
            (email) => (email.includes('@') && email.includes('.')),
            'Email type is incorrect'
        ]
    },

    password: {
        type: String,
        trim: true,
        required: true,
        set: (password) => passwordEncrypt(password)
    },

    firstName: String,

    lastName: String,

}, {
    collection: "users",
    timestamps: true
})

// Export:
module.exports = {
    User: mongoose.model('User', UserSchema)
}