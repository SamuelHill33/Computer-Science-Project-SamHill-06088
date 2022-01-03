let userImage;
let botImage;
let timer = 0;

const botDirection = {
    LEFT: "left",
    RIGHT: "right",
    UP: "up",
    DOWN: "down"
}

class GameScreen extends Screen {
    constructor(name) {
        super(name);
        background(150); //set background color

        timer = 0;

        let gameData = gameMap.get(this.name); //gets the grid information from the respective level
        let tileSize = 640 / gameData.mazeMap.length; //appropriately scales tiles
        this.grid = new Grid(gameData.mazeMap, tileSize); //creates new grid object
        this.grid.draw();

        let playerGridRef = new GridRef(gameData.player.gridRefX, gameData.player.gridRefY, tileSize); //creates players starting grid ref
        this.player = new UserSprite(playerLeftImage, playerGridRef, 10, tileSize); //creates player sprite
        this.player.draw();

        this.bots = [];
        for (let i = 0; i < gameData.bot.bots.length; i++) { //for the number of bots on the level
            let botGridRef = new GridRef(gameData.bot.bots[i].gridRefX, gameData.bot.bots[i].gridRefY, tileSize);
            this.bots[i] = new BotSprite(botImage, botGridRef, gameData.bot.speed, tileSize);
            this.bots[i].draw();
        }

        this.startScore = gameData.timeLimit * 50;
        this.stopped = false;
        this.deathTimer = timer;
        this.treasureRetrieved = false;
    }

    getPlayer() {
        return this.player;
    }

    getGrid() {
        return this.grid;
    }

    setTreasureRetrieved(treasureRetrieved) {
        this.treasureRetrieved = treasureRetrieved;
    }

    incrementTimer() {
        timer++;
    }

    draw() { //function executes every tick
        var currentSeconds = Math.ceil((this.startScore - timer) / 50);

        if (this.seconds != currentSeconds) {
            this.seconds = currentSeconds;
            this.updateOnScreenTimer(currentSeconds);
        }

        if (this.bots[0] !== undefined && this.bots[0].shouldMove()) { //if there is at least one bot and bot(s) should move
            this.grid.reinitialize(); //clear all sight tiles back to empty tiles

            for (let i = 0; i < this.bots.length; i++) {
                this.bots[i].move(this.grid);
                this.bots[i].drawSightTiles(this.grid);
            }

            for (let i = 0; i < this.bots.length; i++) {
                this.bots[i].draw();
            }

            this.player.draw(); //to make sure that sprite doesn't disappear when a sight tile is drawn over the sprite
        }

        if (this.player.shouldMove()) {
            this.player.move(this.grid);
            this.player.draw();
        }

        if (this.player.interact()) { //if the player has pressed the interact key
            let gridRef = this.player.getGridRef(); //get player position
            let tile = this.grid.getTile(gridRef); //get tile at player position
            tile.interact(this);
        }

        this.stopped = this.player.dieIfNecessary(this.grid, this); //determine if player should die
        if (this.stopped) {
            this.deathTimer = timer;
        }
        
        
    }

    updateScore() {
        let score = this.startScore - timer;
        if (score > scoreMap.get(this.name) && this.treasureRetrieved) {
            scoreMap.set(this.name, score);
        }
    }

    isStopped() {
        return this.stopped;
    }

    deathTimerEnded() {
        if (this.deathTimer + 100 < timer) {
            return true;
        }

        return false;
    }

    hasTimerExpired() {
        return this.seconds <= 0;
    }

    updateOnScreenTimer(seconds) {
        fill(255);
        stroke(255);
        rect(0, 640, 640, 40);

        fill(0);
        textSize(16);
        text("w = up | s = down | a = left | d = right | e = interact", 195, 660);

        textSize(32);
        fill(200, 0, 0);
        textStyle(BOLD);
        textAlign(CENTER, CENTER);
        text("Timer: " + seconds, 560, 660);
        console.log(seconds);
    }
}