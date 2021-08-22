let intervalId = null;
let vitesseWater = 1000;
let vitesseFood = 1000;


initGame();

function initGame() {
    var audio = new Audio('./audio/lecture.mp3');
    audio.play();
    setTimeout(function () {
        setInterval(oxygen, 9000);
        setInterval(waterDesc, vitesseWater);
        setInterval(foodDesc, vitesseFood);
        setInterval(bougeVaisseau, 1000);


        initPDA();
    }, 3000);

}

function deceleration() {
    let vaisseau = document.getElementById("vitesse-vaiseaux");
    if (vaisseau.innerText === 0) alert("Les moteurs sont coupés !");
    else vaisseau.innerText -= 1;
    vitesseVaisseau--;
}

function acceleration() {
    let vaisseau = document.getElementById("vitesse-vaiseaux");
    if (vaisseau.innerText === 500) {
        alert("Vitesse maximum !");
    } else {
        ;
        vaisseau.innerText = parseInt(vaisseau.innerText) + 1;
    }
    vitesseVaisseau++;
}

function remplir() {
    let carburant = 50;
    let barre = document.getElementById('carburant-plein');
    if ((barre.offsetWidth + carburant) < document.getElementsByClassName('carburant-vide')[0].offsetWidth) {
        barre.style.width = (barre.offsetWidth + carburant) + "px";
    } else {
        barre.style.width = document.getElementsByClassName('carburant-vide')[0].offsetWidth + "px";
    }

}



/**
 * Gestion de l'oxygene 
 * L'oxygene est decrementer au fur du temps, des que l'oxygen descend a 50
 * Il devient rouge et le joueur dois remettre de l'oxygen
 */
function oxygen() {
    let decremente = 2;
    let barre = document.getElementById('barre-oxygen');
    let oxygen = document.getElementById('oxygen-nb');
    if (oxygen.innerText !== "0") {
        oxygen.innerText -= decremente;
        barre.style.width = ((barre.offsetWidth) - (decremente * 5)) + "px";
        if (oxygen.innerText < 30) barre.style.backgroundColor = "red";
        else if (oxygen.innerText <= 60) barre.style.backgroundColor = "orange";
    }
}

/**
 * Gestion des informations du joueurs
 * L'oxygene est decrementer au fur du temps, des que l'oxygen descend a 50
 * Il devient rouge et le joueur dois remettre de l'oxygen
 */



function waterDesc() {
    let water = document.getElementById('jaugeWater');
    let lastWater = water.offsetHeight;

    if (lastWater > 2) {
        let newWater = (lastWater - 2) + "px";
        let hauteur = (Number((water.style.top).split("px")[0]) + 2) + "px";
        water.style.top = hauteur;
        water.style.height = newWater;
        nombreWater();
    } else {
        document.getElementById('jaugeWater').style.visibility = "hidden";
    }

}

function nombreWater() {
    let water = document.getElementById('jaugeWater');
    let lastWater = water.offsetHeight;

    if (lastWater < 50) {
        water.style["background-color"] = "red";
    }
}

function foodDesc() {
    let food = document.getElementById('jaugeFood');
    let lastFood = food.offsetHeight;
    let newFood = (lastFood - 2) + "px";
    let hauteur = (Number((food.style.top).split("px")[0]) + 2) + "px";

    food.style.top = hauteur;
    food.style.height = newFood;
    nombreFood();
}

function nombreFood() {
    let food = document.getElementById('jaugeFood');
    let lastFood = food.offsetHeight;

    if (lastFood < 50) {
        food.style["background-color"] = "red";
    }
}