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