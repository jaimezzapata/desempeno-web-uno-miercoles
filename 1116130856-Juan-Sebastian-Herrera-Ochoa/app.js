
// Variables solicitadas
let nombreProducto = "Laptop Gamer"
let stockProducto = 10
let precioProducto = 1500

// Función para mostrar el inventario
function mostrarInventario() {
    console.log("Producto: " + nombreProducto)
    console.log("Stock: " + stockProducto)
    console.log("Precio: $" + precioProducto)
}

// Llamada a la función para mostrar el inventario
mostrarInventario()

// Función para registrar una venta
const registrarVenta = function(cantidadVendida) {
    if (cantidadVendida <= stockProducto) {
        if (cantidadVendida >= stockProducto) {
            stockProducto -= cantidadVendida
            console.log("Venta exitosa. Se vendieron " + cantidadVendida + " unidades de " + nombreProducto + ". Stock restante: " + stockProducto)
        }
    }
}

// Función para reponer stock
const reponerStock = (cantidadRepuesta) => {
    stockProducto += cantidadRepuesta
    console.log("Stock repuesto. Se añadieron " + cantidadRepuesta + " unidades. Stock actual: " + stockProducto)
}

// Llamando la función registrarVenta
registrarVenta(3)
// Llamando la función reponerStock
reponerStock(5)
// Mostrar el inventario actualizado
mostrarInventario()

//función para simular varias ventas
const simularVentas = (numeroDeVentas) => {
    for (let i = 0; i < numeroDeVentas; i++) {
        registrarVenta(1)
    }
}

// función alerta de stock
function revisarStock() {
    if (stockProducto === 0) {
        console.log("ALERTA CRÍTICA: Producto agotado.")
    } else if (stockProducto < 5 && stockProducto > 0) {
        console.log("Advertencia: Stock bajo. Quedan solo " + stockProducto + " unidades.")
        if (precioProducto > 1000) {
            console.log("Este es un producto de alto valor. Sugerir reposición inmediata.")
        }
    } else console.log("El stock del producto se encuentra en un nivel saludable.")
}

// llamando la función simularVentas
simularVentas(7)

// llamando la función revisarStock
revisarStock()

// Clasificar producto por precio
function clasificarProducto() {
    switch (true) {
        case (precioProducto > 2000):
            console.log("Clasificación: Producto Premium")
            break
        case (precioProducto > 500):
            console.log("Clasificación: Producto de Gama Media")
            break
        default:
            console.log("Clasificación: Producto de Entrada")
    }
}

clasificarProducto()

do {
    mostrarInventario()
    revisarStock()
    registrarVenta(1)
    console.log("--- Fin del ciclo de revisión ---")
} while (stockProducto <= 0)
console.log("Fin de la jornada. El producto se ha agotado.")


