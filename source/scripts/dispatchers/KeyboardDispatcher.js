var KeyboardStore = require("<root>/scripts/stores/KeyboardStore")
var KeyboardActions = require("<root>/scripts/actions/KeyboardActions")

var KeyboardDispatcher = function() {
    document.addEventListener("keydown", function(event) {
        if(!KeyboardStore.hasStrokedKey(event.keyCode)) {
            KeyboardActions.StrokeKey(event.keyCode)
        }
    })
    document.addEventListener("keyup", function(event) {
        KeyboardActions.UnstrokeKey(event.keyCode)
    })
}

module.exports = KeyboardDispatcher
