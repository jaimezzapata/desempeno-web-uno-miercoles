# Actividad Evaluativa: "Gestor de Inventario de Tienda"
## Objetivo del proyecto

Crear un script que simule la gestión básica del inventario de una tienda. A través de este proyecto, aplicarás tus conocimientos sobre funciones, parámetros, condicionales y ciclos en JavaScript para controlar el stock de un producto, procesar ventas y generar reportes simples en la consola.

---
## Requisitos a evaluar

-   **Funciones**: Uso correcto de funciones declarativas, de expresión y de tipo flecha.
-   **Parámetros y Argumentos**: Enviar y recibir datos para modificar el estado del inventario.
-   **Condicionales**: Implementar `if`, `else`, `else if` y `switch` para tomar decisiones sobre el stock y las ventas.
-   **Ciclos**: Utilizar `for`, `while` o `do-while` para simular procesos repetitivos como la revisión de inventario o ventas múltiples.
-   **Control de Versiones (Git)**: Documentar el progreso del proyecto a través de commits claros y descriptivos.

---

# Guía de Desarrollo Paso a Paso

Sigue estas fases en orden. Al finalizar cada una, deberás realizar un commit en Git con un mensaje que describa el avance logrado.

## Fase 1: Configuración del Inventario

En esta fase, definiremos el producto que vamos a gestionar y crearemos las funciones básicas para consultar su estado.

### Prepara tu entorno:
-   Forkear este repositorio
-   Clonar este repositorio
-   En el repositorio clonado vas a crear una carpeta llamada asi: CC- NOMBRE-COMPLETO
    - CC: Documento de identidad
    - NOMBRE-COMPLETO: Su nombre completo
-   Dentro, crea un archivo `index.html` y un archivo `app.js`.
-   Enlaza `app.js` en tu archivo `index.html`.

### Define las variables del producto:
-   En `app.js`, declara tres variables: `nombreProducto` (asígnale un string, ej: "Laptop Gamer"), `stockProducto` (inicia en 10) y `precioProducto` (inicia en 1500).
### Crea la función para mostrar inventario (Función Declarativa):
-   Desarrolla una función declarativa llamada `mostrarInventario()`.
-   Esta función no recibirá parámetros.
-   Su única tarea será mostrar en la consola la información del producto de forma clara, por ejemplo: `Producto: Laptop Gamer | Stock: 10 unidades | Precio: $1500`.
### ✅ Entrega 1:
-   Llama a la función `mostrarInventario()` al final de tu código para verificar que funciona.
-   Realiza tu primer commit en Git: `git add .` y `git commit -m "Fase 1: Configuración inicial del producto y su inventario"`.
---

## Fase 2: Gestión de Stock y Ventas
Ahora, vamos a crear las funciones que nos permitirán modificar el inventario a través de compras y ventas.
### Crea la función para registrar una venta (Función de Expresión):
-   Crea una función de expresión asignada a una constante llamada `registrarVenta`.
-   Debe aceptar un parámetro: `cantidadVendida`.
-   **Condicional simple**: Dentro de la función, primero comprueba si `cantidadVendida` es menor o igual al `stockProducto`.
-   Si hay stock suficiente, resta la cantidad vendida al `stockProducto` y muestra un mensaje en consola: `"Venta exitosa. Se vendieron [cantidad] unidades de [producto]. Stock restante: [stock]"`.
### Crea la función para reponer stock (Función Flecha):
-   Crea una función flecha asignada a una constante llamada `reponerStock`.
-   Debe aceptar un parámetro: `cantidadRepuesta`.
-   Dentro, simplemente incrementa el `stockProducto` con la `cantidadRepuesta`.
-   Muestra un mensaje en consola: `"Stock repuesto. Se añadieron [cantidad] unidades. Stock total: [stock]"`.
### ✅ Entrega 2:
-   Prueba tus funciones. Primero, llama a `registrarVenta(3)`. Luego, llama a `reponerStock(5)`.
-   Llama a `mostrarInventario()` al final para ver el estado actualizado.
-   Realiza tu segundo commit: `git commit -m "Fase 2: Implementadas funciones para registrar ventas y reponer stock"`.
---

## Fase 3: Lógica de Negocio y Alertas
En esta fase, añadiremos lógica más compleja para gestionar el inventario de forma más inteligente.
### Simula varias ventas (Ciclo `for`):
-   Crea una función flecha `simularVentas(numeroDeVentas)`.
-   Dentro, usa un ciclo `for` que se repita `numeroDeVentas` veces.
-   En cada iteración, llama a tu función `registrarVenta(1)` para simular la venta de una unidad.
### Crea una función de alerta de stock (Condicional anidado y compuesto):
-   Crea una función declarativa llamada `revisarStock()`.
-   **Condicional compuesto**: Si el `stockProducto` es 0, muestra un mensaje crítico: `"ALERTA CRÍTICA: Producto agotado."`.
-   **Condicional `else if`**: Si el `stockProducto` es menor a 5 pero mayor que 0, muestra una advertencia: `"Advertencia: Stock bajo. Quedan solo [stock] unidades."`.
-   **Condicional anidado**: Dentro de esta condición, si además el `precioProducto` es mayor a 1000, añade un mensaje: `"Este es un producto de alto valor. Sugerir reposición inmediata."`.
-   **`else`**: Si no se cumple ninguna de las anteriores, muestra: `"El stock del producto se encuentra en un nivel saludable."`.
### ✅ Entrega 3:
-   Llama a `simularVentas(7)` para reducir significativamente el stock.
-   Después, llama a `revisarStock()` para obtener el diagnóstico del inventario.
-   Realiza tu tercer commit: `git commit -m "Fase 3: Añadida simulación de ventas y alertas de stock"`.

---

## Fase 4: Clasificación de Producto y Ciclo de Gestión
Para finalizar, crearemos una clasificación del producto y un ciclo que simule una jornada de trabajo.
### Clasifica el producto (Condicional múltiple `switch`):
-   Crea una función `clasificarProducto()`.
-   Dentro, utiliza un `switch(true)` para clasificar el producto según su precio:
    -   `case precioProducto > 2000`: -> Muestra `"Clasificación: Producto Premium"`.
    -   `case precioProducto > 500`: -> Muestra `"Clasificación: Producto de Gama Media"`.
    -   `default`: -> Muestra `"Clasificación: Producto de Entrada"`.
### Crea el ciclo de gestión (Ciclo `do-while`):
-   Usa un ciclo `do-while` para simular una jornada de gestión mientras el stock no esté agotado.
-   La condición del `while` será `stockProducto > 0`.
-   Dentro del ciclo `do`:
    -   Muestra el inventario (`mostrarInventario()`).
    -   Revisa el stock (`revisarStock()`).
    -   Registra una venta de una unidad (`registrarVenta(1)`).
    -   Imprime una línea separadora en la consola (`console.log("--- Fin del ciclo de revisión ---");`) para que sea fácil de leer.
-   Cuando el ciclo termine (porque el stock llegó a 0), muestra un mensaje final: `"Fin de la jornada. El producto se ha agotado."`.
### ✅ Entrega Final:
-   Asegúrate de que tu código esté organizado y que el ciclo `do-while` funcione correctamente hasta agotar el stock.
-   Llama a `clasificarProducto()` una vez al inicio para ver su categoría.
-   Realiza tu último commit: `git commit -m "Fase 4: Implementado ciclo de gestión y clasificación de producto"`.