window.React = require("react/addons")
window.Reflux = require("reflux")

Reflux.StoreMethods.getInitialState = function() {
    return this.getData()
}

var GameFrame = require("<root>/scripts/components/GameFrame")
React.render(<GameFrame/>, document.body)
