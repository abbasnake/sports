import { $, $$, $$$ } from './_helpers.js'


const registry = (dbData) => {

  const liTemplate = (data, parent) => {
    const li = $$$('li')
    li.classList.add('m-li') // adding SMACSS classes
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