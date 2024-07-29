function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const input = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

createButton.addEventListener("click", () => {
    const amount = Number(input.value);
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
    } else {
      alert(
        "Invalid input value. Please enter a number between 1 and 100."
      );
    }
});

destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  destroyBoxes()
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = "30px";
    box.style.height = "30px";
    //box.style.margin = "5px";
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    fragment.appendChild(box);
  }
  boxesContainer.appendChild(fragment);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

boxesContainer.style.display = 'flex';
boxesContainer.style.flexWrap = 'wrap';

//style
const controls = document.querySelector('#controls')
//controls.style.width = '486px';
controls.style.height = '104px';
controls.style.padding = '32px';
controls.style.gap = '16px';
controls.style.borderRadius = '8px';

//input.style.width = '150px';
input.style.height = '40px';
input.style.padding = '8px 72px';
input.style.gap = '10px';
input.style.borderRadius = '8px';
input.style.border = '1px solid #808080';
input.style.backgroundColor = 'transparent'

createButton.style.width = '120px';
createButton.style.height = '40px';
createButton.style.padding = '8px 16px';
createButton.style.gap = '10px';
createButton.style.borderRadius = '8px';
createButton.style.color = 'rgb(255, 255, 255)'
createButton.style.backgroundColor = '#4E75FF'
createButton.style.border = '0'

destroyButton.style.width = '120px';
destroyButton.style.height = '40px';
destroyButton.style.padding = '8px 16px';
destroyButton.style.gap = '10px';
destroyButton.style.borderRadius = '8px';
destroyButton.style.color = 'rgb(255, 255, 255)';
destroyButton.style.backgroundColor = '#FF4E4E';
destroyButton.style.border = '0';

//boxesContainer.style.width = '486px';
//boxesContainer.style.height = '134px';
boxesContainer.style.padding = '32px';
boxesContainer.style.gap = '44px';
boxesContainer.style.borderRadius = '8px';