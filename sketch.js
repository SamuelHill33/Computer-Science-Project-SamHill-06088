let gameScreen;
let menuScreen;

function switchScreen() {
    if (gameScreen != null) {
        clear();
        menuScreen = new MenuScreen("menu");
        gameScreen = null;
    }
}

function preload() { //function executes once on startup
    userImage = loadImage('http://127.0.0.1:5500/assets/player.png');
    botImage = loadImage('http://127.0.0.1:5500/assets/bot.png');
    buttonTileImage = loadImage('http://127.0.0.1:5500/assets/button.png');
    doorTileClosedImage = loadImage('http://127.0.0.1:5500/assets/doorClosed.png');
    doorTileOpenImage = loadImage('http://127.0.0.1:5500/assets/doorOpened.png');
    teleportTileImage = loadImage('http://127.0.0.1:5500/assets/teleport.png');

    menuData = loadJSON('http://127.0.0.1:5500/levels/levels.json');
    console.log(menuData);
    for (level in menuData.levels) {
        level.image = loadImage(level.imageURL);
    }

    // level1PreviewImage = teleportTileImage;
    // level2PreviewImage = doorTileOpenImage;
    // level3PreviewImage = buttonTileImage;
}

function setup() { //function executes once on startup
    createCanvas(640, 680); //sets canvas size to array size
    background(220, 230, 240);
    //gameScreen = new GameScreen("level1", 10);
    menuScreen = new MenuScreen("menu");
}

function draw() { //function executes every tick
    if (gameScreen != null) {
        gameScreen.draw();
    }
    if (menuScreen != null) {
        menuScreen.draw();
    }
}

function mousePressed() {
    if (menuScreen != null) {
        if (menuScreen.loadScreen()) {
            menuScreen = null;
        }
    }
}

