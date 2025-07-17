import { useState } from 'react';
import './App.css';
// Importo el logo
import logo from './assets/logo.jpg';

const preguntas = [
  // Matemáticas (reales)
  {
    materia: 'Matemáticas',
    texto: 'El siguiente intervalo mostrado en la recta numérica corresponde a los números reales',
    opciones: [
      'mayores que -2 y menores o iguales a 8.',
      'mayores o iguales a -2 y menores que 8.',
      'mayores que -2 y menores que 8.',
      'menores que -2 y mayores que 8.'
    ],
    respuesta: 0,
    requiereImagen: true,
    imagen: 'matematicas_1.png'
  },
  {
    materia: 'Matemáticas',
    texto: 'En un túnel vehicular, por razones de seguridad, se determina que la velocidad de circulación promedio debe ser de 18 metros por segundo, de modo que los vehículos que avancen con velocidades de 5 m/s por debajo o por encima de la velocidad promedio pueden ser multados. Teniendo en cuenta las condiciones de circulación en el túnel, el intervalo que representa los metros que puede avanzar un vehículo en un minuto sin ser multado es',
    opciones: [
      '[780,1380]',
      '[0,1080]',
      '(780, 1380)',
      '(0, 1080)'
    ],
    respuesta: 0
  },
  {
    materia: 'Matemáticas',
    texto: 'Una persona parte desde su casa y hace los siguientes recorridos: 5 cuadras al este, 3 al sur, 2 al este, 4 al norte, 5 al oeste, 1 al sur y 1 al oeste. Después de los recorridos mencionados, la ubicación final de la persona con respecto a su casa es',
    opciones: [
      'el mismo punto de partida.',
      '2 cuadras al sur y 1 al este.',
      '3 cuadras al norte y 2 al este.',
      '1 cuadra al este.'
    ],
    respuesta: 3
  },
  {
    materia: 'Matemáticas',
    texto: 'Si la planta está ubicada en la esquina de la galería en la cual se establece el centro del sistema cartesiano, una posible coordenada para la fotografía donde aparece la imagen del corazón es',
    opciones: [
      '(0, 1, 6)',
      '(2, 1, 0)',
      '(6, 1, 0)',
      '(2, 1, 3)'
    ],
    respuesta: 2,
    requiereImagen: true,
    imagen: 'matematicas_2.png'
  },
  {
    materia: 'Matemáticas',
    texto: 'De acuerdo con la información, es válido afirmar que la altura del dispositivo, después de ser lanzado, es',
    opciones: [
      'mayor a los 15 segundos que a los 10 segundos.',
      'igual a los 10 segundos que a los 20 segundos.',
      'menor a los 10 segundos que a los 20 segundos.',
      'igual a los 5 segundos que a los 15 segundos.'
    ],
    respuesta: 3,
    requiereImagen: true,
    imagen: 'matematicas_3.png'
  },
  {
    materia: 'Matemáticas',
    texto: 'De acuerdo con la información planteada, el tiempo necesario para que el dispositivo caiga a tierra es',
    opciones: [
      '20 segundos.',
      '15 segundos.',
      '10 segundos.',
      '5 segundos.'
    ],
    respuesta: 0,
    requiereImagen: true,
    imagen: 'matematicas_3.png'
  },
  {
    materia: 'Matemáticas',
    texto: 'Para un segundo dispositivo, su altura en función del tiempo viene dada por la expresión a(t) = -t² + 30t, al compararlo con el primer dispositivo se observa que el segundo',
    opciones: [
      'tarda menos tiempo en caer.',
      'alcanza una altura menor.',
      'alcanza una altura mayor.',
      'tarda igual tiempo en caer.'
    ],
    respuesta: 2,
    requiereImagen: true,
    imagen: 'matematicas_3.png'
  },
  {
    materia: 'Matemáticas',
    texto: 'Una información adicional sugiere que, de ser necesario ampliar un documento en una copia, se debe cobrar $30 adicionales por la ampliación; por lo tanto, el costo de copiar y ampliar 100 documentos es',
    opciones: [
      'mayor que el costo de copiar 300 documentos.',
      'mayor que el costo de copiar y ampliar 200 documentos.',
      'menor que el costo de copiar y ampliar 150 documentos.',
      'menor que el costo de copiar 150 documentos.'
    ],
    respuesta: 2,
    requiereImagen: true,
    imagen: 'matematicas_4.png'
  },
  {
    materia: 'Matemáticas',
    texto: 'Se puede afirmar que en la estructura presentada pueden distinguirse',
    opciones: [
      'tres triángulos isósceles y dos de ellos rectángulos.',
      'cuatro triángulos isósceles y todos ellos rectángulos.',
      'cuatro triángulos isósceles y tres de ellos rectángulos.',
      'seis triángulos isósceles y todos ellos rectángulos.'
    ],
    respuesta: 1,
    requiereImagen: true,
    imagen: 'matematicas_5.png'
  },
  {
    materia: 'Matemáticas',
    texto: 'La empresa LUCES S.A. considera que el diseño presentado por el ingeniero está incompleto, porque no se conocen las medidas de todas las vigas, ni el valor del ángulo θ, sin embargo, Juan David advierte que está implícito el valor de 45º para e en las indicaciones presentadas. El argumento presentado por Juan David es',
    opciones: [
      'incorrecto, porque en ningún momento se menciona el valor de θ.',
      'correcto, porque si el triángulo AOB es rectángulo isósceles, θ debe ser 45º por ángulos alternos internos.',
      'correcto, porque si el triángulo rectángulo AOD es isósceles, necesariamente el valor de θ debe ser igual a 45º.',
      'incorrecto, porque la figura únicamente presenta la medida del segmento AD.'
    ],
    respuesta: 2,
    requiereImagen: true,
    imagen: 'matematicas_5.png'
  },
  {
    materia: 'Matemáticas',
    texto: 'La empresa LUCES S.A. aún considera que el diseño presentado por el ingeniero está incompleto, porque no se conoce la medida de la viga BC, sin embargo, Juan David advierte que está implícito el valor de BC en las indicaciones presentadas. El argumento presentado por Juan David es',
    opciones: [
      'incorrecto, porque la medida de BC depende de la medida OB, la cual no se presenta en la figura.',
      'correcto, porque basta con aplicar el teorema de Pitágoras para calcular BC.',
      'correcto, porque basta con conocer el valor de la expresión sen 45º para calcular BC.',
      'incorrecto, porque la medida de BC depende del ángulo θ que no se presenta en la figura.'
    ],
    respuesta: 0,
    requiereImagen: true,
    imagen: 'matematicas_5.png'
  },
  {
    materia: 'Matemáticas',
    texto: 'El valor de la longitud necesaria para las vigas AO y OD según el diseño presentado por el ingeniero es',
    opciones: [
      '√2 metros.',
      '3√2 metros.',
      '5√2 metros.',
      '10√2 metros.'
    ],
    respuesta: 2,
    requiereImagen: true,
    imagen: 'matematicas_5.png'
  },
  {
    materia: 'Matemáticas',
    texto: 'Teniendo en cuenta la imagen de las instrucciones, Camila puede comprobar si es congruente con la pieza que venía en el juego, midiendo en esta',
    opciones: [
      'necesariamente los tres lados del triángulo.',
      'el lado más largo y cualquier par de ángulos del triángulo.',
      'cualquier lado y los ángulos adyacentes a este.',
      'los dos ángulos más pequeños y uno de los lados opuestos.'
    ],
    respuesta: 1,
    requiereImagen: true,
    imagen: 'matematicas_6.png'
  },
  {
    materia: 'Matemáticas',
    texto: 'De la información suministrada por el diagrama es correcto afirmar que',
    opciones: [
      'el 20% de los estudiantes tiene 10 años.',
      'el 45% de los estudiantes tiene 12 años.',
      'el 10% de los estudiantes tiene 13 años.',
      'el 50% de los estudiantes tiene 11 años.'
    ],
    respuesta: 3,
    requiereImagen: true,
    imagen: 'matematicas_7.png'
  },
  {
    materia: 'Matemáticas',
    texto: 'La edad promedio del grupo está entre',
    opciones: [
      '12 años y 13 años.',
      '11 años y 12 años.',
      '10 años y 11 años.',
      '9 años y 10 años.'
    ],
    respuesta: 1,
    requiereImagen: true,
    imagen: 'matematicas_7.png'
  },
  {
    materia: 'Matemáticas',
    texto: 'Según el mismo estudio, entre los estudiantes hay 12 mujeres; de ellas, una tiene 10 años, cinco tienen 11 años y las otras tienen 12 años. La fracción de mujeres que tienen 12 años respecto al total de ellas es',
    opciones: [
      '1/4',
      '1/2',
      '3/10',
      '5/20'
    ],
    respuesta: 1,
    requiereImagen: true,
    imagen: 'matematicas_7.png'
  },
  {
    materia: 'Matemáticas',
    texto: 'A mitad de año ingresan cinco estudiantes nuevos al curso y cada uno de ellos tiene 12 años de edad. Luego, el porcentaje de alumnos con esta edad, respecto a los estudiantes iniciales, aumenta',
    opciones: [
      'al 50%',
      'en 25%',
      'en 13%',
      'al 13%'
    ],
    respuesta: 2,
    requiereImagen: true,
    imagen: 'matematicas_7.png'
  },
  {
    materia: 'Matemáticas',
    texto: 'Teniendo en cuenta la información inicial, se concluye que el número de empleados que proceden de la región central está entre',
    opciones: [
      '0 y 1.000',
      '1.000 y 2.000',
      '2.000 y 3.000',
      '3.000 y 4.000'
    ],
    respuesta: 1,
    requiereImagen: true,
    imagen: 'matematicas_8.png'
  },
  {
    materia: 'Matemáticas',
    texto: 'De acuerdo con esta información, es posible concluir que la cantidad total de empleados que trabaja en la empresa es',
    opciones: [
      '2.500',
      '3.000',
      '4.500',
      '5.000'
    ],
    respuesta: 2,
    requiereImagen: true,
    imagen: 'matematicas_8.png'
  },
  {
    materia: 'Matemáticas',
    texto: 'En la figura se muestra un diseño para generar sólidos de revolución haciendo girar la lámina alrededor del eje mostrado. Se infiere que el sólido generado es un',
    opciones: [
      'cubo de lado a.',
      'cubo de lado a/2.',
      'cilindro de diámetro b/2.',
      'cilindro de diámetro b.'
    ],
    respuesta: 3,
    requiereImagen: true,
    imagen: 'matematicas_9.png'
  },
  // Lectura crítica (reales)
  // Preguntas 1-5 requieren imagen
  {
    materia: 'Lectura crítica',
    texto: 'En el texto de la primera viñeta, se reconoce que con la frase "Y... ¡Zas!" el personaje quiere indicar que las personas, luego de terminar los estudios',
    opciones: [
      'se van inmediatamente al extranjero.',
      'esperan un poco y luego se van.',
      'no dudan en irse al extranjero.',
      'piensan en irse al extranjero.'
    ],
    respuesta: 0,
    requiereImagen: true,
    imagen: 'lectura_critica_1.png'
  },
  {
    materia: 'Lectura crítica',
    texto: 'En su respectivo orden, las actitudes evidenciadas en Mafalda son de',
    opciones: [
      'reflexión, protesta, duda y culpa.',
      'aburrición, ira, reflexión e ironía.',
      'meditación, rabia, duda y sumisión.',
      'tristeza, subversión, duda y esperanza.'
    ],
    respuesta: 0,
    requiereImagen: true,
    imagen: 'lectura_critica_1.png'
  },
  {
    materia: 'Lectura crítica',
    texto: 'La actitud y las palabras de Mafalda en la última viñeta sugieren que el personaje',
    opciones: [
      'dijo efectivamente la frase que iba a decir.',
      'cambió la frase por temor a su madre.',
      'estaba feliz con su madre.',
      'se encontraba en discusión con su madre.'
    ],
    respuesta: 1,
    requiereImagen: true,
    imagen: 'lectura_critica_1.png'
  },
  {
    materia: 'Lectura crítica',
    texto: 'Lo que le parece horrible a Mafalda es que',
    opciones: [
      'la gente se vaya a estudiar al extranjero.',
      'el país se malogre o eche a perder.',
      'los profesionales se marchen del país.',
      'las personas terminen su carrera en el extranjero.'
    ],
    respuesta: 2,
    requiereImagen: true,
    imagen: 'lectura_critica_1.png'
  },
  {
    materia: 'Lectura crítica',
    texto: 'En la última viñeta, el rostro de la madre de Mafalda expresa',
    opciones: [
      'discrepancia, pues no está de acuerdo con lo que está planteando su hija.',
      'acuerdo, ya que comparte el pensamiento que Mafalda quiere expresar.',
      'desaprobación, pues sospecha que Mafalda terminará diciendo algo soez.',
      'enojo, ya que no está de acuerdo con el tono en que su hija se está expresando.'
    ],
    respuesta: 2,
    requiereImagen: true,
    imagen: 'lectura_critica_1.png'
  },
  // Preguntas 6-18 (sin imagen)
  {
    materia: 'Lectura crítica',
    texto: 'De la narración NO se puede afirmar que es contada por un',
    opciones: [
      'narrador que figura como protagonista de la historia.',
      'narrador que participa de la acción narrada como testigo.',
      'personaje que participa de la acción narrada.',
      'narrador de focalización interna en primera persona.'
    ],
    respuesta: 1
  },
  {
    materia: 'Lectura crítica',
    texto: 'El texto anterior es el relato de una sucesión de hechos que se conoce como',
    opciones: [
      'leyenda.',
      'mito.',
      'cuento.',
      'fábula.'
    ],
    respuesta: 2
  },
  {
    materia: 'Lectura crítica',
    texto: 'Al analizar el texto anterior, se puede afirmar que este tipo de textos se caracterizan por: relatar hechos ficticios o reales, los pocos personajes y desarrollar subtramas. Sobre estas 3 características se puede afirmar que',
    opciones: [
      'solo la 1 es correcta.',
      'las tres son correctas.',
      'la uno y la tres son incorrectas.',
      'la tercera es una de la novela.'
    ],
    respuesta: 3
  },
  {
    materia: 'Lectura crítica',
    texto: 'El tiempo del relato consiste en la organización y disposición en que se presentan las acciones de la historia al narrarla. ¿Cuál de las siguientes afirmaciones manifiesta el tiempo del relato del texto anterior?',
    opciones: [
      'El relato inicia en el presente y va hacia el pasado.',
      'La historia parte del presente con un recuerdo del pasado.',
      'El narrador habla de dos personajes en diferentes tiempos.',
      'El relato inicia en el pasado y termina en el presente.'
    ],
    respuesta: 3
  },
  {
    materia: 'Lectura crítica',
    texto: '¿Cuál es la estructura narrativa del texto anterior?',
    opciones: [
      'Lineal, los hechos se presentan en orden cronológico.',
      'In medias res, inicia en medio del conflicto ya ocurrido.',
      'Circular, termina con la misma acción con la que inició.',
      'Interactiva, la historia se desarrolla a la elección del lector.'
    ],
    respuesta: 0
  },
  {
    materia: 'Lectura crítica',
    texto: 'El último párrafo da lugar a una descripción',
    opciones: [
      'objetiva, también llamada "prosopografía".',
      'de características psicológicas, también llamada "etopeya".',
      'física y psicológica, también llamada "retrato".',
      'de idealización, también llamada "laudatoria".'
    ],
    respuesta: 2
  },
  {
    materia: 'Lectura crítica',
    texto: 'Es posible afirmar que el texto anterior es descriptivo porque',
    opciones: [
      'presenta atributos y características de alguien.',
      'evidencia causas de comportamiento en alguien.',
      'informa sobre la actuación de una mala persona.',
      'confirma juicios de valor sobre las personas.'
    ],
    respuesta: 0
  },
  {
    materia: 'Lectura crítica',
    texto: 'Las características de un texto descriptivo son:\n1. La presencia de verbos copulativos.\n2. Los verbos suelen aparecer en presente o en pasado.\n3. La presencia de comparaciones.\n4. El detallar de forma minuciosa.\n\nConsiderando el texto anterior, es posible afirmar sobre estas 4 características que',
    opciones: [
      'la 1 es falsa.',
      'las 4 son verdaderas.',
      'las 1 y 3 son falsas.',
      'al menos una es falsa.'
    ],
    respuesta: 0
  },
  {
    materia: 'Lectura crítica',
    texto: 'Existen dos tipos de descripción: la objetiva y la subjetiva. En el anterior texto domina la descripción de tipo',
    opciones: [
      'objetiva, donde quien describe es preciso y fiel a la realidad.',
      'subjetiva, cuando representa la opinión de pocas personas.',
      'objetiva, donde la descripción coincide con la opinión general.',
      'subjetiva, cuando quien describe destaca su visión particular.'
    ],
    respuesta: 3
  },
  {
    materia: 'Lectura crítica',
    texto: 'A lo largo del poema se construye la imagen de un ser humano',
    opciones: [
      'en construcción.',
      'abrumado por el contexto.',
      'absurdo y vacío.',
      'lleno de aserrín.'
    ],
    respuesta: 2,
    requiereImagen: true,
    imagen: 'lectura_critica_2.png'
  },
  {
    materia: 'Lectura crítica',
    texto: 'Analice las siguientes afirmaciones acerca del poema Los hombres huecos, originalmente escrito en inglés:\nI. Este poema se inscribe en la estética de la "Generación perdida", pues ilustra el pesimismo y desconcierto con la especie humana.\nII. Al ser un poema traducido del inglés, al leerlo no es posible saber si originalmente el poema tenía versificación rimada.\n\nDe las anteriores afirmaciones, se puede asegurar que:',
    opciones: [
      'Únicamente la I es verdadera.',
      'Únicamente la II es verdadera.',
      'Ambas afirmaciones son falsas.',
      'Ambas afirmaciones son verdaderas.'
    ],
    respuesta: 3,
    requiereImagen: true,
    imagen: 'lectura_critica_2.png'
  },
  {
    materia: 'Lectura crítica',
    texto: 'En el poema anterior, el poeta',
    opciones: [
      'expresa sus emociones.',
      'describe una visión del mundo.',
      'propone una forma de ser.',
      'transmite su idiosincrasia.'
    ],
    respuesta: 0,
    requiereImagen: true,
    imagen: 'lectura_critica_2.png'
  },
  {
    materia: 'Lectura crítica',
    texto: 'Cuando en el texto se habla de "hombres rellenos de aserrín" se está empleando una',
    opciones: [
      'metáfora.',
      'personificación.',
      'ironía.',
      'hipérbole.'
    ],
    respuesta: 0,
    requiereImagen: true,
    imagen: 'lectura_critica_2.png'
  },
  // Preguntas 19-20 requieren imagen
  {
    materia: 'Lectura crítica',
    texto: 'El anterior es un cartel para una película. Al analizarlo, podemos afirmar que NO es una característica de este tipo de texto:',
    opciones: [
      'Anunciar el título del filme.',
      'Incluir una frase que resume la historia.',
      'Informar sobre los realizadores.',
      'Mostrar imágenes alusivas a la película.'
    ],
    respuesta: 1,
    requiereImagen: true,
    imagen: 'lectura_critica_3.png'
  },
  {
    materia: 'Lectura crítica',
    texto: '.Algunos elementos que, en conjunto, permiten inferir que el cartel anterior pertenece a una película de terror son, MENOS:',
    opciones: [
      'El título del cartel: Halloween.',
      'El juego con la imagen.',
      'La frase en inglés: ¡La noche en que él llegó a casa!',
      'El resplandor del cuchillo.'
    ],
    respuesta: 3,
    requiereImagen: true,
    imagen: 'lectura_critica_3.png'
  },
  // Física (reales)
  {
    materia: 'Física',
    texto: 'En un laboratorio de física, una de las prácticas consiste en calcular el volumen de un cuerpo sólido irregular usando un recipiente graduado con cierta cantidad de líquido. Al sumergir por completo el cuerpo en el líquido, el volumen se obtiene a partir de la medición del cambio en la altura del nivel de líquido en el recipiente, es decir, que el volumen del cuerpo corresponde a la cantidad de líquido que este desplace. \nTeniendo en cuenta el procedimiento propuesto para la práctica de laboratorio, se puede afirmar que el volumen es una magnitud derivada porque',
    opciones: [
      'requiere del uso de un instrumento de medida para poder ser calculada.',
      'depende del cambio del volumen en otro cuerpo o sustancia, como el líquido.',
      'depende de la altura del líquido y las medidas del recipiente.',
      'no puede ser medida directamente para cuerpos que tienen forma irregular.'
    ],
    respuesta: 2
  },
  {
    materia: 'Física',
    texto: 'En un laboratorio de física, una de las prácticas consiste en calcular el volumen de un cuerpo sólido irregular usando un recipiente graduado con cierta cantidad de líquido. Al sumergir por completo el cuerpo en el líquido, el volumen se obtiene a partir de la medición del cambio en la altura del nivel de líquido en el recipiente, es decir, que el volumen del cuerpo corresponde a la cantidad de líquido que este desplace. \nEn la práctica de laboratorio también se pretende analizar cómo cambia la densidad de un cuerpo de masa conocida según su temperatura, teniendo en cuenta que la densidad es la relación entre la masa y el volumen. Los instrumentos de medida necesarios para la práctica son',
    opciones: [
      'recipiente graduado y balanza.',
      'termómetro y recipiente graduado.',
      'balanza y cinta métrica.',
      'termómetro y báscula.'
    ],
    respuesta: 1
  },
  {
    materia: 'Física',
    texto: 'En sus vacaciones, Sofía viajó a una región montañosa y al llegar tuvo un ligero malestar por el cambio en la presión atmosférica, que corresponde al peso por unidad de área que tiene una columna de aire sobre la superficie terrestre en un punto determinado. Sofía quiso consultar la presión atmosférica del lugar, encontrando que en ese momento era de 71,8 kilopascales.\nConsiderando que el pascal es la unidad del Sistema Internacional de Unidades para la presión, Sofía hace las siguientes afirmaciones:\n\nI. La presión atmosférica expresada en pascales sería un número tres órdenes de magnitud mayor que el que consultó.\nII. El pascal es una unidad que debe depender de otras unidades, como metros y kilogramos.\n\nRespecto a las afirmaciones de Sofía:',
    opciones: [
      'solo I es verdadera.',
      'solo II es verdadera.',
      'ambas son verdaderas.',
      'ninguna es verdadera.'
    ],
    respuesta: 2
  },
  {
    materia: 'Física',
    texto: 'Un bote cruza un río de oeste a este a una velocidad de 4 m/s. Si tenemos en cuenta que la corriente del río va de norte a sur, a una velocidad de 3 m/s, entonces para navegar en línea recta el bote debe zarpar con dirección y velocidad',
    opciones: [
      'norte-oeste y 4 m/s.',
      'sur-este y 5 m/s.',
      'sur-oeste y 4 m/s.',
      'norte-este y 5 m/s.'
    ],
    respuesta: 3
  },
  {
    materia: 'Física',
    texto: 'Se desliza una caja sobre un plano inclinado. Entre la superficie del plano y la caja existe una fuerza de rozamiento. Si el ángulo del plano inclinado aumenta, se puede concluir que',
    opciones: [
      'aumenta la aceleración de la caja y disminuye la fuerza de fricción entre la caja y la superficie.',
      'aumenta la aceleración de la caja y aumenta la fuerza de fricción entre la caja y la superficie.',
      'disminuye la aceleración de la caja y disminuye la fuerza de fricción entre la caja y la superficie.',
      'disminuye la aceleración de la caja y aumenta la fuerza de fricción entre la caja y la superficie.'
    ],
    respuesta: 0,
    requiereImagen: true,
    imagen: 'fisica_1.png'
  },
  {
    materia: 'Física',
    texto: 'Si W₁ se coloca sobre el soporte del sistema A y luego sobre el soporte del sistema B, entonces la relación correcta entre las alturas respectivas es',
    opciones: [
      'h₁ₐ > h₁ᵦ',
      'h₁ₐ = h₁ᵦ',
      'h₁ₐ < h₁ᵦ',
      'h₁ₐ = 2h₁ᵦ'
    ],
    respuesta: 2,
    requiereImagen: true,
    imagen: 'fisica_2.png'
  },
  {
    materia: 'Física',
    texto: 'Si colocamos el peso W₂ en la plataforma A, y el peso W₃ en la plataforma B, tal que W₂ > W₃, entonces la relación correcta entre las alturas respectivas es',
    opciones: [
      'h₂ₐ < h₃ᵦ',
      'h₂ₐ = h₃ᵦ',
      '2h₂ₐ = h₃ᵦ',
      'h₂ₐ = 2h₃ᵦ'
    ],
    respuesta: 0,
    requiereImagen: true,
    imagen: 'fisica_2.png'
  },
  {
    materia: 'Física',
    texto: 'La velocidad del sistema mostrado en la figura es constante, por lo cual la relación que debe existir entre la masa 1 (m₁) y la masa 2 (m₂) es',
    opciones: [
      'm₁ = 2m₂',
      '2m₁ = m₂',
      'm₁ = 4m₂',
      'm₁ = m₂'
    ],
    respuesta: 3,
    requiereImagen: true,
    imagen: 'fisica_3.png'
  },
  {
    materia: 'Física',
    texto: 'El sistema se coloca dentro de un ascensor de tal manera que la polea queda fija al techo. Si el ascensor cae libremente desde una altura h, un estudiante que se encuentra dentro de este observa que',
    opciones: [
      'las masas se mueven de izquierda a derecha.',
      'las masas permanecen en reposo.',
      'la masa m₁ desciende y la masa m₂ asciende.',
      'la masa m₁ asciende y la masa m₂ desciende.'
    ],
    respuesta: 1,
    requiereImagen: true,
    imagen: 'fisica_3.png'
  },
  {
    materia: 'Física',
    texto: 'Para analizar esta fuerza gravitacional se proponen las siguientes afirmaciones:\nI. Si la distancia entre las dos masas se reduce a la cuarta parte, entonces la fuerza resultante aumenta cuatro veces con respecto a la situación inicial.\nII. Si la masa m₁ se duplica, entonces la fuerza resultante aumenta cuatro veces con respecto a la situación inicial.\nIII. Si la distancia entre las dos masas se triplica, entonces la fuerza de atracción resultante disminuye a la novena parte. \nIV. Las fuerzas gravitacionales son de naturaleza atractiva y en otros casos son repulsivas.\n\nLa afirmación correcta es',
    opciones: [
      'IV',
      'II',
      'III',
      'I'
    ],
    respuesta: 2,
    requiereImagen: true,
    imagen: 'fisica_4.png'
  },
  {
    materia: 'Física',
    texto: 'Para un caso específico, la masa m₁ se cuadruplica y la distancia de separación entre las dos masas es r. Si se desea que la fuerza resultante generada por dos masas con sus valores iniciales sea igual a la descrita, estas últimas se deben ubicar a una distancia',
    opciones: [
      'r/2',
      '2r',
      'r/4',
      '4r'
    ],
    respuesta: 0,
    requiereImagen: true,
    imagen: 'fisica_4.png'
  },
  {
    materia: 'Física',
    texto: 'La Tierra es achatada en los polos, así, la distancia entre el centro de la Tierra y los polos es menor que la distancia del centro al ecuador. La fuerza de atracción gravitacional para un cuerpo de masa m que se ubica en uno de los polos de la Tierra, con respecto a la fuerza ejercida cuando el cuerpo se ubica en el ecuador, es',
    opciones: [
      'mayor.',
      'igual.',
      'la mitad.',
      'menor.'
    ],
    respuesta: 0
  },
  {
    materia: 'Física',
    texto: 'Si el radio de la Tierra es r, entonces, la distancia a la que debe alejarse un cuerpo del centro de la Tierra, para que la fuerza de atracción gravitacional se reduzca a la novena parte de la fuerza que se ejerce sobre el cuerpo cuando está sobre la superficie, es',
    opciones: [
      '9r',
      '3r',
      '2r',
      'r'
    ],
    respuesta: 1
  },
  {
    materia: 'Física',
    texto: 'En ambientes de industrias textiles, de plásticos, electrónicas, entre muchas otras, es común que se produzca la acumulación de cargas eléctricas sobre algunas superficies, principalmente debido a la fricción entre materiales y a las altas temperaturas. Considerando que la acumulación de carga estática puede generar fallas en equipos y otros efectos negativos por posibles descargas, muchas industrias controlan la acumulación de cargas estáticas manteniendo altos los niveles de humedad en el aire. Esta solución se explica teniendo en cuenta que',
    opciones: [
      'las partículas de agua tienen un efecto aislante que evita las descargas.',
      'las cargas acumuladas pasan al aire gracias a las partículas de agua en él.',
      'el aire cede electrones a las superficies haciendo que se descarguen.',
      'la humedad en el aire reduce la temperatura, evitando las descargas.'
    ],
    respuesta: 1
  },
  {
    materia: 'Física',
    texto: 'Teniendo en cuenta la posición que tiene el bloque con relación al tiempo, se concluye que la aceleración del bloque es',
    opciones: [
      'cero en el instante 3 y máxima en los instantes 1 y 5.',
      'cero en los instantes 1, 3 y 5, y máxima en los instantes 0, 2, 4 y 6.',
      'cero en los instantes 0, 2, 4 y 6, y máxima en los instantes 1, 3 y 5.',
      'cero en el instante 3 y máxima en el instante 5.'
    ],
    respuesta: 2,
    requiereImagen: true,
    imagen: 'fisica_5.png'
  },
  {
    materia: 'Física',
    texto: 'Teniendo en cuenta la posición que tiene el bloque con relación al tiempo, se concluye que la velocidad del bloque es',
    opciones: [
      'cero en el instante 3 y máxima en los instantes 1 y 5.',
      'cero en los instantes 1, 3 y 5, y máxima en los instantes 0, 2, 4 y 6.',
      'cero en los instantes 0, 2, 4 y 6, y máxima en los instantes 1, 3 y 5.',
      'cero en el instante 3 y máxima en el instante 5.'
    ],
    respuesta: 1,
    requiereImagen: true,
    imagen: 'fisica_5.png'
  },
  {
    materia: 'Física',
    texto: 'Si se quiere hallar el tiempo que tarda la esfera en desplazarse desde la posición C a la B, teniendo en cuenta que en la posición B alcanza su altura máxima, se puede primero calcular',
    opciones: [
      'el período de oscilación que depende de la longitud y la gravedad, y luego se divide en cuatro.',
      'la aceleración centrípeta dada por la fuerza restauradora y se divide por la longitud del péndulo.',
      'el período de oscilación que depende de la masa y la longitud del péndulo, y luego se divide por cuatro.',
      'la velocidad centrípeta se divide por el perímetro que describe el péndulo.'
    ],
    respuesta: 0,
    requiereImagen: true,
    imagen: 'fisica_6.png'
  },
  {
    materia: 'Física',
    texto: 'Con respecto a la energía mecánica del sistema, es correcto afirmar que la energía potencial',
    opciones: [
      'es máxima en los puntos A y B, y la energía cinética es mínima en el punto C.',
      'es cero en el punto C y la energía cinética es máxima en los puntos A y B.',
      'y la energía cinética son mínimas en los puntos A y B.',
      'es máxima en los puntos A y B, y la energía cinética es máxima en el punto C.'
    ],
    respuesta: 3,
    requiereImagen: true,
    imagen: 'fisica_6.png'
  },
  {
    materia: 'Física',
    texto: 'Es correcto afirmar que',
    opciones: [
      'la longitud de onda en la cuerda 1 es menor que en la cuerda 2.',
      'la frecuencia en la cuerda 2 es mayor que en la cuerda 1.',
      'en la figura se muestra la propagación de una onda a través de dos cuerdas de diferente densidad lineal.',
      'el fenómeno mostrado corresponde a una reflexión.'
    ],
    respuesta: 3,
    requiereImagen: true,
    imagen: 'fisica_7.png'
  },
  {
    materia: 'Física',
    texto: 'Si las cuerdas se separan y se genera un tren de pulsos sobre la cuerda 1, fija en ambos extremos, mediante una fuerza T, es correcto afirmar que para que la cuerda se encuentre en su cuarto modo fundamental, la longitud de esta debe corresponder a',
    opciones: [
      'una y media longitudes de onda.',
      'dos longitudes y media de onda.',
      'una longitud de onda.',
      'dos longitudes de onda.'
    ],
    respuesta: 3,
    requiereImagen: true,
    imagen: 'fisica_7.png'
  },
  // Química (reales)
  {
    materia: 'Química',
    texto: 'De acuerdo con la figura, se puede concluir que la masa molar del carbono es de',
    opciones: [
      '12 g/mol',
      '2 g',
      '6.02 × 10²³ átomos',
      '1 mol'
    ],
    respuesta: 0,
    requiereImagen: true,
    imagen: 'quimica_1.png'
  },
  {
    materia: 'Química',
    texto: 'De los resultados obtenidos se puede concluir que',
    opciones: [
      'M1: Mezcla homogénea; M2: Mezcla heterogénea.',
      'M1: Compuesto; M2: Mezcla heterogénea.',
      'M1: Compuesto; M2: Mezcla homogénea.',
      'M1: Mezcla homogénea; M2: Compuesto.'
    ],
    respuesta: 1,
    requiereImagen: true,
    imagen: 'quimica_2.png'
  },
  {
    materia: 'Química',
    texto: 'Aplicando el método de la destilación se pueden separar las tres sustancias. El orden en que estas se separarían sería',
    opciones: [
      'S1, S2, S3.',
      'S3, S2, S1.',
      'S2, S3, S1.',
      'S1, S3, S2.'
    ],
    respuesta: 3,
    requiereImagen: true,
    imagen: 'quimica_3.png'
  },
  {
    materia: 'Química',
    texto: 'Se tiene una mezcla de agua, sal y piedras. Los mejores métodos de separación para las tres sustancias son',
    opciones: [
      'tamizado y destilación.',
      'decantación y centrifugación.',
      'filtración y tamizado.',
      'filtración y evaporación.'
    ],
    respuesta: 3
  },
  {
    materia: 'Química',
    texto: 'De acuerdo con la información suministrada, los valores de a y c corresponden, respectivamente, a',
    opciones: [
      '14 y 20',
      '16 y 22',
      '16 y 20',
      '15 y 22'
    ],
    respuesta: 2,
    requiereImagen: true,
    imagen: 'quimica_4.png'
  },
  {
    materia: 'Química',
    texto: 'A partir de la información suministrada es posible deducir que los valores correspondientes de las letras e y f son',
    opciones: [
      '42 y 20',
      '43 y 20',
      '43 y 22',
      '55 y 22'
    ],
    respuesta: 1,
    requiereImagen: true,
    imagen: 'quimica_4.png'
  },
  {
    materia: 'Química',
    texto: 'Con base en la información obtenida de la tabla, es correcto afirmar que el elemento Q',
    opciones: [
      'es un isótopo del elemento J.',
      'corresponde a un elemento diferente a P.',
      'presenta 22 protones.',
      'es un ion del elemento P.'
    ],
    respuesta: 3,
    requiereImagen: true,
    imagen: 'quimica_4.png'
  },
  {
    materia: 'Química',
    texto: 'Teniendo en cuenta la ubicación de los elementos en la tabla anterior, sería correcto afirmar que el de',
    opciones: [
      'menor radio atómico es A.',
      'mayor electronegatividad es D.',
      'mayor carácter metálico es A.',
      'menor afinidad electrónica es B.'
    ],
    respuesta: 2,
    requiereImagen: true,
    imagen: 'quimica_5.png'
  },
  {
    materia: 'Química',
    texto: 'Si la configuración electrónica de uno de los elementos viene dada como 1s² 2s² 2p⁶ 3s² 3p⁴, podemos afirmar que se trata del elemento',
    opciones: [
      'B, perteneciente al periodo 6 y grupo 3A.',
      'A, perteneciente al periodo 3 y grupo 2A.',
      'D, perteneciente al periodo 1 y grupo 8A.',
      'B, perteneciente al periodo 3 y grupo 6A.'
    ],
    respuesta: 3,
    requiereImagen: true,
    imagen: 'quimica_5.png'
  },
  {
    materia: 'Química',
    texto: '¿Cuál es el agente reductor y el agente oxidante de la reacción, respectivamente?',
    opciones: [
      'Azufre - hierro.',
      'Hierro - azufre.',
      'Cloro - hidrógeno.',
      'Hidrógeno - cloro.'
    ],
    respuesta: 0,
    requiereImagen: true,
    imagen: 'quimica_6.png'
  },
  {
    materia: 'Química',
    texto: 'Aplicando la ley de Dalton de la proporcionalidad múltiple a la reacción anteriormente descrita, se puede decir que la proporcionalidad en moles entre el cloruro férrico: ácido clorhídrico y el ácido sulfhídrico: cloruro ferroso, respectivamente, es',
    opciones: [
      '2:1 y 1:1',
      '2:2 y 2:1',
      '1:1 y 2:2',
      '2:2 y 1:2'
    ],
    respuesta: 3,
    requiereImagen: true,
    imagen: 'quimica_6.png'
  },
  {
    materia: 'Química',
    texto: 'Del proceso de reacción entre la parafina y el oxígeno del aire se puede deducir que es del tipo',
    opciones: [
      'endotérmico.',
      'exotérmico.',
      'reversible.',
      'sustitución.'
    ],
    respuesta: 3,
    requiereImagen: true,
    imagen: 'quimica_7.png'
  },
  {
    materia: 'Química',
    texto: 'La reacción termina cuando uno de los dos reactivos se consume; este reactivo que se consume primero se denomina reactivo límite, y el que se encuentra en mayor cantidad se denomina reactivo en exceso. \nDe acuerdo con la gráfica y la ecuación, el reactivo que se consume primero es',
    opciones: [
      'parafina.',
      'oxígeno.',
      'dióxido de carbono.',
      'agua.'
    ],
    respuesta: 1,
    requiereImagen: true,
    imagen: 'quimica_7.png'
  },
  {
    materia: 'Química',
    texto: 'De la tabla mostrada, se podría concluir que entre las sustancias listadas',
    opciones: [
      '1 y 3 son isómeros debido a que la cadena principal tiene cuatro átomos de carbono.',
      '1 y 2 son isómeros debido a que presentan una estructura diferente.',
      '2 y 3 son isómeros debido a que tienen igual fórmula molecular y estructura diferente.',
      'no hay ningún par de isómeros, debido a que todas son diferentes.'
    ],
    respuesta: 2,
    requiereImagen: true,
    imagen: 'quimica_8.png'
  },
  {
    materia: 'Química',
    texto: 'El nombre correspondiente al compuesto 4 es',
    opciones: [
      '2,2-dimetilpropano, debido a que tiene igual punto de fusión que la sustancia 2.',
      '2,2-dimetilpropano o 2-metilbutano, debido a que es un isómero de ambas sustancias.',
      'pentano, debido a que posee cinco átomos de carbono.',
      'imposible de determinar, debido a que no se posee suficiente información.'
    ],
    respuesta: 0,
    requiereImagen: true,
    imagen: 'quimica_8.png'
  },
  {
    materia: 'Química',
    texto: 'El metil-benceno o tolueno es un líquido incoloro con un olor característico. El tolueno se encuentra en forma natural en el petróleo crudo y en el árbol tolú. También se produce durante la manufactura de gasolina y de otros combustibles a partir de petróleo crudo y en la manufactura de coque a partir de carbón. El tolueno se usa en la fabricación de pinturas, diluyentes de pinturas, barniz para las uñas, lacas, adhesivos y gomas, y en ciertos procesos de imprenta y curtido de cuero.\nEl petróleo crudo, mencionado en la lectura, se establece dentro de un tipo de compuestos denominados',
    opciones: [
      'derivados de ácidos carboxílicos.',
      'hidrocarburos.',
      'hidrocarburos aromáticos.',
      'ésteres.'
    ],
    respuesta: 1
  },
  {
    materia: 'Química',
    texto: 'De acuerdo con lo anterior, se puede afirmar que la hipótesis planteada por el estudiante es',
    opciones: [
      'verdadera, porque las soluciones producen igual valor de pH.',
      'falsa, porque el pH es neutro para todas las soluciones.',
      'verdadera, pues las soluciones fueron elaboradas a diferente concentración.',
      'falsa, porque el pH es diferente para cada sustancia.'
    ],
    respuesta: 0,
    requiereImagen: true,
    imagen: 'quimica_9.png'
  },
  {
    materia: 'Química',
    texto: 'A partir de la información obtenida, si se desea obtener el ácido propanoico, se debe partir del alcohol',
    opciones: [
      'CH₃–CH₂–CH₂–OH',
      'CH₃–CH–CH₂–OH',
      'CH₃–CH₂–CH–OH',
      'CH₃–CH₂–OH'
    ],
    respuesta: 3,
    requiereImagen: true,
    imagen: 'quimica_10.png'
  },
  {
    materia: 'Química',
    texto: 'Es posible deducir que al oxidar un alcohol primario como el 1-butanol, el aldehído obtenido sea',
    opciones: [
      'etanal.',
      'propanal.',
      'butanal.',
      'pentanal.'
    ],
    respuesta: 2,
    requiereImagen: true,
    imagen: 'quimica_10.png'
  },
  {
    materia: 'Química',
    texto: 'A partir de la reacción representada, los valores estequiométricos para balancear la ecuación, respectivamente, son',
    opciones: [
      '2, 1, 4',
      '4, 1, 2',
      '1, 2, 4',
      '4, 2, 1'
    ],
    respuesta: 1,
    requiereImagen: true,
    imagen: 'quimica_11.png'
  },
  // Biología (reales)
  {
    materia: 'Biología',
    texto: 'Un atleta tiene entrenamientos intensivos todos los días en la mañana. Necesita tener buen rendimiento y velocidad en un mes para poder participar en una competencia internacional. Quince días antes de la competencia, manifiesta síntomas de mareo, pérdida de peso, fatiga, pérdida de fuerza y desánimo. El entrenador lo lleva donde el nutricionista, pues está seguro de que estos síntomas se deben a un desbalance en la alimentación.\nLo más probable es que el nutricionista le diagnostique un déficit en su dieta en',
    opciones: [
      'calcio.',
      'fósforo.',
      'harinas.',
      'ácidos nucleicos.'
    ],
    respuesta: 2
  },
  {
    materia: 'Biología',
    texto: 'Aunque la función principal de los carbohidratos es energética, también hay ciertos hidratos de carbono cuya función está relacionada con la estructura de las células o aparatos del organismo, sobre todo en el caso de los polisacáridos; y estos pueden dar lugar a estructuras esqueléticas muy resistentes. Un ejemplo de un polisacárido utilizado para formar estructuras de plantas es la',
    opciones: [
      'fructosa.',
      'lactosa.',
      'quitina.',
      'celulosa.'
    ],
    respuesta: 3,
    requiereImagen: true,
    imagen: 'biologia_1.png'
  },
  {
    materia: 'Biología',
    texto: 'Martina, en su clase de Química aprende sobre la estructura de los lípidos, y cómo estos pueden tener características diferentes entre sí. Ante esto, Martina le pregunta a su profesor por qué la mantequilla es un sólido a temperatura ambiente, mientras que el aceite vegetal es un líquido a la misma temperatura.\nLa mejor respuesta para esto es:',
    opciones: [
      'Porque la mantequilla es una grasa saturada y el aceite vegetal es insaturado.',
      'Porque la mantequilla es una molécula polar y el aceite vegetal es una molécula no polar.',
      'Porque la mantequilla es una grasa insaturada y el aceite vegetal es saturado.',
      'Porque la mantequilla es una molécula no polar y el aceite vegetal es una molécula polar.'
    ],
    respuesta: 0,
    requiereImagen: true,
    imagen: 'biologia_1.png'
  },
  {
    materia: 'Biología',
    texto: 'Para los animales que hibernan, como osos polares, ardillas y algunos murciélagos, es de suma importancia la grasa como reserva energética.\nDicha grasa para ellos debe ser',
    opciones: [
      'insaturada para que pueda permanecer sólida a temperatura ambiente.',
      'saturada para que pueda permanecer sólida a temperatura ambiente.',
      'insaturada para que pueda permanecer sólida a la temperatura corporal.',
      'saturada para que pueda permanecer sólida a la temperatura corporal.'
    ],
    respuesta: 3,
    requiereImagen: true,
    imagen: 'biologia_2.png'
  },
  {
    materia: 'Biología',
    texto: 'Teniendo en cuenta esta información, la insulina hace que',
    opciones: [
      'aumenten los niveles de glucosa en la sangre.',
      'disminuya la cantidad de grasa en los tejidos.',
      'disminuya la cantidad de glucosa en la sangre.',
      'disminuyan los niveles de glucógeno en los tejidos.'
    ],
    respuesta: 2,
    requiereImagen: true,
    imagen: 'biologia_3.png'
  },
  {
    materia: 'Biología',
    texto: 'Las proteínas cumplen diversas funciones en los seres vivos. Una función específica de estas biomoléculas es que son',
    opciones: [
      'una fuente energética inmediata para las células.',
      'reguladores de actividad celular en humanos.',
      'una reserva energética de fácil almacenamiento.',
      'reguladores térmicos del organismo.'
    ],
    respuesta: 1,
    requiereImagen: true,
    imagen: 'biologia_3.png'
  },
  {
    materia: 'Biología',
    texto: 'El huevo contiene en la clara diversas proteínas que alimentan el embrión que está formado sobre la yema; sin embargo, las proteínas solo pueden actuar en unos rangos particulares de temperatura y pH; por encima o debajo de ellos se deteriora su naturaleza. Cuando el huevo se cocina, la clara adquiere una consistencia sólida y blanca que significa que',
    opciones: [
      'las proteínas están trabajando rápidamente y generando muchos productos.',
      'la yema consumió todas las proteínas de la clara.',
      'las proteínas se multiplicaron en la clara.',
      'las proteínas de la clara se desnaturalizaron y se coagularon.'
    ],
    respuesta: 3
  },
  {
    materia: 'Biología',
    texto: 'La razón principal por la cual se generaron los tumores en los ratones es porque se',
    opciones: [
      'descontroló el ciclo celular.',
      'retiraron de un sitio anormal.',
      'transplantaron teratocarcinomas.',
      'inyectaron al ratón células exógenas.'
    ],
    respuesta: 0,
    requiereImagen: true,
    imagen: 'biologia_4.png'
  },
  {
    materia: 'Biología',
    texto: 'De acuerdo con las características del cáncer, una propuesta de investigación con efectos secundarios mínimos y con el fin de eliminar o disminuir las células cancerígenas sería',
    opciones: [
      'no permitir el ingreso de células cancerígenas al organismo mediante vacunas y antibióticos.',
      'inducir apoptosis en las células normales para evitar que las células cancerígenas las infecten.',
      'realizar tratamientos intensivos de quimioterapia hasta que se exterminen las células cancerígenas.',
      'identificar el sitio de descontrol del ciclo celular para regularlo nuevamente por ingeniería genética.'
    ],
    respuesta: 3,
    requiereImagen: true,
    imagen: 'biologia_4.png'
  },
  {
    materia: 'Biología',
    texto: 'Los puntos A, B y C de la gráfica corresponden, respectivamente, a',
    opciones: [
      'interfase, telofase y anafase.',
      'prometafase, telofase y anafase.',
      'metafase, citocinesis y anafase.',
      'profase, metafase y anafase.'
    ],
    respuesta: 3,
    requiereImagen: true,
    imagen: 'biologia_5.png'
  },
  {
    materia: 'Biología',
    texto: 'Uno de los tipos de células humanas que lleva a cabo este proceso es',
    opciones: [
      'el óvulo.',
      'las gónadas.',
      'el espermatozoide',
      'la celula epidermica'
    ],
    respuesta: 3,
    requiereImagen: true,
    imagen: 'biologia_5.png'
  },
  {
    materia: 'Biología',
    texto: 'Una de las razones principales por la que una célula realiza mitosis es la',
    opciones: [
      'generación de células cancerosas y tumores en la piel.',
      'regeneración de células muertas y curación de una herida.',
      'generación de neuronas y fibras musculares en adultos.',
      'producción de gametos masculinos y femeninos en animales.'
    ],
    respuesta: 1,
    requiereImagen: true,
    imagen: 'biologia_5.png'
  },
  {
    materia: 'Biología',
    texto: 'Las micorrizas son hongos cuyo hábitat son las raíces de algunas plantas. Estos hongos aportan nutrientes a las plantas para su crecimiento y desarrollo, y simultáneamente las micorrizas se ven beneficiadas, debido a que los exudados radiculares de las plantas les aportan los nutrientes necesarios para llevar a cabo sus funciones vitales.\nSegún el texto, la interacción entre micorrizas y algunas leguminosas como el frijol, corresponde a una interacción',
    opciones: [
      'simbiótica.',
      'lumínica.',
      'parasitária.',
      'mutuamente excluyente.'
    ],
    respuesta: 0
  },
  {
    materia: 'Biología',
    texto: 'La alelopatía es definida como la influencia directa de un compuesto químico liberado por una planta sobre el desarrollo y crecimiento de otra planta. Un ejemplo de esto son los cultivos de eucaliptos, los cuales generan grandes biomasas con una amplia variedad de metabolitos secundarios que han demostrado actividad inhibitoria del crecimiento y germinación de otras plantas. \nLa interacción ecológica que mejor explica este fenómeno es',
    opciones: [
      'el neutralismo.',
      'el comensalismo.',
      'el mutualismo.',
      'el amensalismo.'
    ],
    respuesta: 3,
    requiereImagen: true,
    imagen: 'biologia_6.png'
  },
  {
    materia: 'Biología',
    texto: 'De acuerdo con esto, se puede afirmar que el continente con el que mayor afinidad, en cuanto a especies de fauna, tiene Panamá es',
    opciones: [
      'Eurasia.',
      'Australia.',
      'África.',
      'Antártida.'
    ],
    respuesta: 2,
    requiereImagen: true,
    imagen: 'biologia_7.png'
  },
  {
    materia: 'Biología',
    texto: 'La gran similitud física y genética entre una especie de rana propia del Istmo de Panamá y otra especie presente en el Darién Colombiano se puede explicar como especiación:',
    opciones: [
      'alopátrica',
      'peripátrica',
      'parapátrica',
      'simpátrica'
    ],
    respuesta: 0,
    requiereImagen: true,
    imagen: 'biologia_7.png'
  },
  {
    materia: 'Biología',
    texto: 'Se llama evolución al proceso por el cual los grupos de organismos cambian a lo largo de las generaciones. Darwin se refirió a este proceso como "descendencia con modificaciones". Uno de los principios fundamentales que se deben cumplir para que esto ocurra es que:',
    opciones: [
      'surjan muchas mutaciones en células somáticas para que se favorezca la sobrevivencia.',
      'los rasgos que se hereden se mantengan sin modificaciones en el tiempo.',
      'cada generación se adapte a los cambios del ambiente en el que vive.',
      'los rasgos sean heredables de forma tal que pasen de padres a hijos.'
    ],
    respuesta: 3
  },
  {
    materia: 'Biología',
    texto: '¿Cuál de las opciones explicaría mejor el resultado?',
    opciones: [
      'No habría cambiado la composición de la población porque las crías de los escarabajos pintados habrían heredado el fenotipo de color claro presente en sus padres.',
      'La composición de la población cambiaría rápidamente, ya que todos los descendientes heredarían el fenotipo de color claro de sus padres.',
      'No habría cambiado la composición de la población porque las crías de los escarabajos pintados habrían heredado los genes de color oscuro presentes en sus padres.',
      'La composición de la población cambiaría rápidamente, ya que todos los descendientes heredarían los genes para el color oscuro de sus padres.'
    ],
    respuesta: 2,
    requiereImagen: true,
    imagen: 'biologia_8.png'
  },
  {
    materia: 'Biología',
    texto: 'Después de los trabajos de Pasteur, Darwin y Wallace, se intentó aplicar el concepto de evolución a la materia inerte. Aleksander Oparin en 1920, propuso una teoría que explica la evolución como resultado de procesos químicos que facilitaron la aparición de la vida. De los siguientes enunciados, el que está más relacionado con el planteamiento de Oparin es que:',
    opciones: [
      'la vida es una cualidad de la materia.',
      'los seres vivos son producto de transformaciones espontáneas.',
      'los seres vivos son producto de la evolución de la materia inerte.',
      'todo ser vivo presenta inmunidad a los rayos UV.'
    ],
    respuesta: 2
  },
  {
    materia: 'Biología',
    texto: 'Según la información de la tabla, ¿cuál de las siguientes afirmaciones es correcta?',
    opciones: [
      'La especie D está más relacionada con la especie B que con la especie C.',
      'La especie C está más relacionada con la especie A que con las demás.',
      'La especie A está más relacionada con la especie D que con la especie C.',
      'La especie B es la menos relacionada con el resto de las especies.'
    ],
    respuesta: 1,
    requiereImagen: true,
    imagen: 'biologia_9.png'
  },
  // Sociales (reales)
  {
    materia: 'Sociales',
    texto: 'Este hecho se puede explicar considerando',
    opciones: [
      'las características bioclimáticas de la región con sus diferentes pisos térmicos y su aprovechamiento económico.',
      'la herencia histórica de un asentamiento poblacional desordenado en la época de la colonia en América.',
      'las particularidades del territorio y las distancias que separan a los centros urbanos más importantes del país.',
      'el desarrollo económico que las actividades industriales han generado en las principales ciudades de Colombia.'
    ],
    respuesta: 0,
    requiereImagen: true,
    imagen: 'sociales_1.png'
  },
  {
    materia: 'Sociales',
    texto: 'Si se tienen en cuenta las condiciones geográficas de Colombia, este modelo de corrientes de aire explica',
    opciones: [
      'la delimitación geográfica de las regiones naturales de Colombia.',
      'el gran caudal de algunos de los ríos importantes como el Magdalena.',
      'la crisis invernal de las principales ciudades en el territorio colombiano.',
      'la gran pluviosidad en regiones naturales, como es el caso del Pacífico.'
    ],
    respuesta: 3,
    requiereImagen: true,
    imagen: 'sociales_2.png'
  },
  {
    materia: 'Sociales',
    texto: 'Según el modelo anterior, departamentos como Atlántico, Magdalena y Bolívar, que han sufrido las consecuencias de las inundaciones en los últimos años, se encontrarían ubicados en las áreas con número',
    opciones: [
      '8',
      '3',
      '7',
      '5'
    ],
    respuesta: 2,
    requiereImagen: true,
    imagen: 'sociales_3.png'
  },
  {
    materia: 'Sociales',
    texto: 'El café de la variedad Coffea arábica se cultiva a alturas entre 900 y 2.000 msnm. Esto significa que su producción en Colombia es mayor en la región',
    opciones: [
      'Andina.',
      'Pacífica.',
      'Caribe.',
      'de la Orinoquía.'
    ],
    respuesta: 0
  },
  {
    materia: 'Sociales',
    texto: 'En el primer trimestre de 2014 se produjo una dura sequía en el departamento de Casanare, la cual diezmó la población de animales salvajes y domésticos. Este tipo de sucesos de mayor o menor magnitud ocurren cada año debido a la dinámica del clima en dicha región. Una forma de prevenir este tipo de desastres es',
    opciones: [
      'implementar gran cantidad de radares meteorológicos que permitan una alerta temprana.',
      'disminuir la cantidad de reses, cerdos y gallinas a producir en la región.',
      'eliminar las especies salvajes que compiten por el agua con el ganado y el ser humano.',
      'asegurar las fuentes hídricas de la zona mediante la siembra de árboles.'
    ],
    respuesta: 3
  },
  {
    materia: 'Sociales',
    texto: 'La creciente comunicación e interdependencia entre países del mundo ha terminado por unir culturalmente a las personas, los mercados y comunidades muy diversas entre sí. Los efectos de la globalización han llegado a límites inimaginados. Desde un punto de vista económico, la globalización se caracteriza por',
    opciones: [
      'la integración de una economía local a una economía internacional de mercado común.',
      'la aplicación de leyes que motivan e incentivan el aumento de la producción a bajo precio.',
      'el incremento de tecnología productiva para hacer al país más competitivo.',
      'la protección de la producción industrial nacional frente a la competencia externa.'
    ],
    respuesta: 0
  },
  {
    materia: 'Sociales',
    texto: 'Es un hecho que la integración de los mercados a una escala global está acercando a sociedades con culturas diferentes y alejadas en el espacio. La integración económica y financiera, ayudada por las diferentes redes de comunicación, llega cada vez a más lugares y transmite ideas y valores a los individuos. En este orden de ideas, una consecuencia cultural de la globalización es',
    opciones: [
      'el acceso a la información por distintos medios y a precios cada vez más bajos que integran a sociedades distintas entre sí.',
      'el incremento a la censura sobre la información disponible, lo cual provoca la tergiversación de la realidad a favor de intereses particulares.',
      'que la integración de mercados desvaloriza los intereses comerciales propios de cada sociedad, ocasionando la destrucción del mercado nacional.',
      'la pérdida paulatina de los valores culturales que hacen parte de una construcción histórica propia de diferentes sociedades humanas.'
    ],
    respuesta: 3
  },
  {
    materia: 'Sociales',
    texto: 'Según el texto, en el campo económico, un impacto negativo de la globalización para las pequeñas y medianas empresas de un país como Colombia es',
    opciones: [
      'la inserción a mercados internacionales con garantías de crecimiento financiero.',
      'la imposibilidad de subcontratar empleados por la rigidez de las normas de comercio internacional.',
      'la posible quiebra a causa de la dificultad para competir con empresas transnacionales.',
      'la dificultad de obtener materias del propio país para el proceso productivo.'
    ],
    respuesta: 2,
    requiereImagen: true,
    imagen: 'sociales_4.png'
  },
  {
    materia: 'Sociales',
    texto: 'A partir del texto puede inferirse que una empresa transnacional comparada con una empresa de carácter nacional tiene más ventajas comerciales porque puede, EXCEPTO:',
    opciones: [
      'Tercerizar fácilmente la mano de obra.',
      'Externalizar su sistema productivo.',
      'Aprovechar las reducciones arancelarias.',
      'Beneficiarse de los subsidios estatales.'
    ],
    respuesta: 3,
    requiereImagen: true,
    imagen: 'sociales_4.png'
  },
  {
    materia: 'Sociales',
    texto: 'De acuerdo con el texto, uno de los efectos de la globalización es que las empresas transnacionales pueden saltarse fácilmente las normas laborales de un país específico porque su constitución legal se encuentra en otro, pudiendo evadir responsabilidades al momento de vulnerar un derecho. En ese sentido, esta flexibilización y vacío legal conduce al detrimento de',
    opciones: [
      'los sindicatos que velan por los derechos de los trabajadores.',
      'las organizaciones internacionales que regulan el comercio.',
      'la autonomía comercial de las empresas nacionales.',
      'la Constitución política.'
    ],
    respuesta: 0,
    requiereImagen: true,
    imagen: 'sociales_4.png'
  },
  {
    materia: 'Sociales',
    texto: 'Teniendo en cuenta lo anterior, ¿cuál de las siguientes afirmaciones NO se corresponde con lo ocurrido durante la Primavera Árabe?',
    opciones: [
      'Estuvo marcada por el deseo de una vida más democrática en los países que la protagonizaron.',
      'Quienes la lideraron buscaron implantar una democracia que correspondiera con los preceptos del islám.',
      'Inició en los sectores populares de la población árabe y vinculó miles de personas.',
      'Provocó cambios inmediatos y radicales en los países donde tuvo lugar.'
    ],
    respuesta: 1,
    requiereImagen: true,
    imagen: 'sociales_5.png'
  },
  {
    materia: 'Sociales',
    texto: 'Teniendo en cuenta el texto, una causa del conflicto actual entre Estados Unidos y China es',
    opciones: [
      'la diferencia en los modos de gobierno.',
      'la oposición entre capitalismo y socialismo.',
      'la migración de ciudadanos chinos.',
      'la competencia comercial.'
    ],
    respuesta: 3,
    requiereImagen: true,
    imagen: 'sociales_6.png'
  },
  {
    materia: 'Sociales',
    texto: 'De acuerdo con el texto, una consecuencia positiva de ese conflicto para los consumidores del resto del mundo es',
    opciones: [
      'la diversificación de los bienes tecnológicos que se pueden adquirir.',
      'un aumento de precio en los bienes tecnológicos.',
      'el fin de la Organización Mundial del Comercio.',
      'el giro hacia una economía planificada 4.0.'
    ],
    respuesta: 0,
    requiereImagen: true,
    imagen: 'sociales_6.png'
  },
  {
    materia: 'Sociales',
    texto: 'Teniendo en cuenta el texto, este conflicto es',
    opciones: [
      'antiguo, porque lo causó la falta de recursos en el desierto.',
      'reciente, porque Jerusalén existe desde mediados del siglo XX.',
      'reciente, porque empezó tras la caída del Muro de Berlín.',
      'antiguo, porque hay una disputa territorial no resuelta.'
    ],
    respuesta: 3,
    requiereImagen: true,
    imagen: 'sociales_7.png'
  },
  {
    materia: 'Sociales',
    texto: 'Es posible concluir que el conflicto del que se habla en el texto es una guerra civil porque',
    opciones: [
      'ocurre entre dos grupos políticos nacionales que se sienten depositarios del poder.',
      'sucede en una parte importante del territorio de Etiopía.',
      'los dos bandos se acusan de corrupción y violencia indiscriminada.',
      'se libra con armas y recursos de las arcas estatales etíopes.'
    ],
    respuesta: 0,
    requiereImagen: true,
    imagen: 'sociales_8.png'
  },
  {
    materia: 'Sociales',
    texto: 'Teniendo en cuenta lo propuesto por el autor, para que un proceso democrático tenga éxito, debe',
    opciones: [
      'tener en cuenta las condiciones específicas de la sociedad en que se efectúa.',
      'seguir al pie de la letra el ejemplo de los Estados donde ya lo han conseguido.',
      'instaurarse al margen del contexto en el cual ha de desarrollarse.',
      'comenzar como un régimen totalitario que asegure su eficiencia.'
    ],
    respuesta: 1,
    requiereImagen: true,
    imagen: 'sociales_9.png'
  },
  {
    materia: 'Sociales',
    texto: 'Teniendo en cuenta lo anterior, un ejemplo de una práctica de guerra que respeta los convenios de Ginebra es',
    opciones: [
      'el uso de civiles como escudos ante un ataque de la contraparte.',
      'la lectura de derechos a un rival capturado durante un combate.',
      'el uso de la tortura si la contraparte recurre primero a ella.',
      'los fusilamientos a los desertores y traidores del grupo.'
    ],
    respuesta: 1,
    requiereImagen: true,
    imagen: 'sociales_10.png'
  },
  {
    materia: 'Sociales',
    texto: 'Teniendo en cuenta el texto, una consecuencia de la aplicación del capítulo tres de los convenios de Ginebra es',
    opciones: [
      'la reducción de los conflictos internos en Colombia.',
      'la victoria de las fuerzas que se oponen al Estado.',
      'el respeto de los Derechos Humanos en el conflicto.',
      'la conversión de la guerra en un conflicto internacional.'
    ],
    respuesta: 2,
    requiereImagen: true,
    imagen: 'sociales_10.png'
  },
  {
    materia: 'Sociales',
    texto: 'Teniendo en cuenta lo anterior, ambas posturas se oponen porque',
    opciones: [
      'el Gobierno rechaza todo el informe, mientras otros sectores lo acogen totalmente.',
      'el Gobierno duda de la idoneidad de la CIDH, mientras otros grupos reconocen su experiencia en la materia.',
      'el Gobierno prefiere tomar decisiones autónomas, mientras otros grupos prefieren imitar a otros países.',
      'el Gobierno cuestiona aspectos del informe, mientras otros grupos acogen casi todo su contenido.'
    ],
    respuesta: 3,
    requiereImagen: true,
    imagen: 'sociales_11.png'
  },
  {
    materia: 'Sociales',
    texto: 'Teniendo en cuenta lo anterior, ¿en cuál de los siguientes casos no puede intervenir la Cruz Roja Colombiana?',
    opciones: [
      'La asistencia médica a un grupo de secuestrados.',
      'El acompañamiento a procesos políticos que buscan la paz.',
      'El acompañamiento a la reconstrucción tras un huracán.',
      'La atención nutricional de la población civil durante un combate.'
    ],
    respuesta: 1,
    requiereImagen: true,
    imagen: 'sociales_12.png'
  },
  // Inglés (reales)
  {
    materia: 'Inglés',
    texto: '¿Dónde puede ver estos avisos?',
    opciones: [
      'at a department store',
      'at the police station',
      'in a clothing store'
    ],
    respuesta: 0,
    requiereImagen: true,
    imagen: 'ingles_1.png'
  },
  {
    materia: 'Inglés',
    texto: '¿Dónde puede ver estos avisos?',
    opciones: [
      'in a movie theater',
      'at the swimming pool',
      'in a flower shop'
    ],
    respuesta: 0,
    requiereImagen: true,
    imagen: 'ingles_2.png'
  },
  {
    materia: 'Inglés',
    texto: '¿Dónde puede ver estos avisos?',
    opciones: [
      'On a board.',
      'On a computer.',
      'On a bookcase.'
    ],
    respuesta: 2,
    requiereImagen: true,
    imagen: 'ingles_3.png'
  },
  {
    materia: 'Inglés',
    texto: '¿Dónde puede ver estos avisos?',
    opciones: [
      'In a park.',
      'In a theater.',
      'In a pool.'
    ],
    respuesta: 1,
    requiereImagen: true,
    imagen: 'ingles_4.png'
  },
  {
    materia: 'Inglés',
    texto: '¿Dónde puede ver estos avisos?',
    opciones: [
      'In a toy store.',
      'In a library.',
      'On a rug.'
    ],
    respuesta: 1,
    requiereImagen: true,
    imagen: 'ingles_5.png'
  },
  {
    materia: 'Inglés',
    texto: 'How much is it?',
    opciones: [
      'It is a quarter past two.',
      'Incredible.',
      "It's $4.40."
    ],
    respuesta: 2,
    requiereImagen: true,
    imagen: 'ingles_6.png'
  },
  {
    materia: 'Inglés',
    texto: 'How do you turn on the computer?',
    opciones: [
      'It is the best computer.',
      'Press the button.',
      'Certainly, anything else?'
    ],
    respuesta: 1,
    requiereImagen: true,
    imagen: 'ingles_6.png'
  },
  {
    materia: 'Inglés',
    texto: 'How often do you do exercise?',
    opciones: [
      'Every Monday.',
      'I often do the cleaning.',
      'I used to exercise twice a week.'
    ],
    respuesta: 0,
    requiereImagen: true,
    imagen: 'ingles_6.png'
  },
  {
    materia: 'Inglés',
    texto: 'How long were you married to John?',
    opciones: [
      'A couple of years.',
      'Yes, it took a lot of time.',
      'I loved him very much.'
    ],
    respuesta: 0,
    requiereImagen: true,
    imagen: 'ingles_6.png'
  },
  {
    materia: 'Inglés',
    texto: 'How many people were in the cafe?',
    opciones: [
      'Almost 40 kilometers.',
      'In the evenings.',
      'A few.'
    ],
    respuesta: 2,
    requiereImagen: true,
    imagen: 'ingles_6.png'
  },
  {
    materia: 'Inglés',
    texto: 'When Professor James woke up, what was surrounding him?',
    opciones: [
      'rocks.',
      'mountains.',
      'dinosaurs.'
    ],
    respuesta: 0,
    requiereImagen: true,
    imagen: 'ingles_7.png'
  },
  {
    materia: 'Inglés',
    texto: 'The author originally refers to the Velociraptors as',
    opciones: [
      'dinosaurs.',
      'alligators.',
      'giant lizards.'
    ],
    respuesta: 2,
    requiereImagen: true,
    imagen: 'ingles_7.png'
  },
  {
    materia: 'Inglés',
    texto: 'On how many feet did the Velociraptors walk?',
    opciones: [
      '2.',
      '4.',
      '6.'
    ],
    respuesta: 0,
    requiereImagen: true,
    imagen: 'ingles_7.png'
  },
  {
    materia: 'Inglés',
    texto: 'James had ______ Velociraptors before',
    opciones: [
      'seen',
      'read about',
      'found'
    ],
    respuesta: 1,
    requiereImagen: true,
    imagen: 'ingles_7.png'
  },
  {
    materia: 'Inglés',
    texto: 'How many Velociraptors did James see?',
    opciones: [
      '5',
      '6',
      '7'
    ],
    respuesta: 1,
    requiereImagen: true,
    imagen: 'ingles_7.png'
  },
  {
    materia: 'Inglés',
    texto: 'The size of the tyrannosaurus was',
    opciones: [
      'very small',
      'close to the size of a human',
      'very big'
    ],
    respuesta: 2,
    requiereImagen: true,
    imagen: 'ingles_7.png'
  },
  {
    materia: 'Inglés',
    texto: 'How was the Professor saved from the attack of the dinosaurs?',
    opciones: [
      'He fought with the Velociraptors.',
      'He ran away.',
      'Another dinosaur appeared.'
    ],
    respuesta: 2,
    requiereImagen: true,
    imagen: 'ingles_7.png'
  },
  {
    materia: 'Inglés',
    texto: '¿Dónde puede ver estos avisos?',
    opciones: [
      "On the manager's door",
      'In a restaurant',
      'At the cinema'
    ],
    respuesta: 0,
    requiereImagen: true,
    imagen: 'ingles_8.png'
  },
  {
    materia: 'Inglés',
    texto: '¿Dónde puede ver estos avisos?',
    opciones: [
      'At the cinema',
      'On a playground',
      'In the pedestrian street'
    ],
    respuesta: 1,
    requiereImagen: true,
    imagen: 'ingles_9.png'
  },
  {
    materia: 'Inglés',
    texto: '¿Dónde puede ver estos avisos?',
    opciones: [
      'At the garden.',
      'At the zoo.',
      'At the church.'
    ],
    respuesta: 1,
    requiereImagen: true,
    imagen: 'ingles_10.png'
  },
];

