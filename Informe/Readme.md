# Introducción a la Web

### Materia: `Tecnologías Web con JavaScript`
<p align="center">
<img src="http://img.microsiervos.com/images2016/javascript_logo.png" width="300" height="200">
</p>
### Tema: `Introducción a la Web` 
### Fecha: `2016-11-07`
### Estudiante: `Deidamia Patricia Quishpe Cumba`
### Profesor: `Tania Calle - Adrian Eguez`
### Número de informe: `3`

<a name="cabecera"></a>

## Índice de contenidos

- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marcoteorico">Marco Teórico</a>
    * <a href="#disenio">Diseño Web</a>
    * <a href="#calidad">Calidad Web</a>
    * <a href="#validacion">Validación Web</a>
    * <a href="#seo">seo: "Search Engine Optimization"</a>
    * <a href="#bootstrap">Bootstrap</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
    * <a href="#boots">Bootstrap</a>
    * <a href="#etiquetas">Etiquetas</a>
    * <a href="#tablas">Tablas</a>
    * <a href="#formularios">Formularios</a>
- <a href="#concRecom">Conclusiones y Recomendaciones</a>

<a name="tema"></a>
## Tema

`Introducción a la Web`

<a name="objetivos"></a>
## Objetivos

- Conocer definiciones relacionadas con el diseño web.
- Aprender el uso de Bootstrap. 
- Aprender como aplicar etiquetas, tablas, formularios, para la creación de páginas web.

<a name="marcoteorico"></a>
## Marco Teórico

<a name="disenio"></a>
### Diseño Web

<p align="center">
<img src="http://2xmil.es/wp-content/uploads/2015/12/dise%C3%B1o-web-responsive.jpg" width="320" height="150"></p>

