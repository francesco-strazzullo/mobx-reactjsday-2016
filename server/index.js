var express = require('express');
var _ = require('lodash');
var data = require('./data');

var app = express();

app.get('/', function (req, res) {
    setTimeout(function(){
        var toReturn = _.cloneDeep(data);
        toReturn.results = _.shuffle(toReturn.results).slice(0,20);
        res.send(toReturn);
    },500);

});

app.listen(3000, function () {
    console.log('Ready to serve Random Users!');
});