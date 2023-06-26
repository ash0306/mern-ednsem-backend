const mongoose = require('mongoose')

const newsSchema = new mongoose.Schema(
    {
        newsTitle : {
            type:String,
            required:true
        },
        newsID :{
            type:String,
            required:true,
            unique:true
        },
        newsAuthor : {
            type:String,
            required:true
        },
        newsLocation : {
            type:String,
            required:true
        },
        newsType:{
            type:String,
            required:true
        }
    },
    {
        collection : 'news'
    }
)

module.exports = mongoose.model('news', newsSchema)