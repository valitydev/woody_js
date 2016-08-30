var thrift = require('./thrift/index');
var Repository = require('./gen-nodejs/Repository');

(function () {
    var connection = thrift.createHttpConnection('localhost', 9000, {
        transport: thrift.TBufferedTransport(),
        protocol: thrift.TBinaryProtocol(),
        path: '/v1/domain/repository'
    });

    this.repository = thrift.createHttpClient(Repository, connection);
}).call(window || {});
