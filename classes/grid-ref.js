class GridRef { //a class that instantiates a coordinate pair object
    constructor(xTileRef, yTileRef, size) {
        this.xTileRef = xTileRef;
        this.yTileRef = yTileRef;
        this.size = size;
    }

    getXTileRef() {
        return this.xTileRef; //returns x position of coordinate pair
    }

    getYTileRef() {
        return this.yTileRef; //returns y position of coordinate pair
    }

    getXTilePos() {
        return this.xTileRef * size;
    }

    getYTilePos() {
        return this.yTileRef * size;
    }

    getID() {
        return this.xTileRef + ":" + this.yTileRef;
    }
}