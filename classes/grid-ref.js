class GridRef { //a class that instantiates a coordinate pair object
    // constructor(xTileRef, yTileRef) {
    //     this.xTileRef = xTileRef;
    //     this.yTileRef = yTileRef;
    //     // this.xPos = this.xTileRef * size + math.floor(size / 2);
    //     // this.yPos = this.yTileRef * size + math.floor(size / 2);
    // }

    constructor(xPos, yPos, size) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.xTileRef = Math.ceil(xPos / size);
        this.yTileRef = Math.ceil(yPos / size);
    }

    getXTileRef() {
        return this.xTileRef; //returns x position of coordinate pair
    }

    getYTileRef() {
        return this.yTileRef; //returns y position of coordinate pair
    }

    getXPos() {
        return this.xPos; //returns x position of coordinate pair
    }

    setXPos(newXPos) {
        this.xPos = newXPos;
    }

    getYPos() {
        return this.yPos; //returns y position of coordinate pair
    }

    setYPos(newYPos) {
        this.yPos = newYPos;
    }

    getSize() {
        return this.size;
    }

    getID() {
        return this.xTileRef + ":" + this.yTileRef;
    }
}