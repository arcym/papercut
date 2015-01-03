var GameFrame = React.createClass({
    render: function() {
        return (
            <div id="game-frame">
                {this.props.children}
            </div>
        )
    }
})

module.exports = GameFrame
