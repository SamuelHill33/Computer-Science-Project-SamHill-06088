let count;

class UserSprite extends Sprite {
    constructor(sourceImage, gridRef, speed, size) {
        super(sourceImage, gridRef, speed, size);
    }

    newGridRef() {
        if (key == 'a') {
            return this.gridRef.getAdjacentLeftGridRef(); //creates a new gridRef at the tile to the left of the player
        }
    
        if (key == 'd') {
            return this.gridRef.getAdjacentRightGridRef(); //creates a new gridRef at the tile to the right of the player
        }
        
        if (key == 'w') {
            return this.gridRef.getAdjacentUpGridRef();; //creates a new gridRef at the tile above the player
        } 
    
        if (key == 's') {
            return this.gridRef.getAdjacentDownGridRef(); //creates a new gridRef at the tile below the player
        }

        return this.gridRef;
    }

    move(tile) {
        if (tile.isEntrable()) {
            player.setGridRef(this.newGridRef());
            player.draw();
        }
    }
}