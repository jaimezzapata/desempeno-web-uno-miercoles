let nombreMascota = prompt("Ingrese el nombre de su mascota: ");
let hambre = 50;
let felicidad = 50;
let energia = 50;

function mostrarEstado() {
    console.log("Estado de la mascota:");
    console.log("Nombre: " + nombreMascota);
    console.log("Hambre: " + hambre);
    console.log("Felicidad: " + felicidad);
    console.log("Energía: " + energia);
}

mostrarEstado();