class GPS {
    constructor() {
        this.idInstruction = 0;
        this.nbInstructions = 0;
        this.nbAsteroides = 0;
        this.x = 0;
        this.y = 0;
        this.distance = 0;
        this.asteroides = [];
        this.countAsteroide = 0;
        this.champAsteroide = false;
    }

    addAsteroide() {
        this.asteroides.push(new Asteroide(this.asteroides.length));
    }
}