import { $, $$ } from './helpers.js'

const buttons = $$('.m-btn')
const pages   = $$('.m-page')

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-1-js')) {
      pages[0].classList.remove('is-hidden')
      pages[1].classList.add('is-hidden')
      pages[2].classList.add('is-hidden')
    }
    if (e.target.classList.contains('btn-2-js')) {
      pages[0].classList.add('is-hidden')
      pages[1].classList.remove('is-hidden')
      pages[2].classList.add('is-hidden')
    }
    if (e.target.classList.contains('btn-3-js')) {
      pages[0].classList.add('is-hidden')
      pages[1].classList.add('is-hidden')
      pages[2].classList.remove('is-hidden')
    }
  })
}