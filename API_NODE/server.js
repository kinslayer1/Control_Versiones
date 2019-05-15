//Initiallising node modules
var express = require("express");
var bodyParser = require("body-parser");
var sql = require("mssql");
var app = express();

// Body Parser Middleware
app.use(bodyParser.json());

//CORS Middleware
app.use(function (req, res, next) {
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});

//Setting up server
var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});

//Initiallising connection string
var dbConfig = {
    user: "pointer",
    password: "pointer",
    server: "tatanew",
    database: "multiaplicacion"
};

//Function to connect to database and execute query
var executeQuery = function (res, query) {
    sql.connect(dbConfig, function (err) {
        if (err) {
            console.log("Error while connecting database :- " + err);
            res.send(err);
        }
        else {
            // create Request object
            var request = new sql.Request();
            // query to the database
            request.query(query, function (err, rs) {
                if (err) {
                    console.log("Error while querying database :- " + err);
                    res.send(err);
                }
                else {
                    res.send(rs);
                    console.log("OK :- " + rs);
                }
            });
        }
    });
}

//GET API
app.get("/api/user", function (req, rs) {
    var query = "use multiaplicacion select * from pointer.Employees";
    executeQuery(rs, query);
});

//POST API
app.post("/api/user", function (req, rs) {
    var query = "use multiaplicacion INSERT INTO pointer.Employees (Name,Location) VALUES ("+req.body.Name+","+req.body.Location+")";
    executeQuery(rs, query);
});

//PUT API
app.put("/api/user/:id", function (req, rs) {
    var query = "use multiaplicacion UPDATE pointer.Employees SET Name= " + req.body.Name + " , Location=  " + req.body.Location + "  WHERE Id= " + req.params.id;
    executeQuery(rs, query);
});

// DELETE API
app.delete("/api/user/:id", function (req, rs) {
    var query = "use multiaplicacion  DELETE FROM pointer.Employees WHERE id="+ req.params.id;
    executeQuery(rs, query);
});