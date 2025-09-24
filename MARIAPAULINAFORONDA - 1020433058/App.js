// Primera entrega
let nombreHeroe = "M.stark";
let vidaHeroe = 100;
let experienciaHeroe = 0;

function mostrarEstado() {
  console.log(`Héroe: ${nombreHeroe} | Vida: ${vidaHeroe} HP | Experiencia: ${experienciaHeroe} XP`);
}

mostrarEstado();

// Tercera entrega
const recibirDano = function(cantidadDano) {
  vidaHeroe -= cantidadDano;
  if (vidaHeroe < 0) vidaHeroe = 0;
  console.log(`El héroe recibió ${cantidadDano} de daño. Vida restante: ${vidaHeroe}`);
};

const ganarExperiencia = (cantidadExperiencia) => {
  experienciaHeroe += cantidadExperiencia;
  console.log(`¡El héroe ganó ${cantidadExperiencia} de experiencia! Total: ${experienciaHeroe}`);
};

recibirDano(30);
ganarExperiencia(48);
mostrarEstado();
 
// Tercera entrega

const entrenar = (dias) => {
  for (let i = 0; i < dias; i++) {
    ganarExperiencia(5);
  }
  console.log("Entrenamiento completado.");
};

function verificarNivel() {
  if (experienciaHeroe > 100) {
    console.log("¡Felicidades! Has alcanzado el nivel de 'Maestro'.");
    if (vidaHeroe < 50) {
      console.log("Pero te encuentras débil. Sería prudente descansar.");
    }
  } else if (experienciaHeroe > 30) {
    console.log("Nivel alcanzado: 'Aventurero'. ¡Sigue así!");
  } else {
    console.log("Nivel actual: 'Novato'.");
  }
}

entrenar(10);
verificarNivel();
