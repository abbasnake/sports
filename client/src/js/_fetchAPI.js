import { $, $$, $$$ } from './_helpers.js'
import { registry } from './_registry.js'

const fetchAndInsertRegistry = () => { // GET TODOS function
    fetch('api/registry')             // FetchAPI GET
    .then(res => res.json())
    .then(db => {
      registry(db.data) // wrap data in necessary tags and insert to DOM
    })
  }

  export { fetchAndInsertRegistry }