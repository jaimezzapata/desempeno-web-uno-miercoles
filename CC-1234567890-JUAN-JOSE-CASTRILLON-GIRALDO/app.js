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