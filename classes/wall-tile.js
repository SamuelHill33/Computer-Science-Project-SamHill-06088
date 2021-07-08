class WallTile extends Tile { //a class that extends from a tile class and instantiates a wall tile object
    constructor(gridRef, size) {
        super(gridRef, size);
    }

    draw() { //wall tile has different draw method that will overwrite parent class draw method
        fill(100, 70, 50); 
        noStroke(); //removes outline (no outline)
        rect(this.gridRef.getXTileRef(), this.gridRef.getYTileRef(), this.size, this.size); 
    }
}