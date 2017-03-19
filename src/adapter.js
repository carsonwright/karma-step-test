(function(window){
  window.__karma__.start = function(){
    var _karma_ = window.__karma__;
    
    StepTest.on("finished", function(){
      _karma_.complete({order: this.tests.length});
    });

    StepTest.on("test.finished", function(test){  
      var result = {
        description: test.name,
        id: test.id,
        log: [],
        suite: [],
        skipped: false,
        pending: false,
        success: test.isSuccess(),
        time: new Date().getTime(),
        executedExpectationsCount: test.assertions.length,
        total: this.tests.length
      };  
      _karma_.result(result);
    })

    StepTest.on("finished", function(){
      _karma_.complete();
    });

    _karma_.info({total: StepTest.tests.length});
    StepTest.play();
  }
})(typeof window ? window : global)