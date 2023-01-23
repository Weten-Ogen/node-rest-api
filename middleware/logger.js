const  logger = (req,res,next)  => {
    let method = req.method;
    let url = req.url;
    let date = new Date().getFullYear()
    console.log(method, url , date)
    next()
}


module.exports = logger 