let numInstruction;
let nbInstructions;
let xArrivee;
let yArrivee;
let distanceAParcourir;
let xVaisseau = 0;
let yVaisseau = 0;
let zVaisseau = 12000;
let direction = "";
let champAsteroide = false;
let tailleVaisseau = 50;
let numAsteroide = 0;
let nbAsteroides = 0;
let xAsteroide;
let yAsteroide;

function initPDA() {
    nbInstructions = Math.random() * (5 - 4) + 5;
    numInstruction = 0;
    nextInstruction();
}
function nextInstruction() {
    xArrivee = parseInt(Math.random() * (19500 - 1500) + 1500);
    yArrivee = parseInt(Math.random() * (19500 - 1500) + 1500);
    distanceAParcourir = Math.sqrt(((xVaisseau - xArrivee) * (xVaisseau - xArrivee)) + ((yVaisseau - yArrivee) * (yVaisseau - yArrivee)));
    distanceAParcourir = parseInt(distanceAParcourir);
    distanceAParcourir = Math.ceil(distanceAParcourir/100)*100
    miseAJourPDA(distanceAParcourir)
}
function miseAJourPDA(distanceRestante) {
    let vitesseVaisseau = document.getElementById("vitesse-vaiseaux").innerText;
    if (xArrivee < xVaisseau && (xVaisseau - xArrivee) > parseInt(vitesseVaisseau) / 3.6) {
        document.getElementById("msgPDA").innerText = "DISTANCE TOTALE : "+(distanceRestante/1000).toFixed(1)+" KILOMETRES \n DROITE SUR "+(xVaisseau - xArrivee)+" METRES \n PARTIE "+numInstruction+" / "+parseInt(nbInstructions)
    }
    if (yArrivee < yVaisseau && (yVaisseau - yArrivee) > parseInt(vitesseVaisseau) / 3.6) {
        document.getElementById("msgPDA").innerText = "DISTANCE TOTALE : "+(distanceRestante/1000).toFixed(1)+" KILOMETRES \n EN ARRIERE SUR "+(yVaisseau - yArrivee)+" METRES \n PARTIE "+numInstruction+" / "+parseInt(nbInstructions)
    }
    if (xArrivee > xVaisseau && (xArrivee - xVaisseau) > parseInt(vitesseVaisseau) / 3.6) {
        document.getElementById("msgPDA").innerText = "DISTANCE TOTALE : "+(distanceRestante/1000).toFixed(1)+" KILOMETRES \n GAUCHE SUR "+(xArrivee - xVaisseau)+" METRES  \n PARTIE "+numInstruction+" / "+parseInt(nbInstructions)
    }
    if (yArrivee > yVaisseau && (yArrivee - yVaisseau) > parseInt(vitesseVaisseau) / 3.6) {
        document.getElementById("msgPDA").innerText = "DISTANCE TOTALE : "+(distanceRestante/1000).toFixed(1)+" KILOMETRES \n TOUT DROIT SUR "+(yArrivee - yVaisseau)+" METRES  \n PARTIE "+numInstruction+" / "+parseInt(nbInstructions)
    }
    document.getElementById("msgPDA2").innerText = "HAUTEUR : " + zVaisseau;
}
function verifInstruction(){
    let distanceRestante = Math.sqrt(((xVaisseau - xArrivee) * (xVaisseau - xArrivee)) + ((yVaisseau - yArrivee) * (yVaisseau - yArrivee)))
    let vitesseVaisseau = document.getElementById("vitesse-vaiseaux").innerText;
    miseAJourPDA(parseInt(distanceRestante))
    if (distanceRestante < parseInt(vitesseVaisseau / 3.6+5)) {
        var audio = new Audio('./audio/bip.mp3');
        audio.play();
        numInstruction++;
        if (numInstruction >= nbInstructions) {
            document.getElementById("msgPDA").style.color = "green";
            document.getElementById("msgPDA").innerText = "ATTERISSAGE POSSIBLE !!"
        } else {
            nextInstruction(); 
        }
    }
}
function bougeVaisseau() {
    switch (direction) {
        case "haut":
            vaisseauHaut()
        break;
        case "bas":
            vaisseauBas()
        break;
        case "droite":
            vaisseauDroite()
        break;
        case "gauche":
            vaisseauGauche()
        break;
        case "elevation":
            vaisseauElevation()
        break;
        case "atterrissage":
            vaisseauAtterrissage()
        break;
    }
    if (!champAsteroide) {
        hasAsteroides() 
    } else {
        setInterval(verifAsteroide, 1000);
    }

}

function carburantConsommation(){
    let vitesse = document.getElementById('vitesse-vaiseaux');
    let decremente = (vitesse.innerText /200);
    let barre = document.getElementById('carburant-plein');
    barre.style.width = (barre.offsetWidth - decremente) + "px";
}

