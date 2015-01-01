var PlayerStore = require("<root>/scripts/stores/PlayerStore")

var Player = React.createClass({
    mixins: [
        Reflux.connect(PlayerStore, "player")
    ],
    render: function() {
        return (
            <div style={this.renderStyles()}
                 className={this.renderClasses()}/>
        )
    },
    renderStyles: function() {
        return {
            top: this.state.player.y + "rem",
            left: this.state.player.x + "rem"
        }
    },
    renderClasses: function() {
        return "player"
    }
})

module.exports = Player
