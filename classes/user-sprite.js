class UserSprite extends Sprite {
    constructor(sourceImage, gridRef, speed, size) {
        super(sourceImage, gridRef, speed, size);
    }

    newGridRef() {
        if (key == 'a' && this.gridRef.getXTileRef() > 0) {
            return new GridRef(this.gridRef.getXTileRef() - 1, this.gridRef.getYTileRef(), this.size); //creates a new gridRef at the tile to the left of the player
        }
    
        if (key == 'd') {
            return new GridRef(this.gridRef.getXTileRef() + 1, this.gridRef.getYTileRef(), this.size); //creates a new gridRef at the tile to the right of the player
        }
        
        if (key == 'w' && this.gridRef.getYTileRef() > 0) {
            return new GridRef(this.gridRef.getXTileRef(), this.gridRef.getYTileRef() - 1, this.size); //creates a new gridRef at the tile above the player
        } 
    
        if (key == 's') {
            return new GridRef(this.gridRef.getXTileRef(), this.gridRef.getYTileRef() + 1, this.size); //creates a new gridRef at the tile below the player
        }

        return this.gridRef;
    }
}