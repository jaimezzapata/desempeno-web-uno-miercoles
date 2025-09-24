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
};

registrarVenta(3);
reponerStock(5);

mostrarInventario();

const simuladorVentas = (numeroDeVentas) => {
    for (let i = 0; i < numeroDeVentas; i++) {
        registrarVenta(1);
}
};

function revisarStock() {
    if (stockProducto < 5) {
        console.log("ALERTA CRÍTICA: Producto agotado.");
}else if (stockProducto < 5 && stockProducto > 0) {
        console.log(`Advertencia: Stock bajo. Quedan solo ${stockProducto} unidades.`);
}if (precioProducto > 1000) {
    console.log("Este es un producto de alto valor. Sugerir reposición inmediata.")
}else{
    console.log("El stock del producto se encuentra en un nivel saludable.")
}
};

simuladorVentas(7);
revisarStock();
