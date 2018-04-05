import { $$$ } from '../_helpers.js'
import { addLiEventListeners } from './_addLiEventListeners.js'

const liTemplate = (data, parent, dataType) => {
  const li = $$$('li')
  li.classList.add('m-li', 's-li')       // adding SMACSS classes
  li.setAttribute('data-type', dataType) // adding dataType for reference later
  addLiEventListeners(li)
  li.textContent = data
  parent.appendChild(li)
}

export { liTemplate }