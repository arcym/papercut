var MonsterMovement = {
    "turtle": function() {
        this.direction = this.direction || +1
        
        if(Game.world.getTile({
            "x": this.position.x + this.direction,
            "y": this.position.y
        }).blocks == false) {
            this.position.x += this.direction
        }
        
        // if the monster is about to move
        // into a wall or off a ledge, then
        // reverse direction
        if(Game.world.getTile({
            "x": this.position.x + this.direction,
            "y": this.position.y
        }).blocks == true) {
            this.direction *= -1
        } else if(Game.world.getTile({
            "x": this.position.x + this.direction,
            "y": this.position.y + 1
        }).blocks == false) {
            this.direction *= -1
        }
        
        // if the monster has moved
        // onto the hero, kill the hero
        if(this.position.x == Game.hero.position.x
        && this.position.y == Game.hero.position.y) {
            Game.hero.kill()
        }
    },
    "turret": function() {
        this.timer -= 1
        if(this.timer <= 0) {
            this.timer = 5
            var key = ShortID.generate()
            Game.monsters[key] = new Monster({
                "key": key,
                "position": {
                    "x": this.position.x,
                    "y": this.position.y
                },
                "type": "rocket",
                "direction": this.direction,
            })
        }
        
        // if the monster has moved
        // onto the hero, kill the hero
        if(this.position.x == Game.hero.position.x
        && this.position.y == Game.hero.position.y) {
            Game.hero.kill()
        }
    },
    "rocket": function() {
        this.direction = this.direction || +1
        
        if(Game.world.getTile({
            "x": this.position.x + this.direction,
            "y": this.position.y
        }).blocks == false) {
            this.position.x += this.direction
        } else {
            delete Game.monsters[this.key]
        }
        
        // if the monster has moved
        // onto the hero, kill the hero
        if(this.position.x == Game.hero.position.x
        && this.position.y == Game.hero.position.y) {
            Game.hero.kill()
        }
    },
    "piano": function() {
        this.direction = this.direction || +2
        
        if(this.direction > 0) {
            if(Game.world.getTile({
                "x": this.position.x,
                "y": this.position.y + 1
            }).blocks == false) {
                this.position.y += 1
                if(this.position.x == Game.hero.position.x
                && this.position.y == Game.hero.position.y) {
                    Game.hero.kill()
                }
                if(Game.world.getTile({
                    "x": this.position.x,
                    "y": this.position.y + 1
                }).blocks == false) {
                    this.position.y += 1
                    if(this.position.x == Game.hero.position.x
                    && this.position.y == Game.hero.position.y) {
                        Game.hero.kill()
                    }
                } else {
                    this.direction = -1
                }
            } else {
                this.direction = -1
            }
        } else if(this.direction < 0) {
            if(Game.world.getTile({
                "x": this.position.x,
                "y": this.position.y - 1
            }).blocks == false) {
                this.position.y -= 1
            } else {
                this.direction = +2
            }
        }
    }
}

var Monster = function(protomonster) {
    var monster = this
    for(var key in protomonster) {
        monster[key] = protomonster[key]
    }
    
    this.position.ox = this.position.x
    this.position.oy = this.position.y
    
    this.timer = 0
    
    this.move = MonsterMovement[this.type]
    
    if(this.type == "turtle") {
        this.image = "./assets/images/monsters/turtle_left.png"
    } else if(this.type == "piano") {
        this.image = "./assets/images/monsters/stumper_down.png"
    } else if(this.type == "turret") {
        if(this.direction == +1) {
            this.image = "./assets/images/monsters/shooter_right.png"
        } else if(this.direction == -1) {
            this.image = "./assets/images/monsters/shooter_left.png"
        }
    } else if(this.type == "rocket") {
        if(this.direction == +1) {
            this.image = "./assets/images/monsters/lazzzzer_right.png"
            this.depth = -1
        } else if(this.direction == -1) {
            this.image = "./assets/images/monsters/lazzzzer_left.png"
            this.depth = -1
        }
    }
    //"shooter_left.png" "shooter_right.png"
}

module.exports = Monster
