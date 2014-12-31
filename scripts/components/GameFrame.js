var LoopDispatcher = require("<root>/scripts/dispatchers/LoopDispatcher")
var KeyboardDispatcher = require("<root>/scripts/dispatchers/KeyboardDispatcher")

var GameFrame = React.createClass({
    componentDidMount: function() {
        KeyboardDispatcher()
        LoopDispatcher()
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
