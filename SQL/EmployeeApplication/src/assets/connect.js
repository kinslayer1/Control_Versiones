var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;
var async = require('async');

// Create connection to database
var config = {
  server: 'tatanew',
  authentication: {
      type: 'default',
      options: {
          userName: 'pointer', // update me
          password: 'pointer' // update me
      }
  },
  options: {
      database: 'Multiaplicacion'
  }
}
var connection = new Connection(config);

/*
function Start(callback) {
    console.log('Starting...');
    callback(null, 'Jake', 'United States');
}
*/

export function hello() {
    console.log('hi');
}
function myTest() {
    alert('Welcome to custom js');
}

export function Insert(name, location) {
    console.log("Inserting '" + name + "' into Table...");
    name ='Martha';
    location="Yopal";
    request = new Request(
        'INSERT INTO Multiaplicacion.pointer.Employees (Name,Location) VALUES (@Name, @Location);',
        function(err, rowCount, rows) {
        if (err) {
            console.log(err);
        } else {
            console.log(rowCount + ' row(s) inserted');            
        }
        });
    request.addParameter('Name', TYPES.NVarChar, name);
    request.addParameter('Location', TYPES.NVarChar, location);

    // Execute SQL statement
    connection.execSql(request);
}

function Update(name, location) {
    console.log("Updating Location to '" + location + "' for '" + name + "'...");

    // Update the employee record requested
    request = new Request(
    'UPDATE Multiaplicacion.pointer.Employees SET Location=@Location WHERE Name = @Name;',
    function(err, rowCount, rows) {
        if (err) {
        console.log(err);
        } else {
        console.log(rowCount + ' row(s) updated');
        }
    });
    request.addParameter('Name', TYPES.NVarChar, name);
    request.addParameter('Location', TYPES.NVarChar, location);

    // Execute SQL statement
    connection.execSql(request);
}

function Delete(name) {
    console.log("Deleting '" + name + "' from Table...");

    // Delete the employee record requested
    request = new Request(
        'DELETE FROM Multiaplicacion.pointer.Employees WHERE Name = @Name;',
        function(err, rowCount, rows) {
        if (err) {
            console.log(err);
        } else {
            console.log(rowCount + ' row(s) deleted');        
        }
        });
    request.addParameter('Name', TYPES.NVarChar, name);

    // Execute SQL statement
    connection.execSql(request);
}

function Read() {
    console.log('Reading rows from the Table...');

    // Read all rows from table
    request = new Request(
    'SELECT Id, Name, Location FROM Multiaplicacion.pointer.Employees;',
    function(err, rowCount, rows) {
    if (err) {
        console.log(err);
    } else {
        console.log(rowCount + ' row(s) returned');
    }
    });

    // Print the rows read
    var result = "";
    request.on('row', function(columns) {
        columns.forEach(function(column) {
            if (column.value === null) {
                console.log('NULL');
            } else {
                result += column.value + " ";
            }
        });
        console.log(result);
        result = "";
    });

    // Execute SQL statement
    connection.execSql(request);
}

function Complete(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log("Done!");
    }
}

// Attempt to connect and execute queries if connection goes through
connection.on('connect', function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected');

    // Execute all functions in the array serially
    async.waterfall([        
        Insert,
        Update,
        Delete,
        Read
    ], Complete)
  }
});