El diseño web es una actividad que consiste en la planificación, diseño e implementación de sitios web.  Un diseñador web tiene que ver con cómo crear y desarrollar un pagina web así también como los clientes interactúan con ella. Requiere tener en cuenta la navegabilidad, interactividad, usabilidad, arquitectura de la información y la interacción de medios como el audio, texto, imagen, enlaces y vídeo. (Fuente: [Web Design and more](https://webdesignerandmore.wordpress.com/2012/09/25/que-es-diseno-web/)).

<a href="#cabecera">A la cabecera</a>

<a name="calidad"></a>
### Calidad Web

<p align="center">
<img src="https://siteimprove.com/wp-content/uploads/2015/10/quality_assurance.png" width="180" height="150"></p>

Para que una página web sea de calidad, debe cumplir con las siguientes características:
- **Uso de HTML5:** mediante el uso de la etiqueta `<!DOSTYPE>`.
- **Uso de archivos CSS separados:** permite el cambio de estilos en elementos sin tener que reescribir el código HTML.
- **Validación Web:** el cual devuelve los errores encontrados de acuerdo al estándar.
- **Título:** es aquel que describe el contenido de la página web.
- **Encabezados:** es usado para describir el encabezado principal de la página web.
- **Conjunto de caracteres:** todos los estándares definen un conjunto de caracteres denominados Unicode.
- **Formato de fecha:** La ISO define un formato internacional para fechas como `yyyy-mm-dd`.
(Fuente: [w3schools](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/website/web_quality.asp.html)).

<a href="#cabecera">A la cabecera</a>

<a name="validacion"></a>
### Validación Web"

<p align="center">
<img src="http://1stwdcdn-31d9.kxcdn.com/wp-content/uploads/2011/03/validator.w3.jpg" width="300" height="150"></p>

Un validador es un software que puede comprobar que las páginas web cumplan con los etándares web. Cuando se usa un validador para comprobar HTML, XHTML o documentos CSS, el validador retorna una lista de errores encontrados de acuerdo al estándar. (Fuente: [w3schools](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/website/web_validate.asp.html)).

<a href="#cabecera">A la cabecera</a>

<a name="seo"></a>
### seo: "Search Engine Optimization"

<p align="center">
<img src="http://www.blogesfera.com/wp-content/uploads/2015/02/seo-2.jpg" width="230" height="150"></p>

Search Engine Optimization o SEO es el proceso para mejorar la clasificación o visibilidad de un sitio web en los motores de búsqueda. La optimización para un sitio web es el uso de palabras clave relevantes para el sitio.  Las tácticas SEO deben ser incorporadas en el desarrollo de sitios web, especialmente en los menús y la estructura de navegación.(Fuente: [w3schools](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/website/web_search.asp.html)).

<a href="#cabecera">A la cabecera</a>

<a name="bootstrap"></a>
### Bootstrap

<p align="center">
<img src="http://txtbits.com/wp-content/uploads/2015/07/bootstrap.png" width="250" height="200"></p>

Bootstrap es un framework para HTML, CSS y JavaScript, para el desarrollo responsive de sitios web. Bootstrap hace el desarrollo del front-end más rápido y fácil; además de ser hecho para gente de todos los niveles de habilidad, dispositivos de todas las formas y proyectos de todos los tamaños. (Fuente: [Bootstrap](http://getbootstrap.com/))

<a href="#cabecera">A la cabecera</a>

<a name="desarrollo"></a>
## Desarrollo de la Práctica

<a name="postman"></a>
### Uso de la herramienta Postman

La herramienta **Postman**, puede ser descargada como una extensión de Google Chrome, el cual permite realizar peticiones a una página especificada, mostrando los valores que son devueltos. A continuación se muestra la pantalla inicial de Postman.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/master/Informes/Informe_1/imagenes/inicio_postman.png?raw=true" width="500" height="250"></p>

Postman permite escoger el método que se quiere usar para realizar la petición, dentro de los cuales se encuentran los siguientes: *get, post, put, entre otros*; pero para este caso el método a ser elegido será **get**.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/master/Informes/Informe_1/imagenes/metodo_get.png?raw=true" width="500" height="200"></p>

A continuación se escoge una página a la cual se le quiere realizar las peticiones, en este caso se escogió a la página de **google.com.ec**; tras lo cual se da click sobre el botón **Send**.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/master/Informes/Informe_1/imagenes/google.png?raw=true" width="450" height="150"></p>

Tras haber enviado las peticiones, Postman mostrará los resultados obtenidos, es decir, que muestra la información necesaria para dicho método.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/master/Informes/Informe_1/imagenes/resultados_get.png?raw=true" width="500" height="350"></p>

<a href="#cabecera">A la cabecera</a>

<a name="inspector"></a>
### Uso de Inspector

Inspector o Inspeccionar es una opción que presentan los navegadores, con la finalidad de poder ver cada uno de los elementos que contiene una determinada página web. Para poder ver dichos elementos, se debe hacer clic derecho sobre la página ingresada y seleccionar la opción **Inspeccionar**.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/master/Informes/Informe_1/imagenes/inspeccionar_google.png?raw=true" width="400" height="150"></p>

En la siguiente imagen se puede ver todos los elementos que han sido encontrados en la página web, se puede ver incluso su estructura.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/master/Informes/Informe_1/imagenes/elementos_google.png?raw=true" width="500" height="300"></p>

Se puede incluso ir a la opción **Network**, en el cual se puede ver información general de la página, como la siguiente:
- *Request URL:* el cual indica a que URL se está realizando la petición.
- *Request Method:* indica el método usado para realizar la petición, en este caso será **GET**.
- *Status Code:* indica un código de estado, en este caso es el 200, el cual indica que está correcto.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/master/Informes/Informe_1/imagenes/red_google.png?raw=true" width="500" height="250"></p>

Dentro de los elementos de la página web, se encuentran los estilos que se pueden aplicar. Es aquí donde se puede agregar más estilos, como el cambio de color del fondo. Los cambios que son realizados sobre Inspeccionar, no son guardados en el documento original.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/master/Informes/Informe_1/imagenes/cambio_color.png?raw=true" width="500" height="250"></p>

<a href="#cabecera">A la cabecera</a>

<a name="etiquetas"></a>
### Etiquetas HTML

- *<!DOCTYPE html>:* especifica que el documento es HTML 5.

- *html:* representa la raíz del documento HTML, se indica el lenguaje del documento.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/master/Informes/Informe_1/imagenes/html.png?raw=true" width="300" height="180"></p>

- *head:* representa a todos los metadatos incluyendo enlaces, script, hojas de estilo. 
- *body:* representa el contenido principal del documento, es decir, que muestra al usuario.
- *meta:* define los metadatos que pueden ser definidos.
- *title:* define el título del documento.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/master/Informes/Informe_1/imagenes/estructura.png?raw=true" width="300" height="180"></p>

- *h1, h2, h3, h4, h5, h6:* Son elementos de cabecera, donde **h1** es el mayor, mientras que **h6** es el menor. 

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/master/Informes/Informe_1/imagenes/hs.png?raw=true" width="300" height="150"></p>

- *img:* representa a una imagen, en donde se colocan atributos como: src, alt, height, width.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/master/Informes/Informe_1/imagenes/img.png?raw=true" width="400" height="200"></p>

- *href:* esta etiqueta es usada para colocar enlaces con documentos o imágenes.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/master/Informes/Informe_1/imagenes/href.png?raw=true" width="350" height="100"></p>

- *p:* define una parte que se mostrará como un párrafo.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/master/Informes/Informe_1/imagenes/parrafo.png?raw=true" width="400" height="180"></p>

- *ul:* define una lista no ordenada
- *li:* define un artículo de la lista enumerada.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/master/Informes/Informe_1/imagenes/ordenadasNo.png?raw=true" width="250" height="120"></p>

- *ol:* define una lista ordenada.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/master/Informes/Informe_1/imagenes/ordenadasEnumeradas.png?raw=true" width="250" height="120"></p>

<a href="#cabecera">A la cabecera</a>

<a name="xmlprac"></a>
### Ejemplo de XML

XML al ser un lenguaje de marcado, hace uso de etiquetas, las cuales son representadas de la siguiente manera (Ver figura). Las etiquetas que han sido abiertas, siempre deben ser cerradas.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/master/Informes/Informe_1/imagenes/etiquetas_xml.png?raw=true" width="400" height="180"></p>

XML no solo cuenta con etiquetas, sino que permite el ingreso de atributos dentro de cada etiqueta, como se muestra a continuación.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/master/Informes/Informe_1/imagenes/atributos_xml.png?raw=true" width="400" height="180"></p>

<a href="#cabecera">A la cabecera</a>

<a name="servidor"></a>
### Instalación del Servidor Local HTTP

En Windows para poder instalar un servidor de manera local, se procede a ejecutar el siguiente comando: **npm install http-server**

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/master/Informes/Informe_1/imagenes/install_local.png?raw=true" width="300" height="200"></p>

Mientras que para instalarlo de manera global, se hace uso del siguiente comando: **npm install http-server -g**

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/master/Informes/Informe_1/imagenes/install_global.png?raw=true" width="300" height="350"></p>

A continuación se procede a iniciar el servidor mediante el comando: **http-server**

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/master/Informes/Informe_1/imagenes/start_server.png?raw=true" width="300" height="200"></p>

<a href="#cabecera">A la cabecera</a>

<a name="concRecom"></a>
## Conclusiones y Recomendaciones

- La realización de la práctica permitió familiarizarse con las diferentes etiquetas que HTML usa, tanto en su escritura como para qué se usan, con la finalidad de que al momento de escribir un documento HTML, sea mucho más rápido y fácil.   
- Existen varios tipos de navegadores, los cuales permiten buscar todo tipo de información, la que a su vez puede ser transmitida. Todo navegador tiene páginas web, las cuales están desarrolladas siguiendo el lenguaje de marcado o HTML.
- Es importante que cuando se use el lenguaje de marcado, al momento de abrir una etiqueta, siempre se la debe cerrar. Además de conocer que cada etiqueta puede contener varios atributos, los cuales permiten modificarla.

<a href="#cabecera">A la cabecera</a>