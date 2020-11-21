const { override, addBabelPlugins } = require('customize-cra')
const { addReactRefresh } = require('customize-cra-react-refresh')
const plugin = require('@ui-devtools/tailwind/babel')

module.exports = override(...addBabelPlugins(plugin), addReactRefresh())
