var KeyboardInputActions = require("<root>/scripts/actions/KeyboardInputActions")

var KeyboardInputStore = Reflux.createStore({
    data: {
        strokes: {}
    },
    getData: function() {
        return this.data
    },
    init: function() {
        this.listenToMany(KeyboardInputActions)
    },
    onStrokeKey: function(keycode) {
        this.data.strokes[keycode] = true
        this.trigger(this.data)
    },
    onUnstrokeKey: function(keycode) {
        delete this.data.strokes[keycode]
        this.trigger(this.data)
    },
    hasStrokedKey: function(keycode) {
        return this.data.strokes[keycode] == true
    }
})

module.exports = KeyboardInputStore
