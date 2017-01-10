/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing Usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    crearUsuario: function (req, res) {
        //Se accede así: /Usuario/crearUsuario 

        //Guardando todos los parametros en la variable paramentros
        var parametros = req.allParams();

        console.log(parametros);

        if (req.method == 'POST') {

            if (parametros.nombres && parametros.apellidos) {

                //crear el usuario
                Usuario.create({
                    nombres: parametros.nombres,
                    apellidos: parametros.apellidos,
                    correo: parametros.correo
                }).exec(function (err, usuarioCreado) {
                    if (err) {
                        return res.serverError();
                    }

                    sails.log.info(usuarioCreado);

                    return res.ok(usuarioCreado);
                });

            } else {

                //error - bad Request

                return res.badRequest('No envía todos los parámetros');

            }

        } else {
            return res.badRequest('Método Inválido');
        }



    }
};