var screenfull = require("screenfull")

var FullscreenButton = React.createClass({
    render: function() {
        if(screenfull.enabled && !screenfull.isFullscreen) {
            return (
                <button id="fullscreen" onClick={this.onClick}>
                    Fullscreen?
                </button>
            )
        }
    },
    onClick: function() {
        screenfull.request()
        this.forceUpdate()
    }
})

module.exports = FullscreenButton
