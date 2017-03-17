KarmaStepTest = function(_karma){
  StepTest.on("test.finished", function(test){
    _karma.result({
        // test id
        id: test.id,
        // test description
        description: test.name,
        // an array of string error messages that might explain a failure.
        // this is required if success is false.
        log: test.errors,
        success: test.isSuccess(), // pass / fail
        skipped: false // skipped / ran
    })
  })
  StepTest.on("finished", function(){
    _karma.complete()
  })
  StepTest.log = function(info){
    _karma.info(info);
  }
  try{
    StepTest.play()
  }catch(error){
    _karma.error(error);
  }
}
