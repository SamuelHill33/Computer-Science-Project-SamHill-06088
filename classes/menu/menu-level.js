class MenuLevel {
    constructor(name, sourceImage, buttonX, buttonY, buttonWidth, buttonHeight, text) {
        this.name = name;
        this.sourceImage = sourceImage;
        this.buttonX = buttonX;
        this.buttonY = buttonY;
        this.buttonWidth = buttonWidth;
        this.buttonHeight = buttonHeight;
        this.text = text;
        this.levelButton = new Button(name, sourceImage, buttonX, buttonY, buttonWidth, buttonHeight);
    }

    draw() {
        this.levelButton.draw();

        textAlign(CENTER, CENTER);
        textSize(17);
        noStroke();
        textStyle(BOLD);
        fill(20);
        for (let i = 0; i < this.text.length; i++) {
            text(this.text[i], this.buttonX + this.buttonWidth + 10, this.buttonY +  20 + (i * 30), this.buttonHeight - 10);
        }
    }

    getName() {
        return this.name;
    }

    getLevelButton() {
        return this.levelButton;
    }

    getText() {
        return this.text;
    }

    setText(text) {
        this.text = text;
    }
}