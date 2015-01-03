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
        PlayerActions.PlayerAttemptsToMove(this.data.x, this.data.y - 1, "north")
    },
    onPlayerAttemptsToMoveSouth: function() {
        PlayerActions.PlayerAttemptsToMove(this.data.x, this.data.y + 1, "south")
    },
    onPlayerAttemptsToMoveEast: function() {
        PlayerActions.PlayerAttemptsToMove(this.data.x + 1, this.data.y, "east")
    },
    onPlayerAttemptsToMoveWest: function() {
        PlayerActions.PlayerAttemptsToMove(this.data.x - 1, this.data.y, "west")
    },
    onPlayerAttemptsToMoveNortheast: function() {
        PlayerActions.PlayerAttemptsToMove(this.data.x + 1, this.data.y - 1, "northeast")
    },
    onPlayerAttemptsToMoveNorthwest: function() {
        PlayerActions.PlayerAttemptsToMove(this.data.x - 1, this.data.y - 1, "northwest")
    },
    onPlayerMoves: function(x, y, direction) {
        this.data.x = x
        this.data.y = y
        this.retrigger()
    },
})

module.exports = PlayerStore
