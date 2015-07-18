var CameraView = React.createClass({
    render: function() {
        return (
            <div style={this.renderStyle()}>
                {this.props.children}
            </div>
        )
    },
    renderStyle: function() {
        var FRAME_WIDTH = 20
        var FRAME_HEIGHT = 15
        var hero = this.props.data.hero
        var world = this.props.data.world
        var x = (hero.position.x - (FRAME_WIDTH * 0.25))
        var y = (hero.position.y - (FRAME_HEIGHT * 0.5))
        x = Math.max(Math.min(x, world.width - FRAME_WIDTH), 0)
        y = Math.max(Math.min(y, world.height - FRAME_HEIGHT), 0)
        x *= -1
        y *= -1
        return {
            "top": y + "em",
            "left": x + "em",
            "position": "absolute",
        }
    }
})

module.exports = CameraView
