let vitesseVaisseau = 120;
let intervalId = null;
let vitesseWater = 9000;
let vitesseFood = 16000;
let xVaisseau = 0;
let yVaisseau = 0;
let zVaisseau = 12000;
initGame();

function initGame() {
    let vaisseau = document.getElementById("vitesse-vaiseaux");
    vaisseau.innerText = vitesseVaisseau;
    setInterval(oxygen, 3000);
    setInterval(waterDesc, vitesseWater);
    setInterval(foodDesc, vitesseFood);
    initPDA();
}

function deceleration(){
    let vaisseau = document.getElementById("vitesse-vaiseaux");
    if(vaisseau.innerText === 0) alert("Les moteurs sont coupés !");
    else vaisseau.innerText = vitesseVaisseau--;
}
function acceleration(){
    let vaisseau = document.getElementById("vitesse-vaiseaux");
    if(vaisseau.innerText === 500) alert("Vitesse maximum !");
    else vaisseau.innerText = vitesseVaisseau++;
}

document.addEventListener('keydown', (event) => {
    const nomTouche = event.key;
    // Dès que l'utilisateur relâche la touche Ctrl, la touche n'est plus active.
    // Aussi event.ctrlKey est false.
    if (nomTouche === 'ArrowLeft') {
        document.getElementById('divmap').scrollLeft -= 10;
    }
    if (nomTouche === 'ArrowRight') {
        document.getElementById('divmap').scrollLeft += 10;
    }
    if (nomTouche === 'ArrowUp') {
        document.getElementById('divmap').scrollTop -= 10;
    }
    if (nomTouche === 'ArrowDown') {
        document.getElementById('divmap').scrollTop += 10;
    }
}, false);


/**
 * Gestion de l'oxygene 
 * L'oxygene est decrementer au fur du temps, des que l'oxygen descend a 50
 * Il devient rouge et le joueur dois remettre de l'oxygen
 */
 function oxygen(){
    let div = document.getElementById('barre-oxygen');
    let text = document.getElementById('barre-oxygen');

    let size = div.offsetWidth;
    let oxygen = (size - 10);

    text.innerText = oxygen;

    if(size <= 500/10) div.style.backgroundColor = "red";
 }

/**
 * Gestion des informations du joueurs
 * L'oxygene est decrementer au fur du temps, des que l'oxygen descend a 50
 * Il devient rouge et le joueur dois remettre de l'oxygen
 */

function waterDesc(){
    let water = document.getElementById('jaugeWater');
    let lastWater = water.offsetHeight;
    let newWater = (lastWater - 2) + "px";
    water.style.height = newWater;
    nombreWater();
}

function nombreWater(){
    let water = document.getElementById('jaugeWater');
    let lastWater = water.offsetHeight;

    if(lastWater < 50){
        water.style["background-color"] = "red";
    }
}

function foodDesc(){
    let food = document.getElementById('jaugeFood');
    let lastFood = food.offsetHeight;
    let newFood = (lastFood - 2) + "px";
    food.style.height = newFood;
    nombreFood();
}

function nombreFood(){
    let food = document.getElementById('jaugeFood');
    let lastFood = food.offsetHeight;

    if(lastFood < 50){
        food.style["background-color"] = "red";
    }
}


