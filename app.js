// Fase 1: Creación del Jugador
let nombreJugador = "Neymar Jr";
let energiaJugador = 100;
let experienciaJugador = 0;

function mostrarEstado() {
  console.log(`Jugador: ${nombreJugador} | Energía: ${energiaJugador} | Experiencia: ${experienciaJugador}`);
}

// Fase 2: Acciones Básicas
const recibirLesion = function(gravedad) {
  energiaJugador -= gravedad;
  if (energiaJugador < 0) energiaJugador = 0;
  console.log(` ${nombreJugador} sufrió una lesión de gravedad ${gravedad}. Energía restante: ${energiaJugador}`);
};

const ganarExperiencia = (puntos) => {
  experienciaJugador += puntos;
  console.log(` ${nombreJugador} ganó ${puntos} puntos de experiencia. Total: ${experienciaJugador}`);
};

// Fase 3: Entrenamiento y Nivel
const entrenar = (dias) => {
  for (let i = 0; i < dias; i++) {
    ganarExperiencia(5);
  }
  console.log("Entrenamiento completado.");
};

function verificarNivel() {
  if (experienciaJugador > 100) {
    console.log("¡Nivel alcanzado: Leyenda del fútbol!");
    if (energiaJugador < 50) {
      console.log("Pero estás agotado. Necesitas descanso.");
    }
  } else if (experienciaJugador > 30) {
    console.log("Nivel alcanzado: Titular estrella.");
  } else {
    console.log("Nivel actual: Promesa juvenil.");
  }
}

// Fase 4: Temporada de Partidos
function enfrentarPartido(tipo) {
  switch (tipo) {
    case 1:
      recibirLesion(10);
      console.log("Partido amistoso contra equipo local.");
      break;
    case 2:
      recibirLesion(25);
      console.log("Partido de liga contra rival fuerte.");
      break;
    case 3:
      recibirLesion(50);
      console.log("Final internacional. ¡Máxima exigencia!");
      break;
    default:
      console.log("No hay partido programado.");
  }
}

// ✅ Simulación completa
mostrarEstado();             // Estado inicial
recibirLesion(20);           // Lesión inicial
ganarExperiencia(40);        // Experiencia inicial
mostrarEstado();             // Estado actualizado

entrenar(10);                // Entrenamiento
verificarNivel();            // Verificación de nivel

// Ciclo de temporada
while (energiaJugador > 0) {
  const tipoPartido = Math.floor(Math.random() * 3) + 1;
  enfrentarPartido(tipoPartido);
  ganarExperiencia(15);
  mostrarEstado();
  console.log("======================");
}

console.log("Neymar Jr ha terminado la temporada. ¡A descansar!");
