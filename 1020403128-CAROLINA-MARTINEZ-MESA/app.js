let nombreProducto = "Monstera deliciosa variegada";
let stockProducto = 10;
let precioProducto = 1500;

function mostrarInventario() {
    console.log("Producto: " + nombreProducto + ", Stock: " + stockProducto + ", Precio: $ " + precioProducto);
    
    
}
mostrarInventario();

let registrarVenta = function( cantidadVendida) {
    if (cantidadVendida <= stockProducto) {
        stockProducto -= cantidadVendida;
        console.log("Venta exitosa. Se vendieron: "+cantidadVendida + " unidades de: " + nombreProducto +"  Stock restante: " +stockProducto);
    } else {
        console.log(" No hay suficiente stock para completar la venta.");
    }

    
}


const reponerStock = (cantidadRepuesta) => {
    stockProducto += cantidadRepuesta;
    console.log("Stock repuesto. Se añadieron " + cantidadRepuesta + " unidades de " +nombreProducto + " Stock total: "+stockProducto);
}

registrarVenta(3);
reponerStock(5);
mostrarInventario();
