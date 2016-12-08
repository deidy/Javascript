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

**Ejemplo**

Dentro de la carpeta creada, se debe crear un archivo con el nombre que fue especificado durante la configuración, en este caso es *index.js*. El archivo contiene un código como ejemplo, a este código modificarlo en la URL y en el mensaje de retorno.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/03-bootstrap/Informe/Imagenes/kbd.png?raw=true" width="450" height="150"></p>

Se guardan las modificaciones realizadas y se procede a ejecutarlo en la consola de comandos con: `node [nombre_aplicacion]`.
- Como se puede ver, en la consola se muestra el mensaje colocado en el código anterior

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/03-bootstrap/Informe/Imagenes/kbd.png?raw=true" width="450" height="150"></p>

- Mientras que en el navegador, al ingresar la URL y el puerto especificado, devuelve el valor colocado dentro de *res*.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/03-bootstrap/Informe/Imagenes/kbd.png?raw=true" width="450" height="150"></p>

<a href="#cabecera">A la cabecera</a>

<a name="metodos"></a>
### Métodos HTTP

Se define una variable denominada puerto dentro del código, lo cual permite que el valor pueda ser referenciado y no quemado.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/03-bootstrap/Informe/Imagenes/table.png?raw=true" width="500" height="180"></p>

El método *listen* permite definir el puerto mediante el cual escuchará el servidor.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/03-bootstrap/Informe/Imagenes/mas_tablas.png?raw=true" width="580" height="170"></p>

Se pueden configurar los parámetros de la cabecera mediante el comando append dentro el método post.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/03-bootstrap/Informe/Imagenes/class_tr.png?raw=true" width="700" height="350"></p>

Con ayuda de la herramienta Postman, se obtiene lo siguiente:

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/03-bootstrap/Informe/Imagenes/class_tr.png?raw=true" width="700" height="350"></p>

**Ejemplo**

Se crea un arreglo con varios objetos, los cuales serán ejecutados con los métodos http.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/03-bootstrap/Informe/Imagenes/class_tr.png?raw=true" width="700" height="350"></p>

Para buscar todos los datos del arreglo, se hace uso del método `get`. Para la respuesta se hace uso del parámetro `res` mediante la opción `json`, con lo que se obtendrá un objeto json.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/03-bootstrap/Informe/Imagenes/class_tr.png?raw=true" width="700" height="350"></p>

Como resultado se obtiene lo siguiente:

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/03-bootstrap/Informe/Imagenes/class_tr.png?raw=true" width="700" height="350"></p>

Para buscar solo un objeto, se hace uso del método `get` y en la URL se debe enviar el id del valor a buscar. 

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/03-bootstrap/Informe/Imagenes/class_tr.png?raw=true" width="700" height="350"></p>

Como resultado se se obtiene lo siguiente:

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/03-bootstrap/Informe/Imagenes/class_tr.png?raw=true" width="700" height="350"></p>

Para crear un nuevo registro, se hace uso del método `post`. Dentro del método se establecen los valores del nuevo Usuario, los que serán añadidos por el método `push`.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/03-bootstrap/Informe/Imagenes/class_tr.png?raw=true" width="700" height="350"></p>

Como resultado se se obtiene lo siguiente:

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/03-bootstrap/Informe/Imagenes/class_tr.png?raw=true" width="700" height="350"></p>

<a href="#cabecera">A la cabecera</a>

<a name="concRecom"></a>
## Conclusiones y Recomendaciones

- Node Js es un servidor que permite instalar aplicaciones mediante un gestor de paquetes denominado npm, el cual es ejecutado desde la línea de comandos. Este gestor de paquetes permite manejar las dependencias y librerías de las aplicaciones.
- Se hizo uso de la herramienta Express Js, dentro de la cual se realizaron ejemplos haciendo uso de los diferentes métodos http, como get y post, para realizar la búsqueda y creación de registros.
- Todos los métodos http, hacen uso de parámetros como req y res, los cuales permiten tanto la recepción como el envío de datos al servidor. Estos parámetros son usados en cada uno de los métodos http utilizados para este laboratorio.

<a href="#cabecera">A la cabecera</a>