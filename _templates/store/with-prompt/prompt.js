// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//

const { getDirectories } = require('../../utils')

module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Enter the hook name (without `use`):',
  },
  {
    type: 'select',
    name: 'package',
    message: 'Package',
    choices: getDirectories,
  },
]
