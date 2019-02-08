# DES-CIFRA

DES-CIFRA es una web-app apara codificar mediante el [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher)
es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio
César lo usaba para enviar órdenes secretas a sus generales en los campos de
batalla.

![caeser-cipgher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es
un tipo de cifrado por sustitución, es decir que cada letra del texto original
es reemplazada por otra que se encuentra un número fijo de posiciones
(desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento de 3 posiciones:

* La letra A se cifra como D.
* La palabra CASA se cifra como FDVD.

## Propósito de la web-app y principales usuarios.
Está dirigido a adolescentes, con un propósito de entretenimiento, al codificar y decodificar mensajes que les parezcan importantes o deseen conservar privados.
Ya no tendrán la necesidad de crear un sistema para codificar, lo que les tomaría mucho tiempo.


## Proceso

Empezé escribiendo el código del archivo index.HTLM(era lo más facil para mi), desarrollé la estructura de la página, aquí había puesto la funcionalidad de los botone pero aprendí que todo lo que sea dinámico debe ir en Java Script, asi que sólo dejé los botones creados y pasé la funcionalidad al index.js; lo que me llevó a escribir el código de todos los botones y poner el enlace al cipher.js.

El código de cipher.js... hizo preguntarme si esto es para mí. Entendía el cómo debía funcionar pero me fue muy difícil plasmarlo en código, recrirrí a la ayuda de mis compañeras y me dejé guiar por una de ellas. Utilizé "for" para que la fórmula del cifrado se repitiera para cada palabra y para cada letra, considerando los espacios en blanco. Leí que lo de los espcios en blanco podría ser con un IF pero aun lo siento complejo , lo entiendo pero cuesta aplicarlo. 

Posteriormente me faltaba escribir en index.html la instrucción para que el resultado se viera reflejado; pensé que asi como se usa una input para algo que el usario va a ingresar, un output era para devolverle algo, pero lo finalmente no lo usé.

Hasta que tuve la certeza de que podría hacerlo considerando los espacios en blanco fue que decidí a quién iba dirigido o que funcionalidad tendría.

AL final escribí lo de style.css lo que me resulto sencillo.




