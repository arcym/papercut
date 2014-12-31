var LoopDispatcher = require("<root>/scripts/dispatchers/LoopDispatcher")
var KeyboardDispatcher = require("<root>/scripts/dispatchers/KeyboardDispatcher")
var LoopActions = require("<root>/scripts/actions/LoopActions")
var KeyboardActions = require("<root>/scripts/actions/KeyboardActions")

LoopActions.Tick.listen(function(timedelta) {
    console.log(timedelta)
})
KeyboardActions.StrokeKey.listen(function(keycode) {
    console.log(keycode)
})

var GameFrame = React.createClass({
    componentDidMount: function() {
        LoopDispatcher.initiate()
        KeyboardDispatcher.initiate()
    },
    render: function() {
        return (
            <div id="game-frame">
                Hello World!
            </div>
        )
    }
})

module.exports = GameFrame
