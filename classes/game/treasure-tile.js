class TreasureTile extends Tile {
    constructor(gridRef, size, sourceImage, color) {
        super(gridRef, size, color);
        this.sourceImage = sourceImage;
    }

    isEntrable() {
        return true;
    }

    setSourceImage(newSourceImage) {
        this.sourceImage = newSourceImage;
    }

    draw() {
        fill(this.color); //colours tile
        stroke(180); //outlines tile
        rect(this.gridRef.getXTilePos(), this.gridRef.getYTilePos(), this.size, this.size); //spawns tile
        image(this.sourceImage, this.gridRef.getXTilePos(), this.gridRef.getYTilePos(), this.size, this.size);
    }

    executeInteract(screen) {
        treasureSound.play();
        screen.getGrid().setExitable();
        this.setSourceImage(chestTileOpenImage);
        this.draw();
        screen.setTreasureRetrieved(true);
        console.log("target complete");
    }
}