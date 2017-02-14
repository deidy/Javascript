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
                    
            var usuarioEditar = {
                nombres: parametros.nombres,
                apellidos: parametros.apellidos,
                correo: parametros.correo
            }
            
            if(usuarioEditar.nombres = ""){
                delete usuarioEditar.nombres
            }
            
            if(usuarioEditar.apellidos = ""){
                delete usuarioEditar.apellidos
            }
            
            if(usuarioEditar.correo = ""){
                delete usuarioEditar.correo
            }
            
            Usuario.update({
                id: parametros.idUsuario
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
                
                Usuario.find().exec(function (errorIndefinido, usuariosEncontrados) {
                    
                    if (errorIndefinido) {
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
                    descripcion: "Necesitamos que envíes el ID y el nombre, apellido o correo"
                    , rawError: "No envía parámetros"
                    , url: "/ListarUsuarios"
                }
            });
        }
    }
};