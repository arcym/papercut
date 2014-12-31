var Loop = require("<root>/scripts/systems/Loop")
var LoopActions = require("<root>/scripts/actions/LoopActions")

var LoopDispatcher = {
    initiate: function() {
        LoopDispatcher.retick()
    },
    tick: function() {
        LoopActions.Tick((Date.now() - Loop.time) / 1000)
        Loop.time = Date.now()
        LoopDispatcher.retick()
    },
    retick: function() {
        window.requestAnimationFrame(LoopDispatcher.tick)
    }
}

module.exports = LoopDispatcher
