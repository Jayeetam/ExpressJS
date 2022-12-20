const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product',(req,res,next) => {
    res.send('<form action="/product" method="POST"><input type="text" placeholder="product name" name="title"> <br> <br> <input type="number" placeholder="product size" name="size"> <br><br> <button type="submit"> Submit </button></form>');
});

app.use('/product',(req,res,next) =>{
    console.log(req.body);
    res.redirect('/');
});

app.use('/',(req,res,next) => {
    res.send('<h1>Hi from Express JS Home page</h1>');
});

app.listen(3000);
