var Hero = function() {
    this.position = {
        "x": 6, "y": 5
    }
}

Hero.prototype.move = function(movement) {
    movement.x = movement.x || 0
    movement.y = movement.y || 0
    
    var tile = Game.world.getTile({
        "x": this.position.x + movement.x,
        "y": this.position.y
    })
    if(tile.collision == true) {
        movement.x = 0
    }
    
    var tile = Game.world.getTile({
        "x": this.position.x + movement.x,
        "y": this.position.y + movement.y
    })
    if(tile.collision == true) {
        movement.y = 0
    }
    
    if(movement.x == 0
    && movement.y == 0) {
        return
    }
    
    this.position.x += movement.x
    this.position.y += movement.y
    
    for(var key in Game.monsters) {
        Game.monsters[key].move()
    }
}

module.exports = Hero
