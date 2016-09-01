var httpConnection = require('../src/client/http_connection');
var TBufferedTransport = require('../src/client/buffered_transport');
var TBinaryProtocol = require('../src/client/binary_protocol');
var Repository = require('./gen-nodejs/Repository');

var host = 'localhost';
var port = 9000;

(function () {
    var connection = httpConnection.createHttpConnection(host, port, {
        transport: TBufferedTransport(),
        protocol: TBinaryProtocol(),
        path: '/v1/domain/repository'
    });
    this.repository = httpConnection.createHttpClient(Repository, connection);
}).call(window || {});
