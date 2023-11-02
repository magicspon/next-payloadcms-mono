// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//

const { getDirectories } = require('../../utils')

module.exports = {
  prompt: async ({ prompter }) => {
    const { name } = await prompter.prompt({
      type: 'input',
      name: 'name',
      message: 'Enter the hook name (without `use`):',
    })

    const { directory } = await prompter.prompt({
      type: 'select',
      name: 'directory',
      message: 'Directory:',
      choices: ['apps', 'packages'],
    })

    const { package } = await prompter.prompt({
      type: 'select',
      name: 'package',
      message: 'Package',
      choices: getDirectories(directory),
    })

    const { tests } = await prompter.prompt({
      type: 'confirm',
      name: 'tests',
      message: 'Do you want to include tests:',
    })

    const basePath = `${directory}/${package}/src`

    return {
      path: basePath,
      tests,
      name,
    }
  },
}
