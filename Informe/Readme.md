# NPM

### Materia: `Tecnologías Web con JavaScript`
<p align="center">
<img src="http://img.microsiervos.com/images2016/javascript_logo.png" width="300" height="200">
</p>
### Tema: `NPM` 
### Fecha: `2016-12-08`
### Estudiante: `Deidamia Patricia Quishpe Cumba`
### Profesor: `Tania Calle - Adrian Eguez`
### Número de informe: `4`

<a name="cabecera"></a>

## Índice de contenidos

- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marcoteorico">Marco Teórico</a>
    * <a href="#npm">NPM</a>
    * <a href="#node">Node JS</a>
    * <a href="#express">Express JS</a>
    * <a href="#metodos">Métodos HTTP</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
    * <a href="#npm">NPM</a>
    * <a href="#express">Instalar Express JS</a>
    * <a href="#metodos">Métodos HTTP</a>
- <a href="#concRecom">Conclusiones y Recomendaciones</a>

<a name="tema"></a>
## Tema

`Diseño Web`

<a name="objetivos"></a>
## Objetivos

- Instalar la herramienta Node JS y Express JS además de ver su funcionamiento. 
- Ejemplificar el uso de las herramientas instaladas.
- Hacer uso de los métodos HTTP, para las peticiones realizadas.

<a name="marcoteorico"></a>
## Marco Teórico

<a name="npm"></a>
### NPM

<p align="center">
<img src="https://partners.npmjs.com/weekly/weekly32/weekly-header-grace-hopper.png" width="320" height="150"></p>

