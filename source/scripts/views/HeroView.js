var HeroView = React.createClass({
    render: function() {
        return (
            <div>
                <div key={this.props.data.wrap - 1}
                    style={this.renderStyle(+15)}/>
                <div key={this.props.data.wrap}
                    style={this.renderStyle(0)}/>
                <div key={this.props.data.wrap + 1}
                    style={this.renderStyle(-15)}/>
            </div>
        )
    },
    renderStyle: function(delta) {
        return {
            "width": "1em",
            "height": "1em",
            "position": "absolute",
            "backgroundColor": "green",
            "transitionDuration": "0.15s",
            "transitionProperty": "left top",
            "top": this.props.data.position.y + "em",
            "left": this.props.data.position.x + delta + "em",
        }
    }
})

module.exports = HeroView
