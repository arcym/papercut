var KeyboardInputStore = require("<root>/scripts/stores/KeyboardInputStore")
var KeyboardInputActions = require("<root>/scripts/actions/KeyboardInputActions")

var KeyboardInputDispatcher = function() {
    document.addEventListener("keydown", function(event) {
        if(!KeyboardInputStore.hasStrokedKey(event.keyCode)) {
            KeyboardInputActions.StrokeKey(event.keyCode)
        }
    })
    document.addEventListener("keyup", function(event) {
        KeyboardInputActions.UnstrokeKey(event.keyCode)
    })
}

module.exports = KeyboardInputDispatcher
