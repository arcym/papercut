var WorldTile = React.createClass({
    propTypes: {
        tile: React.PropTypes.shape({
            x: React.PropTypes.number,
            y: React.PropTypes.number
        }).isRequired
    },
    render: function() {
        return (
            <div style={this.renderStyles()}
                 className={this.renderClasses()}/>
        )
    },
    renderStyles: function() {
        return {
            left: this.props.tile.x + "rem",
            top: this.props.tile.y + "rem",
            backgroundColor: this.props.tile.type == 1 ? "#B5E61D" : "#00A2E8"
        }
    },
    renderClasses: function() {
        return "tile"
    }
})

module.exports = WorldTile
