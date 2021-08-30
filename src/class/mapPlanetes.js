class MapPlanetes {
    constructor() {
        this.planetes = [];
        this.size;
    }

    initMap() {
        let nbPlanetes = parseInt(Math.random() * (24 - 73) + 73);
        while (this.planetes.length < nbPlanetes) {
            let xPlanete = parseInt(Math.random() * (0 - 192000) + 192000);
            let yPlanete = parseInt(Math.random() * (0 - 192000) + 192000);
            let taille = parseInt(Math.random() * (8000 - 30000) + 30000);
            let ok = true;
            // for (let i = 0; i < this.planetes.length; i++) {

            //     alert((xPlanete + (taille / 2) > (this.planetes[i].x - (this.planetes[i].size) / 2)) || (xPlanete - (taille / 2) < (this.planetes[i].x + (this.planetes[i].size) / 2)) || (yPlanete + (taille / 2) > (this.planetes[i].y - (this.planetes[i].size) / 2)) || (yPlanete - (taille / 2) < (this.planetes[i].y + (this.planetes[i].size) / 2)));
            //     alert(xPlanete + "," + this.planetes[i].x)
            //     if ((xPlanete + (taille / 2) > (this.planetes[i].x - (this.planetes[i].size) / 2)) || (xPlanete - (taille / 2) < (this.planetes[i].x + (this.planetes[i].size) / 2)) || (yPlanete + (taille / 2) > (this.planetes[i].y - (this.planetes[i].size) / 2)) || (yPlanete - (taille / 2) < (this.planetes[i].y + (this.planetes[i].size) / 2))) {
            //         ok = false;

            //     }
            // }
            if (ok) {
                let planete = new Planete();
                planete.x = xPlanete;
                planete.y = yPlanete;
                planete.size = taille;
                planete.id = this.planetes.length;
                this.planetes[this.planetes.length] = planete;
            }

        }
        this.size = 100000;
    }
    displayMap() {
        let divPlanetes = document.createElement("div");
        divPlanetes.setAttribute("id", "divPlanetes")
        for (let i = 0; i < this.planetes.length; i++) {
            let divPlanete = document.createElement("div");
            divPlanete.setAttribute("id", "divPlanete" + i)
            divPlanete.setAttribute("class", "divPlanete")
            divPlanete.style.width = parseInt((this.planetes[i].size) / 1000) + "px";
            divPlanete.style.height = ((this.planetes[i].size) / 1000) + "px";
            divPlanete.style.left = ((this.planetes[i].x) / 1000) + "px";
            divPlanete.style.top = ((this.planetes[i].y) / 1000) + "px";
            let planete = this.planetes[i];
            divPlanete.onclick = function () { game.gps.goTo(planete) }
            divPlanetes.appendChild(divPlanete);
        }
        document.getElementById("mapPlanetes").appendChild(divPlanetes)
    }


}
let mapPlanetes = new MapPlanetes();
mapPlanetes.initMap()
mapPlanetes.displayMap();