function vaisseauHaut() {
    let vitesseVaisseau = document.getElementById("vitesse-vaiseaux").innerText;
    yVaisseau = yVaisseau + parseInt(vitesseVaisseau / 3.6);
    verifInstruction();
    carburantConsommation();
    direction = "haut";
}
function vaisseauBas() {
    let vitesseVaisseau = document.getElementById("vitesse-vaiseaux").innerText;
    yVaisseau = yVaisseau - parseInt(vitesseVaisseau / 3.6);
    verifInstruction();
    carburantConsommation();
    direction = "bas";
}
function vaisseauDroite() {
    let vitesseVaisseau = document.getElementById("vitesse-vaiseaux").innerText;
    xVaisseau = xVaisseau - parseInt(vitesseVaisseau / 3.6);
    verifInstruction();
    carburantConsommation();
    direction = "droite";
}
function vaisseauGauche() {
    let vitesseVaisseau = document.getElementById("vitesse-vaiseaux").innerText;
    xVaisseau = xVaisseau + parseInt(vitesseVaisseau / 3.6);
    verifInstruction();
    carburantConsommation();
    direction = "gauche";
}
function vaisseauElevation() {
    let vitesseVaisseau = document.getElementById("vitesse-vaiseaux").innerText;
    zVaisseau = zVaisseau + parseInt(vitesseVaisseau / 3.6);
    verifInstruction();
    carburantConsommation();
    direction = "elevation";
}

function vaisseauAtterrissage() {
    if (direction != "atterrissage") {
        let vitesseVaisseau = document.getElementById("vitesse-vaiseaux").innerText;
        zVaisseau = zVaisseau - parseInt(vitesseVaisseau / 3.6);
        verifInstruction();
        carburantConsommation();
        direction = "atterrissage";
    }

}

function stop(){
    direction = "";
}
function hasAsteroides() {
    let proba = parseInt(Math.random() * (6 - 1) + 1);
    console.log(proba)
    if (proba == 2) {
        nbAsteroides = parseInt(Math.random() * (12 - 4) + 4);
        numAsteroide = 0;
        genereAsteroide()
        champAsteroide = true;
        document.getElementById("msgPDA3").style.color = "orange";
        document.getElementById("msgPDA3").innerText = "RECHERCHE D'ASTEROIDES...";
        console.log("******************************CHAMP******************************")
    }
}
function genereAsteroide() {
    if (numAsteroide < nbAsteroides){
        xAsteroide = parseInt(Math.random() * ((xVaisseau + 800) - (xVaisseau - 800)) + (xVaisseau - 800));
        yAsteroide = parseInt(Math.random() * ((yVaisseau + 800) - (yVaisseau - 800)) + (yVaisseau - 800));   
        numAsteroide++;
    } else {
        champAsteroide = false;
    }
}

function verifAsteroide() {
    console.log("OK")
    if (Math.abs(xVaisseau - xAsteroide) < tailleVaisseau && Math.abs(yVaisseau - yAsteroide) < tailleVaisseau) {

        setTimeout(function () {
            document.getElementById("msgPDA3").style.color = "red";
            document.getElementById("msgPDA3").innerText = "TOUCHE !";
        }, 3000);

        genereAsteroide()
    } else {
        let distanceRestanteAsteroide = Math.sqrt(((xVaisseau - xAsteroide) * (xVaisseau - xAsteroide)) + ((yVaisseau - yAsteroide) * (yVaisseau - yAsteroide)))  
        if (distanceRestanteAsteroide < 1500) {
            document.getElementById("msgPDA3").style.color = "yellow";
            document.getElementById("msgPDA3").innerText = "ASTEROIDE A "+parseInt(distanceRestanteAsteroide)+" METRES "+numAsteroide+" / "+nbAsteroides;
            console.log(""+xAsteroide+","+yAsteroide+" ET "+xVaisseau+","+yVaisseau )
            if (xAsteroide < xVaisseau && Math.abs(yVaisseau - yAsteroide) < tailleVaisseau){
                document.getElementById("msgPDA3").style.color = "orange";
                document.getElementById("msgPDA3").innerText = "ASTEROIDE A DROITE A "+(Math.abs(xVaisseau - xAsteroide))+" METRES !!";
            }
            if (xVaisseau < xAsteroide && Math.abs(yVaisseau - yAsteroide) < tailleVaisseau){
                document.getElementById("msgPDA3").style.color = "orange";
                document.getElementById("msgPDA3").innerText = "ASTEROIDE A GAUCHE A "+(Math.abs(xAsteroide - xVaisseau))+" METRES !!";
            }
            if (yVaisseau < yAsteroide && Math.abs(xVaisseau - xAsteroide) < tailleVaisseau){
                document.getElementById("msgPDA3").style.color = "orange";
                document.getElementById("msgPDA3").innerText = "ASTEROIDE EN HAUT A "+(Math.abs(yVaisseau - yAsteroide))+" METRES !!";
            }
            if (yAsteroide < yVaisseau && Math.abs(xVaisseau - xAsteroide) < tailleVaisseau){
                document.getElementById("msgPDA3").style.color = "orange";
                document.getElementById("msgPDA3").innerText = "ASTEROIDE EN ARRIERE A "+(Math.abs(yAsteroide - yVaisseau))+" METRES !!";
            }
        } else {
            document.getElementById("msgPDA3").style.color = "green";
            document.getElementById("msgPDA3").innerText = "ASTEROIDE EVITE !";

            genereAsteroide()
        }

    }
}