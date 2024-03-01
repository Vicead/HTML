"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/user:

const permissions = require('../middlewares/permissions')
const user = require('../controllers/user')

// URL: /users

router.route('/')
    .get(permissions.isAdmin, user.list)
    .post(permissions.isStaffOrisAdmin, user.create)

router.route('/:id')
    .get( user.read)
    .put(permissions.isStaffOrisAdmin, user.update)
    .patch(permissions.isStaffOrisAdmin,user.update)
    .delete(permissions.isStaffOrisAdmin, user.delete)

/* ------------------------------------------------------- */
module.exports = router