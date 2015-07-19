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
            "transitionDuration": "0.5s",
            "transitionProperty": "left top",
            "top": this.props.data.position.y + "em",
            "left": this.props.data.position.x + "em",
            "backgroundImage": "url(" + this.props.data.image + ")",
            "backgroundRepeat": "no-repeat",
            "backgroundSize": "100%",
            "zIndex": !!this.props.data.depth ? this.props.data.depth : null,
            "transform": this.props.data.direction != 0 ? "scaleX(" + this.props.data.direction + ")": null
            
        }
    }
})

module.exports = MonsterView
