/**
 * RutasController
 *
 * @description :: Server-side logic for managing Rutas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    home: function (req, res) {
        return res.view('vistas/home')
    },

    crearUsuario: function (req, res) {
        return res.view('vistas/Usuario/crearUsuario')
    },
    
    listarUsuarios: function (req, res) {
        
        Usuario.find()
            .exec(function(err, usuariosEncontrados){
            
            if(err){
                res.view('vistas/Error', {
                    error:{
                        descripcion: "Hubo un problema cargando los usuarios",
                        rawError: error,
                        url: "/ListarUsuarios"
                    }
                });
            }
            
            res.view('vistas/Usuario/ListarUsuarios', {
                usuarios: usuariosEncontrados
            });
            
        })
        
    },
    
    error: function (req, res) {
        return res.view('vistas/Error',{
            error:{
                descripcion: "Usted está por error en esta ruta, dirijase a Inicio",
                rawError: "Ruta Equivocada",
                url: "/Inicio"
            }
        })
    }

};