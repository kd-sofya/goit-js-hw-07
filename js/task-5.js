const button = document.querySelector(".change-color");
const span = document.querySelector(".color");

button.addEventListener("click", (eve) => {
  const backColor = getRandomHexColor();

  document.body.style.backgroundColor = backColor;
  span.textContent = backColor;
})


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
