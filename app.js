const express = require('express');
const app = express();
const PORT = 3500;

app.get('/', (req, res) => {
    res.send("It is working");
})


app.listen(PORT,()=>{console.log(`Server running on http://localhost:${PORT}`)});