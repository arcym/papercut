var KeyboardActions = require("<root>/scripts/actions/KeyboardActions")
var KeyboardDispatcher = require("<root>/scripts/dispatchers/KeyboardDispatcher")

var InputStore = require("<root>/scripts/stores/InputStore")
var InputActions = require("<root>/scripts/actions/InputActions")

var InputDispatcher = function() {
    KeyboardDispatcher()
    KeyboardActions.StrokeKey.listen(function(keycode) {
        var bindings = InputStore.getKeyboardBindings()
        if(bindings[keycode]) {
            var inputname = bindings[keycode]
            InputActions.StrokeInput(inputname)
        }
    })
}

module.exports = InputDispatcher
