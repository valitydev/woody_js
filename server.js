const proxy = require('express-http-proxy');
const express = require('express');
const app = express();

const url = 'http://localhost:8022';
const staticFolder = 'dist';

app.use(proxy(url, {
    filter: function (req) {
        return req.method === 'POST';
    },
    reqAsBuffer: true,
    reqBodyEncoding: null
}));
app.use(express.static(staticFolder));

app.listen(9000);
