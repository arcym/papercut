var KeyboardActions = require("<root>/scripts/actions/KeyboardActions")

var KeyboardStore = Reflux.createStore({
    data: {
        keys: {}
    },
    getData: function() {
        return this.data
    },
    init: function() {
        this.listenToMany(KeyboardActions)
    },
    onStrokeKey: function(keycode) {
        this.data.keys[keycode] = true
        this.retrigger()
    },
    onUnstrokeKey: function(keycode) {
        delete this.data.keys[keycode]
        this.retrigger()
    },
    hasStrokedKey: function(keycode) {
        return this.data.keys[keycode] == true
    }
})

module.exports = KeyboardStore
