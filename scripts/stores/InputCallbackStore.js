var InputActions = require("<root>/scripts/actions/InputActions")

var InputCallbackStore = Reflux.createStore({
    data: {
        callbacks: {
            StrokeInput: {
                "up": [require("<root>/scripts/actions/PlayerActions").PlayerMoveNorth],
                "down": [require("<root>/scripts/actions/PlayerActions").PlayerMoveSouth],
                "left": [require("<root>/scripts/actions/PlayerActions").PlayerMoveWest],
                "right": [require("<root>/scripts/actions/PlayerActions").PlayerMoveEast]
            },
            UnstrokeInput: {
            }
        }
    },
    getData: function() {
        return this.data
    },
    init: function() {
        for(var event in InputActions) {
            this.listenTo(InputActions[event],
                          this.handleInput(event))
            //this.data.callbacks[event] = new Object()
        }
    },
    handleInput: function(event) {
        var callbacks = this.data.callbacks[event]
        return function(input) {
            var functions = callbacks[input]
            for(var index in functions) {
                functions[index]()
            }
        }
    }
})

module.exports = InputCallbackStore
