class Sprite {
    constructor(image, gridRef, speed, size) {
        this.image = image;
        this.gridRef = gridRef;
        this.speed = speed;
        this.size = size;
        image(image, gridRef.getXTileRef(), yUserPos, size, size); //spawns sprite
    }

    getImage() {
        return this.image;
    }

    setImage(newImage) {
        this.image = newImage;
    }

    getGridRef() {
        
        return this.gridRef;
    }

    getSpeed() {
        return this.speed;
    }

    getSize() {
        return this.size;
    }
}