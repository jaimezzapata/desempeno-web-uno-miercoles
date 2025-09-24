let nombreProducto = "Laptop Gamer";
let stockProducto = 10;
let precioProducto = 1500;

function mostrarInventario() {
    console.log(`Producto: ${nombreProducto} | ` + `Stock: ${stockProducto} | ` + `Precio: $${precioProducto}`);
}



const registrarVenta = (cantidadVendida) => {
    if (cantidadVendida <= stockProducto) {
        stockProducto -= cantidadVendida
        console.log(`Venta exitosa. Se vendieron ${cantidadVendida} unidades de ${nombreProducto}. Stock restante: ${stockProducto}`)
    }

};

const reponerStock = (cantidadRespuesta) =>{
    stockProducto += cantidadRespuesta;
    console.log(`Stock repuesto. Se añadieron ${cantidadRespuesta} unidades. Stock total: ${stockProducto}`)
}

registrarVenta(3);
reponerStock(5);

mostrarInventario();