var PlayerActions = Reflux.createActions([
    "PlayerMoves",
    "PlayerAttemptsToMove",
    "PlayerAttemptsToMoveNorth",
    "PlayerAttemptsToMoveSouth",
    "PlayerAttemptsToMoveEast",
    "PlayerAttemptsToMoveWest",
    "PlayerAttemptsToMoveNortheast",
    "PlayerAttemptsToMoveNorthwest",
    "PlayerHasLanded",
    "PlayerIsFalling",
    "PlayerHasMoved"
])

module.exports = PlayerActions