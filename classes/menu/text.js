class Text {
    constructor(textX, textY, textWidth, label) {
        this.textX = textX;
        this.textY = textY;
        this.textWidth = textWidth;
        this.label = label;
    }

    draw() {
        textAlign(CENTER, CENTER);
        textSize(17);
        noStroke();
        textStyle(BOLD);
        fill(20);
        text(this.label, this.textX, this.textY, this.textWidth);
    }
}