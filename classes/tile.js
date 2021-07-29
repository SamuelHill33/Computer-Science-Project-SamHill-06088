class Tile { //a class that instantiates a tile object
    constructor(gridRef, size) { //tile contains grid reference and size properties
        this.gridRef = gridRef;
        this.size = size;
    }

    getGridRef() {
        return this.gridRef; //returns the tiles grid reference object
    }

    getSize() {
        return this.size; //returns the tiles size (square side length value)
    }

    isCollidable() {
        return false;
    }

    draw() { //a method for displaying the tile object onto the canvas
        fill(200); //colours tile
        stroke(180); //outlines tile
        rect(this.gridRef.getXPos(), this.gridRef.getYPos(), this.size, this.size); //spawns tile
    }
}