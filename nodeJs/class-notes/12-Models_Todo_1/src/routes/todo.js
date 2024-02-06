"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

// ROUTERS:
const router = require("express").Router()

// Controller
const todo = require('../controllers/todo') 

// // LIST TODOS:
// router.get('/', todo.list)

// // CREATE TODO
// router.post('/', todo.create)

// //READ
// router.get('/:id', todo.read)

// // UPDATE TODO:

// router.put('/:id', todo.update)

// // DELETE TODO:
// router.delete('/:id', todo.delete)

router.route('/')
    .get(todo.list)
    .post(todo.create)

router.route('/:id')
    .get(todo.read)
    .put(todo.update)
    .delete(todo.delete)
    .patch(todo.update)
    
module.exports = router