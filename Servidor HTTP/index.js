//importar el paquete express
var express = require('express');

//ejecutar la funcion express
var app = express();
var puerto = 6060;

var usuarios = [
    {
        id:1,
        nombre:'Pedro',
        cedula:'12345457'
    },
    {
        id:2,
        nombre:'Carlos',
        cedula:'15974534'
    },
    {
        id:3,
        nombre:'Juan',
        cedula:'14785236'
    }
]


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/Usuario', function (req, res) {
    res.json(usuarios);
});

app.get('/Usuario/:idUsuario', function (req, res) {
    
    var idActual = req.params.idUsuario;
    for(var i=0;i<usuarios.length;i++){
        if(idActual == usuarios[i].id){
            res.json(usuarios[i]);
        }
    }
    res.send('No existe el Usuario');
    
})

app.get('/TecnologiasWeb', function (req, res) {
  res.send('con javascript!');
});

app.post('/TecnologiasWeb', function (req, res) {
  
    var parametros = req.params;
    
    console.log(parametros);
    
    var usuario = {
        nombre: 'Deidamia',
        cedula: '0000000000'
    }
    
    //agregar un campo al objeto
    /*usuario.apellido = 'Quishpe';
    usuario.mascotas = [];
    usuario.casado = false;
    
    console.log("Lo que tengo en el request");
    console.log(req);
    console.log("Lo que tengo en el response");
    console.log(res);
    
    console.log("Cabeceras request");
    console.log(req.headers);
    console.log("Cabeceras response");
    console.log(res.headers);*/
        
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
