class Player {
    constructor() {
        this.life = 100;
        this.lifeMax = 100;
        this.water = 100;
        this.waterMax = 100;
        this.foodMax = 100;
        this.food = 100;
        this.inventaire = [{}];
    }

    getLife() { return this.life }
    getWater() { return this.water }
    getFood() { return this.food }

    setLife(life) {
        if (this.lifeMax >= this.life + life) this.life += life;
        else this.life = this.lifeMax;
    }

    setWater(water) {
        if (this.waterMax >= this.water + water) this.water += water;
        else this.water = this.waterMax;
    }

    setFood(food) {
        if (this.foodMax >= this.food + food) this.food += food;
        else this.food = this.foodMax;
    }

    displayLife(d, o) {
        this.life -= ((60 - d) / 10);
        if (o === 0) this.life -= 10;
        if (this.food <= 0) {
            this.life -= 10;
        }
        if (this.water <= 0) {
            this.life -= 10;
        }
        if (this.life > 100) {
            this.life = 100;
        }
        if (this.life < 0) {
            this.life = 0;
        }
        document.getElementById("vieJoueur").style.width = this.life + "%";
        if (this.life <= 0) {
            document.getElementById("vieJoueur").style.backgroundColor = "white";
            alert("VOUS ETES MORT, PAUVRE CON");
        }

    }
    displayFood() {
        this.food -= 1;
        if (this.food < 0) {
            this.food = 0;
        }
        document.getElementById("foodJoueur").style.width = this.food + "%";
        if (this.food <= 0) {
            document.getElementById("foodJoueur").style.backgroundColor = "white";
        }

    }
    displayWater() {
        this.water -= 1;
        if (this.water < 0) {
            this.water = 0;
            for(let j = 0;j<3;j++){
                if(!game.jardin.recolte[j]){
                    console.log("LANCONS EN J = "+j)
                    game.jardin.planter(game.jardin.plant[j],j);
                }
            }
        }
        document.getElementById("waterJoueur").style.width = this.water + "%";
        if (this.water <= 0) {
            document.getElementById("waterJoueur").style.backgroundColor = "white";
        }

    }
    manger(index) {
        this.food += 15;
        if (this.food > 100) {
            this.food = 100;
        }
        game.player.inventaire[index]--;
        game.loadInventaryPlayer();
        this.displayFood();
    }
    boire() {
        this.water += 15;
        if (this.water > 100) {
            this.water = 100;
        }
        this.displayWater();
    }
}