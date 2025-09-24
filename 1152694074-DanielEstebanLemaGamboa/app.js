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

const simularPasoDelTiempo = (horas) => {
    for (let i = 1; i <= horas; i++) {
        hambre -= 5;
        felicidad -= 3;
        energia -= 2;
        console.log("Hora " + i + " pasando...");
    }
}

function revisarEstado() {
    if (hambre < 20) {
        console.log("¡Tengo mucha hambre!");
        if (energia < 15) {
            console.log("Y estoy muy cansado...");
        }
    }

    let caso;
    if (felicidad > 80) {
        caso = 1;
    } else if (felicidad >= 50 && felicidad <= 80) {
        caso = 2;
    } else {
        caso = 3;
    }
    
    switch (caso) {
        case 1:
            console.log("¡Estoy muy feliz! :D");
            break;
        case 2:
            console.log("Me siento bien, pero podríamos jugar.");
            break;
        case 3:
            console.log("Me siento un poco triste...");
            break;
        default:
            console.log("Necesito atención.");
            break;
    }
}
simularPasoDelTiempo(5);
revisarEstado();

let mascotaViva = true;

while (mascotaViva) {
    mostrarEstado();
    revisarEstado();
    
    hambre -= 5;
    felicidad -= 5;
    energia -= 5;
    
    if (hambre <= 0 || felicidad <= 0) {
        mascotaViva = false;
        console.log("Juego terminado");
    }
}

