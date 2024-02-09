"use strict"

/* --------------------------------------------------------------------------

BLOG api project MODELS

-------------------------------------------------------------------------- */
//http://mongoosejs.com/docs/models.html

const mongoose = require('mongoose')

// const modelSchema = new mongoose.Schema(
//     {fields }, {model detail}
// )

/*
const modelSchema = new mongoose.Schema(
    {
        fieldName: {
            type: String, // data type
            default: null, // 
            trim: true, // boşlukları al
            select: true, // çağrılınca gelsin mi
            index: true, // aramada hızlı erişim
            unique: true, //
            require: true, // veri girişi gerekli
            enum: [[1,2,3],"error message"], // standart veri girişi sağlar
            validate: [function(data) {return true}], // girilen veriyi istenilen fonksiyon ile kontrol eder 
            get: function(data) {return true}, // veri çağrılınca çalışacak fonksiyon
            set: function(data) {return true} // veri kaydederken çalışacak fonksiyon
        }
     },
     {
        collection: collectionName,
        timestamps: true // veri kayıt güncellemede zaman damgası
     }
)
*/

const BlogPostSchema = new mongoose.Schema(
    {
        //_id
        //blog category oluşunca kullan
        // blogCategoryId: {
            
        // }
        title:{
            type: String,
            trim: true,
            requrie: true
        },
        content:{
            type: String,
            trim: true,
            require: true
        },
        published:{
            type: Boolean,
            default: true
        },
        // createdAt
        // updatedAt mongo kendi üretiyor
     },
     {
        collection: 'blogPost',
        timestamps: true
     }
)

module.exports = {
    BlogPost: mongoose.model('BlogPost', BlogPostSchema)
}