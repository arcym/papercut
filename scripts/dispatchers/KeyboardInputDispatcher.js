var KeyboardInputStore = require("<root>/scripts/stores/KeyboardInputStore")
var KeyboardInputActions = require("<root>/scripts/actions/KeyboardInputActions")

var KeyboardInputDispatcher = function() {
    document.addEventListener("keydown", function(event) {
        if(!KeyboardInputStore.hasStroked(event.keyCode)) {
            KeyboardInputActions.Stroke(event.keyCode)
        }
    })
    document.addEventListener("keyup", function(event) {
        KeyboardInputActions.Unstroke(event.keyCode)
    })
}

module.exports = KeyboardInputDispatcher
