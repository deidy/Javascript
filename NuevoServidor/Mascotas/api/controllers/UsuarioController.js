/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing Usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */



module.exports = {

    crearUsuario: function (req, res) {
        //   Se accede asi: /Usuario/crearUsuario

        // Guardando todos los parametros en la variable parametros

        if (req.method == "POST") {

            var parametros = req.allParams();

            if (parametros.nombres && parametros.apellidos) {

                var usuarioCrear = {
                    nombres: parametros.nombres,
                    apellidos: parametros.apellidos,
                    correo: parametros.correo
                }
                
                if (parametros.correo == "") {
                    delete usuarioCrear.correo;
                }

                //Todos los métodos son con el modelo
                Usuario.create(usuarioCrear).exec(function (err, usuarioCreado) {

                    if (err) {
                        return res.view('vistas/Error', {
                            error: {
                                descripcion: "Fallo al crear un Usuario",
                                rawError: "",
                                url: "/crearUsuario"
                            }
                        });
                    }
                    
                    return res.view('vistas/Usuario/crearUsuario');

                })

            } else {
                return res.view('vistas/Error', {
                    error: {
                        descripcion: "Llena todos los parámetros, nombres y apellidos",
                        rawError: "Fallo en envío de parámetros",
                        url: "/crearUsuario"
                    }
                });
            }

        } else {
            return res.view('vistas/Error', {
                error: {
                    descripcion: "Error en el uso del Método HTTP",
                    rawError: "HTTP Inválido",
                    url: "/crearUsuario"
                }
            });
        }

    }
};