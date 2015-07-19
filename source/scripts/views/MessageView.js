var MessageView = React.createClass({
    render: function() {
        return (
            <div style={this.renderStyle()}>
                {this.props.data.text}
            </div>
        )
    },
    renderStyle: function() {
        return {
            "position": "absolute",
            "top": this.props.data.position.y + "em",
            "left": this.props.data.position.x + "em",
            "fontWeight": this.props.data.bold ? "bold" : null
        }
    }
})

module.exports = MessageView
