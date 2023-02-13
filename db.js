const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';

const client = new MongoClient(url);

const dbName = 'myproject';

async function connect() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = await client.db(dbName);
  
    // the following code examples can be pasted here...
  
    return db;
  }

  module.exports = connect;