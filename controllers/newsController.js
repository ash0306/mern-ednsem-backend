const newsModel = require('../models/newsModel')

const addNews = async(req,res) => {
    const newNews = req.body;
    console.log(newNews);
    try{
        const existingNews = await newsModel.findOne({newsID:req.body.newsID});
        if(existingNews){
            return res.status(409).json({message: `News with ID ${req.body.newsID} already exists`});
        }
        const news = await newsModel.create(newNews);
        res.status(200).json(news);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

const getAllNews = async(req,res) => {
    try{
        const news = await newsModel.find()
        res.status(200).json(news);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}


const updateNews = async(req, res) => {
    const newsToBeUpdated = req.body
    try{
        
        const news = await newsModel.findOneAndUpdate({newsID:newsToBeUpdated.newsID}, newsToBeUpdated)
        res.status(201).json(news)
    }
    catch(error)
    {
        res.status(500).json({message:error.message})
    }
}

const deleteNews = async(req,res) => {
    const newsToBeDeleted = req.body;

    try{
        const news = await newsModel.findOneAndDelete({newsID:newsToBeDeleted.newsID},newsToBeDeleted);
        res.status(201).json({message:`News with ID ${req.body.newsID} is deleted successfully`});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}


module.exports = {addNews, getAllNews, updateNews, deleteNews}