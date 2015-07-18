var Hero = function() {
    this.position = {
        "x": 6, "y": 5
    }
}

Hero.prototype.move = function(movement) {
    movement.x = movement.x || 0
    movement.y = movement.y || 0
    
    if(Game.world.getTile({
        "x": this.position.x + movement.x,
        "y": this.position.y
    }).collision) {
        movement.x = 0
    }
    
    if(Game.world.getTile({
        "x": this.position.x + movement.x,
        "y": this.position.y + movement.y
    }).collision == true) {
        movement.y = 0
    }
    
    console.log(movement)
    
    this.position.x += movement.x
    this.position.y += movement.y
}

module.exports = Hero
