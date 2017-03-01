/**
 * Heroe.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
        nombre: {
            type: 'string',
            minLength:5,
            required: true
        },
        castillo: {
            type: 'string',
            minLength:5,
            required: true
        },
        nivel:{
          type:'integer',
          required:true
        },
        poderes: {
            collection: 'Poder',
            via: 'idHeroe'
        }
  }
};

