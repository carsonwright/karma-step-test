(function(window){
  window.__karma__.start = function(_karma_){
    StepTest.play();
    StepTest.on("finished", function(){
      _karma_.complete();
    });
    StepTest.trigger("test.finished", function(test){
      
      var result = {
        description: test.name,
        id: test.id,
        log: test.logs,
        skipped: false,
        pending: false,
        success: test.isSuccess(),
        time: new Date().getTime(),
        executedExpectationsCount: this.assertions.length
      };
      _karma_.result(result);
    })

    StepTest.on("finished", function(){
      _karma_.complete();
    });
  }
})(typeof window ? window : global)