import { $, $$, $$$ } from './_helpers.js'
import { db }         from './_db.js'

const runRegistry = () => {
  const dateContainer      = $('.js-date')
  const aScoreContainer    = $('.js-A-score')
  const rScoreContainer    = $('.js-R-score')
  const aCommentsContainer = $('.js-A-comments')
  const rCommentsContainer = $('.js-R-comments')

  const insertDate = (index) => {
    const currentDate = $$$('li')
    currentDate.textContent = `${db.schedule[index].date}`
    dateContainer.appendChild(currentDate)
  }

  const insertDataA = (index) => {
    const currentScore = $$$('li')
    currentScore.textContent = `${db.schedule[index].score.A}`
    aScoreContainer.appendChild(currentScore)
    const currentComment = $$$('li')
    currentComment.textContent = `${db.schedule[index].comments.A}`
    aCommentsContainer.appendChild(currentComment)
  }

  const insertDataR = (index) => {
    const currentScore = $$$('li')
    currentScore.textContent = `${db.schedule[index].score.R}`
    rScoreContainer.appendChild(currentScore)
    const currentComment = $$$('li')
    currentComment.textContent = `${db.schedule[index].comments.R}`
    rCommentsContainer.appendChild(currentComment)
  }

  const insertData = () => {
    for (let i = 0; i < db.schedule.length; i++) {
      insertDate(i)
      insertDataA(i)
      insertDataR(i)
    }
  }

  insertData()

}

export { runRegistry }