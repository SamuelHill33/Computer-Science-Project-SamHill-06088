class TeleportTile extends Tile {
    constructor(gridRef, size, color) {
        super(gridRef, size, color);
        this.sourceImage = teleportTileImage;
    }

    isEntrable() {
        return true;
    }

    draw() {
        fill(this.color); //colours tile
        stroke(180); //outlines tile
        rect(this.gridRef.getXTilePos(), this.gridRef.getYTilePos(), this.size, this.size); //spawns tile
        image(this.sourceImage, this.gridRef.getXTilePos(), this.gridRef.getYTilePos(), this.size, this.size);
    }

    executeInteract(screen) {
        teleportSound.play();
        let player = screen.getPlayer();
        player.setGridRef(this.otherTile.getGridRef());
        player.draw();
        this.draw();
        this.otherTile.coolDown(this.coolDownPeriod);
    }

    setOtherTile(otherTile) {
        this.otherTile = otherTile;
    }
}