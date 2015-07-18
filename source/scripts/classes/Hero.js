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
    
    // get the tile that the hero is on
    var tile = Game.world.getTile({
        "x": this.position.x,
        "y": this.position.y
    })
    
    // if the hero has moved onto
    // the a saving tile, then save
    if(tile.saves == true) {
        this.save()
    }
    
    // if the hero has moved onto
    // off a killing tile, then kill
    if(tile.kills == true) {
        this.kill()
        return
    }
    
    // if the hero has moved
    // onto a monster, then kill
    for(var key in Game.monsters) {
        var monster = Game.monsters[key]
        if(monster.position.x == this.position.x
        && monster.position.y == this.position.y) {
            this.kill()
            return
        }
    }
    
    // todo: check for collision with monsters
    // todo: jumping or falling
    // todo: begin falling when walk off ledge
    
    // prompt all the monsters
    // to also move themselves
    for(var key in Game.monsters) {
        var monster = Game.monsters[key]
        monster.move()
    }
}

Hero.prototype.kill = function() {
    this.position.x = this.saved.position.x
    this.position.y = this.saved.position.y
}

Hero.prototype.save = function() {
    this.saved.position.x = this.position.x
    this.saved.position.y = this.position.y
}

module.exports = Hero
