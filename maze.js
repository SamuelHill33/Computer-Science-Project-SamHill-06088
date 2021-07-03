let size = 30;
let xUserPos = 300 - (size / 2);
let yUserPos = 400 - (size / 2);
let sprite;
let speed = 2;
let tilesArr = [];

let mazeMap = [
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
[0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

class GridRef {
    constructor(xTilePos, yTilePos) {
        this.xTilePos = xTilePos;
        this.yTilePos = yTilePos;
    }

    getXTilePos() {
        return this.xTilePos;
    }

    getYTilePos() {
        return this.yTilePos;
    }
}

class Grid {
    tilesMap = new Map();
    constructor(mazeMap) {
        for (let j = 0; j < mazeMap.length; j++) {
            for (let i = 0; i < mazeMap[j].length; i++) {
                let gridRef = new GridRef(j * size, i * size);
                this.tilesMap.set(gridRef, new Tile(gridRef, size, mazeMap[i][j] == 1));
                
            }
        }
    }

    draw() {
        for (let [gridRef, tile] of this.tilesMap) {
            tile.draw();
        }
        // if (mazeMap[i][j] == 0) { //determines whether a tile should be placed at position
        //     fill(150);
        //     stroke(100);
        //     tilesArr[j * size + i] = new Tile(i * size, j * size, false);
        // } else {
        //     fill(20, 20, 100);
        //     noStroke();
        //     tilesArr[j * size + i] = new Tile(i * size, j * size, true);
        // }
        // rect(tilesArr[j * size + i].getXTilePos(), tilesArr[j * size + i].getYTilePos(), size, size); //spawns tile
    }
}

class Tile {
    constructor(gridRef, size, isWall) {
        this.gridRef = gridRef;
        this.size = size;
        this.isWall = isWall;
    }

    getGridRef() {
        return this.gridRef;
    }

    getIsWall() {
        return this.isWall;
    }
    draw() {
        if (this.isWall) { //determines whether a tile should be placed at position
            fill(20, 20, 100);
            noStroke();
        } else {
            fill(150);
            stroke(100);
        }
        rect(this.gridRef.getXTilePos(), this.gridRef.getYTilePos(), this.size, this.size); //spawns tile
    }
}

function setup() {
    createCanvas(mazeMap.length*size, mazeMap.length*size); //sets canvas size to array size
}

function preload() {
    sprite = loadImage('http://127.0.0.1:5500/assets/sprite.png'); //preloads character image
}
  
function draw() {
    grid = new Grid(mazeMap);
    grid.draw();

    //Maze creation:
    // for (let j = 0; j < mazeMap.length; j++) {
    //     for (let i = 0; i < mazeMap[j].length; i++) {
    //         if (mazeMap[i][j] == 0) { //determines whether a tile should be placed at position
    //             fill(150);
    //             stroke(100);
    //             tilesArr[j * size + i] = new Tile(i * size, j * size, false);
    //         } else {
    //             fill(20, 20, 100);
    //             noStroke();
    //             tilesArr[j * size + i] = new Tile(i * size, j * size, true);
    //         }
    //         rect(tilesArr[j * size + i].getXTilePos(), tilesArr[j * size + i].getYTilePos(), size, size); //spawns tile
    //     }
    // }

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

    //Wall collision:
    //xUserPos > tilesArr[i].getXTilePos() - size && xUserPos < tilesArr[i].getXTilePos() + size && yUserPos > tilesArr[i].getYTilePos() - size && yUserPos < tilesArr[i].getYTilePos() + size
    
    for (let i = 0; i < tilesArr.length; i++) {
        if (xUserPos > tilesArr[i].getXTilePos() - size && xUserPos < tilesArr[i].getXTilePos() + size && yUserPos > tilesArr[i].getYTilePos() - size && yUserPos < tilesArr[i].getYTilePos() + size) {
            console.log("contact");
        }
        if (keyIsPressed) {
            console.log(xUserPos + " " + yUserPos + " " + tilesArr[i].getXTilePos() + " " + tilesArr[i].getYTilePos());
            if (tilesArr[i].getIsWall() == true) {
                console.log("wall has been hit... hopefully");
                speed = speed * -1;
            }
        }
    }

    //Character movement:s
    image(sprite, xUserPos, yUserPos, size, size); //spawns sprite

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
