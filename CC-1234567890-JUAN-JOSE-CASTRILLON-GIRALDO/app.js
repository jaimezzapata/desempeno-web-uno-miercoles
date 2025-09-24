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
