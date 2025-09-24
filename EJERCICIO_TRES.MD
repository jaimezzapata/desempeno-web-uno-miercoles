# Actividad Evaluativa: "El Viaje del Héroe" ⚔️
## Objetivo del proyecto

Desarrollar un simulador básico del progreso de un héroe de videojuego. Mediante este proyecto, demostrarás tu habilidad para usar funciones que definen las acciones del personaje, manejar su estado con parámetros y aplicar lógica condicional y cíclica para simular su aventura y crecimiento.

---
## Requisitos a evaluar
-   **Funciones**: Uso correcto de funciones declarativas, de expresión y de tipo flecha.
-   **Parámetros y Argumentos**: Enviar y recibir datos para alterar las estadísticas del héroe.
-   **Condicionales**: Implementar `if`, `else`, `else if` y `switch` para gestionar los resultados de las acciones.
-   **Ciclos**: Utilizar `for`, `while` o `do-while` para simular procesos como el entrenamiento o una secuencia de batallas.
-   **Control de Versiones (Git)**: Documentar el progreso del proyecto a través de commits claros y descriptivos.

---
# Guía de Desarrollo Paso a Paso
Sigue estas fases en orden. Al finalizar cada una, deberás realizar un commit en Git con un mensaje que describa el avance logrado.
## Fase 1: Creación del Héroe
En esta etapa inicial, estableceremos las características base de nuestro personaje y una forma de consultar su estado.
### Prepara tu entorno:
-   Forkear este repositorio
-   Clonar este repositorio
-   En el repositorio clonado vas a crear una carpeta llamada asi: CC- NOMBRE-COMPLETO
    - CC: Documento de identidad
    - NOMBRE-COMPLETO: Su nombre completo
-   Dentro, crea un archivo `index.html` y un archivo `app.js`.
-   Enlaza `app.js` en tu archivo `index.html`.
### Define las estadísticas del héroe:
-   En `app.js`, declara tres variables: `nombreHeroe` (dale el nombre que prefieras), `vidaHeroe` (inicia en 100) y `experienciaHeroe` (inicia en 0).
### Crea la función para mostrar estado (Función Declarativa):
-   Desarrolla una función declarativa llamada `mostrarEstado()`.
-   La función no recibirá parámetros.
-   Su propósito es mostrar en la consola las estadísticas actuales del héroe. Por ejemplo: `Héroe: [nombre] | Vida: 100 HP | Experiencia: 0 XP`.
### ✅ Entrega 1:
-   Llama a la función `mostrarEstado()` al final de tu código para comprobar su funcionamiento.
-   Realiza tu primer commit en Git: `git add .` y `git commit -m "Fase 1: Creación del héroe y su estado inicial"`.

---

## Fase 2: Acciones Básicas del Héroe
Ahora, le daremos a nuestro héroe la capacidad de realizar acciones que afecten sus estadísticas.
### Crea la función para recibir daño (Función de Expresión):
-   Crea una función de expresión asignada a una constante llamada `recibirDano`.
-   Esta función debe aceptar un parámetro: `cantidadDano`.
-   Dentro de la función, resta `cantidadDano` a la variable `vidaHeroe`.
-   **Condicional simple**: Si la vida del héroe llega a ser menor que 0, ajústala a 0 para que no muestre valores negativos.
-   Muestra un mensaje en consola, como `"El héroe recibió [cantidad] de daño. Vida restante: [vida]"`.
### Crea la función para ganar experiencia (Función Flecha):
-   Crea una función flecha asignada a una constante llamada `ganarExperiencia`.
-   Debe aceptar un parámetro: `cantidadExperiencia`.
-   Dentro, incrementa `experienciaHeroe` con la `cantidadExperiencia` recibida.
-   Muestra un mensaje en consola: `"¡El héroe ganó [cantidad] de experiencia! Total: [experiencia]"`.
### ✅ Entrega 2:
-   Prueba tus funciones. Llama a `recibirDano(25)` y luego a `ganarExperiencia(50)`.
-   Llama a `mostrarEstado()` al final para ver el resultado de las acciones.
-   Realiza tu segundo commit: `git commit -m "Fase 2: Implementadas funciones de daño y ganancia de experiencia"`.

