require('dotenv').config();
const express = require('express');
const app = express();
const cors  = require('cors');
const mongoose = require('mongoose');
const PORT = 3500;
const news = require('./routes/newsRoute');

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on('error', (errorMessage) => console.log(errorMessage))
db.once('open', () => console.log('Connected successfully to the database..'))


app.get('/', (req, res) => {
    res.send("It is working");
})

app.use('/api/v1/news', news);


app.listen(PORT,()=>{console.log(`Server running on http://localhost:${PORT}`)});