import { $, $$, $$$ }     from './_helpers.js'
import { updateRegistry } from './_fetchAPI.js'

const registry = (dbData) => {

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

  const liTemplate = (data, parent, dataType) => {
    const li = $$$('li')
    li.classList.add('m-li', 's-li')       // adding SMACSS classes
    li.setAttribute('data-type', dataType) // adding dataType for reference later
    addLiEventListeners(li)
    li.textContent = data
    parent.appendChild(li)
  }

  const insertDataToDOM = (data) => {
    const container = $('.js-registry')

    for (let i = 0; i < data.length; i++) {
      const ul = $$$('ul')
      ul.classList.add('l-ul', 'm-table-list', 's-table-list') // adding SMACSS classes
      ul.setAttribute('data-id', data[i]._id)                  // adding the _id of mLab/mongodb documents for reference later

      const slicedDate = data[i].date.slice(0, 10) // to just see the year-month-day

      liTemplate(slicedDate, ul, 'date')
      liTemplate(data[i].score.A, ul, 'score.A')
      liTemplate(data[i].score.R, ul, 'score.R')
      liTemplate(data[i].comments.A, ul, 'comments.A')
      liTemplate(data[i].comments.R, ul, 'comments.R')

      container.appendChild(ul)
    }
  }

  insertDataToDOM(dbData)
}

export { registry }