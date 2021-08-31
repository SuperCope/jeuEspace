class Vaisseau {
    constructor() {
        this.oxygens = [new Oxygen(), new Oxygen(), new Oxygen()];

        this.oxygen = 8000;
        this.oxygenMax = 10000;
        this.oxygenFrame = null;
        this.oxygenLoses = 0;
        this.oxygenRepair = [false, false];
        this.oxygenTime = 0;
        this.oxygenDebit = 100;
        this.oxygenRepairLong = 1;
        this.oxygenRepairLongMode = false;
        this.clim = false;
        this.climPower = 0;
        this.climUpgrade = 0;


        this.life = [0, 0, 0, 0];

        this.batteries = [90000, 4000, 40000];
        this.batteriesMax = [100000, 10000, 60000];
        this.batteryActive = 0;
        this.batteryUse = 0;
        this.pdaConso = 40;

        this.x = 0;
        this.y = 0;
        this.z = 1200;
        this.direction = "";
        this.key = false;
        this.usage = 0;
        this.speed = 120;

        this.shieldActive = false;
        this.shieldLife = 1000;
        this.shieldMax = 5000;
        this.shieldPower = 0;

        this.size = 50;

        this.heat = 19;
        this.heatAugment = 0;
        this.heatAnimation = 0;
        this.heatAnimation2 = 0;

        this.leaks = [100, 100];
        this.lifeLeak = 100;

        this.updates = [];

        this.dlMod = false;
        this.fileTemp = [];

        this.modules = [];

        this.carburant = 250;

        this.detectionAsteroide = false;
    }

    getBottleOxygen(index) {
        console.log("INDEX" + index)
        console.log(this.oxygens[0])
        if (this.oxygens.length - 1 < index) return null;
        if (index < 0) return null;
        return this.oxygens[index];
    }
    addBottleOxygen(oxygen) {
        this.oxygens.push(oxygen);
    }
    removeBottleOxygen(index) {
        if (this.oxygens.length - 1 < index) return null;
        if (index <= 0) return null;
        if (this.oxygens[index].size === 0) this.oxygens.splice(index, 1);
    }
    useBottleOxygen(index) {
        if (this.getBottleOxygen(index).size >= this.oxygenMax - this.oxygen) {
            this.oxygen += this.oxygenMax - this.oxygen;
            this.getBottleOxygen(index).size -= this.oxygenMax - this.oxygen;
        }
        if (this.getBottleOxygen(index).size < this.oxygenMax - this.oxygen) {
            this.oxygen += this.getBottleOxygen(index).size;
            this.removeBottleOxygen(index);
        }
    }

    setLeaks(index) {
        this.leaks[index] -= parseInt(Math.random() * (12 - 4) + 4);
        if (this.leaks[index] < 0) this.leaks[index] = 0;
    }

    updateLeaks() {
        for (let i = 0; i < this.leaks.length; i++) {
            if (this.leaks[i] < this.lifeLeak) {
                this.oxygenLoses += (this.lifeLeak - this.leaks[i]);
                this.oxygen -= (this.lifeLeak - this.leaks[i]);
            }
        }
        return this.oxygenLoses;
    }

}