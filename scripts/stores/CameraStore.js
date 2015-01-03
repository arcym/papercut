var WorldStore = require("<root>/scripts/stores/WorldStore")
var GameFrameStore = require("<root>/scripts/stores/GameFrameStore")

var PlayerActions = require("<root>/scripts/actions/PlayerActions")

var CameraStore = Reflux.createStore({
    data: {
        x: 0,
        y: 0
    },
    getData: function() {
        return this.data
    },
    listenables: [
        PlayerActions
    ],
    onPlayerHasMoved: function(x, y) {
        this.data.x = (x - 5) * -1
        this.data.x = Math.min(this.data.x, 0)
        this.data.x = Math.max(this.data.x, (WorldStore.getWidth() - GameFrameStore.getWidth()) * -1)
        this.retrigger()
    }
})

module.exports = CameraStore
