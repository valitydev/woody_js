const proxy = require('express-http-proxy');
const express = require('express');
const app = express();

const dominantUrl = 'http://localhost:8022';
const staticFolder = 'dist';

app.use(proxy(dominantUrl, {
    filter: function (req) {
        return req.method === 'POST';
    },
    reqAsBuffer: true,
    reqBodyEncoding: null
}));
app.use(express.static(staticFolder));

app.listen(9000);
