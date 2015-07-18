var vkey = require("vkey")

var Input = {
    onKeyDown: function(key, func) {
        if(this.func.onKeyDown[key] == null)
            this.func.onKeyDown[key] = []
        this.func.onKeyDown[key].push(func)
    },
    onKeyUp: function(key, func) {
        if(this.func.onKeyUp[key] == null)
            this.func.onKeyUp[key] = []
        this.func.onKeyUp[key].push(func)
    },
    func: {
        onKeyDown: {},
        onKeyUp: {}
    },
    state: {},
    doKeyDown: function(key) {
        if(!this.state[key]) {
            this.state[key] = true
            for(var index in this.func.onKeyDown[key]) {
                this.func.onKeyDown[key][index]()
            }
        }
    },
    doKeyUp: function(key) {
        delete this.state[key]
    },
}

window.addEventListener("keydown", function(event) {
    Input.doKeyDown(vkey[event.keyCode])
})

window.addEventListener("keyup", function(event) {
    Input.doKeyUp(vkey[event.keyCode])
})

module.exports = Input
