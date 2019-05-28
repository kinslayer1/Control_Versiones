var express = require('express')
var http = require('http')
var app = express()
 
var users = ['oscar', 'juan', 'marcos']
 
app.get('/users', function(req, res) {
  res.send(users)
})
 
app.get('/', function(req, res) {
  res.status(200).send("Welcome to API REST")
})
 
http.createServer(app).listen(443, function()  {
  console.log('Server started at http://localhost:443');
});