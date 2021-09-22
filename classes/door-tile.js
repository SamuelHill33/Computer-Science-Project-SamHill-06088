class DoorTile extends Tile {
    constructor(gridRef, size, color) {
        super(gridRef, size, color);
        this.sourceImage = doorTileClosedImage;
        this.open = false;
    }

    isEntrable() {
        return this.open;
    }

    draw() {
        fill(this.color); //colours tile
        stroke(180); //outlines tile
        rect(this.gridRef.getXTilePos(), this.gridRef.getYTilePos(), this.size, this.size); //spawns tile
        image(this.sourceImage, this.gridRef.getXTilePos(), this.gridRef.getYTilePos(), this.size, this.size);
    }

    openDoor() {
        this.open = true;
        this.setSourceImage(doorTileOpenImage);
        this.draw();
        console.log("doors opened");
    }

    getSourceImage() {
        return this.sourceImage;
    }

    setSourceImage(newSourceImage) {
        this.sourceImage = newSourceImage;
    }
}