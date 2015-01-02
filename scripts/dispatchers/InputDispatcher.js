var KeyboardActions = require("<root>/scripts/actions/KeyboardActions")
var KeyboardDispatcher = require("<root>/scripts/dispatchers/KeyboardDispatcher")

var InputStore = require("<root>/scripts/stores/InputStore")
var InputActions = require("<root>/scripts/actions/InputActions")
var InputConfigStore = require("<root>/scripts/stores/InputConfigStore")

var InputDispatcher = function() {
    KeyboardDispatcher()
    KeyboardActions.StrokeKey.listen(function(keycode) {
        var config = InputConfigStore.getData()
        if(config.keyboard[keycode]) {
            var inputname = config.keyboard[keycode]
            InputActions.StrokeInput(inputname)
        }
    })
}

module.exports = InputDispatcher
