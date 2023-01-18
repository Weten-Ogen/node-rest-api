const express = require('express');
const app = express();
const path = require('path');


// using static folders
app.use(express.static('./public'))

app.get('/', (req,res) =>{
    res.sendFile(path.resolve(__dirname,"./index.html"))
})


app.all('*', (req,res) =>{
    res.status(404).send(`<h1>${req.url} not Found</h1>`)
})
app.listen(port=5000, () =>{
    console.log(`Starting server on ${port}`)
})