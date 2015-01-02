var LoopActions = require("<root>/scripts/actions/LoopActions")

var LoopStore = Reflux.createStore({
    data: {
        timedelta: 0
    },
    getData: function() {
        return this.data
    },
    init: function() {
        this.listenToMany(LoopActions)
    },
    onTick: function(timedelta) {
        this.data.timedelta = timedelta
        this.retrigger()
    }
})

module.exports = LoopStore
