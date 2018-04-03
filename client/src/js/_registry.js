import { $, $$, $$$ } from './_helpers.js'


const registry = (dbData) => {

  const addLiEventListeners = (el) => {

    const saveEdit = (e) => { // fired on either the enter key or clicking away
      e.target.setAttribute('contenteditable', 'false')
      e.target.classList.remove('is-editable')
      //need fetchAPI save here
    }

    el.addEventListener('dblclick', (e) => { // double click to edit field
      e.target.setAttribute('contenteditable', 'true')
      e.target.classList.add('is-editable')
      e.target.focus()
    })

    el.addEventListener('keypress', (e) => { // when presing enter
      if (e.keyCode === 13) {
        saveEdit(e)
      }
    })

    el.addEventListener('blur', saveEdit) // when clicking away
  }

  const liTemplate = (data, parent) => {
    const li = $$$('li')
    li.classList.add('m-li', 's-li') // adding SMACSS classes
    addLiEventListeners(li)
    li.textContent = data
    parent.appendChild(li)
  }

  const insertDataToDOM = (data) => {
    const container = $('.js-registry')
    for (let i = 0; i < data.length; i++) {
      const ul = $$$('ul')
      ul.classList.add('l-ul', 'm-table-list', 's-table-list') // adding SMACSS classes

      const slicedDate = data[i].date.slice(0, 10) // to just see the year-month-day

      liTemplate(slicedDate, ul)
      liTemplate(data[i].score.A, ul)
      liTemplate(data[i].score.R, ul)
      liTemplate(data[i].comments.A, ul)
      liTemplate(data[i].comments.R, ul)

      container.appendChild(ul)
    }
  }

  insertDataToDOM(dbData)
}

export { registry }