const express = require('express');
const app = express();

const {products, people} = require('./data')

app.get('/' ,(req,res) =>{
    res.status(200).send('<h1>Home Page</h1><a href="/api/products">products</a>')
});

app.get('/api/products',(req,res) => {
    const newProducts = products.map(product => {
        const { id , name , price} = product;
        return {id , name, price}
    })
    res.json(newProducts )
});

app.get('/api/products/:prodID',(req,res) => {
    const { prodID } = req.params;
    const item = products.find(product => product.id === Number(prodID))
    if(!item){
        res.status(404).send("Product Doesn't Exist")
    }
    res.json(item)  
})

app.get('/api/v1/query', (req,res) => {
    console.log(req.query)
    const { search , limit} = req.query
    let sortedP = [...products]
    if(search){
        sortedP = sortedP.filter(product => {
            return product.name.startsWith(search);
        })
    }
    if(limit){
        sortedP = sortedP.slice(0,Number(limit))
    }
    
    res.status(404).json(sortedP)
})


app.listen(4000,() => {
    console.log("Server is Starting ...")
});
