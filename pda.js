let numInstruction = -1;
let nbInstructions = -1;


function initPDA() {
    nbInstructions = Math.random() * (5 - 4) + 5;
    let xArrivee = -1;
    let yArrivee = -1;
    let instruction = -1;
    let distanceAParcourir = -1;
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
    let instruction = 0;
    if (xArrivee < xVaisseau) {
        document.getElementById("msgPDA").innerText = "DISTANCE TOTALE : "+distanceRestante+" METRES \n DROITE SUR "+(xVaisseau - xArrivee)+" METRES"
    }
    if (yArrivee < yVaisseau) {
        document.getElementById("msgPDA").innerText = "DISTANCE TOTALE : "+distanceRestante+" METRES \n EN ARRIERE SUR "+(yVaisseau - yArrivee)+" METRES"
    }
    if (xArrivee > xVaisseau) {
        document.getElementById("msgPDA").innerText = "DISTANCE TOTALE : "+distanceRestante+" METRES \n GAUCHE SUR "+(xArrivee - xVaisseau)+" METRES"
    }
    if (yArrivee > yVaisseau) {
        document.getElementById("msgPDA").innerText = "DISTANCE TOTALE : "+distanceRestante+" METRES \n TOUT DROIT SUR "+(yArrivee - yVaisseau)+" METRES"
    }

}
function verifInstruction(){
    let distanceRestante = Math.sqrt(((xVaisseau - xArrivee) * (xVaisseau - xArrivee)) + ((yVaisseau - yArrivee) * (yVaisseau - yArrivee)))

    miseAJourPDA(parseInt(distanceRestante))
    if (distanceRestante < 5) {
        var audio = new Audio('./audio/bip.mp3');
        audio.play();
        numInstruction++;
        if (numInstruction >= nbInstructions) {
            alert("DONE")
        } else {
            nextInstruction(); 
        }
    }
}

function vaisseauHaut() {
    yVaisseau++;
    verifInstruction();
}
function vaisseauBas() {
    yVaisseau--;
    verifInstruction();
}
function vaisseauDroite() {
    xVaisseau--;
    verifInstruction();
}
function vaisseauGauche() {
    xVaisseau++;
    verifInstruction();
}