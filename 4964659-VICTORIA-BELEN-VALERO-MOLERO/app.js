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

// alimentar(30);
// mostrarEstado();

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


// jugar(25);
// mostrarEstado();

const simularPasoDelTiempo = (horas) => {
    for (let i = 1; i <= horas; i++) {
        
        hambre -= 5;
        felicidad -= 3;
        energia -= 2;

        if (hambre < 0) hambre = 0;
        if (felicidad < 0) felicidad = 0;
        if (energia < 0) energia = 0;

    }
    console.log("Han pasado " + horas + " horas. Estado actualizado:");
    mostrarEstado();
}; 


function revisarEstado() {
    if (hambre < 20) {
        console.log("¡Tengo mucha hambre!");
        
        if (energia < 15) {
            console.log("Y estoy muy cansado...");
        }
    }
}



function evaluarFelicidad() {
    let nivel; 

    if (felicidad > 80) {
        nivel = 1;
    } else if (felicidad >= 50 && felicidad <= 80) {
        nivel = 2;
    } else if (felicidad >= 20 && felicidad < 50) {
        nivel = 3;
    } else {
        nivel = 0; 
    }

    switch (nivel) {
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
    }
}

simularPasoDelTiempo(5);
revisarEstado();
evaluarFelicidad();