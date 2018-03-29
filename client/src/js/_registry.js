import { $, $$, $$$ } from './_helpers.js'
import { db }         from './_db.js'

const runRegistry = () => {

  const container = $('.js-registry')

  const makeLi = (data, parent) => {
    const li = $$$('li')
    li.textContent = data
    parent.appendChild(li)
  }

  const insertData = () => {
    for (let i = 0; i < db.schedule.length; i++) { // loop through db
      
      const ul = $$$('ul') // create ul to place data li's in
      ul.classList.add('l-table-list', 'm-table-list', 's-table-list') // adding SMACSS classes

      makeLi(db.schedule[i].date, ul) //add li's with data to ul
      makeLi(db.schedule[i].score.A, ul)
      makeLi(db.schedule[i].score.R, ul)
      makeLi(db.schedule[i].comments.A, ul)
      makeLi(db.schedule[i].comments.R, ul)

      container.appendChild(ul) //add ul to container
    }
  }

  insertData()
}

export { runRegistry }