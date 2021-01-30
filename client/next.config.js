module.exports = {
  webpackDevMiddleware: config => {
    conifg.watchOptions.poll = 300;
    return config;
  }
}