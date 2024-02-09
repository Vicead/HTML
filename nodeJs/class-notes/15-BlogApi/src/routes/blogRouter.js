"use strict"

/* --------------------------------------------------------------------------

BLOG api project Router

-------------------------------------------------------------------------- */

const router = require("express").Router()

const {BlogPost} = require('../controllers/blogPostController')

router.route('/post')
    .post(BlogPost.create)
    .get(BlogPost.list)
    

router.route('/post/:postId')
    .get(BlogPost.read)
    .delete(BlogPost.delete)
    .put(BlogPost.update)

module.exports = router