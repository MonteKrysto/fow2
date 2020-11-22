const {override, addBabelPlugins} = require('customize-cra')
const plugin = require('@ui-devtools/tailwind/babel')

module.exports = override(...addBabelPlugins(plugin))
