var express = require('express');
var app = express();

app.get('/TecnologiasWeb', function (req, res) {
  res.send('Hello World!');
});

app.listen(5050, function () {
  console.log('con javascript!');
});
