import { $, $$, $$$ } from './_helpers.js'
import { registry }   from './_registry.js'

const fetchAndInsertRegistry = () => { // GET TODOS function
  fetch('api/registry')                // FetchAPI GET
  .then(res => res.json())
  .then(db => {
    registry(db.data) // wrap data in necessary tags and insert to DOM
  })
}

const updateRegistry = (e) => {
  // e.preventDefault() // not necessary since not in a form

  const id = e.target.parentNode.attributes['data-id'].value // get relevant document id
  const dataType = e.target.attributes['data-type'].value
  const newValue = e.target.textContent

  fetch('api/registry', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({id: id, dataType: dataType, value: newValue})
  })
  .then(res => console.log(res))
}

export { fetchAndInsertRegistry, updateRegistry }