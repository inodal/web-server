var express = require('express');
var app = express();
var PORT = 3000;

var middleware = require('./middleware');

//Middleware MUST BE the first app.use or it will not work (WTF?)
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res) {
    res.send('About us!');
});

app.use(express.static(__dirname + '/public'));


app.listen(PORT, function() {
    console.log('Express server started on port ' + PORT);
});