// Texto enunciado para ejercicios 6 al 10 de Lectura crítica
const enunciadoFürElise = `FÜR ELISE \nDesde que bajé del autobús comencé a escuchar los acordes del piano. Los escuché mientras daba vuelta a la ·manzana buscando la entrada de la mansión. En el sendero del jardín escuché, con mayor intensidad, los arpegios, las escalas y bemoles. Entonces vi por primera vez a la señora Elisa. Estaba de pie, junto a la puerta de la casa con los brazos cruzados. Parecía estar de mal humor por mi demora. Me había contratado para que le hiciera un retrato al óleo. Mientras me conducía al estudio de pintura, pasamos por desolados aposentos recargados con adornos coloniales, utensilios de cerámica prehispánica, cuadros de pintores contemporáneos, bibliotecas con todas las partituras de Beethoven y los libros de la enciclopedia Británica. Sin embargo en ningún lugar había un ser humano. Ella parecía habitar solitaria ese extenso jardín que ningún pie hollaba, esa colección de muebles donde nadie descansaba, esos salones que permanecían vacíos. Entonces pasamos Junto a la puerta de la sala de música. Me detuve un instante a ver al anónimo pianista que tocaba con los ojos cerrados, mientras deslizaba sus dedos por el teclado con una facilidad envidiable. El músico abrió los ojos y regresó a mirarme suplicante, como un condenado a muerte en espera de un milagro. En ese instante la señora El isa dio dos golpecitos en el piso con su zapato y me hizo seguirla hasta un estudio situado al norte de la casa donde me aguardaba el caballete. Era un lugar agradable con una claraboya por donde entraba la luz de la mañana. Abrí mi estuche con los óleos, los pinceles, la paleta y olvidé al pianista cuya música continuó sin interrupciones hasta el anochecer. Trabajé todo el día en el retrato. Doña Elisa posaba frente a mí en silencio, cosa que agradecí, pero a medida que avanzaba, "escrutar" su impenetrable rostro resultaba cada vez más difícil. No me dio respiro ni siquiera para comer y a las seis de la tarde me llevó al dormitorio de huéspedes. El pianista venía en ese momento por el corredor y escurrió un papel entre mi mano sin que la señora Elisa lo notara. Sentado en la cama leí el mensaje. Era escueto y alarmante, contenía cinco palabras: Estoy atrapado, ayúdeme por favor. A la mañana siguiente, mientras escuchaba la primera sonata del día, traté de encontrar algún sentido a esa nota de auxilio. Al poco rato vino la señora Elisa a buscarme para continuar mi labor. Cuando pasamos frente a la sala de música, doña Elisa cerró la puerta. Me pareció escuchar un error en la interpretación, pero tal vez fue solo imaginación mía. En todo caso fue lo último que percibí antes de ser encerrado en el estudio de la torre norte, rodeado de pinceles, óleos y lienzos, bajo la hermosa claraboya por donde todas las mañanas entra la luz del sol. Esto sucedió hace algunos años. Sin embargo lo recuerdo con toda nitidez porque desde entonces no he hecho otra cosa que intentar satisfacer a doña Elisa, sin éxito. Y pintar y pintar esclavo de este caballete, escuchando, a toda hora, una sonata de Beethoven interpretada por otro esclavo.\n\n`;

