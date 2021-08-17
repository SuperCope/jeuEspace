let numInstruction;
let nbInstructions;
let xArrivee;
let yArrivee;
let distanceAParcourir;
let xVaisseau = 0;
let yVaisseau = 0;
let zVaisseau = 12000;

function initPDA() {
    nbInstructions = Math.random() * (5 - 4) + 5;
    numInstruction = 0;
    nextInstruction();
}
function nextInstruction() {
    xArrivee = parseInt(Math.random() * (300 - 100) + 100);
    yArrivee = parseInt(Math.random() * (500 - 100) + 100);
    distanceAParcourir = Math.sqrt(((xVaisseau - xArrivee) * (xVaisseau - xArrivee)) + ((yVaisseau - yArrivee) * (yVaisseau - yArrivee)));
    distanceAParcourir = parseInt(distanceAParcourir);
    distanceAParcourir = Math.ceil(distanceAParcourir/100)*100
    miseAJourPDA(distanceAParcourir)
}
function miseAJourPDA(distanceRestante) {
    let vitesseVaisseau = document.getElementById("vitesse-vaiseaux").innerText;
    if (xArrivee < xVaisseau && (xVaisseau - xArrivee) > parseInt(vitesseVaisseau) / 3.6) {
        document.getElementById("msgPDA").innerText = "DISTANCE TOTALE : "+distanceRestante+" METRES \n DROITE SUR "+(xVaisseau - xArrivee)+" METRES \n PARTIE "+numInstruction+" / "+parseInt(nbInstructions)
    }
    if (yArrivee < yVaisseau && (yVaisseau - yArrivee) > parseInt(vitesseVaisseau) / 3.6) {
        document.getElementById("msgPDA").innerText = "DISTANCE TOTALE : "+distanceRestante+" METRES \n EN ARRIERE SUR "+(yVaisseau - yArrivee)+" METRES \n PARTIE "+numInstruction+" / "+parseInt(nbInstructions)
    }
    if (xArrivee > xVaisseau && (xArrivee - xVaisseau) > parseInt(vitesseVaisseau) / 3.6) {
        document.getElementById("msgPDA").innerText = "DISTANCE TOTALE : "+distanceRestante+" METRES \n GAUCHE SUR "+(xArrivee - xVaisseau)+" METRES  \n PARTIE "+numInstruction+" / "+parseInt(nbInstructions)
    }
    if (yArrivee > yVaisseau && (yArrivee - yVaisseau) > parseInt(vitesseVaisseau) / 3.6) {
        document.getElementById("msgPDA").innerText = "DISTANCE TOTALE : "+distanceRestante+" METRES \n TOUT DROIT SUR "+(yArrivee - yVaisseau)+" METRES  \n PARTIE "+numInstruction+" / "+parseInt(nbInstructions)
    }
    document.getElementById("msgPDA2").innerText = "Z : " + zVaisseau;
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

function vaisseauHaut() {
    let vitesseVaisseau = document.getElementById("vitesse-vaiseaux").innerText;
    yVaisseau = yVaisseau + parseInt(vitesseVaisseau / 3.6);
    verifInstruction();
}
function vaisseauBas() {
    let vitesseVaisseau = document.getElementById("vitesse-vaiseaux").innerText;
    yVaisseau = yVaisseau - parseInt(vitesseVaisseau / 3.6);
    verifInstruction();
}
function vaisseauDroite() {
    let vitesseVaisseau = document.getElementById("vitesse-vaiseaux").innerText;
    xVaisseau = xVaisseau - parseInt(vitesseVaisseau / 3.6);
    verifInstruction();
}
function vaisseauGauche() {
    let vitesseVaisseau = document.getElementById("vitesse-vaiseaux").innerText;
    xVaisseau = xVaisseau + parseInt(vitesseVaisseau / 3.6);
    verifInstruction();
}
function vaisseauElevation() {
    let vitesseVaisseau = document.getElementById("vitesse-vaiseaux").innerText;
    zVaisseau = zVaisseau + parseInt(vitesseVaisseau / 3.6);
    verifInstruction();
}

function vaisseauAtterrissage() {
    let vitesseVaisseau = document.getElementById("vitesse-vaiseaux").innerText;
    zVaisseau = zVaisseau - parseInt(vitesseVaisseau / 3.6);
    verifInstruction();
}