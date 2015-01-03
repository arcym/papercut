var LoopActions = require("<root>/scripts/actions/LoopActions")

var LoopStore = Reflux.createStore({
    data: {
        delta: 0,
        avgdelta: 0
    },
    getData: function() {
        return this.data
    },
    listenables: [
        LoopActions
    ],
    onTick: function(delta) {
        this.data.delta = delta
        this.retrigger()
    }
})

module.exports = LoopStore
