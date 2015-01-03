var PlayerActions = require("<root>/scripts/actions/PlayerActions")
var WorldStore = require("<root>/scripts/stores/WorldStore")

var PlayerStore = Reflux.createStore({
    data: {
        x: 40,
        y: 2,
        jump: 3
    },
    getData: function() {
        return this.data
    },
    listenables: [
        PlayerActions
    ],
    onPlayerIsMovingNorth: function() {
        PlayerActions.PlayerIsMoving(0, this.data.jump > 0 ? -1 : +1, "north")
    },
    onPlayerIsMovingSouth: function() {
        PlayerActions.PlayerIsMoving(0, +1, "south")
    },
    onPlayerIsMovingEast: function() {
        PlayerActions.PlayerIsMoving(+1, this.data.jump > 0 ? 0 : +1, "east")
    },
    onPlayerIsMovingWest: function() {
        PlayerActions.PlayerIsMoving(-1, this.data.jump > 0 ? 0 : +1, "west")
    },
    onPlayerIsMovingNortheast: function() {
        PlayerActions.PlayerIsMoving(+1, this.data.jump > 0 ? -1 : +1, "north-east")
    },
    onPlayerIsMovingNorthwest: function() {
        PlayerActions.PlayerIsMoving(-1, this.data.jump > 0 ? -1 : +1, "north-west")
    },
    onPlayerIsMoving: function(xd, yd, dir) {
        var x = this.data.x
        var y = this.data.y
        if(xd == 0 || yd == 0) {
        //is an orthogonal movement
            if(WorldStore.getTile(x+xd, y+yd).passable) {
            //can get to the tiled
                xd = xd
                yd = yd
            } else {
            //can not get to the tile
                xd = 0
                yd = 0
            }
        } else {
        //is a diagonal movement
            if(WorldStore.getTile(x, y+yd).passable
            || WorldStore.getTile(x+xd, y).passable) {
            //has a path to the tile
                if(WorldStore.getTile(x+xd, y+yd).passable) {
                //can get to the tile
                    xd = xd
                    yd = yd
                } else {
                //can not get to the tile
                    if(yd <= -1) {
                    //is a north movement
                        if(WorldStore.getTile(x, y+yd).passable) {
                        //can move to vertical tile
                            xd = 0
                            yd = yd
                        } else if(WorldStore.getTile(x+xd, y).passable) {
                        //can move to horizontal tile
                            xd = xd
                            yd = 0
                        } else {
                        //can not move to any tiles
                            xd = 0
                            yd = 0
                        }
                    } else if (yd >= +1) {
                    //is a south movement
                        if(WorldStore.getTile(x+xd, y).passable) {
                        //can move to horizontal tile
                            xd = xd
                            yd = 0
                        } else if(WorldStore.getTile(x, y+yd).passable) {
                        //can move to vertical tile
                            xd = 0
                            yd = yd
                        } else {
                        //can not move to any tiles
                            xd = 0
                            yd = 0
                        }
                    }
                }
            } else {
            //does not have a path to the tile
                xd = 0
                yd = 0
            }
        }
        if(xd != 0 || yd != 0) {
        //is not standing still
            this.data.x += xd
            this.data.y += yd
            if(this.data.jump > 0) {
            //can still jump
                this.data.jump -= 1
                if(yd >= 0) {
                //is not moving up
                    this.data.jump = 0
                }
            }
            if(!WorldStore.getTile(x+xd, y+yd+1).passable) {
            //has landed on the ground
                this.data.jump = 3
            }
            this.retrigger()
            PlayerActions.PlayerHasMoved(this.data.x, this.data.y)
        }
    }
})

module.exports = PlayerStore
