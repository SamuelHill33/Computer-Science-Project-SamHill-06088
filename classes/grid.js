class Grid {
    tilesMap = new Map();
    constructor(mazeMap) {
        this.mazeMapDimension = mazeMap.length;

        for (let j = 0; j < this.mazeMapDimension; j++) {
            for (let i = 0; i < this.mazeMapDimension; i++) { //loops around mazeMap 2D array
                let gridRef = new GridRef(j, i, size);
                let tile;
                
                if (mazeMap[i][j] == 1) { //if value at position in 2D array is equal to a 1 then
                    tile = new WallTile(gridRef, size); //places wall tile at position
                } else if (mazeMap[i][j] == 0) {
                    tile = new CompositeTile(gridRef, size);
                }

                this.tilesMap.set(tile.getID(), tile); //adds new tile to the tiles map
            }
        }
    }

    draw() {
        for (let tile of this.tilesMap.values()) { //for every tile in map
            tile.draw();
        }
    }

    getTile(gridRef) {
        if (gridRef.getXTileRef() >= this.mazeMapDimension ||
            gridRef.getYTileRef() >= this.mazeMapDimension ||
            gridRef.getXTileRef() < 0 ||
            gridRef.getYTileRef() < 0
        ) { //checks to see if gridref is outside the boundaries of the maze / canvas / grid
            return null;
        } else {
            return this.tilesMap.get(gridRef.getID()); //gets a tile from the tiles map with the specified gridref ID
        }
    }

    isEntrable(gridRef) {
        let tile = this.getTile(gridRef);
        return (tile !== null && tile.isEntrable()); //returns boolean on whether the tile exists and is entrable
    }

    getAdjacentEntrableGridRefs(gridRef) {
        let adjacentEntrableGridRefs = [];

        this.#addEntrableAdjacentTiles(adjacentEntrableGridRefs, gridRef.getAdjacentRightGridRef()); //sends all adjacent tiles grid refs through check
        this.#addEntrableAdjacentTiles(adjacentEntrableGridRefs, gridRef.getAdjacentLeftGridRef());
        this.#addEntrableAdjacentTiles(adjacentEntrableGridRefs, gridRef.getAdjacentUpGridRef());
        this.#addEntrableAdjacentTiles(adjacentEntrableGridRefs, gridRef.getAdjacentDownGridRef());

        return adjacentEntrableGridRefs;
    }

    #addEntrableAdjacentTiles(adjacentEntrableGridRefs, gridRef) {
        if (this.isEntrable(gridRef)) {
            adjacentEntrableGridRefs.push(gridRef); //pushes gridRefs that the sprite CAN move to
        }
    }
 
    getParralelEntrableTiles(gridRef, direction) { //gets all the tiles in front of the sprites
        let parralelEmptyTiles = [];

        while (this.isEntrable(gridRef)) {
            parralelEmptyTiles.push(this.getTile(gridRef)); //add the empty tile to the array
            gridRef = this.#getNextGridRef(gridRef, direction);
        }

        return parralelEmptyTiles;
    }

    #getNextGridRef(gridRef, direction) {
        if (direction == botDirection.LEFT) { //uses enum of 4 directions
            return gridRef.getAdjacentLeftGridRef(); //returns the appropriate grid ref
        } else if (direction == botDirection.RIGHT) {
            return gridRef.getAdjacentRightGridRef();
        } else if (direction == botDirection.UP) {
            return gridRef.getAdjacentUpGridRef();
        } else if (direction == botDirection.DOWN) {
            return gridRef.getAdjacentDownGridRef();
        }

        console.log("error - can't get next tile because invalid direction"); //error message in case of breakage
        return null;
    }

    reinitiallize() {
        for (let tile of this.tilesMap.values()) { //for every tile in the map
            if (tile.transition(compositeTileState.EMPTY_TILE)) { //if the tile has transitioned to an empty tile (if the tile is a sight tile)
                tile.draw();
            }
        }
    }
}