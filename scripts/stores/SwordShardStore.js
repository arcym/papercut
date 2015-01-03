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
})

module.exports = SwordShardStore
