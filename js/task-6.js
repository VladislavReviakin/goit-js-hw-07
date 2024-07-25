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
      console.error(
        "Invalid input value. Please enter a number between 1 and 100."
      );
    }
});

destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = "30px";
    box.style.height = "30px";
    box.style.margin = "5px";
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