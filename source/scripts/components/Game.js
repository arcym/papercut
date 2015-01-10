var LoopDispatcher = require("<root>/scripts/dispatchers/LoopDispatcher")
var KeyboardDispatcher = require("<root>/scripts/dispatchers/KeyboardDispatcher")

var InputConfigStore = require("<root>/scripts/stores/InputConfigStore")
var InputCallbackStore = require("<root>/scripts/stores/InputCallbackStore")

var GameFrame = require("<root>/scripts/components/GameFrame")
var Camera = require("<root>/scripts/components/Camera")
var World = require("<root>/scripts/components/World")
var SwordShard = require("<root>/scripts/components/SwordShard")
var Player = require("<root>/scripts/components/Player")
var LoopStatus = require("<root>/scripts/components/LoopStatus")

var Game = React.createClass({
    componentDidMount: function() {
        KeyboardDispatcher()
        LoopDispatcher()
    },
    render: function() {
        return (
            <GameFrame>
                <Camera distance={2}>
                    
                </Camera>
                <Camera distance={1}>
                    <World/>
                    <SwordShard/>
                    <Player/>
                </Camera>
            </GameFrame>
        )
    }
})

module.exports = Game
