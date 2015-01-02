var KeyboardInputDispatcher = require("<root>/scripts/dispatchers/KeyboardInputDispatcher")
var KeyboardInputActions = require("<root>/scripts/actions/KeyboardInputActions")

var InputDispatcher = function() {
    KeyboardInputDispatcher()
    KeyboardInputActions.StrokeKey.listen(function(keycode) {
        console.log(keycode)
    })
}

module.exports = InputDispatcher
