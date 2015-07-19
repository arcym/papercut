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
            "transitionDuration": "0.15s",
            "transitionProperty": "left top",
            "top": this.props.data.position.y + "em",
            "left": this.props.data.position.x + delta + "em",
            "backgroundImage": "url(" + this.getImage() + ")",
            "backgroundRepeat": "no-repeat",
            "backgroundSize": "100%",
        }
    },
    getImage: function() {
        if(this.props.data.jump == 0) {
            return "./assets/images/dude/jumpdude.png"
        } else if(this.props.data.jump == this.props.data.maxjump) {
            return "./assets/images/dude/jumpdude_fall.png"
        } else {
            return "./assets/images/dude/jumpdude_jumpup.png"
        }
    }
})

module.exports = HeroView
