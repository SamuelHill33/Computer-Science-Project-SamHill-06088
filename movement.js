let xPos;
let yPos;
let sprite;

function setup() {
    createCanvas(400, 400);
    xPos = 0;
    yPos = 0;
}

function preload() {
    sprite = loadImage('assets/sprite.png');
}

function draw() {
    background(220);
    image(sprite, xPos, yPos);

    if (keyIsPressed) {
        if (key == "a") {
            xPos--;
        }
    }
    
    if (keyIsPressed) {
        if (key == "d") {
            xPos++;
        }
    }
    
    if (keyIsPressed) {
        if (key == "s") {
            yPos--;
        }
    }
    
    if (keyIsPressed) {
        if (key == "w") {
            yPos++;
        }
    }
}
