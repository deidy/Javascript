## Comandos Importantes

### Instalar sailsja

Sailsjs es un servidor web que se conecta a bases de daros y puede funcionar con aplicaciones en timepo real.

>npm install -g sails

El -g nos deja utilizarlo de manera global

### Crear un proyecto en Sailsjs

>sails new NombreProyecto

### Levantar el servidor

>sails lift

El sails les pide opciones sino estan definifas, las opciones son:

- 1: SAFE MODE no se va a alterar la base de datos
- 2: ALTER MODE se va a alterar la base de daros si nosotros hicimos cambios en los modelos por ejemplo
- 3: DELETE MODE borra todos los datos de la base y vuelve a crear los modelos.