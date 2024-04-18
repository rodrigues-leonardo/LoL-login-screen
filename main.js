const newAcount = document.querySelector('.new-acount')
const titulo = document.querySelector('.registro-titulo')
const icons = document.querySelector('.registro-icon')

newAcount.addEventListener('click', (event) => {
    event.preventDefault()
    newAcount.innerHTML = 'Fazer login'
    titulo.innerHTML = 'Crie sua conta'

    const form = document.createElement('label')
    const newInput = document.createElement('input')
    newInput.type = 'email'
    newInput.className = 'registro-input'
    newInput.placeholder = 'Digite seu email'
    form.appendChild(newInput)

    const newRegistro = document.querySelector('.registro-forms')
    newRegistro.appendChild(form)

    document.body.append(newRegistro)

    icons.classList.add('.display-none')
})


