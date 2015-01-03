var PlayerActions = Reflux.createActions([
    "PlayerIsMovingNorth",
    "PlayerIsMovingSouth",
    "PlayerIsMovingEast",
    "PlayerIsMovingWest",
    "PlayerIsMovingNortheast",
    "PlayerIsMovingNorthwest",
    "PlayerIsMoving",
    "PlayerHasMoved",
    
    "PlayerHasLanded",
    "PlayerIsFalling",
])

module.exports = PlayerActions