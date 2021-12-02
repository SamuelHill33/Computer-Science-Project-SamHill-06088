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

    setNextPos(grid) {
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
    dieIfNecessary(grid) {
        let playerTile = grid.getTile(this.getGridRef());
        if (playerTile.isDeathTile()) {
            this.#die();
            return true;
        }

        return false;
    }

    #die() {
        console.log("player died");
        
        deathGraphics.fill(255, 0, 0);
        deathGraphics.textSize(90);
        deathGraphics.stroke(20);
        deathGraphics.textStyle(BOLD);
        deathGraphics.strokeWeight(2);
        deathGraphics.textAlign(CENTER, CENTER);
        deathGraphics.text("You Died", 320, 320);
        
        deathGraphics.noStroke();
        let c = color(100, 100);
        deathGraphics.fill(c);
        deathGraphics.rect(0, 0, 640, 680);
        image(deathGraphics, 0, 0);
    }

    interact() {
        if (keyIsPressed == true && key == 'e') {
            return true;
        }
        return false;
    }
}