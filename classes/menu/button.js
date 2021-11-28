class Button {
    constructor(name, sourceImage, buttonX, buttonY, buttonWidth, buttonHeight) {
        this.name = name;
        this.sourceImage = sourceImage;
        this.buttonX = buttonX;
        this.buttonY = buttonY;
        this.buttonWidth = buttonWidth;
        this.buttonHeight = buttonHeight;
        this.hover = false;
    }

    isHover() { //is the cursor currently hovering over the button
        return this.hover;
    }

    getName() {
        return this.name;
    }

    draw() {
        if ( //checks if cursor is within level square
            mouseX > this.buttonX &&
            mouseX < this.buttonX + this.buttonWidth &&
            mouseY > this.buttonY &&
            mouseY < this.buttonY + this.buttonHeight
        ) {
            stroke(200, 50, 50);
            this.hover = true; 
            activeButton = this.name;
        } else {
            stroke(20);
            this.hover = false;
            activeButton = null;
        }

        strokeWeight(3);
        fill(150);
        rect(this.buttonX, this.buttonY, this.buttonWidth, this.buttonHeight);
        image(this.sourceImage, this.buttonX, this.buttonY, this.buttonWidth, this.buttonHeight);
    }

    execute() {
        //super does nothing
    }
}