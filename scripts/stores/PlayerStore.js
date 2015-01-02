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
        this.trigger(this.data)
    },
    onPlayerMoveSouth: function() {
        this.data.y += 1
        this.trigger(this.data)
    },
    onPlayerMoveEast: function() {
        this.data.x += 1
        this.trigger(this.data)
    },
    onPlayerMoveWest: function() {
        this.data.x -= 1
        this.trigger(this.data)
    }
})

module.exports = PlayerStore
