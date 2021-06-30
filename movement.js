let xPos;
let yPos;
let sprite;

function setup() {
    createCanvas(400, 400);
    xPos = 10;
    yPos = 10;
}

function preload() {
    sprite = loadImage('http://127.0.0.1:8887/assets/sprite.png');
}

function draw() {
    background(100);
    image(sprite, xPos, yPos, 20, 20);

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
            yPos++w;
        }
    }
    
    if (keyIsPressed) {
        if (key == "w") {
            yPos--;
        }
    }
}
