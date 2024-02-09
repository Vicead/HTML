"use strict"
/*

BLOG api project MODELS

*/
require('express-async-errors')

const {BlogPost} =require('../models/blogModel')

/*
BLOG POST Controllers
*/

module.exports.BlogPost={
    list: async(req,res)=>{
        //
        const data = await BlogPost.find()
        res.status(200).send({
            error:false,
            data: data
        })
    },

    create: async(req,res)=>{
        //
        const data= await BlogPost.create(req.body)
        res.status(200).send({
            error: false,
            body: req.body,
            data: data
        })
    },
    read: async(req,res)=>{
        //
        const data = await BlogPost.findOne({_id:req.params.postId})
        res.status(200).send({
            error: false,
            data: data
        })
    },
    update: async(req,res)=>{
        //
        const data = await BlogPost.updateOne({_id:req.params.postId},req.body)
        res.status(200).send({
            error: false,
            data: data
         })
    },
    delete: async(req,res)=>{
        //
        const data = await BlogPost.deleteOne({_id:req.params.postId})
        res.status((data.deletedCount>=1)?204:404 ).send({
            error:false,
        })
    },
}
