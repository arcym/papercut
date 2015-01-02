var KeyboardInputActions = require("<root>/scripts/actions/KeyboardInputActions")
var KeyboardInputDispatcher = require("<root>/scripts/dispatchers/KeyboardInputDispatcher")

var InputStore = require("<root>/scripts/stores/InputStore")
var InputActions = require("<root>/scripts/actions/InputActions")

var InputDispatcher = function() {
    KeyboardInputDispatcher()
    KeyboardInputActions.Stroke.listen(function(keycode) {
        console.log(keycode)
    })
}

module.exports = InputDispatcher
