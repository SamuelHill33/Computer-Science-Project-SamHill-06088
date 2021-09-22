class BotSprite extends Sprite {
    constructor(image, gridRef, speed, size) {
        super(image, gridRef, speed, size);
        this.previousGridRef = gridRef;
    }

    getPreviousGridRef() {
        return this.previousGridRef;
    }

    setNextPos() {
        let availableGridRefs = this.#determineEligibleGridRefs(grid);

        if (availableGridRefs.length == 0) { //if the sprite can only move back to where it just moved from
            let temp = this.gridRef;
            this.gridRef = this.previousGridRef;
            this.previousGridRef = temp;
        } else if (availableGridRefs.length == 1) {
            this.previousGridRef = this.gridRef;
            this.gridRef = availableGridRefs[0]; //sets bots grid ref to the only grid ref in array
        } else {
            let randNum = Math.floor(Math.random() * availableGridRefs.length);
            this.previousGridRef = this.gridRef;
            this.gridRef = availableGridRefs[randNum]; //sets bots grid ref to a random grid ref from array
        }

        return true;
    }

    #determineEligibleGridRefs() { //removes previous bots position as an available grid ref
        let availableGridRefs = grid.getAdjacentEntrableGridRefs(this.gridRef);

        for (let i = 0; i < availableGridRefs.length; i++) {
            if (availableGridRefs[i].getID() == this.previousGridRef.getID()) { //if the grid ref in the array is equal to the bots previous position
                availableGridRefs.splice(i, 1); //remove the grid ref from the array
                break;
            }
        }

        return availableGridRefs; //returns entrable grid refs array without bots previous grid ref
    }

    shouldMove() {
        if (timer % this.getSpeed() == 0) { //if every (bot speed var)ms return true
            return true;
        }
    } 

    drawSightTiles() {
        let newSightTiles = grid.getParralelEntrableTiles(this.gridRef, this.#getDirection());

        for (let tile of newSightTiles) { //for every tile in the new tiles array
            tile.transitionDeathTile(true);
        }
    }

    #getDirection() {
        if (this.gridRef.getXTileRef() < this.previousGridRef.getXTileRef()) { //if new grid ref is to the left of the old grid ref
            return botDirection.LEFT; //then direction is left
        } else if (this.gridRef.getXTileRef() > this.previousGridRef.getXTileRef()) {
            return botDirection.RIGHT;
        } else if (this.gridRef.getYTileRef() < this.previousGridRef.getYTileRef()) {
            return botDirection.UP;
        } else if(this.gridRef.getYTileRef() > this.previousGridRef.getYTileRef()) {
            return botDirection.DOWN;
        } else {
            return botDirection.LEFT;
        }
    }
}