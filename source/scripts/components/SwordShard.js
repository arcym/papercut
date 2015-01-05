var SwordShardStore = require("<root>/scripts/stores/SwordShardStore")

var SwordShard = React.createClass({
    mixins: [
        Reflux.connect(SwordShardStore, "swordshard")
    ],
    render: function() {
        return (
            <div style={this.renderStyles()}
                 className={this.renderClasses()}/>
        )
    },
    renderStyles: function() {
        return {
            left: this.state.swordshard.x + "rem",
            top: this.state.swordshard.y + "rem"
        }
    },
    renderClasses: function() {
        return "sword-shard"
    }
    
})

module.exports = SwordShard
