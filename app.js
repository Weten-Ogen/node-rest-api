const http = require("http");
const server = http.createServer((req,res) => {
    console.log('starting server');
    res.write("hello word");
    
});

server.listen(3000);