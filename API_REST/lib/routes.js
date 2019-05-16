var Joi = require('joi');
var Handlers = require('./handlers');

var Routes = [
    {
        path: '/heroes',
        method: 'GET',
        handler: Handlers.getAllHeroes
    }
];