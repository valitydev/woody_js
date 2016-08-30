var httpConnection = require('./thrift/http_connection');
var TBufferedTransport = require('./thrift/buffered_transport');
var TBinaryProtocol = require('./thrift/binary_protocol');
var Repository = require('./gen-nodejs/Repository');

(function () {
    var connection = httpConnection.createHttpConnection('localhost', 9000, {
        transport: TBufferedTransport(),
        protocol: TBinaryProtocol(),
        path: '/v1/domain/repository'
    });
    this.repository = httpConnection.createHttpClient(Repository, connection);
}).call(window || {});
