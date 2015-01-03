var PlayerActions = require("<root>/scripts/actions/PlayerActions")

var PlayerStore = Reflux.createStore({
    data: {
        x: 2,
        y: 1,
        jump: 3
    },
    getData: function() {
        return this.data
    },
    listenables: [
        PlayerActions
    ],
    onPlayerAttemptsToMove: function(direction) {
        var xdir = 0, ydir = 0
        if(direction == "north") {
            xdir = 0
            ydir = this.data.jump > 0 ? -1 : +1
        } else if(direction == "south") {
            xdir = 0
            ydir = +1
        } else if(direction == "east") {
            xdir = +1
            ydir = this.data.jump > 0 ? 0 : +1
        } else if(direction == "west") {
            xdir = -1
            ydir = this.data.jump > 0 ? 0 : +1
        } else if(direction == "northeast") {
            xdir = +1
            ydir = this.data.jump > 0 ? -1 : +1
        } else if(direction == "northwest") {
            xdir = -1
            ydir = this.data.jump > 0 ? -1 : +1
        }
        PlayerActions.PlayerIsMoving(this.data.x, this.data.y, xdir, ydir)
    },
    onPlayerMove: function(x, y, xdir, ydir) {
        if(xdir != 0 || ydir != 0) {
            this.data.x += xdir
            this.data.y += ydir
            if(xdir != 0 && ydir == 0) {
                this.data.jump = 0
            }
            this.retrigger()
            PlayerActions.PlayerHasMoved(x, y, xdir, ydir)
        }
    },
    onPlayerHasLanded: function() {
        this.data.jump = 3
        this.retrigger()
    },
    onPlayerIsFalling: function() {
        this.data.jump -= 1
        this.retrigger()
    }
})

module.exports = PlayerStore
