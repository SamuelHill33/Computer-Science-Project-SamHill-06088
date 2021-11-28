class ExitTile extends Tile {
    constructor(gridRef, size, sourceImage, color) {
        super(gridRef, size, color);
        this.sourceImage = sourceImage;
        this.exitable = false;
    }

    isEntrable() {
        return true;
    }

    setExitable() {
        this.exitable = true;
    }

    draw() {
        fill(this.color); //colours tile
        stroke(180); //outlines tile
        rect(this.gridRef.getXTilePos(), this.gridRef.getYTilePos(), this.size, this.size); //spawns tile
        image(this.sourceImage, this.gridRef.getXTilePos(), this.gridRef.getYTilePos(), this.size, this.size);
    }

    executeInteract() {
        if (this.exitable) {
            console.log("exited! - success");
        } else {
            console.log("exited! - fail");
        }

        switchScreen();
    }
}