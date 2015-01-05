var WorldStore = require("<root>/scripts/stores/WorldStore")
var WorldTile = require("<root>/scripts/components/WorldTile")

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
        var renderings = new Array()
        for(var key in this.state.world.tiles) {
            var tile = this.state.world.tiles[key]
            renderings.push(
                <WorldTile key={key} tile={tile}/>
            )
        }
        return renderings
    }
})

module.exports = World
