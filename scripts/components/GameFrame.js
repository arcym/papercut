var LoopDispatcher = require("<root>/scripts/dispatchers/LoopDispatcher")
var InputDispatcher = require("<root>/scripts/dispatchers/InputDispatcher")

var World = require("<root>/scripts/components/World")
var Player = require("<root>/scripts/components/Player")

var GameFrame = React.createClass({
    componentDidMount: function() {
        LoopDispatcher()
        InputDispatcher()
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
