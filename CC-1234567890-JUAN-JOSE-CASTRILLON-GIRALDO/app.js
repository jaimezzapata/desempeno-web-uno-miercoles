let nombreMascota = prompt("Elige un nombre para tu mascota:"); 
let hambre = 50;
let felicidad = 50;
let energia = 50;

function mostrarEstado() {
    console.log(`🐾 Estado de ${nombreMascota}`);
    console.log(`Hambre: ${hambre} | Felicidad: ${felicidad} | Energía: ${energia}`);
    console.log("----------------------------------");
}

mostrarEstado();
const alimentar = function(puntosHambre) {
    hambre += puntosHambre;
    if (hambre > 100) hambre = 100;
    console.log(`🍖 ¡Qué rico! Hambre ahora en: ${hambre}`);
};

const jugar = (puntosFelicidad) => {
    felicidad += puntosFelicidad;
    energia -= 10;

    if (felicidad > 100) felicidad = 100;
    if (energia < 0) energia = 0;

    console.log(`🎾 ¡A jugar! Felicidad: ${felicidad}, Energía: ${energia}`);
};

alimentar(30);
jugar(25);
mostrarEstado();
const simularPasoDelTiempo = (horas) => {
    for (let i = 1; i <= horas; i++) {
        hambre -= 5;
        felicidad -= 3;
        energia -= 2;

        if (hambre < 0) hambre = 0;
        if (felicidad < 0) felicidad = 0;
        if (energia < 0) energia = 0;

        console.log(`Ha pasado ${i} hora(s)...`);
        mostrarEstado();
    }
};

function revisarEstado() {
    if (hambre < 20) {
        console.log("¡Tengo mucha hambre!");
        if (energia < 15) {
            console.log("Y estoy muy cansado...");
        }
    }

    let nivelFelicidad;
    if (felicidad > 80) {
        nivelFelicidad = 1;
    } else if (felicidad >= 50) {
        nivelFelicidad = 2;
    } else if (felicidad >= 20) {
        nivelFelicidad = 3;
    } else {
        nivelFelicidad = 4;
    }

    switch (nivelFelicidad) {
        case 1:
            console.log("¡Estoy muy feliz!");
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
let mascotaViva = true;
let contadorHoras = 0;

while (mascotaViva) {
    mostrarEstado();
    revisarEstado();

    hambre -= 4;
    felicidad -= 2;
    energia -= 3;

    if (hambre < 0) hambre = 0;
    if (felicidad < 0) felicidad = 0;
    if (energia < 0) energia = 0;

    contadorHoras++;
    console.log(`⏰ Hora de vida: ${contadorHoras}`);

    if (hambre === 0 || felicidad === 0) {
        mascotaViva = false;
        console.log("Juego terminado... tu mascota no resistió.");
    }

    if (contadorHoras > 20) {
        mascotaViva = false;
        console.log("Fin de la simulación (20 horas).");
    }
}
