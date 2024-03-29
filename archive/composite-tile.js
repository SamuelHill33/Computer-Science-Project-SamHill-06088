const compositeTileState = { //enum
    EMPTY_TILE: "empty",
    SIGHT_TILE: "sight"
}

class CompositeTile extends Tile {
    constructor(gridRef, size) {
        super(); //not supering anything but is required in the constructor
        this.emptyTile = new EmptyTile(gridRef, size);
        this.deathTile = new SightTile(gridRef, size);
        this.currentTile = this.emptyTile; //the tiles current state e.g. either an empty tile or sight tile
    }

    getGridRef() {
        return this.currentTile.gridRef; //retuns the current tiles grid ref - the method overrides and delegates to the method in the current tiles class
    }

    getSize() {
        return this.currentTile.size; 
    }

    isEntrable() {
        return this.currentTile.isEntrable();
    }

    getID() {
        return this.currentTile.getID();
    }

    draw() { //a method for displaying the tile object onto the canvas
        this.currentTile.draw();
    }

    #switchEmptyTile() {
        this.currentTile = this.emptyTile; //assigns the current tile to be an empty tile
    }

    activateDeathTile() {
        if (this.currentTile !== this.deathTile) {
            this.currentTile = this.deathTile;
            return true;
        }

        return false; //there is no point in switching to an empty tile if the tile is already an empty tile
    }

    reinitialize() {
        if (this.currentTile !== this.emptyTile) { //if transition to empty tile and the current tile is not already an empty tile
            this.#switchEmptyTile();
            return true; //returns true if tile has switched
        }

        return false;
    }

    isDeathTile() {
        return this.currentTile.isDeathTile;
    }
}