(function(window){
  window.__karma__.start = function(){
    var _karma_ = window.__karma__;
    
    StepTest.on("finished", function(){
      _karma_.info({ total: this.tests.length });
      _karma_.complete();
    });

    StepTest.on("test.finished", function(test){  
      var result = {
        description: test.name,
        id: test.id,
        log: [],
        suite: [],
        skipped: false,
        pending: false,
        success: test.isSuccess() ? "SUCCESS" : "FAILED",
        time: new Date().getTime(),
        executedExpectationsCount: test.assertions.length
      };  
      _karma_.result(result);
    })

    StepTest.on("finished", function(){
      _karma_.complete();
    });

    StepTest.play();
  }
})(typeof window ? window : global)