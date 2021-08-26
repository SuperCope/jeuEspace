let intervalId = null;
let vitesseWater = 1000;
let vitesseFood = 1000;




initGame();

function initGame() {

    setTimeout(function () {
        setInterval(waterDesc, vitesseWater);
        setInterval(foodDesc, vitesseFood);
        setInterval(bougeVaisseau, 1000);
        setInterval(analysePDA, 300);
        setInterval(analyseVieJoueur, 2000)
        setInterval(miseAJourFuites, 30000)
        initPDA();

    }, 3000);


}
function analyseVieJoueur() {
    vieJoueur = vieJoueur - ((60 - debitOxygene) / 10);
    if (oxygene == 0) {
        vieJoueur = vieJoueur - 10;
    }
    if (vieJoueur > 100) {
        vieJoueur = 100;
    }
    if (vieJoueur < 0) {
        vieJoueur = 0;
    }
    if (vieJoueur > 0) {
        document.getElementById("santeJoueur").style.color = "red"
        document.getElementById("santeJoueur").innerText = "catastrophique"
    }
    if (vieJoueur > 20) {
        document.getElementById("santeJoueur").style.color = "orange"
        document.getElementById("santeJoueur").innerText = "critique"
    }
    if (vieJoueur > 40) {
        document.getElementById("santeJoueur").style.color = "yellow"
        document.getElementById("santeJoueur").innerText = "moyenne"
    }
    if (vieJoueur > 60) {
        document.getElementById("santeJoueur").style.color = "greenyellow";
        document.getElementById("santeJoueur").innerText = "bonne"
    }
    if (vieJoueur > 80) {
        document.getElementById("santeJoueur").style.color = "green";
        document.getElementById("santeJoueur").innerText = "tres bonne"
    }
}
function bougeCurseurVitesse(event) {
    let curseurVitesse = document.querySelector(".curseurVitesse");
    curseurVitesse.setAttribute("style", "top" + (event.pageY - 20) + "px; left:" + (event.pageX - 20) + "px;")

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


function dragstart_handler(ev) {
    // On ajoute l'identifiant de l'élément cible à l'objet de transfert
    ev.dataTransfer.setData("application/my-app", ev.target.id);
    ev.dataTransfer.dropEffect = "move";
}
function dragover_handler(ev) {

    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move"
}

function drop_handler(ev) {
    ev.target.innerText = "";
    ev.preventDefault();
    // On obtient l'identifiant de la cible et on ajoute l'élément déplacé
    // au DOM de la cible
    var data = ev.dataTransfer.getData("application/my-app");
    ev.target.appendChild(document.getElementById(data));
    if (ev.target.getAttribute("id") == "lecteur") {
        document.getElementById(data).style.width = "35px";
        document.getElementById(data).style.height = "100px";
        insererCleUSB();
    }
}
