const express = require('express');
const app = express();
const {people} = require('./data')
const morgan = require('morgan')
const BodyParser = require('body-parser')
const { MongoClient } = require('mongodb');

// Connection Url
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

//Database Name 
const dbName = 'tryout';

// connection func
async function connect(){
    await client.connect();
    const db = await client.db(dbName);
    return db;
}


app.use([morgan('tiny'),BodyParser.json()])

app.get('/',async (req,res) =>{
    await client.connect();
    const books = await db.collection('book').find().toArray();
    res.json(books)
})
app.get("/api/people",(req,res) => {
    res.status(200).json({success:true, data:people})
} )

app.post('/add', async (req,res) =>{
    await client.connect();
    const data = {
        title: 'Power of consistency',  
        author: 'unknown'
    }
    await db.collection('book').insertone(data);
    res.json({data: "Added a book "})

})
app.listen(5000,() => {
    console.log("Server is Starting ...")
});

