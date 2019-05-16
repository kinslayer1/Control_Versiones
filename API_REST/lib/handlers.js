var DataStore=require('./dataStore');
var Boom=require('boom');

Handlers.getAllHeroes=function(request,reply){
    DataStore.getAllHeroes(function(err,results){
        if(err){
            return reply(Boom.badImplementation(err.details[0].message));
        }
        reply(results[0]);
    });
}