var PlayerActions = require("<root>/scripts/actions/PlayerActions")

var PlayerStore = Reflux.createStore({
    data: {
        x: 2,
        y: 1,
        jump: 3
    },
    getData: function() {
        return this.data
    },
    listenables: [
        PlayerActions
    ],
    onPlayerAttemptsToMoveNorth: function() {
        var ydir = this.data.jump > 0 ? -1 : +1
        PlayerActions.PlayerAttemptsToMove(this.data.x, this.data.y, 0, ydir)
    },
    onPlayerAttemptsToMoveSouth: function() {
        PlayerActions.PlayerAttemptsToMove(this.data.x, this.data.y, 0, +1)
    },
    onPlayerAttemptsToMoveEast: function() {
        var ydir = this.data.jump > 0 ? 0 : +1
        PlayerActions.PlayerAttemptsToMove(this.data.x, this.data.y, +1, ydir)
    },
    onPlayerAttemptsToMoveWest: function() {
        var ydir = this.data.jump > 0 ? 0 : +1
        PlayerActions.PlayerAttemptsToMove(this.data.x, this.data.y, -1, ydir)
    },
    onPlayerAttemptsToMoveNortheast: function() {
        var ydir = this.data.jump > 0 ? -1 : +1
        PlayerActions.PlayerAttemptsToMove(this.data.x, this.data.y, +1, ydir)
    },
    onPlayerAttemptsToMoveNorthwest: function() {
        var ydir = this.data.jump > 0 ? -1 : +1
        PlayerActions.PlayerAttemptsToMove(this.data.x, this.data.y, -1, ydir)
    },
    onPlayerMoves: function(x, y, xdir, ydir) {
        this.data.x += xdir
        this.data.y += ydir
        if(xdir != 0 && ydir == 0) {
            this.data.jump = 0
        }
        this.retrigger()
        PlayerActions.PlayerHasMoved(x, y, xdir, ydir)
    },
    onPlayerHasLanded: function() {
        this.data.jump = 3
        this.retrigger()
    },
    onPlayerIsFalling: function() {
        this.data.jump -= 1
        this.retrigger()
    }
})

module.exports = PlayerStore
