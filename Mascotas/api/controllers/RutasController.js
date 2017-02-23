/**
 * RutasController
 *
 * @description :: Server-side logic for managing Rutas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    home: function (req, res) {
        return res.view('vistas/home');
    },
    
    crearUsuario: function (req, res) {
        return res.view('vistas/Usuario/crearUsuario');
    },
    
    error: function (req, res) {
        return res.view('vistas/Error', {
            error: {
                desripcion: "Usted esta por error en esta Ruta dirijase a Inicio",
                rawError: "Ruta equivocada",
                url: "/Inicio"
            }
        });
    },
    
    listarUsuarios: function (req, res) {

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
    },

    editarUsuario: function (req, res) {

        var parametros = req.allParams();

        if (parametros.id) {

            Usuario.findOne({
                id: parametros.id
            }).exec(function (errorInesperado, UsuarioEncontrado) {
                if (errorInesperado) {
                    return res.view('vistas/Error', {
                        error: {
                            desripcion: "Error Inesperado",
                            rawError: errorInesperado,
                            url: "/ListarUsuarios"
                        }
                    });
                }
                if(UsuarioEncontrado){
                     return res.view("vistas/Usuario/editarUsuario",{
                         usuarioAEditar:UsuarioEncontrado,
                         inicioSesion:true
                     });
                }else{
                    return res.view('vistas/Error', {
                        error: {
                            desripcion: "El usuario con id: "+parametros.id+" no existe.",
                            rawError: "No existe el usuario",
                            url: "/ListarUsuarios"
                        }
                    });
                }
            })
        } else {

            return res.view('vistas/Error', {
                error: {
                    desripcion: "No ha enviado el parametro ID",
                    rawError: "Faltan Parametros",
                    url: "/ListarUsuarios"
                }
            });

        }
    },
    
    crearRaza: function (req, res) {
        return res.view('vistas/Raza/crearRaza');
    },
    
    listarRazas: function (req, res) {

        Raza.find()
            .exec(function (errorIndefinido, razasEncontradas) {

                if (errorIndefinido) {
                    res.view('vistas/Error', {
                        error: {
                            desripcion: "Hubo un problema cargando las Razas",
                            rawError: errorIndefinido,
                            url: "/ListarRazas"
                        }
                    });
                }

                res.view('vistas/Raza/ListarRazas', {
                    razas: razasEncontradas
                });
            })
    },

    editarRaza: function (req, res) {

        var parametros = req.allParams();

        if (parametros.id) {

            Raza.findOne({
                id: parametros.id
            }).exec(function (errorInesperado, RazaEncontrada) {
                if (errorInesperado) {
                    return res.view('vistas/Error', {
                        error: {
                            desripcion: "Error Inesperado",
                            rawError: errorInesperado,
                            url: "/ListarRazas"
                        }
                    });
                }
                if(RazaEncontrada){
                     return res.view("vistas/Raza/editarRaza",{
                         razaAEditar:RazaEncontrada
                     });
                }else{
                    return res.view('vistas/Error', {
                        error: {
                            desripcion: "La raza con id: "+parametros.id+" no existe.",
                            rawError: "No existe la raza",
                            url: "/ListarRazas"
                        }
                    });
                }
            })
        } else {

            return res.view('vistas/Error', {
                error: {
                    desripcion: "No ha enviado el parametro ID",
                    rawError: "Faltan Parametros",
                    url: "/ListarRazas"
                }
            });

        }
    },
    
    editarMascota: function (req, res) {

    var parametros = req.allParams();
        
    if (parametros.id) {
      Mascota.findOne({
        id: parametros.id
      }).exec(function (error, mascotaEncontrado) {
        if (error) return res.view('error', {
          title: 'Error',
          error: {
            descripcion: 'Fallo al buscar la mascota',
            url: '/crearMascotas'
          }
        });


        Raza.find().exec(function (error, razasEncontrados) {
          if (error) return res.view('error', {
            title: 'Error',
            error: {
              descripcion: 'Fallo al buscar la mascota',
              url: '/crearMascotas'
            }
          });

          return res.view('vistas/Mascota/editarMascota', {
            title: 'Editar Mascota - ' + mascotaEncontrado.nombre,
            mascota: mascotaEncontrado,
            razas: razasEncontrados
          })
        });

      });

    } else {
      return res.view('error', {
        title: 'Error',
        error: {
          descripcion: 'No existe el ID'
        }
      });
    }
  }

};