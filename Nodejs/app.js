tecnologiaswebqdeidamia.imprimirSuma1y2();


//definir un objeto JSON que va a ser exportado
module.exports = {
    //aqui se define a la funcion
    imprimirSuma1y2: imprimirSuma1y2, 
}

function imprimirSuma1y2() {
    var nummero1 = 1;
    var nummero2 = 2;
    //se corre con el comando node app.js (nombre del archivo)
    console.log(nummero1 + nummero2);
}