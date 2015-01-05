var LoopStore = require("<root>/scripts/stores/LoopStore")

var LoopStatus = React.createClass({
    mixins: [
        Reflux.connect(LoopStore, "loop")
    ],
    render: function() {
        return (
            <div className="loop-status">
                delta: {this.state.loop.delta.toFixed(3)}
            </div>
        )
    }
})

module.exports = LoopStatus
