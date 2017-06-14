var express = require('express');
var logger = require('./logger.js')

var app = express();

app.get('/', (req, res) => {
    logger.info('API base called');
    res.send("OK");
});

app.listen(3000, () => {
    console.log("Server run on port 3000");
});