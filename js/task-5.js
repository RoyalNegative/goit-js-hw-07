function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Arka plan <body>i sadece button.change-colora tıkladıktan sonra belirlenecektir.
// button.change-color öğesine her tıklamada <body> arka planı yeni rastgele bir renge boyanacaktır.
// <body> ve span.color üzerinde aynı renk değerleri olacaktır.

const changeColorButton = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

changeColorButton.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
});