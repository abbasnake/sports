import { updateRegistry } from './_fetchAPI.js'

const addLiEventListeners = (el) => {

  const saveEdit = (e) => { // fired on either the enter key or clicking away
    e.target.setAttribute('contenteditable', 'false')
    e.target.classList.remove('is-editable')

    //need fetchAPI save here
    updateRegistry(e)
  }

  el.addEventListener('dblclick', (e) => {           // double click to edit field
    e.target.setAttribute('contenteditable', 'true') // make editable
    e.target.classList.add('is-editable')            // add SMACSS styling class
    e.target.focus()                                 // auto focus
  })

  el.addEventListener('keypress', (e) => { // when pressing enter
    if (e.keyCode === 13) saveEdit(e)
  })

  el.addEventListener('blur', saveEdit) // when clicking away
}

export { addLiEventListeners }