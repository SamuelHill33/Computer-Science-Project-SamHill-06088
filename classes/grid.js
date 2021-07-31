class Grid { //a class that instatiates a grid object
    tilesMap = new Map(); //creates a new empty map
    constructor(mazeMap) {
        for (let j = 0; j < mazeMap.length; j++) {
            for (let i = 0; i < mazeMap[j].length; i++) { //loops around mazeMap 2D array
                let gridRef = new GridRef(j, i, size); //creates grid reference object
                let tile;
                if (mazeMap[i][j] == 1) { //if value at position in 2D array is equal to a 1 then
                    tile = new WallTile(gridRef, size); //creates new wall tile
                } else if (mazeMap[i][j] == 0) {
                    tile = new EmptyTile(gridRef, size); //creates new empty tile
                }
                this.tilesMap.set(gridRef.getID(), tile); //adds new tile to map
            }
        }
    }

    draw() {
        for (let tile of this.tilesMap.values()) { //for every tile in map
            tile.draw();
        }
    }

    getTile(gridRef) {
        return this.tilesMap.get(gridRef.getID()); //returns the tile with the specified gridRef ID from the map
    }
}