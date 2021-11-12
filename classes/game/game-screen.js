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

        let gameData = gameMap.get(this.name); 
        let tileSize = 640 / gameData.mazeMap.length;
        this.grid = new Grid(gameData.mazeMap, tileSize); //creates new grid object
        this.grid.draw();

        let playerGridRef = new GridRef(gameData.player.gridRefX, gameData.player.gridRefY, tileSize); //creates players starting grid ref
        this.player = new UserSprite(userImage, playerGridRef, 10, tileSize); //creates player sprite
        this.player.draw();

        this.bots = [];
        for (let i = 0; i < gameData.bot.bots.length; i++) {
            let botGridRef = new GridRef(gameData.bot.bots[i].gridRefX, gameData.bot.bots[i].gridRefY, tileSize);
            this.bots[i] = new BotSprite(botImage, botGridRef, gameData.bot.speed, tileSize);
            this.bots[i].draw();
        }
    }

    getPlayer() {
        return this.player;
    }

    getGrid() {
        return this.grid;
    }

    draw() { //function executes every tick
        timer++;

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

        this.player.dieIfNecessary(this.grid); //determine if player should die
    }
}