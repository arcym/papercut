var ItemView = React.createClass({
    render: function() {
        return (
            <div style={this.renderStyle()}/>
        )
    },
    renderStyle: function() {
        return {
            "width": "1em",
            "height": "1em",
            "position": "absolute",
            "top": this.props.data.position.y + "em",
            "left": this.props.data.position.x + "em",
            "backgroundColor": "#888"
        }
    }
})

module.exports = ItemView
