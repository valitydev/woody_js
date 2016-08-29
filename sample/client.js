var transport = new Thrift.Transport("/v1/domain/repository");
var protocol = new Thrift.TBinaryProtocol(transport);

var client = new RepositoryClient(protocol);

// client.send_Pull(0, result => console.log(result));