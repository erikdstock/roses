const path = require('path')
module.exports = {
  propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json', [{componentNameResolver: (exp, source) => exp.getName() === 'StyledComponentClass' && getDefaultExportForFile(source) }]).parse,
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/ThemeWrapper')
  }
}
