import { $, $$, $$$ } from "./_helpers.js"

const template = (data, parent) => {

  const li = $$$('li')
  li.classList.add('m-li') // adding SMACSS classes
  li.textContent = data
  parent.appendChild(li) //add ul to container
}

const fetchRegistry = () => { // GET TODOS function
    fetch('api/registry')             // FetchAPI GET
    .then(res => res.json())
    .then(registry => {
      const container = $('.js-registry')
      for (let i = 0; i < registry.data.length; i++) {
        const ul = $$$('ul')
        ul.classList.add('l-ul', 'm-table-list', 's-table-list') // adding SMACSS classes

        template(registry.data[i].date, ul)
        template(registry.data[i].score.A, ul)
        template(registry.data[i].comments.A, ul)
        template(registry.data[i].score.R, ul)
        template(registry.data[i].comments.R, ul)

        container.appendChild(ul)
      }
    })
  }

  export { fetchRegistry }