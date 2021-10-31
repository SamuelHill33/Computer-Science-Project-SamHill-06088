class LevelButton extends Button {
    constructor(name, buttonX, buttonY, buttonWidth, buttonHeight, sourceImage, text) {
        super(name, buttonX, buttonY, buttonWidth, buttonHeight);
        this.sourceImage = sourceImage;
        this.text = new Text(buttonX + buttonWidth + 10, buttonY + 10, buttonHeight - 10, text);
    }

    draw() {
        super.draw();
        image(this.sourceImage, this.buttonX, this.buttonY, this.buttonWidth, this.buttonHeight);
        this.text.draw();
    }

    execute() {
        
    }
}