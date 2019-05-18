var express = require("express");
var bodyParser = require("body-parser");
var sql = require("mssql");
var app = express();

var config =
{
    authentication: {
        options: {
            userName: 'pointer', 
            password: 'pointer' 
        },
        type: 'default'
    },
    server: 'tatanew', 
    options:
    {
        database: 'multiaplicacion', 
        encrypt: true
    }
}/*
var config =
{
    authentication: {
        options: {
            userName: 'bua', 
            password: 'bua' 
        },
        type: 'default'
    },
    server: 'bua.database.windows.net', 
    options:
    {
        database: 'bua', 
        encrypt: true
    }
}*/
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
/*
//Setting up server
var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;    
    console.log("App now running on port", port);
});
*/
app.listen(3000, function () {
    console.log("El servidor está inicializado en el puerto 3000");
   });

//Function to connect to database and execute query
var executeQuery = function (res, query) {    
    console.log('Ejecutando executeQuery');
    sql.connect(config, function (err) {
        console.log('Ejecutando con config');
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
                    res.send('');
                    console.log("OK :- " + rs);
                }
            });
        }
    });
}

//GET API
app.get("/", function (req, rs) {
    console.log('Ejecutando query SELECT');
    var query = "use bua select * from TB_BUA_AVALUO";
    executeQuery(rs, query);
});

//POST API
app.post("/api/avaluo", function (req, rs) {
    console.log('Ejecutando query INSERT');
    sql.close();
    var query = "use multiaplicacion INSERT INTO TB_BUA_AVALUO "
    +"(ENTIDAD_AVALUADORA, "
    +"DIRECCION, "
    +"TELEFONO, "
    +"BANCO, "
    +"ID_BANCO, "
    +"DEPARTAMENTO, "
    +"CIUDAD, "
    +"ID_PERITO) "
    + " VALUES ('"+req.body.Entidad_avaluadora+"','"
    +req.body.Direccion+"',"
    +req.body.Telefono+",'"
    +req.body.Banco+"',"
    +req.body.Id_banco+",'"
    +req.body.Departamento+"','"
    +req.body.Ciudad+"',"
    +req.body.Id_perito+")";
    executeQuery(rs, query);    
});

//PUT API
app.put("/api/user/:id", function (req, rs) {
    var query = "use bua UPDATE pointer.Employees SET Name=  + req.body.Name +  , Location=   + req.body.Location +   WHERE Id=  + req.params.id";
    executeQuery(rs, query);
});

// DELETE API
app.delete("/api/user/:id", function (req, rs) {
    var query = "use bua DELETE FROM pointer.Employees WHERE id= req.params.id";
    executeQuery(rs, query);
});

