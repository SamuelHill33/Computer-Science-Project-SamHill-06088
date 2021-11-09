class MenuLevel {
    constructor(sourceImage, buttonX, buttonY, buttonWidth, buttonHeight, text) {
        this.text = new Text(buttonX + buttonWidth + 10, buttonY + 10, buttonHeight - 10, text);
        this.button = new Button(sourceImage, buttonX, buttonY, buttonWidth, buttonHeight, text);
    }

    draw() {
        this.button.draw();
        this.text.draw();
    }

    getButton() {
        return this.button;
    }

    getText() {
        return this.text;
    }
}