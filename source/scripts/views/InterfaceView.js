var InterfaceView = React.createClass({
    render: function() {
        return (
            <div>
                <div className="stroke" style={this.style.score}>
                    {this.props.data.score}p
                </div>
                <div className="stroke" style={this.style.time}>
                    {this.renderTime()}
                </div>
            </div>
        )
    },
    style: {
        "score": {
            "color": "#C00",
            "top": "0.5em",
            "right": "0.5em",
            "fontWeight": "bold",
            "position": "absolute",
        },
        "time": {
            "color": "#FC0",
            "top": "0.5em",
            "left": "0.5em",
            "position": "absolute",
        }
    },
    renderTime: function() {
        var minutes = Math.floor(this.props.data.time / 60)
        var seconds = this.props.data.time % 60
        if(seconds < 10) {seconds = "0" + seconds}
        return minutes + ":" + seconds
    }
})

module.exports = InterfaceView
