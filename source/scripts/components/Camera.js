var WorldStore = require("<root>/scripts/stores/WorldStore")
var GameFrameStore = require("<root>/scripts/stores/GameFrameStore")
var PlayerStore = require("<root>/scripts/stores/PlayerStore")

var Camera = React.createClass({
    mixins: [
        Reflux.connect(PlayerStore, "player")
    ],
    render: function() {
        return (
            <div style={this.renderStyles()}
                 className={this.renderClasses()}>
                 {this.props.children}
            </div>
        )
    },
    renderStyles: function() {
        var x = ((this.state.player.x - 5) * -1) / this.props.distance
        var xmax = (WorldStore.getWidth() - GameFrameStore.getWidth()) * -1
        x = Math.min(x, 0)
        x = Math.max(x, xmax)
        return {
            left: x + "rem",
            top: 0 + "rem"
        }
    },
    renderClasses: function() {
        return "camera"
    }
})

module.exports = Camera
