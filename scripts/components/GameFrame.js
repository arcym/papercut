var LoopDispatcher = require("<root>/scripts/dispatchers/LoopDispatcher")
var KeyboardDispatcher = require("<root>/scripts/dispatchers/KeyboardDispatcher")

var World = require("<root>/scripts/components/World")
var Player = require("<root>/scripts/components/Player")

var GameFrame = React.createClass({
    componentDidMount: function() {
        KeyboardDispatcher()
        LoopDispatcher()
    },
    render: function() {
        return (
            <div id="game-frame">
                <World/>
                <Player/>
            </div>
        )
    }
})

module.exports = GameFrame