preguntas.forEach((preg, idx) => {
  if (
    preg.materia === 'Lectura crítica' &&
    idx >= preguntas.findIndex(p => p.materia === 'Lectura crítica') + 5 &&
    idx <= preguntas.findIndex(p => p.materia === 'Lectura crítica') + 9
  ) {
    preg.texto = enunciadoFürElise + preg.texto;
  }
});

// Texto enunciado para ejercicios 11 al 14 de Lectura crítica
const enunciadoFutbolista = `El famoso delantero del Real Madrid C.F. no solo destaca por su buen hacer futbolístico, sino por sus actitudes y comentarios chulescos y desafiantes. Criticado en muchos terrenos de juego, emplea una estrategia defensiva errónea, tirando hacia adelante y enfrentándose a todo el mundo.
Tras recibir las burlas de sus compañeros de clase por su marcado acento de Madeira, se centró en el mundo del fútbol, comenzando su carrera en el C.D. Nacional e incorporándose al poco tiempo al Sporting de Lisboa, con el que debutó en la máxima categoría con tan solo 16 años. Su obsesión por la perfección y a modo de escape psicológico, comenzó a entrenar duramente en el gimnasio y sobre el campo de fútbol para lograr un físico inmejorable. Su pose más común es presentar sus hombros y cabeza hacia atrás, mostrando su pecho y mentón, indicando que posee una gran confianza en sí mismo. Es una imitación de la conducta que tienen aprendida algunos animales para parecer más grandes y evitar ser atacados cuando se sienten vulnerables. Su sonrisa de medio lado ante preguntas incómodas, es un gesto que suele indicar arrogancia y desprecio. Debido a que es conocedor de que causa antipatía en algunas personas, suele mostrar esta mueca, reforzando así un bucle continuo de desagrado mutuo. Sus cejas depiladas e impolutas, y su pelo siempre bien peinado, muestran su tendencia a querer agradar a las personas y una preocupación por cómo se muestra ante la gente. Sus dos pendientes indican que es alguien superficial al que le gusta la opulencia y mostrar que tiene una gran cantidad de enseres.\n\n`;

