var user ="pointer";
var password="pointer";
var server="tatanew";

var confif={
    user=user,
    password=password,
    server=server,
    database="Multiaplicacion",
    options:{
        encrypt:true
    }
};

Datastore.getAllHeroes= function(callback){
    var connection= new sql.Connection(confif, function(err){
        if(err){
            console.log(err);
            callback(err);
        }else{
            var request = new sql.Request(connection);
            request.execute('ALLAVALUO', function(err, recordsets){
                if(err){
                    console.log(err);
                    callback(err);
                }else{
                    console.dir(recordsets);
                    callback(null,recordsets);
                }
            });
        }
    });
    connection.on('error', function(err){
        console.log('Error: ',+err);
    });
}