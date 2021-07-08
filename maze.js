let size = 20;
let xUserPos = 300;
let yUserPos = 400;
let speed = 2;

let mazeMap = [ //2D array of tile positions in maze -- 0: path tile -- 1: wall tile -- 2: start tile -- 3: target tile -- 4: door tile -- 5: key tile -- 6: vent tile, etc...
[0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
[0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
[0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0],
[0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0],
[1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0],
[0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
[0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0],
[0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0],
[0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0],
[0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
[1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
[0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
[0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
[0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
[0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0],
[0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1],
[1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
[1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1],
[1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]]

class GridRef { //a class that instantiates a coordinate pair object
    constructor(xTileRef, yTileRef) {
        this.xTileRef = xTileRef;
        this.yTileRef = yTileRef;
    }

    getXTileRef() {
        return this.xTileRef; //returns x position of coordinate pair
    }

    getYTileRef() {
        return this.yTileRef; //returns y position of coordinate pair
    }
}

class Tile { //a class that instantiates a tile object
    constructor(gridRef, size) { //tile contains grid reference and size properties
        this.gridRef = gridRef;
        this.size = size;
    }

    getGridRef() {
        return this.gridRef; //returns the tiles grid reference object
    }

    getSize() {
        return this.size; //returns the tiles size (square side length value)
    }

    draw() { //a method for displaying the tile object onto the canvas
        fill(200); //colours tile
        stroke(180); //outlines tile
        rect(this.gridRef.getXTileRef(), this.gridRef.getYTileRef(), this.size, this.size); //spawns tile
    }
}

class WallTile extends Tile { //a class that extends from a tile class and instantiates a wall tile object
    constructor(gridRef, size) {
        super(gridRef, size);
    }

    draw() { //wall tile has different draw method that will overwrite parent class draw method
        fill(100, 70, 50); 
        noStroke(); //removes outline (no outline)
        rect(this.gridRef.getXTileRef(), this.gridRef.getYTileRef(), this.size, this.size); 
    }
}

class Grid { //a class that instatiates a grid object
    tilesMap = new Map(); //creates a new empty map
    constructor(mazeMap) {
        for (let j = 0; j < mazeMap.length; j++) {
            for (let i = 0; i < mazeMap[j].length; i++) { //loops around mazeMap 2D array
                let gridRef = new GridRef(j * size, i * size); //creates grid reference object
                let tile;
                if (mazeMap[i][j] == 1) { //if value at position in 2D array is equal to a 1 then
                    tile = new WallTile(gridRef, size); //creates new wall tile
                } else {
                    tile = new Tile(gridRef, size); //creates new tile
                }
                this.tilesMap.set(gridRef, tile); //adds new tile to map
            }
        }
    }

    draw() {
        for (let [gridRef, tile] of this.tilesMap) { //for every tile in map
            tile.draw();
        }
    }
}

class Sprite {
    constructor(image, gridRef, speed, size) {
        this.image = image;
        this.gridRef = gridRef;
        this.speed = speed;
        this.size = size;
    }

    getImage() {
        return this.image;
    }

    setImage(newImage) {
        this.image = newImage;
    }

    getGridRef() {
        return this.gridRef;
    }

    getSpeed() {
        return this.speed;
    }

    getSize() {
        return this.size;
    }
}

class UserSprite extends Sprite {
    constructor(image, gridRef, speed, size) {
        super(image, speed, size);
        playerLoc = tile.getGridRef();
        this.gridRef = playerLoc;
    }

    updateLoc() {

    }

    move() {
    image(sprite.getImage(), xUserPos, yUserPos, size, size); //spawns sprite

    if (keyIsDown(65)) {
        xUserPos -= speed; //moves character left when A is being held
    }
    
    if (keyIsDown(68)) {
        xUserPos += speed; //moves character right when D is being held
    }
    
    if (keyIsDown(87)) {
        yUserPos -= speed; //moves character up when W is being held
    } 
    
    if (keyIsDown(83)) {
        yUserPos += speed; //moves character down when S is being held
    }
    }
}

class BotSprite extends Sprite {
    constructor(image, gridRef, speed, size) {
        super(image, gridRef, speed, size);
    }
}

function setup() { //function executes once on startup
    createCanvas(mazeMap.length*size, mazeMap.length*size); //sets canvas size to array size
    grid = new Grid(mazeMap); //creates new grid object
    //player = new UserSprite('http://127.0.0.1:5500/assets/sprite.png', playerStart, speed, size); //creates player sprite
    console.log(testVar);
}

// function preload() {
//     setImage('http://127.0.0.1:5500/assets/sprite.png'); //preloads character image
// }
  
function draw() { //function executes every tick (ms)
    grid.draw(); //calls draw method in class Grid
    //player.move(); //calls the move method in class UserSprite
}

function canvasCollision() {
    //Canvas collision:
    if (xUserPos < 0) {
        xUserPos += speed; //causes collision with left canvas wall
    }

    if (xUserPos > (mazeMap.length * size) - size) {
        xUserPos -= speed; //causes collision with right canvas wall
    }

    if (yUserPos < 0) {
        yUserPos += speed; //causes collision with top canvas wall
    }

    if (yUserPos > (mazeMap.length * size) - size) {
        yUserPos -= speed; //causes collision with bottom canvas wall
    }
}
