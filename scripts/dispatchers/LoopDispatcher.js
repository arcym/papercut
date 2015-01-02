var LoopActions = require("<root>/scripts/actions/LoopActions")

var LoopDispatcher = function() {
    (function tick(old_time) {
        var new_time = Date.now()
        LoopActions.Tick((new_time - old_time) / 1000)
        window.requestAnimationFrame(tick.bind(null, new_time))
    })(Date.now())
}

module.exports = LoopDispatcher
