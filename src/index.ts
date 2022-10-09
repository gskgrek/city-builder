import './index.css'
import Logo from './assets/images/logo.png'

function component() {
  const element = document.createElement('div')

  element.innerHTML = 'Hello World'
  element.classList.add('hello')

  const logo = new Image()
  logo.src = Logo

  element.appendChild(logo)

  return element
}

document.body.appendChild(component())