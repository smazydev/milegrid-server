const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./routes");
const config = require("../../config");

//bodyparser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(routes);

//=== BOILERPLATE ====
//Catch and send error messages.
app.use((err,req,res,next) => {
    if (err) {
        console.log(err.message);
        if (!err.statusCode) {
            err.statusCode = 500;
        } // set 500 server code if status code not defined.
        return res.status(err.statusCode).send({
            statusCode: err.statusCode,
            message: err.message
        })
    }

    next()
})

//404
app.use(function(req,res) {
    res.status(404).json({
        status: "Page does not exist"
    })
})


const PORT = config.PORT || 3000;

app.listen(PORT,() => {
    console.log(`listening on PORT: ${PORT}`);
})