var DefaultInputConfig = require("<root>/assets/DefaultInputConfig")
var KeycodeDictionary = require("<root>/scripts/references/KeycodeDictionary")

var InputActions = require("<root>/scripts/actions/InputActions")
var KeyboardActions = require("<root>/scripts/actions/KeyboardActions")

var InputConfigStore = Reflux.createStore({
    data: {
        keyboard: {}
    },
    getData: function() {
        return this.data
    },
    init: function() {
        var config = DefaultInputConfig
        for(var keyname in config.keyboard) {
            var keycode = KeycodeDictionary.getKeycode(keyname)
            this.data.keyboard[keycode] = config.keyboard[keyname]
        }
    },
    listenables: [
        KeyboardActions
    ],
    onStrokeKey: function(keycode) {
        var input = this.data.keyboard[keycode]
        if(input) {
            InputActions.StrokeInput(input)
        }
    },
    onUnstrokeKey: function(keycode) {
        var input = this.data.keyboard[keycode]
        if(input) {
            InputActions.UnstrokeInput(input)
        }
    }
})

module.exports = InputConfigStore
