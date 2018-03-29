import { $, $$, $$$ } from './_helpers.js'
import { db }         from './_db.js'

const runRegistry = () => {
  // const dateContainer      = $('.js-date')
  // const aScoreContainer    = $('.js-A-score')
  // const rScoreContainer    = $('.js-R-score')
  // const aCommentsContainer = $('.js-A-comments')
  // const rCommentsContainer = $('.js-R-comments')

  // const insertDate = (index) => {
  //   const currentDate = $$$('li')
  //   currentDate.textContent = `${db.schedule[index].date}`
  //   dateContainer.appendChild(currentDate)
  // }

  // const insertDataA = (index) => {
  //   const currentScore = $$$('li')
  //   currentScore.textContent = `${db.schedule[index].score.A}`
  //   aScoreContainer.appendChild(currentScore)
  //   const currentComment = $$$('li')
  //   currentComment.textContent = `${db.schedule[index].comments.A}`
  //   aCommentsContainer.appendChild(currentComment)
  // }

  // const insertDataR = (index) => {
  //   const currentScore = $$$('li')
  //   currentScore.textContent = `${db.schedule[index].score.R}`
  //   rScoreContainer.appendChild(currentScore)
  //   const currentComment = $$$('li')
  //   currentComment.textContent = `${db.schedule[index].comments.R}`
  //   rCommentsContainer.appendChild(currentComment)
  // }

  // const insertData = () => {
  //   for (let i = 0; i < db.schedule.length; i++) {
  //     insertDate(i)
  //     insertDataA(i)
  //     insertDataR(i)
  //   }
  // }

  // insertData()

  const container = $('.js-registry')

  const insertData = () => {
    for (let i = 0; i < db.schedule.length; i++) {
      // create ul
      const ul = $$$('ul')
      ul.classList.add('l-table-list')
      //add li's
      const liDate = $$$('li')
      liDate.textContent = db.schedule[i].date
      ul.appendChild(liDate)

      const liA = $$$('li')
      liA.textContent = db.schedule[i].score.A
      ul.appendChild(liA)

      const liR = $$$('li')
      liR.textContent = db.schedule[i].score.R
      ul.appendChild(liR)

      const liCommentA = $$$('li')
      liCommentA.textContent = db.schedule[i].comments.A
      ul.appendChild(liCommentA)

      const liCommentR = $$$('li')
      liCommentR.textContent = db.schedule[i].comments.R
      ul.appendChild(liCommentR)

      //add ul to container
      container.appendChild(ul)
    }
  }

  insertData()
}

export { runRegistry }