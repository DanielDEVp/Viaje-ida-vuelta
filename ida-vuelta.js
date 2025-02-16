class Billete {
  constructor(nombre, desde, hacia, claseEjecutiva, horaSalida, horaLlegada) {
    this.nombre = nombre;
    this.desde = desde;
    this.hacia = hacia;
    this.claseEjecutiva = claseEjecutiva;
    this.horaSalida = horaSalida;
    this.horaLlegada = horaLlegada;
  }

  upgrade() {
    if (this.claseEjecutiva) {
      console.log("¡Tu billete ya es de clase ejecutiva!");
    } else {
      this.claseEjecutiva = true;
      console.log("¡Tu billete ha sido actualizado a clase ejecutiva!");
    }
  }

  tiempoDeVuelo() {
    return this.horaLlegada - this.horaSalida;
  }
}

// Generamos el billete de ida
const billeteIda = new Billete("Omar El Founti", "Melilla", "Pekin", true, 10, 22);

// Generamos el billete de vuelta
const billeteVuelta = new Billete("Omar El Founti", "Pekin", "Melilla", false, 11, 23);

// Mostramos la información de los billetes
console.log(billeteIda);
console.log(billeteVuelta);

// calculamos y mostramos el tiempo de vuelo
console.log(`Tiempo de vuelo ida: ${billeteIda.tiempoDeVuelo()} horas`);
console.log(`Tiempo de vuelo vuelta: ${billeteVuelta.tiempoDeVuelo()} horas`);
