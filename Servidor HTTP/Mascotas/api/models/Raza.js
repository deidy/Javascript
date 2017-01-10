/**
 * Raza.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      nombre:{
          type: 'string',
          enum: ['Bulldog', 'Chihuahua', 'Pitbull'],
          required:true
      },
      //Mascotas -> es el nombre en plural del modeloa relacionar
      mascotas: {
          //Collection -> Nombre del modelo en Sails
      collection: 'mascota',
          //Vía -> es el campo por el cual vamos a relacionar FOREIGN KEY
      via: 'idRaza'
    }
  }
};