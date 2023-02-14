const express = require('express');
const app = express();
const {people} = require('./data')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const { MongoClient, ObjectId } = require('mongodb');
const connect = require('./db') 



// Home
app.use([morgan('tiny'), bodyParser.json() ])

app.get('/',async (req,res) =>{
    const db = await connect('myproject');
    const books = await db.collection('book').find().toArray();
    res.json(books)
})

// Book
app.get('/book', async (req, res) => {
    const db = await connect()
    const books = await db.collection('book').find().toArray();
    res.json(books)
})
app.post('/book', async (req,res) =>{
    const db = await connect();
    await db.collection('book').insertOne(req.body);
    res.json({data: "added a book to books"})
    
})
app.get('/book/:id', async(req, res) => {
    const  id  = req.params.id;
    const db = await connect();
    const book = await db.collection('book').find({_id:id}).toArray();
    res.json(book)
})

// users
app.get('/users', async (req,res) => {
    const db = await connect()
    const users = await db.collection('user').find().toArray();
    res.json(users)
})

app.post('/users', async (req,res) => {
    const db = await connect();
    await db.collection('user').insertOne(req.body)
    res.json ({data: "Added a user"})
})


// Terminal logs

app.listen(5000,() => {
    console.log("Server is Starting ...")
});

