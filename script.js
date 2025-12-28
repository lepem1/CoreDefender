const checkbox = document.getElementById('agree')
const button = document.getElementById('verifyBtn')

checkbox.addEventListener('change', () => {
  button.disabled = !checkbox.checked
})

button.addEventListener('click', () => {
 window.location.href = "https://discord.com/oauth2/authorize"
})
