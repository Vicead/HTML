"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

// ROUTERS:
const router = require("express").Router()

// Call Model:
const Todo = require('../models/todo')

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

//READ TODO:
router.get('/:id', async (req, res) => {
    // const data = await Todo.findOne({where: {id: req.params.id}})
    // console.log(data.dataValues)
    
    const data = await Todo.findByPk(req.params.id)
    res.status(200).send({
        error: false,
        result: data
    })
})

// UPDATE TODO:

router.put('/:id', async (req, res) => {
    const data = await Todo.update(req.body, {where: {id: req.params.id}})
    res.status(202).send({
        error: false,
        body: req.body, // Sent Data
        message: "Updated",
        result: data // Received Data
    })
})

// DELETE TODO:
router.delete('/:id', async (req, res) => {
    const data = await Todo.destroy({where: {id: req.params.id}})
    if (data>0){
        res.status(204).send({
            error: false,
            message: "Deleted",
            
            })
    }else{
        res.status(404).send({
            error: false,
            message: "Not found",
            result: data // Received Data
            })
    }
    
})

module.exports = router