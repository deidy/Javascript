# CSS (Cascading Style Sheets)

### Materia: `Tecnologías Web con JavaScript`
<p align="center">
<img src="http://img.microsiervos.com/images2016/javascript_logo.png" width="300" height="200">
</p>
### Tema: `CSS (Cascading Style Sheets)` 
### Fecha: `2016-10-29`
### Estudiante: `Deidamia Patricia Quishpe Cumba`
### Profesor: `Tania Calle - Adrian Eguez`
### Número de informe: `2`

<a name="cabecera"></a>

## Índice de contenidos

- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marcoteorico">Marco Teórico</a>
    * <a href="#defcss">Definición de CSS</a>
    * <a href="#estcss">Estructura de CSS</a>
    * <a href="#vent">Ventajas</a>
    * <a href="#libInfr">Librería vs Infraestructura</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
    * <a href="#uso">Uso de CSS</a>
    * <a href="#tipos">Formas de aplicar CSS</a>
    * <a href="#grid">Uso de Grid con Bootstrap</a>
- <a href="#concRecom">Conclusiones y Recomendaciones</a>

<a name="tema"></a>
## Tema

`CSS (Cascading Style Sheets)`

<a name="objetivos"></a>
## Objetivos

- Aprender el uso de CSS. 
- Diferenciar Librería de Infraestructura.
- Conocer las diferentes formas de aplicar estilos a etiquetas HTML.

<a name="marcoteorico"></a>
## Marco Teórico

<a name="defcss"></a>
### Definición de CSS

<p align="center">
<img src="http://www.ciudadano2cero.com/wp-content/uploads/2014/09/aprender-css-basico-desde-cero.jpg?x46159" width="250" height="150"></p>

HTML . (Fuente: [Desarrollo Web](http://www.desarrolloweb.com/articulos/que-es-html.html)).

<a href="#cabecera">A la cabecera</a>

<a name="estcss"></a>
### Estructura de CSS

<p align="center">
<img src="https://lenguajecss.com/p/css/introduccion/sintaxis-visual.png" width="200" height="100"></p>

XML . (Fuente: [w3c](http://www.w3c.es/Divulgacion/GuiasBreves/TecnologiasXML)).

<a href="#cabecera">A la cabecera</a>

<a name="vent"></a>
### Ventajas

WWW . (Fuente: [Definición ABC](http://www.definicionabc.com/tecnologia/www.php)).

<a href="#cabecera">A la cabecera</a>

<a name="libInfr"></a>
### Librería vs Infraestructura

<p align="center">
<img src="http://www.dataversity.net/wp-content/uploads/sites/2/2013/12/w3c.jpg" width="200" height="150"></p>

El World . (Fuente: [W3C España](http://www.w3c.es/Consorcio/)).

La W3C se centra en cutro objetivos, los cuales son:
- Accesibilidad
- Seguridad
- Base de conocimiento
- Web sobre todo

<a href="#cabecera">A la cabecera</a>

<a name="navegador"></a>
### Definición de Navegador

<p align="center">
<img src="https://bloggea2post.com/wp-content/uploads/2014/05/Yahoo-Actualicen-Su-Navegador-o-Se-les-Cambiar%C3%A1-a-un-Mail-B%C3%A1sico.jpg" width="300" height="200"></p>

Un navegador .

Dentro de los navegadores más populares se tienen los siguientes:
- Google Chrome
- Mozilla Firefox
- Apple Safari
- Internet Explorer
- Opera

(Fuente: [C y L digital](http://www.cyldigital.es/articulo/que-es-un-navegador-de-internet))

<a href="#cabecera">A la cabecera</a>

<a name="desarrollo"></a>
## Desarrollo de la Práctica

<a name="uso"></a>
### Uso de CSS

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

<a name="tipos"></a>
### Formas de aplicar CSS

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

<a name="grid"></a>
### Uso de Grid con Bootstrap

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

<a name="concRecom"></a>
## Conclusiones y Recomendaciones

- La realización de la práctica .   
- Existen varios .
- Es importante .

<a href="#cabecera">A la cabecera</a>