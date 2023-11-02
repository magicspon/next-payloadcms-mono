const path = require('path')
const { readdirSync } = require('fs')

const getDirectories = (root = 'packages') =>
  readdirSync(path.resolve(process.cwd(), root), { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)

module.exports = { getDirectories }
