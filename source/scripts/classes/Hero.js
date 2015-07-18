var Hero = function(protohero) {
    this.position = {
        "x": protohero.position.x || 0,
        "y": protohero.position.y || 0
    }
    
    this.saved = {
        position: {
            "x": protohero.position.x || 0,
            "y": protohero.position.y || 0
        }
    }
}

Hero.prototype.move = function(movement) {
    movement.x = movement.x || 0
    movement.y = movement.y || 0
    
    // if the tile to the left or right
    // of the hero has collision, stop
    // any horizontal movement.
    if(Game.world.getTile({
        "x": this.position.x + movement.x,
        "y": this.position.y
    }).collision == true) {
        movement.x = 0
    }
    
    // if the tile either above or below
    // the hero has collision, stop
    // any vertical movement.
    if(Game.world.getTile({
        "x": this.position.x + movement.x,
        "y": this.position.y + movement.y
    }).collision == true) {
        movement.y = 0
    }
    
    // if there isn't any
    // movement, then abort
    if(movement.x == 0
    && movement.y == 0) {
        return
    }
    
    // move the hero
    this.position.x += movement.x
    this.position.y += movement.y
    
    // get the tile
    var tile = Game.world.getTile({
        "x": this.position.x,
        "y": this.position.y
    })
    
    // if the hero has moved onto
    // the a savepoint, then save
    if(tile.saves == true) {
        this.saved.position.x = this.position.x
        this.saved.position.y = this.position.y
    }
    
    // if the hero has moved onto
    // off a spike, then die
    if(tile.kills == true) {
        this.die()
        return
    }
    
    //check for collision with monsters
    //jumping or falling
    //begin falling when walk off ledge
    
    // prompt all the monsters
    // to also move themselves
    for(var key in Game.monsters) {
        Game.monsters[key].move()
    }
}

Hero.prototype.die = function() {
    this.position.x = this.saved.position.x
    this.position.y = this.saved.position.y
}

module.exports = Hero
