const inputField = document.querySelector('#name-input')
inputField.style.width = '360px'
inputField.style.height = '40px'

const output = document.querySelector('#name-output')
inputField.addEventListener("input", ((event) => {
    output.textContent = event.currentTarget.value.trim() || "Anonymous"
}))