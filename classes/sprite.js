class Sprite {
    constructor(sourceImage, gridRef, speed, size) {
        this.sourceImage = sourceImage;
        this.gridRef = gridRef;
        this.speed = speed;
        this.size = size;
    }

    draw() {
        image(this.sourceImage, this.gridRef.getXTilePos(), this.gridRef.getYTilePos(), this.size, this.size); //spawns sprite
    }

    getSourceImage() {
        return this.sourceImage;
    }

    setSourceImage(newImage) {
        this.sourceImage = newImage;
    }

    getGridRef() {
        return this.gridRef;
    }

    setGridRef(newGridRef) {
        this.gridRef = newGridRef;
    }

    getSpeed() {
        return this.speed;
    }

    getSize() {
        return this.size;
    }

    move() {
        let currentGridRef = this.getGridRef(); //sets currentGridRef to sprites current position
        if (this.setNextPos(grid)) { //sets the next position of the sprite
            let tile = grid.getTile(currentGridRef); //gets the tile at the sprites previous position
            tile.draw();
        }
    }
}