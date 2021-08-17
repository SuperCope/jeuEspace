let intervalId = null;
let vitesseWater = 1000;
let vitesseFood = 1000;


initGame();

function initGame() {
    setInterval(oxygen, 9000);
    setInterval(waterDesc, vitesseWater);
    setInterval(foodDesc, vitesseFood);

    initPDA();
}

function deceleration(){
    let vaisseau = document.getElementById("vitesse-vaiseaux");
    if(vaisseau.innerText === 0) alert("Les moteurs sont coupés !");
    else vaisseau.innerText -= 1;
}

function acceleration(){
    let vaisseau = document.getElementById("vitesse-vaiseaux");
    if(vaisseau.innerText === 500){
        alert("Vitesse maximum !");
    }else{
        let decremente = 2;
        let barre = document.getElementById('carburant-plein');
        barre.style.width = (barre.offsetWidth - decremente)  + "px";
        vaisseau.innerText = parseInt(vaisseau.innerText) + 1;
    } 
}

function remplir()
{
    let carburant = 50;
    let barre = document.getElementById('carburant-plein');
    barre.style.width = (barre.offsetWidth + carburant)  + "px";
}

document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (key === 'ArrowLeft') {
        document.getElementById('divmap').scrollLeft -= 10;
    }
    if (key === 'ArrowRight') {
        document.getElementById('divmap').scrollLeft += 10;
    }
    if (key === 'ArrowUp') {
        document.getElementById('divmap').scrollTop -= 10;
    }
    if (key === 'ArrowDown') {
        document.getElementById('divmap').scrollTop += 10;
    }
}, false);


/**
 * Gestion de l'oxygene 
 * L'oxygene est decrementer au fur du temps, des que l'oxygen descend a 50
 * Il devient rouge et le joueur dois remettre de l'oxygen
 */
 function oxygen(){
    let decremente = 2;
    let barre = document.getElementById('barre-oxygen');
    let oxygen = document.getElementById('oxygen-nb');
    if(oxygen.innerText !== "0") {
        oxygen.innerText -= decremente;
        barre.style.width = ((barre.offsetWidth) - (decremente*5)) + "px";
        if(oxygen.innerText < 30) barre.style.backgroundColor = "red";
        else if(oxygen.innerText <= 60) barre.style.backgroundColor = "orange";
    }
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
    let hauteur = (Number((water.style.top).split("px")[0]) + 2) + "px";
    console.log(hauteur)
    water.style.top = hauteur;
    console.log(water.style.height)
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
    let hauteur = (Number((food.style.top).split("px")[0]) + 2) + "px";

    food.style.top = hauteur;
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


