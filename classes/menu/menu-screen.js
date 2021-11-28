let activeButton;

class MenuScreen extends Screen { //the class responsible for loading the contents of the menu page onto the canvas
    constructor(name) {
        super(name);
        this.menuLevels = []; //an array of levels available to chose from
        let buttonX = 50; 
        let buttonY = 150;

        for (let i = 0; i < menuData.levels.length; i++) { //for each level
            this.menuLevels[i] = new MenuLevel(menuData.levels[i].name, imageMap.get(menuData.levels[i].name), buttonX, buttonY, 120, 120, menuData.levels[i].text);
            buttonY += 130; //make the next level below
            
            if (i == 2) { //once three levels have been instantiated
                buttonX = 330; //make a second column to the right
                buttonY = 150; //reset y constant
            }
        }
    }

    draw() {
        background(220, 230, 240); //set background color

        for (let menuLevel of this.menuLevels) {
            menuLevel.draw();
        }
    }


    loadScreen() { //loads the gamescreen when a level is selected
        for (let menuLevel of this.menuLevels) {
            if (menuLevel.getButton().isHover()) { //if the mouse cursor is over a button
                clear();
                gameScreen = new GameScreen(menuLevel.getButton().getName());
                return true;
            }
        }

        return false;
    }
}