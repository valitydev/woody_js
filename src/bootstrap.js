var thrift = require('thrift');
var Repository = require('./gen-nodejs/Repository');

var FlakeId = require('flake-idgen');
var bs64 = require('base-x')('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/');
var flake = new FlakeId();

(function () {
    var id = bs64.encode(flake.next());

    var connection = thrift.createHttpConnection('localhost', 9000, {
        transport: thrift.TBufferedTransport(),
        protocol: thrift.TBinaryProtocol(),
        path: '/v1/domain/repository',
        headers: {
            'Accept': 'application/x-thrift',
            'Content-Type': 'application/x-thrift',
            'x-rbk-span-id': id,
            'x-rbk-parent-id': undefined,
            'x-rbk-trace-id': id
        }
    });

    connection.on('error', function (err) {
        console.log(err);
    });

    var client = thrift.createHttpClient(Repository, connection);

    client.Pull(0, result => console.log(result));
}).call(window || {});
