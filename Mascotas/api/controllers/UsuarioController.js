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
                    nombres: parametros.nombres
                    , apellidos: parametros.apellidos
                    , correo: parametros.correo
                }
                
                if (parametros.correo == "") {
                    delete usuarioCrear.correo;
                }
                
                //Todos los métodos son con el modelo
                Usuario.create(usuarioCrear).exec(function (err, usuarioCreado) {
                    if (err) {
                        return res.view('vistas/Error', {
                            error: {
                                descripcion: "Fallo al crear un Usuario"
                                , rawError: err
                                , url: "/crearUsuario"
                            }
                        });
                    }
                    
                    Usuario.find().exec(function (errorIndefinido, usuariosEncontrados) {
                        
                        if (errorIndefinido) {
                            res.view('vistas/Error', {
                                error: {
                                    descripcion: "Hubo un problema cargando los usuarios"
                                    , rawError: errorIndefinido
                                    , url: "/ListarUsuarios"
                                }
                            });
                        }
                        
                        res.view('vistas/Usuario/ListarUsuarios', {
                            usuarios: usuariosEncontrados
                        });
                    })
                })
            }
            else {
                return res.view('vistas/Error', {
                    error: {
                        descripcion: "Llena todos los parámetros, nombres y apellidos"
                        , rawError: "Fallo en envío de parámetros"
                        , url: "/crearUsuario"
                    }
                });
            }
        }
        else {
            return res.view('vistas/Error', {
                error: {
                    descripcion: "Error en el uso del Método HTTP"
                    , rawError: "HTTP Inválido"
                    , url: "/crearUsuario"
                }
            });
        }
    },
    
    borrarUsuario: function (req, res) {
        
        var parametros = req.allParams();
        
        if (parametros.id) {
            
            Usuario.destroy({
                id: parametros.id
            }).exec(function (errorInesperado, usuarioRemovido) {
                
                if (errorInesperado) {
                    return res.view('vistas/Error', {
                        error: {
                            descripcion: "Tuvimos un Error Inesperado"
                            , rawError: errorInesperado
                            , url: "/ListarUsuarios"
                        }
                    });
                }
                
                Usuario.find().exec(function (err, usuariosEncontrados) {
                    
                    if (err) {
                        res.view('vistas/Error', {
                            error: {
                                descripcion: "Hubo un problema cargando los usuarios"
                                , rawError: error
                                , url: "/ListarUsuarios"
                            }
                        });
                    }
                    res.view('vistas/Usuario/ListarUsuarios', {
                        usuarios: usuariosEncontrados
                    });
                })
            })
        }
        else {
            return res.view('vistas/Error', {
                error: {
                    descripcion: "Necesitamos el id para borrar al Usuario"
                    , rawError: "No envía ID"
                    , url: "/ListarUsuarios"
                }
            });
        }
    },
    
    editarUsuario: function (req, res) {

        var parametros = req.allParams();

        if (parametros.idUsuario && (parametros.nombres || parametros.apellidos || parametros.correo)) {
            
            var usuarioAEditar = {
                nombres: parametros.nombres,
                apellidos: parametros.apellidos,
                correo: parametros.correo,
                password: parametros.password
            }

            if (usuarioAEditar.nombres == "") {
                delete usuarioAEditar.nombres
            }
            if (usuarioAEditar.apellidos == "") {
                delete usuarioAEditar.apellidos
            }
            if (usuarioAEditar.correo == "") {
                delete usuarioAEditar.correo
            }
            if (usuarioAEditar.password == "") {
                delete usuarioAEditar.password
            }

            Usuario.update({
                    id: parametros.idUsuario
                }, usuarioAEditar)
                .exec(function (errorInesperado, UsuarioRemovido) {
                    if (errorInesperado) {
                        return res.view('vistas/Error', {
                            error: {
                                desripcion: "Tuvimos un Error Inesperado",
                                rawError: errorInesperado,
                                url: "/ListarUsuarios"
                            }
                        });
                    }
                
                    Usuario.find()
                        .exec(function (errorIndefinido, usuariosEncontrados) {

                            if (errorIndefinido) {
                                res.view('vistas/Error', {
                                    error: {
                                        desripcion: "Hubo un problema cargando los Usuarios",
                                        rawError: errorIndefinido,
                                        url: "/ListarUsuarios"
                                    }
                                });
                            }

                            res.view('vistas/Usuario/ListarUsuarios', {
                                usuarios: usuariosEncontrados
                            });
                        })
                })

        } else {
            return res.view('vistas/Error', {
                error: {
                    desripcion: "Necesitamos que envies el ID y el nombre, apellido o correo",
                    rawError: "No envia Parametros",
                    url: "/ListarUsuarios"
                }
            });
        }

    },
    
    editarMascota: function (req, res) {

    var parametros = req.allParams();
    sails.log.info(parametros);
    if (req.method == 'POST') {
      if (parametros.nombre && parametros.paisNacimiento && parametros.idRaza) {

        Mascota.update({
          id: parametros.id
        }, {
          nombre: parametros.nombre,
          fechaNacimiento: parametros.fechaNacimiento,
          paisNacimiento: parametros.paisNacimiento,
          idRaza: parametros.idRaza,
        }).exec(function (error, mascotaCreado) {
          if (error) {
            return res.view('error', {
              title: 'Error',
              error: {
                descripcion: 'Hubo un error creando la mascota: ' + error,
                url: '/crearUsuario'
              }
            });
          }
            
          Mascota.find().exec(function (error, mascotasEncontrados) {
            if (error) return res.serverError()
            return res.view('vistas/Mascota/listarMascotas', {
              title: 'Lista de Mascotas',
              mascotas: mascotasEncontrados
            })
          });

        });

      } else {
        // bad Request
        console.log('NO PARAMETROS');
        return res.view('error', {
          title: 'Error',
          error: {
            descripcion: 'No envia todos los parametros',
            url: '/editarMascota'
          }
        });
      }
    } else {
      console.log('POST');
      return res.view('error', {
        title: 'Error',
        error: {
          descripcion: 'Falla en el metodo HTTP',
          url: '/editarMascota'
        }
      });
    }

  }
};