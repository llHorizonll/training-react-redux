if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Router.prod')
} else {
  module.exports = require('./Router.dev')
}
