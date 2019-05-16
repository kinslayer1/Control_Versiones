var DataStore = require('./dataStore');
var Boom = require('boom');
var Handlers;
//Handlers.getAllHeroes = function(request, reply){
Handlers.getAllHeroes = function(request, reply){
    DataStore.getAllHeroes(function(err, results){
        if(err){
            return reply(Boom.badImplementation(err.details[0].message));
        }
        reply(results[0]);
    });
}