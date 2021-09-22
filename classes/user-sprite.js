let count;

class UserSprite extends Sprite {
    constructor(sourceImage, gridRef, speed, size) {
        super(sourceImage, gridRef, speed, size);
    }

    #newGridRef() {
        if (key == 'a') { //left
            return this.gridRef.getAdjacentLeftGridRef(); 
        }
    
        if (key == 'd') { //right
            return this.gridRef.getAdjacentRightGridRef(); 
        }
        
        if (key == 'w') { //up
            return this.gridRef.getAdjacentUpGridRef();
        } 
    
        if (key == 's') { //down
            return this.gridRef.getAdjacentDownGridRef(); 
        }

        return this.gridRef;
    }

    setNextPos() {
        let newGridRef = this.#newGridRef();

        if (grid.isEntrable(newGridRef)) { //if tile at new grid ref is entrable
            this.gridRef = newGridRef; //set players current position to tile at new grid ref
            return true; //player has moved
        }

        return false;
    }

    shouldMove() {
        if (keyIsPressed) {
            count++;

            if (count == 1 || count == this.getSpeed()) { //if a key has just been pressed or has been down for a set number of ms
            count = 1; 
            return true;
            }
        } else {
            count = 0;
        }
    }
4
    dieIfNecessary() {
        let playerTile = grid.getTile(this.getGridRef());
        if (playerTile.isDeathTile()) {
            this.#die();
        }
    }

    #die() {
        console.log("player died");
        //alert("stop");
    }

    interact() {
        if (keyIsPressed == true && key == 'e') {
            return true;
        }
        return false;
    }
}