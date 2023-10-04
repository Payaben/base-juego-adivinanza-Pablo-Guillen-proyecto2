// Acá el juego selecciona un número al azar para que adivines 
let numeroAzar = Math.floor(Math.random()*100) + 1;

let numeroEntrada = document.getElementById("numeroEntrada");
let mensaje = document.getElementById("mensaje");
let intento = document.getElementById("intento");
let intentos = 0
// esta accion se va a ejecutar cuando se toque el boton chequearResultado
// Seleccionar el botón con la clase Reiniciar
const boton = document.querySelector(".Reiniciar");

// Añadir un evento de click al botón
boton.addEventListener("click", function() {
  // Recargar la página actual
  location.reload();
});

function chequearResultado(){
    // hago un parseInt del input type number por que todos los inputs devuelven un string pero nosotros necesitamos un numero y por eso lo pasamos a un tipo de dato entero con parseInt
    intentos ++
    intento.textContent = intentos
    let numeroIngresado = parseInt(numeroEntrada.value);
    if(numeroIngresado < 1 || numeroIngresado >100 || isNaN(numeroIngresado)){
        mensaje.textContent = "Por favor, introduce un número válido entre 1 y 100";
        mensaje.style.color = "black";
        return;
    }
    if(numeroIngresado === numeroAzar){
        mensaje.textContent = "¡Felicitaciones! ¡Haz adivinado el número!";
        mensaje.style.color = "green";
        numeroEntrada.Disabled = true;
            } else if(numeroIngresado < numeroAzar){
                mensaje.textContent = "¡Más alto!¡El número es mayor al que dijiste!";
                mensaje.style.color = "red";
            } else {
                mensaje.textContent = "¡Más bajo!¡El número es menor al que dijiste!";
                mensaje.style.color = "red";
            }
}
