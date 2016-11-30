//importar el paquete express
var express = require('express');

//ejecutar la funcion express
var app = express();
var puerto = 5050;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/TecnologiasWeb', function (req, res) {
  res.send('con javascript!');
});

app.post('/TecnologiasWeb', function (req, res) {
  
    var usuario = {
        nombre: 'Deidamia',
        cedula: '0000000000'
    }
    
    //agregar un campo al objeto
    usuario.apellido = 'Quishpe';
    usuario.mascotas = [];
    usuario.casado = false;
    
    console.log("Lo que tengo en el request");
    console.log(req);
    console.log("Lo que tengo en el response");
    console.log(res);
    
    console.log("Cabeceras request");
    console.log(req.headers);
    console.log("Cabeceras response");
    console.log(res.headers);
        
    res.append('token', '1234');
    
    //enviar objetos json
    res.json(usuario);
    
    res.send('con POST!');
    
    //no se puede enviar dos respuestas
    //res.send('asas!');
});

app.listen(puerto, function () {
  console.log('Example app listening on port ' + puerto + '!');
});
