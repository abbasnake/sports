import { fetchAndSetupRegistry, updateRegistry } from './_fetchAPI.js'
import { registrySetup } from './_registrySetup.js'

const runRegistry = () => {
  fetchAndSetupRegistry(registrySetup)
}

export { runRegistry }