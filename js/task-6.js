function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Create düğmesine tıklandıktan sonra, input içindeki değer 1-100 aralığının dışında ise hiçbir şey olmaz
// Create düğmesine tıklandıktan sonra, div#boxes içine inputte belirtilen sayıda farklı renkte kareler eklenir. input değeri temizlenir
// Tekrar Create düğmesine tıklandığında önceki kareler tamamen kaldırılır ve yerine, inputte belirtilen sayıda yeni kare eklenir. input değeri temizlenir
// div#boxes içindeki tüm kareler farklı renklidir ve rastgele bir arka plan rengine sahiptir
// div#boxes içindeki ilk kare 30px x 30px boyutundadır ve her bir sonraki kare öncekinden 10px daha yüksek ve geniştir
// Destroy düğmesine basıldıktan sonra, tüm kareler div#boxes içinden kaldırılmalıdır

const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createButton.addEventListener('click', () => {
  const amount = parseInt(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  }
});

destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  destroyBoxes();
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
  }
  boxesContainer.appendChild(fragment);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}