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
    * <a href="#libInfr">Librería vs Framework</a>
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

CSS o Cascading Style Sheets es un lenguaje de hojas de estilos creada para controlar el aspecto o presentacion de documentos, además de ser un mecanismo que describe como se va a mostrar un documento HTML en la pantalla, es decir, que les da estilos separando el contenido de la presentación. Cualquier cambio realizado sobre un elemento HTML, el CSS afectará a todas las páginas relacionadas al CSS modificado. (Fuente: [LibrosWeb](http://librosweb.es/libro/css/capitulo_1.html)).

<a href="#cabecera">A la cabecera</a>

<a name="estcss"></a>
### Estructura de CSS

<p align="center">
<img src="https://lenguajecss.com/p/css/introduccion/sintaxis-visual.png" width="200" height="100"></p>

CSS funciona a base de reglas, las que están compuestas por dos partes: *un selector y la declaración*, donde la declaración está compuesta a su vez por *la propiedad y el valor* que se le asigne. 

Ejemplo:

**h1{color: red;}**, donde.

- **h1** es el selector, indicando que todos los elementos *h1* se verán afectados por la declaración.
- **{color: red;}** es la declaración, la que está compuesta por:
    - *color:* es la propiedad
    - *red:* es el valor de dicha propiedad.

(Fuente: [w3c](http://www.w3c.es/Divulgacion/GuiasBreves/HojasEstilo)).

<a href="#cabecera">A la cabecera</a>

<a name="vent"></a>
### Ventajas

A continuación se dan algunas ventajas de CSS:
- Separación del contenido y la presentación.
- Flexibilidad ya que pueden ser cambiados en cualquier momento.
- Unificación del diseño de las páginas del sitio
- Optimización de los tiempos de carga y de tráfico en el servidor.
- Provee precisión o elasticidad
- Accesibilidad y estructuración
- Limpieza del código fuente
- Reutilización
- Compatibilidad y continuidad
- Estandarización frente a especificaciones propietarias
- Permite la diferenciación de estilos para ser visualizados en la pantalla
- La carga de páginas es mucho más rápida
(Fuente: [Maestros del Web](http://www.maestrosdelweb.com/usarcss/)).

<a href="#cabecera">A la cabecera</a>

<a name="libInfr"></a>
### Librería vs Framework

<p align="center">
<img src="http://i.stack.imgur.com/DqCkT.png" width="250" height="120"></p>

La librería es una colección de clases, la cual busca reutilizar el código; mientras que framework es una insfraestructura, en donde se definen sus características, permite además que el código sea mantenible y escalable. (Fuente: [Program Creek](http://www.programcreek.com/2011/09/what-is-the-difference-between-a-java-library-and-a-framework/)).

<a href="#cabecera">A la cabecera</a>

<a name="desarrollo"></a>
## Desarrollo de la Práctica

<a name="uso"></a>
### Uso de CSS

Un CSS puede ser aplicado a un documento HTML de dos maneras, las cuales son:
- Ubicando las etiquetas `<style>` dentro de las etiquetas `<head>` del documento.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/02-CSS/Informe/imagenes/estilos_dentro.png?raw=true" width="250" height="200"></p>

- Otra forma es mediante la creación de un archivo adicional, con la extensión **.css**. Para que este archivo pueda ser usado, es necesario colocar la etiqueta `<link>`dentro de la sección `<head>` del documento, en donde se debe indicar la ubicación del archivo css.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/02-CSS/Informe/imagenes/estilos_fuera.png?raw=true" width="300" height="150"></p>

Es posible incluir inlcuso varios links dentro de la sección `<head>` del documento.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/02-CSS/Informe/imagenes/varios_estilos.png?raw=true" width="350" height="150"></p>

En caso de incluir varias hojas de estilo en el mismo documento, las cuales afecten a la misma etiqueta con diferentes valores, el archivo HTML hará uso del valor que se encuentre en la última hoja de estilo.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/02-CSS/Informe/imagenes/estilo_ultimo.png?raw=true" width="400" height="200"></p>

<a href="#cabecera">A la cabecera</a>

<a name="tipos"></a>
### Formas de aplicar CSS

Un CSS puede ser aplicado de tres maneras, las cuales son:
- **Por etiqueta:** Es necesario especificar la etiqueta html sobre la cual se quiere colocar el estilo. Dentro de la etiqueta se debe colocar la propiedad a ser afectada junto con su valor. Por ejemplo: 
    - *propiedad:* background-color
    - *valor:* #5F9EA0. De preferencia, se debe colocar el código del color en lugar de su nombre.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/02-CSS/Informe/imagenes/etiqueta.png?raw=true" width="450" height="120"></p>

- **Por clase:** En este caso, es necesario colocar un nombre a la etiqueta denominado clase, para definirle un valor a dicha propiedad.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/02-CSS/Informe/imagenes/clase.png?raw=true" width="250" height="200"></p>

- **Por ID:** Para colocar un estilo por id, es necesario colocar el símbolo *#*, para idicar que es id, seguido de un nombre. Dentro del cual se debe colocar la propiedad y el valor.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/02-CSS/Informe/imagenes/id.png?raw=true" width="250" height="120"></p>

<a name="grid"></a>
### Uso de Grid con Bootstrap

Para hacer uso de Bootstrap, es necesario ingresar a la página de Bootstrap y buscar el link que hace referencia a sus estilos.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/02-CSS/Informe/imagenes/bootstrap.jpg?raw=true" width="520" height="150"></p>

- A continuación, se debe colocar el link copiado en la sección `<head>` del documento.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/02-CSS/Informe/imagenes/link.png?raw=true" width="500" height="140"></p>

Bootstrap hace uso de un grid, el cual cuenta con columnas que en total den 12. El tamaño de las columnas pueden ser definidas de 4 maneras, las cuales son:

- `col-md`: Para este tamaño, se crean tres columnas de un tamaño igual a 4.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/02-CSS/Informe/imagenes/col_md.png?raw=true" width="300" height="230"></p>

*Resultado:*

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/02-CSS/Informe/imagenes/resul_md.png?raw=true" width="400" height="70"></p>

- `col-sm`: Se crean cuatro columnas de un tamaño igual a 3.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/02-CSS/Informe/imagenes/col_sm.png?raw=true" width="350" height="270"></p>

*Resultado:*

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/02-CSS/Informe/imagenes/resul_sm.png?raw=true" width="350" height="80"></p>

- `col-lg`: Se crean dos columnas de un tamaño igual a 6.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/02-CSS/Informe/imagenes/col_lg.png?raw=true" width="300" height="180"></p>

*Resultado:*

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/02-CSS/Informe/imagenes/resul_lg.png?raw=true" width="450" height="70"></p>

- `col-xs`: Se crean dos columnas de un tamaño igual a 5 y una columna de un tamaño de 2.

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/02-CSS/Informe/imagenes/col_xs.png?raw=true" width="300" height="100"></p>

*Resultado:*

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/02-CSS/Informe/imagenes/resul_xs.png?raw=true" width="700" height="40"></p>

Al final se cuenta con la siguiente estructura:

<p align="center">
<img src="https://github.com/deidy/Javascript/blob/02-CSS/Informe/imagenes/resul_final.png?raw=true" width="450" height="260"></p>

<a href="#cabecera">A la cabecera</a>

<a name="concRecom"></a>
## Conclusiones y Recomendaciones

- CSS son hojas de estilo en los cuales se definen los estilos que serán aplicados a cada una de las etiquetas del documento HTML. Estos estilos pueden ser aplicados tanto dentro del mismo documento, así como haciendo referencia a un segundo documento, el cual será agregado al documento inicial o index.   
- Dado que CSS significa estilos en cascada, al momento de aplicar los estilos a un documento, este cogerá los estilos que fueron definidos en el último css añadido.
- Al momento de hacer uso de Bootstrap, se debe tener en cuenta que bootstrap tiene como estructura un grid, el cual está compuesto por doce columnas dentro de una fila, la cual puede ser dividida de cualquier manera, con la restricción de que al final las columnas sumen 12. Estas columnas se ajustan a la pantalla conforme esta cambie de tamaño.
- Hay que recordar que al momento de colocar los valores de cada propiedad dentro del archivo css, se debe colocar el código de cada color en lugar de su nombre, dado que no todos los navegadores reconocen el nombre de cada color.

<a href="#cabecera">A la cabecera</a>