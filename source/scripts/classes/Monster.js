var Monster = function(protomonster) {
    var monster = this
    for(var key in protomonster) {
        monster[key] = protomonster[key]
    }
    
    this.movement.x = this.movement.x || 0
    this.movement.y = this.movement.y || 0
}

Monster.prototype.move = function() {
    if(Game.world.getTile({
        "x": this.position.x + this.movement.x,
        "y": this.position.y + this.movement.y
    }).blocks == false) {
        this.position.x += this.movement.x
        this.position.y += this.movement.y
    }
    
    // if the monster is about to move
    // into a wall or off a ledge, then
    // reverse direction
    if(Game.world.getTile({
        "x": this.position.x + this.movement.x,
        "y": this.position.y + this.movement.y
    }).blocks == true) {
        this.movement.x *= -1
    } else if(Game.world.getTile({
        "x": this.position.x + this.movement.x,
        "y": this.position.y + this.movement.y + 1
    }).blocks == false) {
        this.movement.x *= -1
    }
    
    // if the monster has moved
    // onto the hero, kill the hero
    if(this.position.x == Game.hero.position.x
    && this.position.y == Game.hero.position.y) {
        Game.hero.kill()
    }
}

module.exports = Monster
