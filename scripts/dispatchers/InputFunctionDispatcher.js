var InputActions = require("<root>/scripts/actions/InputActions")
var InputFunctionConfigStore = require("<root>/scripts/stores/InputFunctionConfigStore")

var InputFunctionDispatcher = function() {
    console.log("Hello World!")
    InputActions.StrokeInput.listen(function(input) {
        var action = InputFunctionConfigStore.getBindedAction(input)
        if(action) {
            action()
        }
    })
    //create a mixin for binding and unbinding
    //get a better name than InputFunction?
    //on key down or on key up?
}

module.exports = InputFunctionDispatcher
