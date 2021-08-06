class BotSprite extends Sprite {
    constructor(image, gridRef, speed, size) {
        super(image, gridRef, speed, size);
        this.previousGridRef = gridRef;
        this.direction = "up";
    }

    getSpeed() {
        return this.speed;
    }

    getPreviousGridRef() {
        return this.previousGridRef;
    }

    move(availableGridRefs) {
        let randNum = Math.floor(Math.random() * availableGridRefs.length);

        while (availableGridRefs[randNum] == this.previousGridRef) {
            randNum = Math.floor(Math.random() * availableGridRefs.length);
        }

        this.getDirection(availableGridRefs[randNum]);
        this.previousGridRef = this.gridRef;
        this.setGridRef(availableGridRefs[randNum]);
        this.draw();
    }

    getDirection(newGridRef) {
        if (newGridRef.getXTileRef() < this.gridRef.getXTileRef()) {
            return this.direction = "left";
        } else if (newGridRef.getXTileRef() > this.gridRef.getXTileRef()) {
            return this.direction = "right";
        } else if (newGridRef.getYTileRef() < this.gridRef.getYTileRef()) {
            return this.direction = "up";
        } else if(newGridRef.getYTileRef() > this.gridRef.getYTileRef()) {
            return this.direction = "down";
        } else {
            return null;
        }
    }

    moveBack() {
        this.gridRef = this.previousGridRef;
        this.draw();
    }
}