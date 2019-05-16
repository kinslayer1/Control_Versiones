const Hapi = require('hapi');

//const server = new Hapi.Server();
const server = new Hapi.server({port:3000 || process.env.port})
//var port = process.env.port || 3000;

//server.connection();

server.route(require('./lib/routes'));

server.start(function () {
    console.log('Listening on' + server.info.uri);
});