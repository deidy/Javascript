//importar el paquete express
var express = require('express');
var fs = require('fs');

//ejecutar la funcion express
var app = express();
var puerto = 6060;

var usuarios = [
    {
        id: 1,
        nombre: 'Pedro',
        cedula: '12345457'
    },
    {
        id: 2,
        nombre: 'Carlos',
        cedula: '15974534'
    },
    {
        id: 3,
        nombre: 'Juan',
        cedula: '14785236'
    }
]

var contador = 3;


//1er parametro path, 2do parametro codificacion

//function(path,codificacion,function){}

var quePasa = '';
quePasa = 'Está por leer el archivo';

console.log(quePasa);




quePasa = 'Termino de leer el archivo';
console.log(quePasa);

//Absolute Path
//paginas/pagina.html
//> C:/paginas/pagina.html

//Relative Path
//./paginas/pagina.html
//> path/paginas/pagina.html

/*fs.readFile('./paginas/pagina.html', 'utf8', (err,data) => {
    if(err) throw err;
    console.log(data);
});*/



app.get('/', function (req, res) {
    //res.send('Hello World!');
    
    var todo = '';
    
    console.log('1 antes de leer');
    fs.readFile('./paginas/pagina.html', 'utf8', function (err, archivoLeido1) {
        todo+=archivoLeido1;
        
        fs.readFile('./paginas/usuario.html', 'utf8', function (err, archivoLeido2) {
            todo+=archivoLeido2;
            
            fs.readFile('./paginas/footer.html', 'utf8', function (err, archivoLeido3) {
                
                todo+=archivoLeido3;
                
                res.send(todo);
            });
        });
    });
    
    console.log('2 parece que termino de leer');
});

app.get('/Usuario', function (req, res) {
    res.json(usuarios);
});

app.get('/Usuario/:idUsuario', function (req, res) {

    var idActual = req.params.idUsuario;
    for (var i = 0; i < usuarios.length; i++) {
        if (idActual == usuarios[i].id) {
            res.json(usuarios[i]);
        }
    }
    res.send('No existe el Usuario');

})

app.post('/Usuario', function (req, res) {

    console.log(req.query.nombre);
    console.log(req.query.cedula);

    if (!req.query.nombre) {
        res.send('No envio el nombre');
    }

    if (!req.query.cedula) {
        res.send('No envio la cedula');
    }

    var nuevoUsuario = {
        id: contador + 1,
        nombre: req.query.nombre,
        cedula: req.query.cedula
    }

    usuarios.push(nuevoUsuario);
    contador = contador++;
    res.json(nuevoUsuario);
})

app.put('/Usuario/:idUsuario', function (req, res) {
    //deber
})

app.delete('/Usuario/:idUsuario', function (req, res) {
    //deber
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