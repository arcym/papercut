var LoopActions = require("<root>/scripts/actions/LoopActions")

var Loop = {
    tick: function() {
        Loop.time = (Date.now() - Loop.time) / 1000
        requestAnimationFrame(Loop.tick)
        LoopActions.Tick(Loop.time)
        Loop.time = Date.now()
    },
    time: Date.now()
}

module.exports = Loop
