var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

var port = process.env.PORT || 3000;
var messages = [];

var server = app.listen(port, () => {
    console.log('Express is listening on port ' + port);
});

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/data', (req, res, next) => {
    if (req.body) {
        messages.push(req.body);
    }
    return res.status(200).json(messages.length);
});

app.get('/data', (req, res, next) => {
    return res.status(200).json(messages);
});

