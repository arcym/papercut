var PlayerActions = require("<root>/scripts/actions/PlayerActions")

var PlayerStore = Reflux.createStore({
    data: {
        x: 2,
        y: 1
    },
    getData: function() {
        return this.data
    },
    init: function() {
        this.listenToMany(PlayerActions)
    },
    onPlayerMoveNorth: function() {
        this.data.y -= 1
        this.retrigger()
    },
    onPlayerMoveSouth: function() {
        this.data.y += 1
        this.retrigger()
    },
    onPlayerMoveEast: function() {
        this.data.x += 1
        this.retrigger()
    },
    onPlayerMoveWest: function() {
        this.data.x -= 1
        this.retrigger()
    }
})

module.exports = PlayerStore
