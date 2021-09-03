class Jardin {
    constructor() {
        this.interval = [];
        this.bag = {
            patate: {
                name: "patate",
                stock: 3
            },
            tomate: {
                name: "tomate",
                stock: 3
            },
            radis: {
                name: "radis",
                stock: 3
            },
        }

        this.plant = [
            {
                type: "Aucun",
                percent: 0
            },
            {
                type: "Aucun",
                percent: 0
            },
            {
                type: "Aucun",
                percent: 0
            },
        ];

        this.water = 80;

        this.module = {
            water: false
        }
        this.recolte = [];
    }

    planter(plant, index) {
        let types = ["patate", "tomate", "radis"];
        let int = parseInt(index) + 1;
        if (this.bag[plant] && this.bag[plant].stock > 0 && (this.plant[index].type === "Aucun" || document.getElementById("typeSerre" + int).innerText === "Fini") && document.getElementById("recolter" + int).innerText !== "Recolter") {
            this.plant[index].type = this.bag[plant].name;
            document.getElementById("typeSerre" + int).innerText = "Type de plantation : " + this.plant[index].type;
            let p = document.getElementById("progressPlant" + int);
            p.style.width = 1 + "%";
            let i = this.plant[index].percent;
            let type = this.plant[index].type;
            document.getElementById("iconePlante" + int).setAttribute("src", "src/img/" + (type) + ".png")

            let interva = setInterval(frame, 11250, p, type);
            function frame(p, type) {
                game.jardin.interval[index] = interva;
                if (i < 100) {
                    let btnRecolter = document.getElementById("recolter" + int);
                    btnRecolter.innerText = "";
                    p.style.width = i + "%";
                    p.style.display = "block";
                    document.getElementById("percentSerre" + int).innerText = "Pourcentage : " + p.style.width.split('%')[0];
                    if(game.jardin.water > 0){
                        i += 5;
                        if(i>100){
                            i = 100;
                        }
                        game.jardin.water -= 2;
                    }else{
                        i -= 2;
                        if(i<0){
                            i = 0;
                            let btnRecolter = document.getElementById("recolter" + int);
                            let p = document.getElementById("progressPlant" + int);
                            p.style.width = "0%";
                            btnRecolter.innerText = "";
                            document.getElementById("iconePlante" + int).setAttribute("src", "src/img/leaves.png")
                            btnRecolter.onclick = null;
                            clearInterval(game.jardin.interval[index])
                            game.jardin.plant[index].type = "Aucun";
                            game.jardin.recolte[index] = false;
                            document.getElementById("percentSerre" + int).innerText = "Pourcentage : 0";
                            document.getElementById("typeSerre" + int).innerText = "Type de plantation : " + game.jardin.plant[index].type;

                        }
                    }
                } else {
                    game.jardin.water --;
                    document.getElementById("percentSerre" + int).innerText = "Pourcentage : 100";
                    p.style.width = "100%";
                    p.style.display = "none";
                    let btnRecolter = document.getElementById("recolter" + int);
                    if(!game.jardin.recolte[index]){
                        btnRecolter.innerText = "Recolter";
                        btnRecolter.style.display = "block";
                        btnRecolter.setAttribute("onclick", "game.jardin.recolter('" + type + "'," + index + ")")
                    }

                    if(game.jardin.water == 0){
                        i--;
                        btnRecolter.style.display = "none";
                    }
                }
                game.jardin.displayWater();
            }
        }

    }

    recolter(type, index) {
        let int = parseInt(index) + 1;
        game.player.inventaire[type] = game.player.inventaire[type] !== undefined ? game.player.inventaire[type] + 1 : 1;
        let btnRecolter = document.getElementById("recolter" + int);
        let p = document.getElementById("progressPlant" + int);
        p.style.width = "0%";
        btnRecolter.innerText = " ";
        game.jardin.plant[index].type = "Aucun";
        game.jardin.plant[index].percent = 0;
        document.getElementById("iconePlante" + int).setAttribute("src", "src/img/leaves.png")
        btnRecolter.onclick = null;
        game.jardin.recolte[index] = true;
        clearInterval(game.jardin.interval[index])
        document.getElementById("percentSerre" + int).innerText = "Pourcentage : 0";
        document.getElementById("typeSerre" + int).innerText = "Type de plantation : " + game.jardin.plant[index].type;
    }

    displayWater(){
        let elmt = document.getElementById("jaugeEauJardin")
        elmt.style.width = this.water + "%";
    }
}