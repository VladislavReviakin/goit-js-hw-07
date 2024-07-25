function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const widget = document.querySelector('.widget')
const color = document.querySelector('.color')
const btn = document.querySelector('.change-color')
const body = document.body

btn.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor
  color.textContent = randomColor;
})

widget.style.margin = 'auto'
widget.style.padding = '100px 88px'
widget.style.justifyContent = 'center'
widget.style.width = '345px'
widget.style.alignItems = 'center'
btn.style.backgroundColor = '#4E75FF'
btn.style.margin = 'auto'
btn.style.border = 0
btn.style.borderRadius = '8px'
btn.style.width = '148px'
btn.style.height = '40px'
btn.style.color = '#ffffff'
btn.style.padding = '8px 16px'