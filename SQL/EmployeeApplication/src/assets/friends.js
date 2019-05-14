export const realDataBase = {
    get() {
      return friendsQuery();
    }
  };
  
  function friendsQuery() {
    return new Promise(function(resolve, reject){
  
      var Connection = require('tedious').Connection;
  
      var result = [];
  
      var config = {
          userName: 'pointer',
          password: 'pointer',
          server: 'tatanew'
      };
  
      var connection = new Connection(config);
  
      connection.on('connect', function(err) {
        if (err) {
          console.log(err);
        } 
        getFriends();
      });
      
      var Request = require('tedious').Request;
  
      function getFriends() {
        var request = new Request('use multiaplicacion SELECT Id, Name, Locatio FROM Employees',
        function(err, rowCount) {
          if (err) {
            reject(err);
          } 
          connection.close();
        });
  
        request.on('doneProc', function(rowCount, more) {
          resolve(result);
        });              
  
        request.on('row', function(columns) {
          let row = {};
          columns.forEach(function(column) {
            row[column.metadata.colName] = column.value;
          });
          result.push(row);
        });
        connection.execSql(request);
      }
    });
  }