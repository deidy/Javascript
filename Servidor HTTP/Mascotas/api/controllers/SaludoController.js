/**
 * SaludoController
 *
 * @description :: Server-side logic for managing Saludoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var nodemailer = require('nodemailer');

module.exports = {
	
    hola:function(req, res){
        
        var parametros = req.allParams()
        
        if(req.method=='GET'){
            res.json({
            nombre:'hola get',
            para:parametros
        }); 
        }
        
        if(req.method=='POST'){
            res.json({
            nombre:'hola post'
        }); 
        } else {
            res.json({
                nombre:'hola todos'
            });
        }
        
    },
    adios:function(req, res){
        res.send('adios');
    },
    hora:function(req, res){
        res.send('hora');
    }
};

