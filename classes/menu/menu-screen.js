let activeButton;

class MenuScreen extends Screen { //the class responsible for loading the contents of the menu page onto the canvas
    constructor(name) {
        super(name);
        this.menuLevels = []; //an array of levels available to chose from
        let buttonX = 50; 
        let buttonY = 150;

        for (let i = 0; i < menuData.levels.length; i++) { //for each level
            let textArray = [menuData.levels[i].text, "Score: " + scoreMap.get(menuData.levels[i].name), this.#getStars(menuData.levels[i].name)];
            this.menuLevels[i] = new MenuLevel(menuData.levels[i].name, imageMap.get(menuData.levels[i].name), buttonX, buttonY, 120, 120, textArray);
            buttonY += 130; //make the next level below
            
            if (i == 2) { //once three levels have been instantiated
                buttonX = 330; //make a second column to the right
                buttonY = 150; //reset y constant
            }
        }

        this.input = createFileInput(this.#handleFile);
        this.input.position(220, 8);
    }

    draw() {
        background(220, 230, 240); //set background color

        textSize(70);
        textAlign(CENTER, CENTER);
        strokeWeight(3);
        text("Maze Game", 300, 70); //title

        for (let menuLevel of this.menuLevels) { //level button and text next to it
            let menuLevelName = menuLevel.getName();
            let textArray = [menuLevel.getText()[0], "Score: " + scoreMap.get(menuLevelName), this.#getStars(menuLevelName)];
            menuLevel.setText(textArray);
            menuLevel.draw(); 
        }
    }

    loadScreen() { //loads the gamescreen when a level is selected
        for (let menuLevel of this.menuLevels) {
            if (menuLevel.getLevelButton().isHover()) { //if the mouse cursor is over a button
                clear();
                gameScreen = new GameScreen(menuLevel.getLevelButton().getName());
                return true;
            }
        }

        return false;
    }

    #getStars(screenName) {
        let score = scoreMap.get(screenName);
        let timeLimit = gameMap.get(screenName).timeLimit;
        if (score > 0.8 * timeLimit * 50) {
            return "⭐⭐⭐⭐⭐";
        } else if (score > 0.6 * timeLimit * 50) {
            return "⭐⭐⭐⭐";
        } else if (score > 0.4 * timeLimit * 50) {
            return "⭐⭐⭐";
        } else if (score > 0.2 * timeLimit * 50) {
            return "⭐⭐";
        } else if (score > 0) {
            return "⭐";
        }

        return "";
    }

    #handleFile(file) {
        let scoreData = file.data;

        for (let i = 0; i < scoreData.levels.length; i++) {
            scoreMap.set(scoreData.levels[i].name, scoreData.levels[i].score);
        }

        console.log(scoreMap);
    }
}