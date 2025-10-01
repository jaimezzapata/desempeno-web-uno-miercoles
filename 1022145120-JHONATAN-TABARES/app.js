let nombreProducto = "LapTopGamer"
let stockProducto = 10
let precioProducto = 1500

function mostrarInventario(){
console.log("Producto: ", nombreProducto, " | Stock : ", stockProducto," unidades | Precio: $", precioProducto)
}

let registrarVenta = function (cantidadVenta){
    if(cantidadVenta <= stockProducto){
        cantidadVenta - stockProducto
        console.log("Venta exitosa. Se añadieron " + cantidadVenta + " unidades de " + nombreProducto + ". Stock total: " + stockProducto);
    } 
};

let reponerStock = (cantidadRepuesta) => {
stockProducto += cantidadRepuesta;
console.log("Stock repuesto. Se añadieron " + cantidadRepuesta + ". Stock total: " + stockProducto)
};

registrarVenta(3);

reponerStock(5);

mostrarInventario();


