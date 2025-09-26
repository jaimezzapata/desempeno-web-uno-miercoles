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

const alimentar = function (puntosHambre) {
    hambre += puntosHambre;

    if (hambre > 100) {
        hambre = 100;
    }
    console.log("¡Qué rico! Hambre ahora en: " + hambre);
}

alimentar(30);
mostrarEstado();

const jugar = (puntosFelicidad) => {
    felicidad += puntosFelicidad;
    energia -= 10;

    if (felicidad > 100) {
        felicidad = 100;
    } else if (energia < 0) {
        energia = 0;
    }

    console.log("¡A jugar! Felicidad: " + felicidad + ", Energía: " + energia);
}


jugar(25);
mostrarEstado();

