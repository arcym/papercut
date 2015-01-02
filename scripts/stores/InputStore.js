var InputActions = require("<root>/scripts/actions/InputActions")

var InputStore = Reflux.createStore({
    data: {
        //strokes: {} <-copy methods from KeyboardInputStore
        actions: {}
    },
    getData: function() {
        return this.data
    },
    init: function() {
        this.listenToMany(InputActions)
    },
    addAction: function(event, action) {
        actions[event] = action
    },
    removeAction: function() {
        //?!
    }
})

module.exports = InputStore
