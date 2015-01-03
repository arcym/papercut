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
    onPlayerMovesNorth: function() {
        this.data.y -= 1
        this.retrigger()
    },
    onPlayerMovesSouth: function() {
        this.data.y += 1
        this.retrigger()
    },
    onPlayerMovesEast: function() {
        this.data.x += 1
        this.retrigger()
    },
    onPlayerMovesWest: function() {
        this.data.x -= 1
        this.retrigger()
    },
    onPlayerMovesNortheast: function() {
        this.data.x += 1
        this.data.y -= 1
        this.retrigger()
    },
    onPlayerMovesNorthwest: function() {
        this.data.x -= 1
        this.data.y -= 1
        this.retrigger()
    },
    onPlayerMovesSoutheast: function() {
        this.data.x += 1
        this.data.y += 1
        this.retrigger()
    },
    onPlayerMovesSouthwest: function() {
        this.data.x -= 1
        this.data.y += 1
        this.retrigger()
    }
})

module.exports = PlayerStore
