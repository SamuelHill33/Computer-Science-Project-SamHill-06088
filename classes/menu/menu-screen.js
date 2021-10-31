let hover = false;

const levelName = {
    LEVEL1: "The games begin",
    LEVEL2: "Big world",
    LEVEL3: "Bots gallore"
}

class MenuScreen extends Screen {
    constructor(name) {
        super(name);
        this.levelButtons = [];

        this.levelButtons[0] = new LevelButton(levelName.LEVEL1, 50, 20, 120, 120, level1PreviewImage, "blah de blah");
        this.levelButtons[1] = new LevelButton(levelName.LEVEL2, 50, 150, 120, 120, level2PreviewImage, "blah de blah");
        this.levelButtons[2] = new LevelButton(levelName.LEVEL3, 50, 280, 120, 120, level3PreviewImage, "blah de blah");
        this.levelButtons[3] = new LevelButton(levelName.LEVEL1, 50, 410, 120, 120, level2PreviewImage, "blah de blah");
        this.levelButtons[4] = new LevelButton(levelName.LEVEL1, 50, 540, 120, 120, level1PreviewImage, "blah de blah");
        this.levelButtons[5] = new LevelButton(levelName.LEVEL1, 330, 20, 120, 120, level1PreviewImage, "blah de blah");
        this.levelButtons[6] = new LevelButton(levelName.LEVEL1, 330, 150, 120, 120, level2PreviewImage, "blah de blah");
        this.levelButtons[7] = new LevelButton(levelName.LEVEL1, 330, 280, 120, 120, level3PreviewImage, "blah de blah");
        this.levelButtons[8] = new LevelButton(levelName.LEVEL1, 330, 410, 120, 120, level2PreviewImage, "blah de blah");
        this.levelButtons[9] = new LevelButton(levelName.LEVEL1, 330, 540, 120, 120, level1PreviewImage, "blah de blah");
    }

    draw() {
        for (let levelButton of this.levelButtons) {
            levelButton.draw();
        }
    }


    loadScreen() {
        for (let levelButton of this.levelButtons) {
            if (levelButton.isHover()) {
                clear();
                gameScreen = new GameScreen(levelButton.getName(), 10);
                console.log(levelButton.getName());
                return true;
            }
        }

        return false;
    }
}