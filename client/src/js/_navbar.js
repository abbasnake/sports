import { $, $$ } from './_helpers.js'

const runNavbar = () => {
  const buttons = $$('.js-btn')
  const pages   = $$('.js-page')

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (e) => {
      if (e.target.classList.contains('js-btn-1')) {
        pages[0].classList.remove('is-hidden')
        pages[1].classList.add('is-hidden')
        pages[2].classList.add('is-hidden')
      }
      if (e.target.classList.contains('js-btn-2')) {
        pages[0].classList.add('is-hidden')
        pages[1].classList.remove('is-hidden')
        pages[2].classList.add('is-hidden')
      }
      if (e.target.classList.contains('js-btn-3')) {
        pages[0].classList.add('is-hidden')
        pages[1].classList.add('is-hidden')
        pages[2].classList.remove('is-hidden')
      }
    })
  }
}

export { runNavbar }