let gameScreen;
let menuScreen;
let imageMap = new Map();
let gameMap = new Map();
let scoreMap = new Map();
let deathGraphics;
let muted = false;

function loadJson(e) {
    let lines = e.target.result;
    var _scoreData = JSON.parse(lines);
    loadScoreMap(_scoreData);
}

function switchScreen() {
    if (gameScreen != null) {
        clear();
        if (!gameScreen.isStopped()) {
            gameScreen.updateScore();
        }
        menuScreen = new MenuScreen("menu");  
        gameScreen = null;
    }
}

function preload() { //function executes once on startup
    playerLeftImage = loadImage('http://127.0.0.1:5500/assets/playerLeft.png');
    playerRightImage = loadImage('http://127.0.0.1:5500/assets/playerRight.png');
    botImage = loadImage('http://127.0.0.1:5500/assets/bot.png');
    switchTileOpenedImage = loadImage('http://127.0.0.1:5500/assets/switchOpened.png');
    switchTileClosedImage = loadImage('http://127.0.0.1:5500/assets/switchClosed.png');
    doorTileClosedImage = loadImage('http://127.0.0.1:5500/assets/doorClosed.png');
    doorTileOpenImage = loadImage('http://127.0.0.1:5500/assets/doorOpened.png');
    teleportTileImage = loadImage('http://127.0.0.1:5500/assets/teleport.png');
    chestTileClosedImage = loadImage('http://127.0.0.1:5500/assets/closedChest.png');
    chestTileOpenImage = loadImage('http://127.0.0.1:5500/assets/openChest.png');
    exitTileImage = loadImage('http://127.0.0.1:5500/assets/exit.png');
    menuBackgroundImage = loadImage('http://127.0.0.1:5500/assets/menuBackground.jpg');

    levelSelectSound = loadSound('http://127.0.0.1:5500/assets/levelSelect.wav');
    teleportSound = loadSound('http://127.0.0.1:5500/assets/swoosh.mp3');
    switchSound = loadSound('http://127.0.0.1:5500/assets/unlock.mp3');
    treasureSound = loadSound('http://127.0.0.1:5500/assets/coins.wav');
    winSound = loadSound('http://127.0.0.1:5500/assets/win.wav');
    failSound = loadSound('http://127.0.0.1:5500/assets/fail.wav');
    gameMusic = loadSound('http://127.0.0.1:5500/assets/gameMusic.mp3');
    
    menuData = loadJSON('http://127.0.0.1:5500/levels/levels.json', loadLevels);
}

function setup() { //function executes once on startup
    createCanvas(640, 680);
    menuScreen = new MenuScreen("menu");

    deathGraphics = createGraphics(640, 680);
    deathGraphics.clear();
}

function draw() { //function executes every tick
    if (gameScreen != null) { //if screen is not active
        gameScreen.incrementTimer();

        if (gameScreen.isStopped()) { //game has stopped / ended
            if (gameScreen.deathTimerEnded()) { //once the timer determening how long the death screen should be visible for has ended
                this.switchScreen();
            }

            return;
        }

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

    scoreData = loadJSON('http://127.0.0.1:5500/levels/scores.json', loadScoreMap);
}

function loadGame(_gameData) {
    gameMap.set(_gameData.name, _gameData); //creates map connecting level name to appropriate json data
}

function loadScoreMap(_scoreData) {
    for (let i = 0; i < menuData.levels.length; i++) { //for each level states within the levels json file
        scoreMap.set(menuData.levels[i].name, 0); //set the levels score to 0 within the score map
    }
}

function downloadScores() {
    for (let i = 0; i < scoreData.levels.length; i++) {
        scoreData.levels[i].score = scoreMap.get(scoreData.levels[i].name); //set the scores within the json file to equal that of the score map - persisting scores
    }

    saveJSON(scoreData, "scores.json");
}

function mute() {
    let x; //holds binary value dependant on toggle

    if (muted) { //toggle
        x = 1;
        muted = false;
    } else if (!muted) {
        x = 0;
        muted = true;
    }

    levelSelectSound.setVolume(x);
    teleportSound.setVolume(x);
    switchSound.setVolume(x);
    treasureSound.setVolume(x);
    winSound.setVolume(x);
    failSound.setVolume(x);
    gameMusic.setVolume(x);
}

