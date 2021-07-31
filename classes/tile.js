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
}