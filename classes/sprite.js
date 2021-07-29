class Sprite {
    constructor(sourceImage, gridRef, speed, size) {
        this.sourceImage = sourceImage;
        this.gridRef = gridRef;
        this.speed = speed;
        this.size = size;
    }

    draw() {
        image(this.sourceImage, this.gridRef.getXPos(), this.gridRef.getYPos(), this.size, this.size); //spawns sprite
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
}