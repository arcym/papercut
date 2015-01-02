var InputActions = require("<root>/scripts/actions/InputActions")

var InputStore = Reflux.createStore({
    data: {
        inputs: {},
        bindings: {
            keyboard: {
                38: "up",
                40: "down",
                37: "left",
                39: "right"
            }
        }
    },
    getData: function() {
        return this.data
    },
    init: function() {
        this.listenToMany(InputActions)
    },
    onStrokeInput: function(keycode) {
        this.data.inputs[keycode] = true
        this.retrigger()
    },
    onUnstrokeInput: function(keycode) {
        delete this.data.inputs[keycode]
        this.retrigger()
    },
    hasStrokedInput: function(keycode) {
        return this.data.inputs[keycode] == true
    },
    getKeyboardBindings: function() {
        return this.data.bindings.keyboard
    }
})

module.exports = InputStore
