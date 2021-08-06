class EmptyTile extends Tile {
    constructor(gridRef, size) {
        super(gridRef, size);
    }

    isEntrable() {
        return true;
    }

    draw() { //a method for displaying the tile object onto the canvas
        fill(200); //colours tile
        stroke(180); //outlines tile
        rect(this.gridRef.getXTilePos(), this.gridRef.getYTilePos(), this.size, this.size); //spawns tile
    }
}