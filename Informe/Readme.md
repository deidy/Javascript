# Sailsjs - Assets / Views / Pipeline / Controllers

### Materia: `Tecnologías Web con JavaScript`
<p align="center">
<img src="http://img.microsiervos.com/images2016/javascript_logo.png" width="300" height="200">
</p>
### Tema: `Sailsjs - Assets / Views / Pipeline / Controllers` 
### Fecha: `2017-01-05`
### Estudiante: `Deidamia Patricia Quishpe Cumba`
### Profesor: `Tania Calle - Adrian Eguez`
### Número de informe: `5`

<a name="cabecera"></a>

## Índice de contenidos

- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marcoteorico">Marco Teórico</a>
    * <a href="#sailsjs">Sailsjs</a>
    * <a href="#grunt">Grunt</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
    * <a href="#sails">Sailsjs</a>
- <a href="#concRecom">Conclusiones y Recomendaciones</a>

<a name="tema"></a>
## Tema

`Sailsjs - Assets / Views / Pipeline / Controllers`

<a name="objetivos"></a>
## Objetivos

- Instalar Sails js y crear proyectos.
- Modificar los diferentes archivos contenidos dentro de la carpeta del proyecto creado. 
- Comprobar los resultados obtenidos tras haber modificado los diferentes archivos para la configuración del proyecto.

<a name="marcoteorico"></a>
## Marco Teórico

<a name="sailsjs"></a>
### Sailsjs

<p align="center">
<img src="https://camo.githubusercontent.com/9e49073459ed4e0e2687b80eaf515d87b0da4a6b/687474703a2f2f62616c64657264617368792e6769746875622e696f2f7361696c732f696d616765732f6c6f676f2e706e67" width="200" height="80"></p>

