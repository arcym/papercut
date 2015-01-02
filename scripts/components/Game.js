var LoopDispatcher = require("<root>/scripts/dispatchers/LoopDispatcher")
var InputDispatcher = require("<root>/scripts/dispatchers/InputDispatcher")
var InputFunctionDispatcher = require("<root>/scripts/dispatchers/InputFunctionDispatcher")

var World = require("<root>/scripts/components/World")
var Player = require("<root>/scripts/components/Player")

var Game = React.createClass({
    componentDidMount: function() {
        InputDispatcher()
        InputFunctionDispatcher()
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

module.exports = Game