NPM es un gestor de paquetes para Javascript, el cual es ejecutado desde la línea de comandos, además de manejar las dependencias y librerías de una aplicación. (Fuente: [NPM](https://www.npmjs.com/)).

<a href="#cabecera">A la cabecera</a>

<a name="node"></a>
### Node JS

<p align="center">
<img src="http://thisdavej.com/wp-content/uploads/2016/02/nodejs-logo.png" width="230" height="150"></p>

Node Js es un entorno de ejecución para Javascript construido con el motor de JavaScript V8 de Chrome. Node.js usa un modelo de operaciones E/S sin bloqueo y orientado a eventos, que lo hace liviano y eficiente. El ecosistema de paquetes de Node.js, npm, es el ecosistema mas grande de librerías de código abierto en el mundo.
(Fuente: [nodejs](https://nodejs.org/es/)).

<a href="#cabecera">A la cabecera</a>

<a name="express"></a>
### Express JS

<p align="center">
<img src="http://i66.tinypic.com/x3ctoy.jpg" width="300" height="200"></p>

Express es una infraestructura de aplicaciones web Node.js mínima y flexible que proporciona un conjunto sólido de características para las aplicaciones web y móviles. (Fuente: [Express](http://expressjs.com/es/)).

<a href="#cabecera">A la cabecera</a>

<a name="metodos"></a>
### Métodos HTTP

HTTP define una serie predefinida de métodos de petición (algunas veces referido como "verbos") que pueden utilizarse. El protocolo tiene flexibilidad para ir añadiendo nuevos métodos y para así añadir nuevas funcionalidades.
Dentro de los métodos HTTP, se encuentran los siguientes:
- *GET:* Se usa para obtener información del servidor.
- *POST:* Es el encargado de crear un nuevo recurso y, por consiguiente, modificar el estado del servidor.
- *PUT:* Es usado cuando se quiere actualizar un archivo que ha sido subido al servidor.
- *DELETE:* Es usado para borrar un recurso del servidor.
- *HEAD:* Se usa para obtener la cabecera de respuesta que devuelve el servidor al hacer una petición sobre éste.
- *OPTIONS:* Este método se usa para saber que otros métodos HTTP están disponibles.

(Fuente: [Otro Espacio Blog](https://otroespacioblog.wordpress.com/2013/05/22/conoce-un-poco-sobre-los-metodos-http-en-rest/)).

<a href="#cabecera">A la cabecera</a>

<a name="desarrollo"></a>
## Desarrollo de la Práctica

<a name="npm"></a>
### NPM

Abrir una consola de comandos y ejecutar node.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/03-bootstrap/Informe/Imagenes/download_bootstrap.png?raw=true" width="400" height="200"></p>

Se crea el archivo package.json, con el comando npm init; es aquí donde se indica el nombre del archivo, la descripción, usuario, entre otros.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/03-bootstrap/Informe/Imagenes/formas_descargar.png?raw=true" width="500" height="200"></p>

Para ingresar a npm, se debe introducir las credenciales que se crearon en la página web de npm.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/03-bootstrap/Informe/Imagenes/uso_bootstrap.png?raw=true" width="500" height="200"></p>

Ubicarse en la carpeta en donde se encuentra el paquete json, y publicarlo.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/03-bootstrap/Informe/Imagenes/anadir_bootstrap.png?raw=true" width="450" height="130"></p>

Una vez publicado, se instala el paquete dentro de la carpeta en donde se lo baya a usar.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/03-bootstrap/Informe/Imagenes/anadir_bootstrap.png?raw=true" width="450" height="130"></p>

Para utilizar el paquete instalado, es necesario hacer uso de la funcion `require()`, en donde se coloca el nombre de dicho paquete.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/03-bootstrap/Informe/Imagenes/anadir_bootstrap.png?raw=true" width="450" height="130"></p>

En la carpeta donde se instaló el paquete, se crea una nueva carpeta que contrendrá las clases descargadas.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/03-bootstrap/Informe/Imagenes/anadir_bootstrap.png?raw=true" width="450" height="130"></p>

Para ejecutar el programa, se abre una consola de comandos y se ejecuta `node [nombre_aplicacion]`.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/03-bootstrap/Informe/Imagenes/anadir_bootstrap.png?raw=true" width="450" height="130"></p>

<a href="#cabecera">A la cabecera</a>

<a name="express"></a>
### Instalar Express JS

Se crea un directorio en donde se va a ubicar la aplicación.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/03-bootstrap/Informe/Imagenes/small.png?raw=true" width="450" height="50"></p>

Se crea el archivo package.json utilizando el comando npm init.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/03-bootstrap/Informe/Imagenes/code.png?raw=true" width="500" height="80"></p>

En la consola de comando se mostrarán algunos parámetros que pueden ser modificados, como el nombre del archivo principal de la aplicación, la versión, el autor, entre otros.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/03-bootstrap/Informe/Imagenes/kbd.png?raw=true" width="450" height="150"></p>

Se intalla Express en el directorio creado y se guarda la lista de dependencias.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/03-bootstrap/Informe/Imagenes/kbd.png?raw=true" width="450" height="150"></p>

Se puede instalar el servidor Express de forma temporal sin añadir la lista de dependecias omitiendo la opcion `--save`.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/03-bootstrap/Informe/Imagenes/kbd.png?raw=true" width="450" height="150"></p>

**Ejemplo**

Dentro de la carpeta creada, se debe crear un archivo con el nombre que fue especificado durante la configuración, en este caso es *index.js*. El archivo contiene un código como ejemplo, a este código modificarlo en la URL y en el mensaje de retorno.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/03-bootstrap/Informe/Imagenes/kbd.png?raw=true" width="450" height="150"></p>

Se guardan las modificaciones realizadas y se procede a ejecutarlo en la consola de comandos con: `node [nombre_aplicacion]`.
- Como se puede ver, en la consola se muestra el mensaje colocado en el código anterior

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/03-bootstrap/Informe/Imagenes/kbd.png?raw=true" width="450" height="150"></p>

- Como se puede ver, en la consola se muestra el mensaje colocado en el código anterior

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/03-bootstrap/Informe/Imagenes/kbd.png?raw=true" width="450" height="150"></p>

<a href="#cabecera">A la cabecera</a>

<a name="metodos"></a>
### Métodos HTTP

Existen varias clases que pueden ser aplicadas a las tablas, por ejemplo la clase `table`, haciendo una tabla básica.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/03-bootstrap/Informe/Imagenes/table.png?raw=true" width="500" height="180"></p>

Adicionalmente existen otros tipos de clases para las tablas, entre los cuales se tienen los siguientes:
- table table-striped
- table table-condensed
- table table-bordered

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/03-bootstrap/Informe/Imagenes/mas_tablas.png?raw=true" width="580" height="170"></p>

Dentro de cada fila de la tabla, se puede colocar colores, mediante el uso de estados como son los siguientes:
- active
- success
- info
- warning
- danger

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/03-bootstrap/Informe/Imagenes/class_tr.png?raw=true" width="700" height="350"></p>

<a href="#cabecera">A la cabecera</a>

<a name="concRecom"></a>
## Conclusiones y Recomendaciones

- Al momento de realizar una página web, se debe tomar en cuenta las definiciones antes vistas, como es el caso de calidad web, en donde se dan características con las cuales debe contar un sitio web; así como es importante validar la página web construida, para lo cual se debe hacer uso de diferentes herramientas.   
- Bootstrap es un framework que permite el desarrollo de páginas web responsive para que puedan ser adaptados a todo tipo de pantallas, los cuales pueden ser realizados de manera rápida y fácil.
- Bootstrap permite adicionalmente la creación de tablas y formularios, los cuales cuentan con características propias que permiten adaptarlo a las necesidades de cada desarrollador.

<a href="#cabecera">A la cabecera</a>