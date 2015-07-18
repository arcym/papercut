var MonsterView = React.createClass({
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
            "backgroundColor": "black",
            "top": this.props.data.position.y + "em",
            "left": this.props.data.position.x + "em",
        }
    }
})

module.exports = MonsterView
