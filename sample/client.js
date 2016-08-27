var transport = new Thrift.TXHRTransport("/v1/domain/repository");
var protocol = new Thrift.TJSONProtocol(transport);

var client = new RepositoryClient(protocol);

client.send_Pull(0, result => console.log(result));