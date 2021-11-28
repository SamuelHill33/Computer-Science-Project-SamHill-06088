class Text {
    constructor(textX, textY, textWidth, labels) {
        this.textX = textX;
        this.textY = textY;
        this.textWidth = textWidth;
        this.labels = labels;
    }

    draw() {
        textAlign(CENTER, CENTER);
        textSize(17);
        noStroke();
        textStyle(BOLD);
        fill(20);
        for (let i = 0; i < this.labels.length; i++) {
            text(this.labels[i], this.textX, this.textY + (i * 30), this.textWidth);
        }
    }
}