---

## Fase 3: Lógica de Progreso y Niveles
En esta fase, el héroe podrá subir de nivel y su estado será evaluado con una lógica más compleja.
### Simula un entrenamiento (Ciclo `for`):
-   Crea una función flecha `entrenar(dias)`.
-   Dentro, usa un ciclo `for` que se repita por el número de `dias` recibidos.
-   En cada iteración, el héroe deberá ganar 5 puntos de experiencia. Llama a tu función `ganarExperiencia(5)` dentro del ciclo.
-   Al finalizar el ciclo, muestra un mensaje: `"Entrenamiento completado."`.
### Verifica el nivel del héroe (Condicional anidado y compuesto):
-   Crea una función declarativa `verificarNivel()`.
-   **Condicional `if-else if-else`**:
    -   Si `experienciaHeroe` es mayor a 100, muestra un mensaje: `"¡Felicidades! Has alcanzado el nivel de 'Maestro'."`.
    -   **Condicional anidado**: Dentro de esta condición, si `vidaHeroe` es menor a 50, añade el mensaje: `"Pero te encuentras débil. Sería prudente descansar."`.
    -   Si no, si `experienciaHeroe` es mayor a 30, muestra: `"Nivel alcanzado: 'Aventurero'. ¡Sigue así!"`.
    -   Si no, muestra: `"Nivel actual: 'Novato'."`.
### ✅ Entrega 3:
-   Llama a `entrenar(10)` para aumentar la experiencia del héroe.
-   Después, llama a `verificarNivel()` para ver su nuevo rango.
-   Realiza tu tercer commit: `git commit -m "Fase 3: Añadido sistema de entrenamiento y verificación de nivel"`.

---

## Fase 4: La Aventura y sus Recompensas
Para terminar, crearemos un ciclo que simule una aventura completa, donde el héroe enfrentará desafíos hasta alcanzar un objetivo o ser derrotado.
### Determina el tipo de enemigo (Condicional múltiple `switch`):
-   Crea una función `elegirEnemigo(tipo)`. El `tipo` será un número (1, 2 o 3).
-   Usa un `switch` basado en el `tipo` para decidir a qué enemigo se enfrenta el héroe:
    -   `case 1`: Llama a `recibirDano(10)` y muestra `"Te enfrentas a un Goblin débil."`.
    -   `case 2`: Llama a `recibirDano(25)` y muestra `"Un Orco te ha atacado."`.
    -   `case 3`: Llama a `recibirDano(50)` y muestra `"¡Peligro! Un Dragón aparece."`.
    -   `default`: Muestra `"No apareció ningún enemigo."`.
### Crea el ciclo de la aventura (Ciclo `while`):
-   Usa un ciclo `while` que se ejecute mientras la `vidaHeroe` sea mayor a 0.
-   Dentro del ciclo:
    -   Simula un encuentro. Llama a `elegirEnemigo()` con un número al azar (puedes poner 1, 2 o 3 directamente para probar).
    -   Después del combate, otorga experiencia llamando a `ganarExperiencia(15)`.
    -   Muestra el estado actualizado con `mostrarEstado()`.
    -   Imprime una línea separadora: `console.log("======================");`.
-   Cuando el ciclo termine (porque la vida llegó a 0), muestra un mensaje final: `"El héroe ha caído en batalla. Fin de la aventura."`.
### ✅ Entrega Final:
-   Organiza tu código para que el ciclo `while` se ejecute correctamente.
-   Asegúrate de que el héroe recibe daño y gana experiencia en cada paso de la aventura.
-   Realiza tu último commit: `git commit -m "Fase 4: Implementado el ciclo de aventura con selección de enemigos"`.