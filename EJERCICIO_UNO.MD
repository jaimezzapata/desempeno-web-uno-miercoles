# Actividad Evaluativa: "Mi Mascota Virtual" 🐾

## Objetivo del proyecto

Desarrollar una simulación interactiva de una mascota virtual utilizando funciones y lógica de control en JavaScript. A través de este proyecto, demostrarás tu comprensión sobre la declaración y uso de funciones, el manejo de parámetros y la aplicación de estructuras condicionales y ciclos para crear un programa dinámico.

---

## Requisitos a evaluar
-   **Funciones**: Uso correcto de funciones declarativas, de expresión y de tipo flecha.
-   **Parámetros y Argumentos**: Enviar y recibir datos en las funciones para alterar el estado de la mascota.
-   **Condicionales**: Aplicar `if`, `else`, `else if` y `switch` para gestionar las decisiones y el estado de la mascota.
-   **Ciclos**: Utilizar `for`, `while` o `do-while` para simular el paso del tiempo o acciones repetitivas.
-   **Control de Versiones (Git)**: Documentar el progreso del proyecto a través de commits claros y descriptivos.

# Guía de Desarrollo Paso a Paso
Sigue estas fases en orden. Al finalizar cada una, deberás realizar un commit en Git con un mensaje que describa el avance logrado.

---

## Fase 1: Configuración Inicial y Estado de la Mascota
En esta primera etapa, crearemos la base de nuestro proyecto y definiremos las características principales de nuestra mascota.

### Prepara tu entorno:
-   Forkear este repositorio
-   Clonar este repositorio
-   En el repositorio clonado vas a crear una carpeta llamada asi: CC- NOMBRE-COMPLETO
    - CC: Documento de identidad
    - NOMBRE-COMPLETO: Su nombre completo
-   Dentro, crea un archivo `index.html` y un archivo `app.js`.
-   Enlaza `app.js` en tu archivo `index.html`.

### Define las variables de estado:
-   En `app.js`, declara tres variables para guardar el estado de tu mascota: `nombreMascota` (se depe pedir por consola), `hambre` (inicia en 50), `felicidad` (inicia en 50) y `energia` (inicia en 50). Estos valores representarán porcentajes.
### Crea la función para mostrar el estado (Función Declarativa):
-   Desarrolla una función declarativa llamada `mostrarEstado()`.
-   Esta función no recibirá parámetros.
-   Su única tarea será mostrar en la consola el estado actual de la mascota, por ejemplo: `"Hambre: 50 | Felicidad: 50 | Energía: 50"`.
### ✅ Entrega 1:
-   Llama a la función `mostrarEstado()` al final de tu código para verificar que funciona.
-   Realiza tu primer commit en Git: `git add .` y `git commit -m "Fase 1: Configuración inicial y estado de la mascota completado"`.
## Fase 2: Acciones Básicas de la Mascota
Ahora, vamos a darle vida a nuestra mascota permitiendo que interactúe con nosotros.
### Crea la función para alimentar (Función de Expresión):
-   Crea una función de expresión asignada a una constante llamada `alimentar`.
-   Esta función debe aceptar un parámetro: `puntosHambre`.
-   Dentro de la función, incrementa la variable `hambre` con el valor de `puntosHambre`.
-   **Condicional simple**: Si el `hambre` supera 100, asígnale el valor de 100 para que no sobrepase el límite.
-   Al final, muestra un mensaje en consola, como `"¡Qué rico! Hambre ahora en: [valor]"`.
### Crea la función para jugar (Función Flecha):
-   Crea una función flecha asignada a una constante llamada `jugar`.
-   Debe aceptar un parámetro: `puntosFelicidad`.
-   Dentro, incrementa la `felicidad` con el valor de `puntosFelicidad` y reduce la `energia` en 10 puntos.
-   **Condicional compuesto**: Verifica si la `felicidad` supera 100 (la ajustas a 100) y si la `energia` es menor a 0 (la ajustas a 0).
-   Muestra un mensaje como `"¡A jugar! Felicidad: [valor], Energía: [valor]"`.
### ✅ Entrega 2:
-   Prueba tus nuevas funciones llamándolas con diferentes valores (argumentos). Por ejemplo: `alimentar(30)` y `jugar(25)`.
-   Llama a `mostrarEstado()` al final para ver el resultado global.
-   Realiza tu segundo commit: `git commit -m "Fase 2: Implementadas funciones para alimentar y jugar"`.
---

