const express = require('express');
const apps = express();

apps.use((req,res,next) => {
    console.log('Into the middleware');
    next();
});

apps.use((req,res,next) => {
    console.log('In another middleware');
    res.send('<h1>Hi from Express JS</h1>')
});

apps.listen(2000);
