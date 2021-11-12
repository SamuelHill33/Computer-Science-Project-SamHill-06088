class GridRef { //a class that instantiates a coordinate pair object
    constructor(xTileRef, yTileRef, size) {
        this.xTileRef = xTileRef;
        this.yTileRef = yTileRef;
        this.size = size;
    }

    getXTileRef() {
        return this.xTileRef;
    }

    getYTileRef() {
        return this.yTileRef;
    }

    getXTilePos() {
        return this.xTileRef * this.size;
    }

    getYTilePos() {
        return this.yTileRef * this.size;
    }

    getID() {
        return this.xTileRef + ":" + this.yTileRef; //ID used as reference in tiles map
    }

    getAdjacentRightGridRef() {
        return new GridRef(this.xTileRef + 1, this.yTileRef, this.size);
    }

    getAdjacentLeftGridRef() {
        return new GridRef(this.xTileRef - 1, this.yTileRef, this.size);
    }

    getAdjacentUpGridRef() {
        return new GridRef(this.xTileRef, this.yTileRef - 1, this.size);
    }

    getAdjacentDownGridRef() {
        return new GridRef(this.xTileRef, this.yTileRef + 1, this.size);
    }
}