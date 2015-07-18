var Monster = function(protomonster) {
    var monster = this
    
    for(var key in protomonster) {
        monster[key] = protomonster[key]
    }
}

Monster.prototype.move = function() {
    if(Game.world.getTile({
        "x": this.position.x + this.movement.x,
        "y": this.position.y + this.movement.y
    }).collision == false) {
        this.position.x += this.movement.x
        this.position.y += this.movement.y
    }
    
    if(Game.world.getTile({
        "x": this.position.x + this.movement.x,
        "y": this.position.y + this.movement.y
    }).collision == true) {
        this.movement.x *= -1
    } else if(Game.world.getTile({
        "x": this.position.x + this.movement.x,
        "y": this.position.y + this.movement.y + 1
    }).collision == false) {
        this.movement.x *= -1
    }
}

module.exports = Monster
