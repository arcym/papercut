var CameraStore = require("<root>/scripts/stores/CameraStore")

var Camera = React.createClass({
    mixins: [
        Reflux.connect(CameraStore, "camera")
    ],
    render: function() {
        return (
            <div style={this.renderStyles()}
                 className={this.renderClasses()}>
                 {this.props.children}
            </div>
        )
    },
    renderStyles: function() {
        return {
            left: this.state.camera.x + "rem",
            top: this.state.camera.y + "rem"
        }
    },
    renderClasses: function() {
        return "camera"
    }
})

module.exports = Camera
