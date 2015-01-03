var PlayerActions = require("<root>/scripts/actions/PlayerActions")

var InputFunctionConfigStore = Reflux.createStore({
    data: {
        bindings: {
            "up": PlayerActions.PlayerMoveNorth,
            "down": PlayerActions.PlayerMoveSouth,
            "left": PlayerActions.PlayerMoveWest,
            "right": PlayerActions.PlayerMoveEast
        }
    },
    getData: function() {
        return this.data
    },
    getBindedAction: function(input) {
        return this.data.bindings[input]
    }
})

module.exports = InputFunctionConfigStore
