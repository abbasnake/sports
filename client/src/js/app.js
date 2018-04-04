import { runNavbar }   from './_navbar.js'
import { fetchAndInsertRegistry } from './_fetchAPI.js'
import { registry }   from './_registry.js'

runNavbar()
fetchAndInsertRegistry(registry)
// runRegistry()