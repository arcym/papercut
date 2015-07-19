var ItemView = React.createClass({
    render: function() {
        return (
            <div style={this.renderStyle()}/>
        )
    },
    renderStyle: function() {
        return {
            "width": "0.75em",
            "height": "0.75em",
            "position": "absolute",
            "borderRadius": "0.1em",
            "animationName": "float",
            "animationDuration": "5s",
            "animationIterationCount": "infinite",
            "animationTimingFunction": "ease-in-out",
            "backgroundColor": "#C00",
            "top": this.props.data.position.y + 0.125 +"em",
            "left": this.props.data.position.x + 0.125 +"em",
        }
    }
})

module.exports = ItemView
