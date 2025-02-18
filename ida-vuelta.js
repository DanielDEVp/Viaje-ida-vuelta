function Billete(nombre, desde, hacia, claseEjecutiva, horaSalida, horaLlegada) {
  const billete = {};

  billete.nombre = nombre;
  billete.desde = desde;
  billete.hacia = hacia;
  billete.claseEjecutiva = claseEjecutiva;
  billete.horaSalida = horaSalida;
  billete.horaLlegada = horaLlegada;

  billete.upgrade = function() {
    if (billete.claseEjecutiva) {
      console.log("¡Tu billete ya es de clase ejecutiva!");
    } else {
      billete.claseEjecutiva = true;
      console.log("¡Tu billete ha sido actualizado a clase ejecutiva!");
    }
  };

  billete.tiempoDeVuelo = function() {
    return billete.horaLlegada - billete.horaSalida;
  };

  return billete;
}

// Generamos el billete de ida
const billeteIda = Billete("Omar El Founti", "Melilla", "Pekin", true, 10, 22);

// Generamos el billete de vuelta
const billeteVuelta = Billete("Omar El Founti", "Pekin", "Melilla", false, 11, 23);

// Mostramos la información de los billetes
console.log(billeteIda);
console.log(billeteVuelta);

// Calculamos y mostramos el tiempo de vuelo
console.log(`Tiempo de vuelo ida: ${billeteIda.tiempoDeVuelo()} horas`);
console.log(`Tiempo de vuelo vuelta: ${billeteVuelta.tiempoDeVuelo()} horas`);
