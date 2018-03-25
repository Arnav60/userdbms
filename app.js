var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var expressValidator = require('express-validator');

var logger = function(req, res, next){
    console.log('Logging in');
    next();
}
app.use(logger);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname, 'client')));
var users = [{
            id : 247,
            name : 'Arnav'
        },
        {
            id : 248,
            name : 'Raghav'
        },
        {
            id : 249,
            name : 'Chirayu'
        }]
app.get('/', function(req, res){
    res.render('app',{title : 'HOME PAGE', users : users} 
        );
app.post('/users/add', function(req, res){
        console.log(req.body.id);
        console.log(req.body.name);
        var newUser = {
        id : req.body.id,
        name : req.body.name,
        }
        console.log(newUser);
});    
    
    })
app.listen(9756, function(){
    console.log('Server is running on port number 9756');
})