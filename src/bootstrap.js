var httpConnection = require('./thrift/http_connection');
var TBufferedTransport = require('./thrift/buffered_transport');
var TBinaryProtocol = require('./thrift/binary_protocol');
var Repository = require('./gen-nodejs/Repository');

var host = 'localhost';
var port = 8080;

(function () {
    var connection = httpConnection.createHttpConnection(host, port, {
        transport: TBufferedTransport(),
        protocol: TBinaryProtocol(),
        path: '/v1/domain/repository'
    });
    this.repository = httpConnection.createHttpClient(Repository, connection);
}).call(window || {});
