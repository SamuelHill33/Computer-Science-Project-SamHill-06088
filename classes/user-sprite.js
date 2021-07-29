class UserSprite extends Sprite {
    constructor(sourceImage, gridRef, speed, size) {
        super(sourceImage, gridRef, speed, size);
    }

    newPosition() {
        if (keyIsDown(65)) {
            return new GridRef(this.gridRef.getXPos() - speed, this.gridRef.getYPos(), this.size); //moves character left when A is being held
        }
    
        if (keyIsDown(68)) {
            return new GridRef(this.gridRef.getXPos() + speed, this.gridRef.getYPos(), this.size); //moves character right when D is being held
        }
        
        if (keyIsDown(87)) {
            return new GridRef(this.gridRef.getXPos(), this.gridRef.getYPos() - speed, this.size); //moves character up when W is being held
        } 
    
        if (keyIsDown(83)) {
            return new GridRef(this.gridRef.getXPos(), this.gridRef.getYPos() + speed, this.size); //moves character down when S is being held
        }

        return this.gridRef;
    }
}