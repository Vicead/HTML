"use strict"

/* --------------------------------------------------------------------------

BLOG api project Router

-------------------------------------------------------------------------- */

const router = require("express").Router()

const {BlogPost, BlogCategory} = require('../controllers/blogPostController')

// BlogCategory
router.route('/category')
    .get(BlogCategory.list)
    .post(BlogCategory.create)
router.route('/category/:categoryId')
    .get(BlogCategory.read)
    .put(BlogCategory.update)
    .patch(BlogCategory.update)
    .delete(BlogCategory.delete)





// BlogPost
router.route('/post')
    .post(BlogPost.create)
    .get(BlogPost.list)
    

router.route('/post/:postId')
    .get(BlogPost.read)
    .delete(BlogPost.delete)
    .put(BlogPost.update)
    .patch(BlogPost.update)

module.exports = router