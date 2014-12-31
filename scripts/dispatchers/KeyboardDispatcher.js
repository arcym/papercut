var KeyboardActions = require("<root>/scripts/actions/KeyboardActions")

var KeyboardDispatcher = {
    initiate: function() {
        document.addEventListener("keydown", function(event) {
            KeyboardActions.StrokeKey(event.keyCode)
        })

        document.addEventListener("keyup", function(event) {
            KeyboardActions.UnstrokeKey(event.keyCode)
        })
    }
}

module.exports = KeyboardDispatcher
