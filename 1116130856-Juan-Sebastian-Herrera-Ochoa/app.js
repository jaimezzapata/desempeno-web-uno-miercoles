
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
    } else {
        console.log("Stock insuficiente para completar la venta.")
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

