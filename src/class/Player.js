class Player {
    constructor() {
        this.life = 100;
        this.lifeMax = 100;
        this.water = 100;
        this.waterMax = 100;
        this.foodMax = 100;
        this.food = 100;
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

    displayLife(d,o) {
        this.life -= ((60 - d) / 10);
        if (o === 0) this.life -= 10;

        if (this.life <= 0) alert("VOUS ETES MORT, PAUVRE CON");

        if (this.life > 0) {
            document.getElementById("santeJoueur").style.color = "red";
            document.getElementById("santeJoueur").innerText = "catastrophique";
        }
        if (this.life > 20) {
            document.getElementById("santeJoueur").style.color = "orange";
            document.getElementById("santeJoueur").innerText = "critique";
        }
        if (this.life > 40) {
            document.getElementById("santeJoueur").style.color = "yellow";
            document.getElementById("santeJoueur").innerText = "moyenne";
        }
        if (this.life > 60) {
            document.getElementById("santeJoueur").style.color = "greenyellow";
            document.getElementById("santeJoueur").innerText = "bonne";
        }
        if (this.life > 80) {
            document.getElementById("santeJoueur").style.color = "green";
            document.getElementById("santeJoueur").innerText = "tres bonne";
        }
    }
}