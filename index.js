let vitesseVaisseau = 120;
let intervalId = null;
let vaisseau = document.getElementById("vitesse-vaiseaux");
let oxygen = document.getElementById('barre-oxygen');
initGame();

function initGame() {
    vaisseau.innerText = vitesseVaisseau;
    setInterval("oxygenDesc()", 3000);
    setInterval("waterDesc()", 3000);
}

function start() {
    let e = document.getElementById("vaisseau-view");
    e.style.opacity = '1';
    if(vaisseau.innerText === '0') alert("Les moteurs sont coupés !")
    else vaisseau.innerText = vitesseVaisseau--;
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

function stop() {
    let e = document.getElementById("vaisseau-view");
    e.style.opacity = '0';
}


/** Gestion de l'oxygene
 * 
 * function oxygenDesc(){
    let oxygen = document.getElementById('barre-oxygen');
    let lastOxygen = oxygen.offsetWidth;
    
    let newOxygen = (lastOxygen - 2) + "px";
    oxygen.style.width = newOxygen;
    nombreOxygen();

    
}

function nombreOxygen(){
    let oxygen = document.getElementById('barre-oxygen');
    let lastOxygen = oxygen.offsetWidth;

    let d = document.getElementById('oxygen-nb');
    d.innerText = lastOxygen

    if(lastOxygen < 50){
        oxygen.style["background-color"] = "red";
        d.color = "red"
    }
}
 * 
 * 
 * 
 */

function foodDesc(){
    let food = document.getElementById('jaugeFood');
    let lastFood = oxygen.offsetWidth;
    
    let newFood = (lastFood - 2) + "px";
    food.style.height = newFood;
    nombreFood();

    
}

function nombreFood(){
    let food = document.getElementById('jaugeFood');
    let lastFood = food.offsetWidth;

    if(lastFood < 50){
        food.style["background-color"] = "red";
    }
}


