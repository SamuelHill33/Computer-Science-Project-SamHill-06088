class GridRef { //a class that instantiates a coordinate pair object
    constructor(xTileRef, yTileRef) {
        this.xTileRef = xTileRef;
        this.yTileRef = yTileRef;
    }

    getXTileRef() {
        return this.xTileRef; //returns x position of coordinate pair
    }

    getYTileRef() {
        return this.yTileRef; //returns y position of coordinate pair
    }
}