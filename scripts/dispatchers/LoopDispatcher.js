var LoopActions = require("<root>/scripts/actions/LoopActions")

var LoopDispatcher = function() {
    (function tick(time) {
        LoopActions.Tick((Date.now() - time) / 1000)
        requestAnimationFrame(tick.bind(null, Date.now()))
    })(Date.now())
}

module.exports = LoopDispatcher
