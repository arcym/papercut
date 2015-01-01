var LoopDispatcher = require("<root>/scripts/dispatchers/LoopDispatcher")
var KeyboardDispatcher = require("<root>/scripts/dispatchers/KeyboardDispatcher")

var Player = require("<root>/scripts/components/Player")

var GameFrame = React.createClass({
    componentDidMount: function() {
        KeyboardDispatcher()
        LoopDispatcher()
    },
    render: function() {
        return (
            <div id="game-frame">
                <Player/>
            </div>
        )
    }
})

module.exports = GameFrame
