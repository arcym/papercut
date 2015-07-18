var CameraView = React.createClass({
    render: function() {
        return (
            <div style={this.renderStyle()}>
                {this.props.children}
            </div>
        )
    },
    renderStyle: function() {
        var hero = this.props.data.hero
        var world = this.props.data.world
        var y = (Math.floor(hero.position.y / 8) * 8) - 8
        y = Math.max(Math.min(y, world.height - 17), 0)
        y *= -1
        return {
            "top": y + "em",
            "left": 0 + "em",
            "position": "absolute",
            "transitionDuration": "1.5s",
            "transitionProperty": "left top",
            "transitionTimingFunction": "ease-in-out"
        }
    }
})

module.exports = CameraView
