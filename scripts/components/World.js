var WorldStore = require("<root>/scripts/stores/WorldStore")

var World = React.createClass({
    mixins: [
        Reflux.connect(WorldStore, "world")
    ],
    render: function() {
        return (
            <div style={this.renderStyles()}
                 className={this.renderClasses()}>
                 {this.renderWorldTiles()}
            </div>
        )
    },
    renderStyles: function() {
        return {
            width: this.state.world.width + "rem",
            height: this.state.world.height + "rem",
        }
    },
    renderClasses: function() {
        return "world"
    },
    renderWorldTiles: function() {
        
    }
})

module.exports = World
