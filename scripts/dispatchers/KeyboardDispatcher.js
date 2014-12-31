var Keyboard = require("<root>/scripts/systems/Keyboard")
var KeyboardActions = require("<root>/scripts/actions/KeyboardActions")

var KeyboardDispatcher = function() {
    document.addEventListener("keydown", function(event) {
        var keycode = event.keyCode
        if(Keyboard.strokes[keycode] != true) {
            KeyboardActions.StrokeKey(keycode)
            Keyboard.strokes[keycode] = true
        }
    })
    document.addEventListener("keyup", function(event) {
        var keycode = event.keyCode
        delete Keyboard.strokes[keycode]
        KeyboardActions.UnstrokeKey(keycode)
    })
}

module.exports = KeyboardDispatcher
