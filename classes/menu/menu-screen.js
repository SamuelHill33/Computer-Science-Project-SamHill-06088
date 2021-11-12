let activeButton;

const levelName = {
    LEVEL1: "The games begin",
    LEVEL2: "Big world",
    LEVEL3: "Bots gallore"
}

class MenuScreen extends Screen {
    constructor(name) {
        super(name);
        this.menuLevels = [];
        let buttonX = 50;
        let buttonY = 20;

        for (let i = 0; i < menuData.levels.length; i++) {
            this.menuLevels[i] = new MenuLevel(menuData.levels[i].name, imageMap.get(menuData.levels[i].name), buttonX, buttonY, 120, 120, menuData.levels[i].text);
            buttonY += 130;
            
            if (i == 4) {
                buttonX = 330;
                buttonY = 20;
            }
        }
    }

    draw() {
        for (let menuLevel of this.menuLevels) {
            menuLevel.draw();
        }
    }


    loadScreen() {
        for (let menuLevel of this.menuLevels) {
            if (menuLevel.getButton().isHover()) {
                clear();
                gameScreen = new GameScreen(menuLevel.getButton().getName());
                return true;
            }
        }

        return false;
    }
}