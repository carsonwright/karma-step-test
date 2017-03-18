const path = require("path");
var createPattern = function (pattern) {
  return {pattern: pattern, included: true, served: true, watched: false}
}

var initStepTest = function (files) {
  files.unshift(createPattern(path.join(__dirname, '/adapter.js')));
  files.unshift(createPattern(require.resolve('step-test')));
}

initStepTest.$inject = ['config.files']

module.exports = {
  'framework:step-test': ['factory', initStepTest]
}