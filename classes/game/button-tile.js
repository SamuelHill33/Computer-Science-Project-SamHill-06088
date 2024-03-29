class ButtonTile extends Tile {
    constructor(gridRef, size, sourceImage, color) {
        super(gridRef, size, color);
        this.sourceImage = sourceImage;
    }

    isEntrable() {
        return true;
    }

    draw() {
        fill(this.color); //colours tile
        stroke(180); //outlines tile
        rect(this.gridRef.getXTilePos(), this.gridRef.getYTilePos(), this.size, this.size); //spawns tile
        image(this.sourceImage, this.gridRef.getXTilePos(), this.gridRef.getYTilePos(), this.size, this.size);
    }

    executeInteract(screen) {
        switchSound.play();
        screen.getGrid().openDoors();
        this.setSourceImage(switchTileOpenedImage)
    }

    getSourceImage() {
        return this.sourceImage;
    }

    setSourceImage(newSourceImage) {
        this.sourceImage = newSourceImage;
    }
}