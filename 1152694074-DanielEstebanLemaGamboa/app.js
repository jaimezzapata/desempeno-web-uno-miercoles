let nombreMascota = prompt("Ingrese el nombre de su mascota");
let hambre = 50
let felicidad = 50
let energia = 50

function mostrarEstado() {
    console.log("Estado actual de la mascota:" + nombreMascota);
    console.log("hambre: " + hambre);
    console.log("felicidad: " + felicidad);
    console.log("energia: " + energia);
}

const alimentar = function (puntosHambre) {
    hambre += puntosHambre;
    if (hambre > 100) {
        hambre = 100;
    }
    console.log("¡Qué rico! Hambre ahora en: " + hambre);
}
alimentar(30);

const jugar = (puntosFelicidad) => {
    felicidad += puntosFelicidad;
    energia -= 10;

    if (felicidad > 100) {
        felicidad = 100;
    }

    if (energia < 0) {
        energia = 0;
    }

    console.log("¡A jugar! Felicidad: " + felicidad + "," + "energia: " + energia);
}
jugar(25);

mostrarEstado();