var proxy = require('express-http-proxy');
var express = require('express');
var app = express();

app.use(proxy('http://localhost:8022', {
    filter: function (req, res) {
        return req.method == 'POST';
    }
    // preserveHostHdr: true
}));
app.use(express.static('dist'));

app.listen(9000);
