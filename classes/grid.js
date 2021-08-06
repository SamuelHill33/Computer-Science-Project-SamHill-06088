class Grid { //a class that instatiates a grid object
    tilesMap = new Map(); //creates a new empty map
    constructor(mazeMap) {
        this.mazeMap = mazeMap;
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
        if (gridRef.getXTileRef() > this.mazeMap.length - 1 ||
            gridRef.getYTileRef() > this.mazeMap.length - 1 ||
            gridRef.getXTileRef() < 0 ||
            gridRef.getYTileRef() < 0
        ) {
            return null;
        } else {
            return this.tilesMap.get(gridRef.getID()); //gets a tile from the tiles map with the specified grid ref ID
        }
    }

    getAdjacentEntrableTilesGridRefs(gridRef) {
        let adjacentEntrableTilesGridRefs = [];

        this.areAdjacentTilesGridRefsEntrable(adjacentEntrableTilesGridRefs, gridRef.getAdjacentRightGridRef()); //sends all adjacent tiles grid refs through check
        this.areAdjacentTilesGridRefsEntrable(adjacentEntrableTilesGridRefs, gridRef.getAdjacentLeftGridRef());
        this.areAdjacentTilesGridRefsEntrable(adjacentEntrableTilesGridRefs, gridRef.getAdjacentUpGridRef());
        this.areAdjacentTilesGridRefsEntrable(adjacentEntrableTilesGridRefs, gridRef.getAdjacentDownGridRef());

        return adjacentEntrableTilesGridRefs;
    }

    areAdjacentTilesGridRefsEntrable(adjacentEntrableTilesGridRefs, gridRef) {
        let tile = this.getTile(gridRef);

        if (tile !== null && tile.isEntrable()) {
            adjacentEntrableTilesGridRefs.push(tile.getGridRef());
        } else {
            return; 
        }
    }
}