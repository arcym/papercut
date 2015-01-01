var KeyboardActions = require("<root>/scripts/actions/KeyboardActions")

var PlayerStore = Reflux.createStore({
    data: {
        x: 2,
        y: 1
    },
    init: function() {
        this.listenToMany(KeyboardActions)
    },
    getData: function() {
        return this.data
    },
    onStrokeKey: function() {
        this.data.x += 1
        this.trigger(this.data)
    }
})

module.exports = PlayerStore
