const path = require("path");
var initStepTest = function (files) {
  (function(window){
    var stepTestPath = path.dirname(require.resolve('step-test'))
  })(typeof window !== 'undefined' ? window : global);
}

initStepTest.$inject = ['config.files']

module.exports = {
  'framework:step-test': ['factory', initStepTest]
}