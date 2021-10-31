class Button {
    constructor(name, buttonX, buttonY, buttonWidth, buttonHeight) {
        this.name = name;
        this.buttonX = buttonX;
        this.buttonY = buttonY;
        this.buttonWidth = buttonWidth;
        this.buttonHeight = buttonHeight;
        this.hover = false;
    }

    getName() {
        return this.name;
    }

    isHover() {
        return this.hover;
    }

    draw() {
        if ( //checks if mouse is within level square
            mouseX > this.buttonX &&
            mouseX < this.buttonX + this.buttonWidth &&
            mouseY > this.buttonY &&
            mouseY < this.buttonY + this.buttonHeight
        ) {
            stroke(200, 50, 50);
            this.hover = true; 
        } else {
            stroke(20);
            this.hover = false;
        }

        strokeWeight(3);
        fill(150);
        rect(this.buttonX, this.buttonY, this.buttonWidth, this.buttonHeight);
    }

    execute() {
        //super does nothing
    }
}