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
 
