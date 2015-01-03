var LoopDispatcher = require("<root>/scripts/dispatchers/LoopDispatcher")
var KeyboardDispatcher = require("<root>/scripts/dispatchers/KeyboardDispatcher")

var InputConfigStore = require("<root>/scripts/stores/InputConfigStore")
var InputCallbackStore = require("<root>/scripts/stores/InputCallbackStore")

var World = require("<root>/scripts/components/World")
var Player = require("<root>/scripts/components/Player")
var Camera = require("<root>/scripts/components/Camera")
var GameFrame = require("<root>/scripts/components/GameFrame")

var Game = React.createClass({
    componentDidMount: function() {
        KeyboardDispatcher()
        LoopDispatcher()
    },
    render: function() {
        return (
            <GameFrame>
                <Camera>
                    <World/>
                    <Player/>
                </Camera>
            </GameFrame>
        )
    }
})

module.exports = Game