Sails es un framework Javascript diseñado para ser similar a la arquitectura MVC. Facilita el proceso de creación de aplicaciones de Node.js, especialmente API, aplicaciones de una sola página y funciones en tiempo real, como el chat. (Fuente: [envatotuts+](https://code.tutsplus.com/tutorials/introduction-to-sailsjs--net-35390)).

<a href="#cabecera">A la cabecera</a>

<a name="grunt"></a>
### Grunt

<p align="center">
<img src="https://amsterdam.luminis.eu/wp-content/uploads/2014/12/grunt_logo.jpg" width="280" height="150"></p>

En la actualidad, Grunt crece a pasos agigantados, lo cual puede ser visto en los cientos de plugins que presenta, los que pueden ser elegidos para automatizar casi cualquier cosa con un mínimo esfuerzo. (Fuente: [GRUNT The JavaScript Task Runner](http://gruntjs.com/)).

<a href="#cabecera">A la cabecera</a>

<a name="desarrollo"></a>
## Desarrollo de la Práctica

<a name="sails"></a>
### Sailsjs

Se procede a instalar sails, lo cual se realiza mediante el siguiente comando `npm install -g sails`.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/11-Sails-02/Informe/Imagenes/img1.png?raw=true" width="350" height="180"></p>

Posteriormente, se procede a crear un nuevo proyecto, para lo cual se hace uso del siguiente comando `sails new NombreProyecto`.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/11-Sails-02/Informe/Imagenes/img2.png?raw=true" width="400" height="200"></p>

Una vez que el proyecto a sido creado, dentro del directorio en donde se encuentre, se creará una nueva carpeta con el nombre respectivo.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/11-Sails-02/Informe/Imagenes/img3.png?raw=true" width="150" height="350"></p>

Para iniciar el servidor, es necesario abrir una consola de windows, en donde se procede a ejecutar el siguiente comando `sails lift`, mostrando así el logotipo de sails indicando que el servidor está levantado.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/11-Sails-02/Informe/Imagenes/img4.png?raw=true" width="350" height="200"></p>

Dentro de la carpeta del proyecto creado, se encuentra la carpeta `assets`, el cual contiene toda la información relacionada al servidor web.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/11-Sails-02/Informe/Imagenes/img5.png?raw=true" width="100" height="120"></p>

Dentro de la carpeta `assets` se procede a crear una nueva, con el nombre `App`, y es aquí donde se deben introducir el código deseado.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/11-Sails-02/Informe/Imagenes/img6.png?raw=true" width="450" height="100"></p>

Dentro de la carpeta antes mencionada, se procede a crear los archivos: *app.js / estilos.css / index.html*.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/11-Sails-02/Informe/Imagenes/img7.png?raw=true" width="500" height="70"></p>

Una vez realizados estos cambios, se procede a iniciar nuevamente el servidor.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/11-Sails-02/Informe/Imagenes/img8.png?raw=true" width="500" height="270"></p>

Para comprobar que funcionan los archivos antes creados, en la URL de un navegador, se colocará la siguiente dirección `localhost:1337/app/index.html`. Se debe abrir una página web, la cual contenga las configuraciones colocadas en cada uno de los archivos creados.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/11-Sails-02/Informe/Imagenes/img9.png?raw=true" width="300" height="130"></p>

El servidor de sails, también cuenta con una carpeta denominada `.tmp`, en donde se copian todos los archivos que son creados en la carpeta `assets`. Esto es para mejorar la seguridad del servido.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/11-Sails-02/Informe/Imagenes/img10.png?raw=true" width="200" height="250"></p>

Sails también cuenta con una carpeta denominada `views`, la cual contiene a cada una de las vistas que será utilizadas durante el proyecto. Esta carpeta ya incluye unas vistas previas, como las que se muestran a continuación:

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/11-Sails-02/Informe/Imagenes/img11.png?raw=true" width="200" height="180"></p>

Sails también cuenta con una carpeta denominada `tasks`, en donde se encuentra la configuración del servidor.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/11-Sails-02/Informe/Imagenes/img12.png?raw=true" width="170" height="160"></p>

El siguiente código indica todos los estilos que serán utilizados a lo largo del proyecto. La sintaxis `styles/**/*.css` quiere decir que todos los archivos css definidos sean incluidos dentro del proyecto.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/11-Sails-02/Informe/Imagenes/img13.png?raw=true" width="200" height="80"></p>

El archivo previamente creado `estilos.css`, se lo debe copiar dentro de la carpeta **styles**. Al momento de cargar la página web, mostrará lo siguiente, lo que dependerá de las reglas colocados.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/11-Sails-02/Informe/Imagenes/img14.png?raw=true" width="700" height="300"></p>

Dentro de la carpeta **styles**, se procede a crear un nuevo archivo denominado `estilos2.css`.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/11-Sails-02/Informe/Imagenes/img15.png?raw=true" width="180" height="150"></p>

Dentro del archivo de configuración, si no se especifica que archivo `css` va a ser utilizado, el servidor usa el último creado.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/11-Sails-02/Informe/Imagenes/img16.png?raw=true" width="700" height="350"></p>

Para solo hacer uso de un `css` especificado, en el archivo de configuración se debe colocar lo siguiente: `styles/estilos2.css`.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/11-Sails-02/Informe/Imagenes/img17.png?raw=true" width="200" height="80"></p>

Para hacer uso de los archivos `js`, dentro de configuración se deben colocar todos los archivos `.js` que serán utilizados en el proyecto.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/11-Sails-02/Informe/Imagenes/img18.png?raw=true" width="400" height="200"></p>

Dentro del archivo `homepage.ejs` es donde se coloca todo el contenido cargado en la mitad de las páginas web, a continuación se muestra un ejemplo de lo que puede contener.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/11-Sails-02/Informe/Imagenes/img19.png?raw=true" width="400" height="220"></p>

Se debe volver a cargar la página web, lo que mostrará lo siguiente. Como se puede ver, se puede diferenciar al homepage de la página principal.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/11-Sails-02/Informe/Imagenes/img20.png?raw=true" width="400" height="280"></p>

Dentro de la carpeta de configuración se encuentra el archivo `routes.js`, el cual contiene todas las rutas.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/11-Sails-02/Informe/Imagenes/img21.png?raw=true" width="150" height="420"></p>

Se abre el archivo anterior y es aquí donde se colocan cada una de las diferentes rutas para el proyecto.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/11-Sails-02/Informe/Imagenes/img22.png?raw=true" width="150" height="200"></p>

Todas las vistas que serán utilizadas en el proyecto, deben ser colocadas dentro de la carpeta `views`, como se muestra a continuación.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/11-Sails-02/Informe/Imagenes/img23.png?raw=true" width="150" height="200"></p>

Cada vez que se hagan cambios en el servidor (modelos, controles - carpeta de configuración), es necesario reiniciar el servidor.

En la URL del navegador, se coloca la nueva ruta definida previamente, dando como resultado la siguiente interfaz.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/11-Sails-02/Informe/Imagenes/img24.png?raw=true" width="300" height="230"></p>

**Controlador**

Para generar un controlador, primero es necesario abrir una nueva consola de windows, en donde se ejecutará el siguiente comando `sails generate controller nombreControlador`.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/11-Sails-02/Informe/Imagenes/img25.png?raw=true" width="500" height="60"></p>

A continuación, se procede a modificar el archivo de configuración del controlador, como se muestra a continuación.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/11-Sails-02/Informe/Imagenes/img26.png?raw=true" width="230" height="180"></p>

Para probar los cambios realizados en el controlador, en el navegador se debe colocar la siguiente URL: `localhost:1337/nombreControlador/nombreFuncion`.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/11-Sails-02/Informe/Imagenes/img27.png?raw=true" width="300" height="100"></p>

Para la respuesta, es necesario modificar el archivo para que este de como respuesta un objeto `json`.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/11-Sails-02/Informe/Imagenes/img28.png?raw=true" width="250" height="350"></p>

<a href="#cabecera">A la cabecera</a>

<a name="concRecom"></a>
## Conclusiones y Recomendaciones

- El servidor Sails js actúa de manera similar a la arquitectura MVC, pero facilitando la creación de aplicaciones realizadas en Node.js.   
- El servidor Sails js cuenta con varias carpetas, las cuales ayudan a la configuración del proyecto, como es el caso de las vistas, las rutas, los estilos, enter otros. Este servidor cuenta adicionalmente con un servidor propio el cual se encuentra dentro de la carpeta `assets`.
- El servidor Sails js hace uso de Grunt, el cual contiene una gran variedad de paquetes, los cuales son elegidos por cada usuario de acuerdo a sus necesidades, los cuales le ayudarán a la automatizar las actividades a realizar.

<a href="#cabecera">A la cabecera</a>