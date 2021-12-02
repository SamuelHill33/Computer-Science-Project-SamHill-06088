class Button {
    constructor(name, sourceImage, buttonX, buttonY, buttonWidth, buttonHeight, text) {
        this.name = name;
        this.sourceImage = sourceImage;
        this.buttonX = buttonX;
        this.buttonY = buttonY;
        this.buttonWidth = buttonWidth;
        this.buttonHeight = buttonHeight;
        this.text = text;
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

        if (this.sourceImage != null) {
            image(this.sourceImage, this.buttonX, this.buttonY, this.buttonWidth, this.buttonHeight);
        }

        fill(255);
        textSize(17);
        stroke(20);
        textStyle(NORMAL);
        strokeWeight(2);
        text(this.text, this.buttonX + (this.buttonWidth / 2), this.buttonY + (this.buttonHeight / 2));
    }

    execute() {
        //super does nothing
    }
}