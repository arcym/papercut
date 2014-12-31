var Loop = require("<root>/scripts/systems/Loop")
var LoopActions = require("<root>/scripts/actions/LoopActions")

var LoopDispatcher = function() {
    (function tick() {
        Loop.time = (Date.now() - Loop.time) / 1000;
        LoopActions.Tick(Loop.time)
        Loop.time = Date.now()
        window.requestAnimationFrame(tick)
    })()
}

module.exports = LoopDispatcher
