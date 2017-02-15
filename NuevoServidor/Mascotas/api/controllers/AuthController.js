/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var Passwords = require('machinepack-passwords');

module.exports = {
    
//    Validar si envían parámetros
//    Buscar por correo al usuario
//    Comparar el password
//    Entregar credencial

    
	login: function (req, res) {

        var parametros = req.allParams();
        
        if(parametros.correo && parametros.password){
	       Usuario.findOne({
	           correo: parametros.correo
            }).exec(function (errorInesperado, UsuarioEncontrado){
	           
               if(errorInesperado){
		          return res.view('vistas/Error',{
                        error: {
	                       descripcion: "Necesitamos su correo y password",
	                       rawError: "No envía parámetros",
	                       url: "/Login"
                        }
                    })
               }
               
               if(UsuarioEncontrado){
                    Passwords.checkPassword({
                        passwordAttempt: parametros.password,
                        encryptedPassword: UsuarioEncontrado.password,
                    }).exec({
                        // An unexpected error occurred.
                            error: function (err) {
                                return res.view('vistas/Error',{
                                    error: {
                                       descripcion: "Error inesperado",
                                       rawError: err,
                                       url: "/Login"
                                    }
                                })
                            },
                            // Password attempt does not match already-encrypted version
                            incorrect: function () {
                                return res.view('vistas/Error',{
                                    error: {
                                       descripcion: "Ingrese su password correctamente",
                                       rawError: "Password incorrecta",
                                       url: "/Login"
                                    }
                                })
                            },
                            // OK.
                            success: function () {
                                req.session.credencialSegura = true;
                                return res.view("vistas/home");
                            },
                        });
                  
               } else {

                    return res.view('vistas/Error', {
                        error: {
                            desripcion: "No se encontro al Usuario",
                            rawError: "No existe Usuario",
                            url: "/Login"
                        }
                    });
                }
            })
        } else {
            return res.view('vistas/Error', {
                error: {
                    desripcion: "Necesitamos su correo y password",
                    rawError: "No envia Parametros",
                    url: "/Login"
                }
            });
        }
    },
    
    tieneSesion: function (req, res) {
        
        if(req.session.credencialSegura){
            return res.ok("Si tiene la credencial segura")
        }else{
            return res.forbidden();
        }
    },
    
    logout: function (req, res) {
        req.session.credencialSegura = undefined;
        
        return res.view("login");
    }
}