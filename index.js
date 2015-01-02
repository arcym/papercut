window.React = require("react/addons")
window.Reflux = require("reflux")

Reflux.StoreMethods.getInitialState = function() {
    return this.getData()
}

Reflux.StoreMethods.retrigger = function() {
    var data = this.getData()
    this.trigger(data)
}

var GameFrame = require("<root>/scripts/components/GameFrame")
React.render(<GameFrame/>, document.body)
