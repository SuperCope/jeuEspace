class GPS {
    constructor() {
        this.idInstruction = 0;
        this.nbInstructions = 0;
        this.nbAsteroides = 0;
        this.x = 0;
        this.y = 0;
        this.distance = 0;
        this.distanceAsteroide = null;
        this.asteroides = [];
        this.countAsteroide = 0;
        this.champAsteroide = false;
        this.trajet = [];
        this.trajetMode = false;
    }

    addAsteroide() {
        this.asteroides.push(new Asteroide(this.asteroides.length));
    }
    goTo(planete) {
        this.trajet.push(planete);
        this.x = this.trajet[0].x;
        this.y = this.trajet[0].y;
        document.getElementById("divPlanete" + planete.id).style.backgroundColor = "cyan";
        document.getElementById("divPlanete" + planete.id).onclick = null;
        this.swtichMode(true)
    }
    swtichMode(mode) {
        game.gps.idInstruction = 0;
        this.trajetMode = mode;
        if (mode) {
            this.nbInstructions = this.trajet.length;
        } else {
            game.initPDA();
        }
        game.nextInstruction();
    }
}