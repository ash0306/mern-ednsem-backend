const express = require('express');
const router = express.Router();
const {addNews, getAllNews, updateNews, deleteNews} = require('../controllers/newsController');


router.route('/').get(getAllNews).post(addNews)         

router.route('/edit').patch(updateNews)

router.route('/delete').delete(deleteNews)

module.exports = router;