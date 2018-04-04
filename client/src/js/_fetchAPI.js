import { $, $$, $$$ } from './_helpers.js'

const fetchAndInsertRegistry = (callback) => { // GET TODOS function
  fetch('api/registry')                        // FetchAPI GET
  .then(res => res.json())
  .then(db => {
    callback(db.data) // wrap data in necessary tags and insert to DOM
  })
}

const updateRegistry = (e) => {
  // e.preventDefault() // not necessary since not in a form

  const id       = e.target.parentNode.dataset.id // get relevant document id
  const dataType = e.target.dataset.type
  const newValue = e.target.textContent

  fetch('api/registry', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({id: id, dataType: dataType, value: newValue})
  })
  .then(res => res.json())
  .then(res => {
    console.log(res.message)
    console.log(res.edit)
  })
}

export { fetchAndInsertRegistry, updateRegistry }