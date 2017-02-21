/**
 * RazaController
 *
 * @description :: Server-side logic for managing Razas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
//	crearRaza: function (req, res) {
//        
//        //   Se accede asi: /Usuario/crearUsuario
//        // Guardando todos los parametros en la variable parametros
//        if (req.method == "POST") {
//            
//            var parametros = req.allParams();
//            
//            if (parametros.nombre) {
//                
//                var razaCrear = {
//                    nombre: parametros.nombre
//                }
//                
//                if (parametros.nombre == "") {
//                    delete razaCrear.nombre;
//                }
//                
//                //Todos los métodos son con el modelo
//                Raza.create(razaCrear).exec(function (err, razaCreada) {
//                    if (err) {
//                        return res.view('vistas/Error', {
//                            error: {
//                                descripcion: "Fallo al crear la raza"
//                                , rawError: err
//                                , url: "/crearRaza"
//                            }
//                        });
//                    }
//                    
//                    Raza.find().exec(function (errorIndefinido, razasEncontradas) {
//                        
//                        if (errorIndefinido) {
//                            res.view('vistas/Error', {
//                                error: {
//                                    descripcion: "Hubo un problema cargando las razas"
//                                    , rawError: errorIndefinido
//                                    , url: "/ListarRazas"
//                                }
//                            });
//                        }
//                        
//                        res.view('vistas/Usuario/ListarRazas', {
//                            usuarios: razasEncontradas
//                        });
//                    })
//                })
//            }
//            else {
//                return res.view('vistas/Error', {
//                    error: {
//                        descripcion: "Llena todos los parámetros"
//                        , rawError: "Fallo en envío de parámetros"
//                        , url: "/crearRaza"
//                    }
//                });
//            }
//        }
//        else {
//            return res.view('vistas/Error', {
//                error: {
//                    descripcion: "Error en el uso del Método HTTP"
//                    , rawError: "HTTP Inválido"
//                    , url: "/crearRaza"
//                }
//            });
//        }
//    },
//    
//    borrarRaza: function (req, res) {
//        
//        var parametros = req.allParams();
//        
//        if (parametros.id) {
//            
//            Raza.destroy({
//                id: parametros.id
//            }).exec(function (errorInesperado, razaRemovida) {
//                
//                if (errorInesperado) {
//                    return res.view('vistas/Error', {
//                        error: {
//                            descripcion: "Tuvimos un Error Inesperado"
//                            , rawError: errorInesperado
//                            , url: "/ListarRazas"
//                        }
//                    });
//                }
//                
//                Raza.find().exec(function (err, razasEncontradas) {
//                    
//                    if (err) {
//                        res.view('vistas/Error', {
//                            error: {
//                                descripcion: "Hubo un problema cargando las razas"
//                                , rawError: error
//                                , url: "/ListarRazas"
//                            }
//                        });
//                    }
//                    res.view('vistas/Raza/ListarRazas', {
//                        usuarios: razasEncontradas
//                    });
//                })
//            })
//        }
//        else {
//            return res.view('vistas/Error', {
//                error: {
//                    descripcion: "Necesitamos el id para borrar la raza"
//                    , rawError: "No envía ID"
//                    , url: "/ListarRazas"
//                }
//            });
//        }
//    },
//    
//    editarRaza: function (req, res) {
//        
//        var parametros = req.allParams();
//        
//        if (parametros.idRaza && parametros.nombre) {
//                    
//            var razaEditar = {
//                nombre: parametros.nombre
//            }
//            
//            if(razaEditar.nombre = ""){
//                delete razaEditar.nombre
//            }
//            
//            Raza.update({
//                id: parametros.idRaza
//            }).exec(function (errorInesperado, razaRemovida) {
//                if (errorInesperado) {
//                    return res.view('vistas/Error', {
//                        error: {
//                            descripcion: "Tuvimos un Error Inesperado"
//                            , rawError: errorInesperado
//                            , url: "/ListarRazas"
//                        }
//                    });
//                }
//                
//                Raza.find().exec(function (errorIndefinido, razasEncontradas) {
//                    
//                    if (errorIndefinido) {
//                        res.view('vistas/Error', {
//                            error: {
//                                descripcion: "Hubo un problema cargando las razas"
//                                , rawError: error
//                                , url: "/ListarRazas"
//                            }
//                        });
//                    }
//                    res.view('vistas/Raza/ListarRazas', {
//                        usuarios: razasEncontradas
//                    });
//                })
//            })
//        }
//        else {
//            return res.view('vistas/Error', {
//                error: {
//                    descripcion: "Necesitamos que envíes el ID y el nombre"
//                    , rawError: "No envía parámetros"
//                    , url: "/ListarRazas"
//                }
//            });
//        }
//    }
};

