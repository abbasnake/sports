import { $, $$$ } from '../_helpers.js'
import { liTemplate } from './_liTemplate.js'

const registrySetup = (dbData) => {

  const container = $('.js-registry') // container where all the tables are placed

  for (let i = 0; i < dbData.length; i++) {
    const ul = $$$('ul')                                     // creating new ul
    ul.classList.add('l-ul', 'm-table-list', 's-table-list') // adding SMACSS classes
    ul.setAttribute('data-id', dbData[i]._id)                // adding the _id of mLab/mongodb documents for reference later

    const slicedDate = dbData[i].date.slice(0, 10) // to just see the year-month-day

    liTemplate(slicedDate, ul, 'date')
    liTemplate(dbData[i].score.A, ul, 'score.A')
    liTemplate(dbData[i].score.R, ul, 'score.R')
    liTemplate(dbData[i].comments.A, ul, 'comments.A')
    liTemplate(dbData[i].comments.R, ul, 'comments.R')

    container.appendChild(ul)
  }
}

export { registrySetup }