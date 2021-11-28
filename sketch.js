let gameScreen;
let menuScreen;
let imageMap = new Map();
let gameMap = new Map();

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
    chestTileClosedImage = loadImage('http://127.0.0.1:5500/assets/closedChest.jpg');
    chestTileOpenImage = loadImage('http://127.0.0.1:5500/assets/openChest.png');
    exitTileImage = loadImage('http://127.0.0.1:5500/assets/exit.png');
    
    menuData = loadJSON('http://127.0.0.1:5500/levels/levels.json', loadLevels);

    // level1PreviewImage = teleportTileImage;
    // level2PreviewImage = doorTileOpenImage;
    // level3PreviewImage = buttonTileImage;
}

function setup() { //function executes once on startup
    createCanvas(640, 680);
    menuScreen = new MenuScreen("menu");
}

function draw() { //function executes every tick
    if (gameScreen != null) { //if screen is not active
        gameScreen.draw(); //activate screen
    }
    if (menuScreen != null) {
        menuScreen.draw();
    }
}

function mousePressed() {
    if (menuScreen != null) {
        if (menuScreen.loadScreen()) { //check if cursor is above button
            menuScreen = null;
        }
    }
}

function loadLevels(_menuData) { //loads the json files for each specific level using the levels json file
    for (let i = 0; i < _menuData.levels.length; i++) { //for each level states within the levels json file
        imageMap.set(_menuData.levels[i].name, loadImage(_menuData.levels[i].imageURL)); //adds preview image for said level to map
        gameData = loadJSON('http://127.0.0.1:5500/levels/' + _menuData.levels[i].name + '.json', loadGame); //loads json of individual level
    }
}

function loadGame(_gameData) {
    gameMap.set(_gameData.name, _gameData); //creates map connecting level name to appropriate json data
}

