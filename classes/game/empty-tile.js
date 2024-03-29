class EmptyTile extends Tile {
    constructor(gridRef, size, color) {
        super(gridRef, size, color);
    }

    isEntrable() {
        return true;
    }

    draw() { //a method for displaying the tile object onto the canvas
        fill(this.color); //colours tile
        stroke(130); //outlines tile
        strokeWeight(1);
        rect(this.gridRef.getXTilePos(), this.gridRef.getYTilePos(), this.size, this.size); //spawns tile
    }

    isDeathTile() {
        return this.deathTile;
    }
}