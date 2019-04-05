// const path = require('path')
module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx|js)$/,
    include: /src/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          cacheDirectory: '.babel-cache',
        },
      },
    ],
  })
  config.resolve.extensions.push('.ts', '.tsx')
  return config
}