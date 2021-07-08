class UserSprite extends Sprite {
    constructor(image, gridRef, speed, size) {
        super(image, speed, gridRef, size);
    }

    updateLoc() {

    }

    move() {
        image(sprite.getImage(), xUserPos, yUserPos, size, size); //spawns sprite

        if (keyIsDown(65)) {
            xUserPos -= speed; //moves character left when A is being held
        }
    
        if (keyIsDown(68)) {
            xUserPos += speed; //moves character right when D is being held
        }
        
        if (keyIsDown(87)) {
            yUserPos -= speed; //moves character up when W is being held
        } 
    
        if (keyIsDown(83)) {
            yUserPos += speed; //moves character down when S is being held
        }
    }
}