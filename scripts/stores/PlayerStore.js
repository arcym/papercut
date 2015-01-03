var PlayerActions = require("<root>/scripts/actions/PlayerActions")

var PlayerStore = Reflux.createStore({
    data: {
        x: 2,
        y: 1
    },
    getData: function() {
        return this.data
    },
    listenables: [
        PlayerActions
    ],
    onPlayerAttemptsToMoveNorth: function() {
        PlayerActions.PlayerAttemptsToMove(this.data.x, this.data.y, 0, -1)
    },
    onPlayerAttemptsToMoveSouth: function() {
        PlayerActions.PlayerAttemptsToMove(this.data.x, this.data.y, 0, +1)
    },
    onPlayerAttemptsToMoveEast: function() {
        PlayerActions.PlayerAttemptsToMove(this.data.x, this.data.y, +1, 0)
    },
    onPlayerAttemptsToMoveWest: function() {
        PlayerActions.PlayerAttemptsToMove(this.data.x, this.data.y, -1, 0)
    },
    onPlayerAttemptsToMoveNortheast: function() {
        PlayerActions.PlayerAttemptsToMove(this.data.x, this.data.y, +1, -1)
    },
    onPlayerAttemptsToMoveNorthwest: function() {
        PlayerActions.PlayerAttemptsToMove(this.data.x, this.data.y, -1, -1)
    },
    onPlayerMoves: function(x, y) {
        this.data.x = x
        this.data.y = y
        this.retrigger()
    },
})

module.exports = PlayerStore
