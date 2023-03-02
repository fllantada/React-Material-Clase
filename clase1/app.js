const button = document.getElementById("cambiarColor");
const body = document.querySelector("body");

button.addEventListener("click", () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  // Prevenir el comportamiento predeterminado del formulario de enviar los datos a una página
  event.preventDefault();

  // Obtener los valores de los campos de entrada
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;

  // Realizar alguna acción con los valores de entrada
  console.log(`Nombre: ${nombre} Apellido: ${apellido}`);

  // Restablecer el formulario
  form.reset();
});
