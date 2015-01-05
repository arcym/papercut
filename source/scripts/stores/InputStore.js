var InputActions = require("<root>/scripts/actions/InputActions")

var InputStore = Reflux.createStore({
    data: {
        inputs: {}
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
    }
})

module.exports = InputStore
