var PlayerActions = require("<root>/scripts/actions/PlayerActions")

var SwordShardStore = Reflux.createStore({
    data: {
        x: 47,
        y: 8
    },
    getData: function() {
        return this.data
    },
    listenables: [
        PlayerActions
    ],
    onPlayerHasMoved: function(x, y) {
        if(x == this.data.x
        && y == this.data.y) {
            console.log("YOU WIN!")
        }
    }
})

module.exports = SwordShardStore
