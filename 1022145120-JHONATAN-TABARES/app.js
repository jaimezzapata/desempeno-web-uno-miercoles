let nombreProducto = "ProductoEjemplo"
let stockProducto = 10
let precioProducto = 500

function mostrarInventario(){
console.log("Producto: ", nombreProducto, " | Stock : ", stockProducto," unidades | Precio: $", precioProducto)
}

let registrarVenta = function (cantidadVenta){
    if(cantidadVenta <= stockProducto){
        stockProducto -= cantidadVenta;
        console.log("Venta exitosa. Se vendieron " + cantidadVenta + " unidades de " + nombreProducto + ". Stock total: " + stockProducto);
    } 
};

let reponerStock = (cantidadRepuesta) => {
stockProducto += cantidadRepuesta;
console.log("Stock repuesto. Se añadieron " + cantidadRepuesta + ". Stock total: " + stockProducto)
};

const simularVentas = (numeroDeVentas) => {
    for (let i = 0; i < numeroDeVentas; i++ ){
        registrarVenta(1);
        
    }
};

function revisarStock(){
    if (stockProducto === 0){
        console.log("ALERTA CRÍTICA: Producto agotado.")
        alert("ALERTA CRÍTICA: Producto agotado.")
    } else if(stockProducto > 0 && stockProducto < 5) {
        console.log("Advertencia: Stock bajo. Quedan solo " + stockProducto + " unidades.")
        alert("Advertencia: Stock bajo. Quedan solo " + stockProducto + " unidades.")
    }
    else if (precioProducto > 1000){
        console.log("Este es un producto de alto valor. Sugerir reposición inmediata.")
        alert("Este es un producto de alto valor. Sugerir reposición inmediata.")
    } else{
        console.log("El stock del producto se encuentra en un nivel saludable.")
        alert("El stock del producto se encuentra en un nivel saludable.")
    }
};

function clasificarProducto() {
    switch(true){
        case precioProducto > 2000:
            console.log("Clasificación: Producto Premium")
            break;
        case precioProducto > 500:
            console.log("Clasificación: Producto de Gama Media")
            break;
        default:
            console.log("Clasificación: Producto de Entrada")
            break;

    }

};

do {
mostrarInventario();
revisarStock();
registrarVenta(1);
} while (stockProducto > 0);


clasificarProducto();



mostrarInventario();
registrarVenta(3);
reponerStock(5);
mostrarInventario();
simularVentas(7);
revisarStock();
