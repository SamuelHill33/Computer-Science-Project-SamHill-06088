class Tile { //a class that instantiates a tile object
    constructor(gridRef, size) { //tile contains grid reference and size properties
        this.gridRef = gridRef;
        this.size = size;
        this.deathTile = false;
        this.color = 200;
        this.time = timer;
        this.coolDownPeriod = 15;
    }

    getGridRef() {
        return this.gridRef; //returns the tiles grid reference object
    }

    getSize() {
        return this.size; //returns the tiles size (square side length value)
    }

    transitionDeathTile(isDeathTile) {
        this.deathTile = isDeathTile;

        if (this.deathTile) { //if the tile has transitioned to an empty tile (if the tile is a sight tile) 
            this.color = 150;
        } else {
            this.color = 200;
        }

        this.draw();
    }

    interact(screen) {
        if (timer > this.time) {
            this.executeInteract(screen);
            this.coolDown(this.coolDownPeriod);
        }
    }

    executeInteract(screen) {
        //by default, empty
    }

    isDeathTile() {
        return this.deathTile;
    }

    getID() {
        return this.gridRef.getID();
    }

    coolDown(time) {
        this.time = timer + time;
    }
}