## Fase 3: Lógica de Supervivencia y Decisiones
La mascota ahora tomará "decisiones" basadas en su estado.
### Simula el paso del tiempo (Ciclo `for`):
-   Crea una función flecha `simularPasoDelTiempo(horas)`.
-   Dentro, usa un ciclo `for` que se repita tantas veces como el número de `horas` recibidas.
-   En cada "hora" (iteración), reduce `hambre` en 5, `felicidad` en 3 y `energia` en 2.
-   Muestra un mensaje en consola por cada hora que pasa.
### Verifica el estado de la mascota (Condicional anidado y múltiple):
-   Crea una función declarativa `revisarEstado()`.
-   **Condicional anidado**:
    -   Si `hambre` es menor a 20, muestra un mensaje de advertencia: `"¡Tengo mucha hambre!"`.
    -   Dentro de esa condición, si además la `energia` es menor a 15, muestra: `"Y estoy muy cansado..."`.
-   **Condicional múltiple (`switch`)**:
    -   Utiliza un `switch` basado en un valor numérico que represente el nivel de felicidad. Por ejemplo, si `felicidad` es mayor a 80, el caso es 1; si está entre 50 y 80, el caso es 2, etc.
    -   `case 1`: (Felicidad alta) -> Muestra un mensaje `"¡Estoy muy feliz! :D"`.
    -   `case 2`: (Felicidad media) -> Muestra `"Me siento bien, pero podríamos jugar."`.
    -   `case 3`: (Felicidad baja) -> Muestra `"Me siento un poco triste..."`.
    -   `default`: -> Muestra `"Necesito atención."`.
### ✅ Entrega 3:
-   Llama a `simularPasoDelTiempo(5)` para ver cómo cambia el estado.
-   Después, llama a `revisarEstado()` para obtener el diagnóstico de la mascota.
-   Realiza tu tercer commit: `git commit -m "Fase 3: Añadida simulación del tiempo y lógica de estado"`.
---

## Fase 4: El Ciclo de Vida de la Mascota (Ciclo `while`)
Finalmente, crearemos un ciclo principal que mantenga viva a la mascota hasta que una condición se cumpla.
### Crea el ciclo principal de vida:
-   Crea una variable `mascotaViva` e inicialízala en `true`.
-   Usa un ciclo `while (mascotaViva)` para ejecutar la simulación.
-   Dentro del ciclo:
    -   Llama a `mostrarEstado()`.
    -   Llama a `revisarEstado()`.
    -   Reduce los valores de `hambre`, `felicidad` y `energia` en pequeñas cantidades (simulando que pasa el tiempo).
    -   **Condición de salida**: Si el `hambre` llega a 0 o la `felicidad` llega a 0, cambia `mascotaViva` a `false` y muestra un mensaje de `"Juego terminado"`.
-   **Nota**: Para evitar un ciclo infinito, puedes agregar una acción del "usuario" (como llamar a `alimentar` o `jugar`) o simplemente limitar las iteraciones con un contador. Para esta evaluación, es suficiente con que el ciclo se detenga cuando una estadística llegue a cero.
### ✅ Entrega Final:
-   Organiza tu código para que el `while` funcione correctamente.
-   Asegúrate de que todas las funciones se comunican bien entre sí.
-   Realiza tu último commit: `git commit -m "Fase 4: Ciclo de vida de la mascota implementado"`.