preguntas.forEach((preg, idx) => {
  if (
    preg.materia === 'Lectura crítica' &&
    idx >= preguntas.findIndex(p => p.materia === 'Lectura crítica') + 10 &&
    idx <= preguntas.findIndex(p => p.materia === 'Lectura crítica') + 13
  ) {
    preg.texto = enunciadoFutbolista + preg.texto;
  }
});

function exportarResultados(preguntas, respuestas, datos) {
  const filas = preguntas.map((preg, idx) => {
    const correcta = respuestas[idx] === preg.respuesta;
    // Solo exporto la pregunta principal (última línea)
    const preguntaCorta = preg.texto.split('\n').filter(Boolean).pop();
    return `"${preg.materia}","${preguntaCorta.replace(/"/g, '""')}","${preg.opciones[respuestas[idx]] ?? ''}","${preg.opciones[preg.respuesta]}","${correcta ? 'Correcta' : 'Incorrecta'}"`;
  });
  const encabezado = 'Materia,Pregunta,Respuesta seleccionada,Respuesta correcta,Estado';
  // Agrego BOM UTF-8 al inicio para compatibilidad con Excel
  const info = `Nombre:,"${datos.nombre}"
Identificación:,"${datos.identificacion}"
Institución:,"${datos.institucion}"
\n`;
  const csv = '\uFEFF' + info + [encabezado, ...filas].join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'resultados_examen.csv';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function App() {
  const [datos, setDatos] = useState({ nombre: '', identificacion: '', institucion: '' });
  const [errores, setErrores] = useState({});
  const [datosCompletos, setDatosCompletos] = useState(false);
  const [actual, setActual] = useState(0);
  const [respuestas, setRespuestas] = useState(Array(preguntas.length).fill(null));
  const [enviado, setEnviado] = useState(false);

  const handleChangeDatos = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const validarDatos = () => {
    const nuevosErrores = {};
    if (!datos.nombre.trim()) nuevosErrores.nombre = 'El nombre es obligatorio';
    if (!datos.identificacion.trim()) nuevosErrores.identificacion = 'La identificación es obligatoria';
    if (!datos.institucion.trim()) nuevosErrores.institucion = 'La institución es obligatoria';
    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleIniciar = (e) => {
    e.preventDefault();
    if (validarDatos()) setDatosCompletos(true);
  };

  const handleOpcion = (opcionIdx) => {
    const nuevas = [...respuestas];
    nuevas[actual] = opcionIdx;
    setRespuestas(nuevas);
  };

  const handleAnterior = () => setActual((prev) => Math.max(prev - 1, 0));
  const handleSiguiente = () => setActual((prev) => Math.min(prev + 1, preguntas.length - 1));

  const handleEnviar = () => setEnviado(true);

  const puntaje = respuestas.reduce((acc, r, idx) => r === preguntas[idx].respuesta ? acc + 1 : acc, 0);

  // Calculo los aciertos por materia
  const materias = Array.from(new Set(preguntas.map(p => p.materia)));
  const resumenMaterias = materias.map(materia => {
    const indices = preguntas.map((p, i) => p.materia === materia ? i : -1).filter(i => i !== -1);
    const total = indices.length;
    const correctas = indices.filter(i => respuestas[i] === preguntas[i].respuesta).length;
    return { materia, correctas, total, promedio: (correctas / total * 100).toFixed(1) };
  });

  return (
    <div className="container py-4">
      <div className="text-center mb-4">
        <img src={logo} alt="Logo" style={{maxWidth: 280, height: 'auto'}} className="mb-2 rounded shadow" />
      </div>
      {!datosCompletos ? (
        <>
          <div className="alert alert-info text-center mb-4" style={{maxWidth: 600, margin: '0 auto'}}>
            Bienvenido al simulacro para las pruebas Saber 11. A continuación encontrarás un examen con preguntas de diferentes materias. Responde cuidadosamente cada una y al final podrás ver tu puntaje y análisis por materia.
          </div>
          <form className="card shadow p-4 mx-auto mb-4" style={{maxWidth: 500}} onSubmit={handleIniciar}>
            <h2 className="mb-3">Datos del estudiante</h2>
            <div className="mb-3">
              <label className="form-label">Nombre completo</label>
              <input type="text" className={`form-control${errores.nombre ? ' is-invalid' : ''}`} name="nombre" value={datos.nombre} onChange={handleChangeDatos} />
              {errores.nombre && <div className="invalid-feedback">{errores.nombre}</div>}
            </div>
            <div className="mb-3">
              <label className="form-label">Número de identificación</label>
              <input type="text" className={`form-control${errores.identificacion ? ' is-invalid' : ''}`} name="identificacion" value={datos.identificacion} onChange={handleChangeDatos} />
              {errores.identificacion && <div className="invalid-feedback">{errores.identificacion}</div>}
            </div>
            <div className="mb-3">
              <label className="form-label">Institución educativa</label>
              <input type="text" className={`form-control${errores.institucion ? ' is-invalid' : ''}`} name="institucion" value={datos.institucion} onChange={handleChangeDatos} />
              {errores.institucion && <div className="invalid-feedback">{errores.institucion}</div>}
            </div>
            <button type="submit" className="btn btn-primary w-100">Comenzar examen</button>
          </form>
        </>
      ) : enviado ? (
        <div className="resultado card shadow p-4 mb-4">
          <h2 className="mb-3 text-success">¡Examen finalizado!</h2>
          <p className="lead">Tu puntaje: <b>{puntaje}</b> de {preguntas.length}</p>
          <button className="btn btn-outline-primary mb-4" onClick={() => exportarResultados(preguntas, respuestas, datos)}>Exportar resultados</button>
          {/* Tabla de promedios por materia */}
          <div className="table-responsive mb-4">
            <table className="table table-bordered table-striped w-auto mx-auto">
              <thead className="table-light">
                <tr>
                  <th>Materia</th>
                  <th>Correctas</th>
                  <th>Total</th>
                  <th>Promedio (%)</th>
                </tr>
              </thead>
              <tbody>
                {resumenMaterias.map((m, idx) => (
                  <tr key={idx}>
                    <td>{m.materia}</td>
                    <td>{m.correctas}</td>
                    <td>{m.total}</td>
                    <td style={{color: Number(m.promedio) > 50 ? 'green' : undefined, fontWeight: 'bold'}}>{m.promedio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ol className="list-group list-group-numbered mx-auto" style={{maxWidth: 600}}>
            {preguntas.map((preg, idx) => {
              const correcta = respuestas[idx] === preg.respuesta;
              return (
                <li key={idx} className={`list-group-item d-flex flex-column align-items-start ${correcta ? 'list-group-item-success' : 'list-group-item-danger'}`}>
                  <div className="fw-bold pregunta-principal">{preg.texto.split('\n').filter(Boolean).pop()}</div>
                  <div>Tu respuesta: <b>{preg.opciones[respuestas[idx]] ?? 'Sin responder'}</b></div>
                  <div>Respuesta correcta: <b>{preg.opciones[preg.respuesta]}</b></div>
                  <span className={`badge mt-2 ${correcta ? 'bg-success' : 'bg-danger'}`}>{correcta ? 'Correcta' : 'Incorrecta'}</span>
                </li>
              );
            })}
          </ol>
        </div>
      ) : (
        <div className="pregunta-bloque card shadow p-4">
          <h2 className="mb-3">Pregunta {actual + 1} de {preguntas.length}</h2>
          <div className="mb-2"><span className="badge bg-info text-dark">{preguntas[actual].materia}</span></div>
          {preguntas[actual].requiereImagen && (
            preguntas[actual].imagen ? (
              <div className="text-center mb-3">
                <img
                  src={`/src/assets/${preguntas[actual].imagen}`}
                  alt="Imagen de apoyo"
                  style={{maxWidth: '100%', maxHeight: 500, objectFit: 'contain'}}
                  className="img-fluid"
                />
              </div>
            ) : (
              <div className="alert alert-warning py-2">
                Esta pregunta requiere analizar una imagen. (Aquí se puede mostrar la imagen correspondiente)
              </div>
            )
          )}
          <p className="mb-4 pregunta-principal" style={{whiteSpace: 'pre-line'}}>{preguntas[actual].texto}</p>
          <div className="opciones mb-4">
            {preguntas[actual].opciones.map((op, idx) => (
              <label key={idx} className={`opcion form-check mb-2 ${respuestas[actual] === idx ? 'fw-bold text-primary' : ''}`}>
                <input
                  className="form-check-input me-2"
                  type="radio"
                  name={`pregunta-${actual}`}
                  checked={respuestas[actual] === idx}
                  onChange={() => handleOpcion(idx)}
                  disabled={enviado}
                />
                {op}
              </label>
            ))}
          </div>
          <div className="navegacion d-flex gap-2 justify-content-center">
            <button className="btn btn-secondary" onClick={handleAnterior} disabled={actual === 0}>Anterior</button>
            <button className="btn btn-primary" onClick={handleSiguiente} disabled={actual === preguntas.length - 1 || respuestas[actual] === null}>Siguiente</button>
            <button className="btn btn-success" onClick={handleEnviar} disabled={respuestas.includes(null)}>Enviar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
