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
    
    this.wrap = 0
    
    this.jump = 0
    this.maxjump = 5
}

Hero.prototype.move = function(movement) {
    // expand each movement
    // with some default values
    movement.x = movement.x || 0
    movement.y = movement.y || 0
    
    // if the hero has
    // jumped, then do gravity
    if(this.jump == this.maxjump) {
        movement.y = +1
    }
    
    // if the tile to the left or right
    // of the hero has collision, stop
    // any horizontal movement.
    if(Game.world.getTile({
        "x": this.position.x + movement.x,
        "y": this.position.y
    }).blocks == true) {
        movement.x = 0
    }
    
    // if the tile either above or below
    // the hero has collision, stop
    // any vertical movement.
    if(Game.world.getTile({
        "x": this.position.x + movement.x,
        "y": this.position.y + movement.y
    }).blocks == true) {
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
    
    // if the hero has moved out of
    // the world, then wrap around
    if(this.position.x < 0) {
        this.position.x += Game.world.width
        this.wrap -= 1
    } if(this.position.x >= Game.world.width) {
        this.position.x -= Game.world.width
        this.wrap += 1
    }
    
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
    
    // if the hero is moving
    // upwards, then increase the jump
    if(movement.y < 0) {
        if(this.jump < this.maxjump) {
            this.jump += 1
        }
    }
    
    // if the hero is moving
    // horizontally, then kill the jump
    if(movement.x != 0
    && movement.y >= 0) {
        this.jump = this.maxjump
    }
    
    // if the tile below the hero is a
    // block, then the hero has landed
    if(Game.world.getTile({
        "x": this.position.x,
        "y": this.position.y + 1
    }).blocks == true) {
        this.jump = 0
    }
    
    // prompt all the monsters
    // to also move themselves
    for(var key in Game.monsters) {
        Game.monsters[key].move()
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

// when walking left or right during
// a jump, the hero won't fall for a turn

// when stuck vertically, you can
// still move diagonally.

module.exports = Hero
