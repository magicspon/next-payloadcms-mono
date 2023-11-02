// eslint-disable-next-line @typescript-eslint/no-var-requires
const { getDirectories } = require('../../utils')

module.exports = {
  prompt: async ({ prompter }) => {
    const { name } = await prompter.prompt({
      type: 'input',
      name: 'name',
      message: 'Enter the component name:',
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

    let dir = ''
    const isUi = package === 'ui' || package === 'builder'

    if (isUi) {
      const result = await prompter.prompt({
        type: 'select',
        name: 'uiDir',
        message: 'Package',
        choices: getDirectories(`${directory}/${package}/src`),
      })
      dir = `/${result.uiDir}`
    }

    const { tests } = await prompter.prompt({
      type: 'confirm',
      name: 'tests',
      message: 'Do you want to include tests:',
    })

    const { storybook } = await prompter.prompt({
      type: 'confirm',
      name: 'storybook',
      message: 'Do you want to include a story:',
    })

    const basePath = `${directory}/${package}/src`
    const path = isUi ? `${basePath}${dir}` : `${basePath}/components`

    return {
      path,
      tests,
      storybook,
      name,
    }
  },
}
