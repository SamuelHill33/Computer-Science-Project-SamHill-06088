class WallTile extends Tile { //a class that extends from a tile class and instantiates a wall tile object
    constructor(gridRef, size) {
        super(gridRef, size);
    }

    isEntrable() {
        return false;
    }

    draw() { //wall tile has different draw method that will overwrite parent class draw method
        fill(72, 70, 70); 
        noStroke(); //removes outline (no outline)
        rect(this.gridRef.getXTilePos(), this.gridRef.getYTilePos(), this.size, this.size); 
    }
}