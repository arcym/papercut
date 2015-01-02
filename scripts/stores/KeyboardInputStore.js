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
    onStroke: function(keycode) {
        this.data.strokes[keycode] = true
        this.retrigger()
    },
    onUnstroke: function(keycode) {
        delete this.data.strokes[keycode]
        this.retrigger()
    },
    hasStroked: function(keycode) {
        return this.data.strokes[keycode] == true
    }
})

module.exports = KeyboardInputStore
