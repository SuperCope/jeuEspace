class Jardin {
    constructor() {
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

        this.water = 0;

        this.module = {
            water: false
        }
    }

    planter(plant, index) {
        let types = ["patate", "tomate", "radis"];
        let int = parseInt(index) + 1;
        if (this.bag[plant] && this.bag[plant].stock > 0 && (this.plant[index].type === "Aucun" || document.getElementById("typeSerre" + int).innerText === "Fini") && document.getElementById("recolter" + int).innerText !== "Recolter") {
            this.plant[index].type = this.bag[plant].name;
            document.getElementById("typeSerre" + int).innerText = "Type de plantation : " + this.plant[index].type;
            let p = document.getElementById("progressPlant" + int);
            p.style.width = 1 + "%";
            let i = 0;
            let type = this.plant[index].type;
            document.getElementById("iconePlante" + int).setAttribute("src", "./img/" + (type) + ".png")
            let interval = setInterval(frame, 250, p, type);
            function frame(p, type) {
                if (i < 100) {
                    p.style.width = i + "%";
                    p.style.display = "block";
                    document.getElementById("percentSerre" + int).innerText = "Pourcentage : " + p.style.width.split('%')[0];
                    i += 5;
                } else {
                    clearInterval(interval);
                    document.getElementById("percentSerre" + int).innerText = "Pourcentage : 100";
                    document.getElementById("typeSerre" + int).innerText = "Fini";
                    p.style.width = "100%";
                    p.style.display = "none";
                    let btnRecolter = document.getElementById("recolter" + int);
                    btnRecolter.innerText = "Recolter";
                    btnRecolter.setAttribute("onclick", "game.jardin.recolter('" + type + "'," + index + ")")
                }
            }
        }
    }

    recolter(type, index) {
        let int = parseInt(index) + 1;
        game.player.inventaire[type] = game.player.inventaire[type] !== undefined ? game.player.inventaire[type] + 1 : 1;
        let btnRecolter = document.getElementById("recolter" + int);
        let p = document.getElementById("progressPlant" + int);
        p.style.width = "0%";
        btnRecolter.innerText = "";
        document.getElementById("iconePlante" + int).setAttribute("src", "./img/leaves.png")
        btnRecolter.onclick = null;
    }
}