var Loop = require("<root>/scripts/systems/Loop")

var GameFrame = React.createClass({
    componentDidMount: function() {
        Loop.tick()
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
