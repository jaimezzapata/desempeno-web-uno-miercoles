let nombreHeroe = "mujer maravilla";
let vidaHeroe = 100;
let experienciaHeroe = 0;

function mostrarEstado() {
    console.log(`Héroe: ${nombreHeroe} | Vida: ${vidaHeroe} HP | Experiencia: ${experienciaHeroe} XP`);
}

mostrarEstado();

function recibirDano(cantidadDano) {
    vidaHeroe -= cantidadDano;
    if (vidaHeroe < 0) vidaHeroe = 0;
    console.log(`El héroe recibió ${cantidadDano} de daño. Vida restante: ${vidaHeroe}`);
}

const ganarExperiencia = (cantidadExperiencia) => {
    experienciaHeroe += cantidadExperiencia;
    console.log(`¡El héroe ganó ${cantidadExperiencia} de experiencia! Total: ${experienciaHeroe}`);
}

recibirDano(25);
ganarExperiencia(50);
mostrarEstado();
