
const form = document.getElementById('myForm');

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/ /*investigar expresiones regularea*/
  /*Que no empiece con espacios ni arrobas luego debe venir un arroba, nuevamente cualquier caracter que no comience con 
  espacio o arroba, luego punto y luego caracteres*/
  return regex.test(email) /*test es una funcion que tienen las expresiones regulares*/
  /*Si cumple con la condicion devuelve verdadero, sino devuelve falso*/
}
/*Validacion*/

function validateForm() {
  const emailInput = document.getElementById('email');
  const email = emailInput.value; /*accedemos al valor del email con el value*/

  if (!validateEmail(email)) {
    alert('Por favor ingrese un correo electrónico válido.');
  } else {
    alert('Correo electrónico enviado correctamente.');
  }
}

if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault(); /*En este ejemplo se utiliza “event.preventDefault()” 
      para evitar que el formulario se envíe de la manera predeterminada, lo que permite realizar la validación antes 
      de enviar los datos.*/
    validateForm();
  });
}

document.querySelector("button.button-menu-toggle")
  .addEventListener("click", function () {
    document.querySelector(".nav-links").
      classList.toggle("nav-links-responsive")
  })

function showAlert() {
  alert('¡Hola, esta es una alerta desde JavaScript!');
}

const miBoton = document.getElementById('miBoton')
/* document.getElementById=  Busca en HTML un elemento que se reconoce mediante su ID */


miBoton.addEventListener('click', handleClick)

function handleClick() {
  alert("Hola, le has dado clic al boton");
}