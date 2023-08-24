const BotonColor = document.getElementById("BotonColor");
const colorMostrar = document.getElementById("colorMostrar");
const colores = [
  "#FF5733",
  "#33FF57",
  "#5733FF",
  "#33A0FF",
  "#FF33E0",
  "#E0FF33",
  "#33FFE0",
];

BotonColor.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * colores.length);
  const randomColor = colores[randomIndex];

  document.body.style.backgroundColor = randomColor;
  colorMostrar.textContent = `Color de fondo: ${randomColor}`;
});
