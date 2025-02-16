Sistema de Billetes de Embarque
Este sistema permite crear y gestionar billetes de embarque para viajes de ida y vuelta. Cada billete de embarque contiene información sobre el pasajero, el lugar de origen, el destino, y otras propiedades relevantes.

Propiedades
nombre: El nombre del pasajero.

desde: El lugar de donde el pasajero está volando.

hacia: El destino al que el pasajero está volando.

claseEjecutiva: Un valor booleano que indica si el pasajero viaja en clase ejecutiva (true) o no (false).

horaSalida: La hora en que el pasajero sale del aeropuerto (un número entre 1 y 24).

horaLlegada: La hora en que el pasajero llega a su destino (un número entre 1 y 24).

Métodos
upgrade(): Este método permite al pasajero actualizar su billete a clase ejecutiva si aún no está en clase ejecutiva. Si el billete ya está en clase ejecutiva, muestra el mensaje: "¡Tu billete ya es de clase ejecutiva!".

tiempoDeVuelo(): Este método calcula y muestra el tiempo total de vuelo, basado en las propiedades horaSalida y horaLlegada. El tiempo de vuelo se calcula restando horaSalida de horaLlegada.
