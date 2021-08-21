let numInstruction;
let nbInstructions;
let xArrivee;
let yArrivee;
let distanceAParcourir;
let vieVaisseau = 100;
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
let asteroides;
let touche = false;
let asteroidesRestants;


function initPDA() {
    nbInstructions = Math.random() * (5 - 4) + 5;
    numInstruction = 0;
    var vaisseauMap = document.createElement("div");
    vaisseauMap.setAttribute("id","mapAsteroideVaisseau")
    vaisseauMap.style.width = (8)+"px";
    vaisseauMap.style.height = (8)+"px";
    document.getElementById("mapAsteroide").appendChild(vaisseauMap);
    nextInstruction();

}
function nextInstruction() {
    document.getElementById("imgPDA2").setAttribute("src", "img/loading.gif");
    document.getElementById("imgPDA2").setAttribute("width", "250px");
    document.getElementById("imgPDA2").setAttribute("height", "150px");
    xArrivee = parseInt(Math.random() * (19500 - 1500) + 1500);
    yArrivee = parseInt(Math.random() * (19500 - 1500) + 1500);
    distanceAParcourir = Math.sqrt(((xVaisseau - xArrivee) * (xVaisseau - xArrivee)) + ((yVaisseau - yArrivee) * (yVaisseau - yArrivee)));
    distanceAParcourir = parseInt(distanceAParcourir);
    distanceAParcourir = Math.ceil(distanceAParcourir/100)*100
    miseAJourPDA(distanceAParcourir)
}
function miseAJourDirections(distanceRestante) {
    let vitesseVaisseau = document.getElementById("vitesse-vaiseaux").innerText;
    if (xArrivee < xVaisseau && (xVaisseau - xArrivee) > parseInt(vitesseVaisseau) / 3.6) {
        document.getElementById("imgPDA2").setAttribute("src", "img/right.png");
        document.getElementById("imgPDA2").setAttribute("height", "60px");
        document.getElementById("imgPDA2").setAttribute("width", "100px");
        document.getElementById("msgPDA").innerText = "DISTANCE TOTALE : " + (distanceRestante / 1000).toFixed(1) + " KILOMETRES \n DROITE SUR " + (xVaisseau - xArrivee) + " METRES \n PARTIE " + numInstruction + " / " + parseInt(nbInstructions)
    }
    if (yArrivee < yVaisseau && (yVaisseau - yArrivee) > parseInt(vitesseVaisseau) / 3.6) {
        document.getElementById("imgPDA2").setAttribute("src", "img/bottom.png");
        document.getElementById("imgPDA2").setAttribute("width", "60px");
        document.getElementById("imgPDA2").setAttribute("height", "100px");
        document.getElementById("msgPDA").innerText = "DISTANCE TOTALE : " + (distanceRestante / 1000).toFixed(1) + " KILOMETRES \n EN ARRIERE SUR " + (yVaisseau - yArrivee) + " METRES \n PARTIE " + numInstruction + " / " + parseInt(nbInstructions)
    }
    if (xArrivee > xVaisseau && (xArrivee - xVaisseau) > parseInt(vitesseVaisseau) / 3.6) {
        document.getElementById("imgPDA2").setAttribute("src", "img/left.png");
        document.getElementById("imgPDA2").setAttribute("height", "60px");
        document.getElementById("imgPDA2").setAttribute("width", "100px");
        document.getElementById("msgPDA").innerText = "DISTANCE TOTALE : "+(distanceRestante/1000).toFixed(1)+" KILOMETRES \n GAUCHE SUR "+(xArrivee - xVaisseau)+" METRES  \n PARTIE "+numInstruction+" / "+parseInt(nbInstructions)
    }
    if (yArrivee > yVaisseau && (yArrivee - yVaisseau) > parseInt(vitesseVaisseau) / 3.6) {
        document.getElementById("imgPDA2").setAttribute("src", "img/top.png");
        document.getElementById("imgPDA2").setAttribute("width", "100px");
        document.getElementById("imgPDA2").setAttribute("height", "100px");
        document.getElementById("msgPDA").innerText = "DISTANCE TOTALE : "+(distanceRestante/1000).toFixed(1)+" KILOMETRES \n TOUT DROIT SUR "+(yArrivee - yVaisseau)+" METRES  \n PARTIE "+numInstruction+" / "+parseInt(nbInstructions)
    }
}
function miseAJourPDA(distanceRestante) {
    if (touche) {
        touche = false;
    }
    miseAJourDirections(distanceRestante)
    document.getElementById("msgPDA2").innerText = "HAUTEUR : " + zVaisseau + " METRES";
    miseAJourMapAsteroide()
}
function miseAJourMapAsteroide() {
    if (champAsteroide) {
        for (let i = 0; i < nbAsteroides; i++){
            if (asteroides[i]) {
                let ecartXAsteroideVaisseau = (xAsteroide[i] - xVaisseau);
                let ecartYAsteroideVaisseau = (yAsteroide[i] - yVaisseau);
                ecartXAsteroideVaisseau = ecartXAsteroideVaisseau / 10;
                ecartYAsteroideVaisseau = ecartYAsteroideVaisseau / 10;
                let xVaisseauMapAsteroide = 47.5;
                let yVaisseauMapAsteroide = 80;
                let xAsteroideMapAsteroide = xVaisseauMapAsteroide - ecartXAsteroideVaisseau;
                let yAsteroideMapAsteroide = yVaisseauMapAsteroide - ecartYAsteroideVaisseau;
                document.getElementById("asteroide"+i).style.left = ((xAsteroideMapAsteroide) + "px");
                document.getElementById("asteroide" + i).style.top = ((yAsteroideMapAsteroide-4) + "px");
            
            } else {
                document.getElementById("asteroide"+i).style.visibility = "hidden";
            }
        }
    }


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
            document.getElementById("imgPDA2").setAttribute("src", "img/top.png");
            document.getElementById("imgPDA2").setAttribute("width", "100px");
            document.getElementById("imgPDA2").setAttribute("height", "100px");
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
    verifInstruction();
    carburantConsommation();
    if (asteroidesRestants == 0) {
        champAsteroide = false;
        document.getElementById("msgPDA3").style.color = "green";
        document.getElementById("msgPDA3").innerText = "CHAMP D'ASTEROIDE EVITE !";

        const myNode = document.getElementById("mapAsteroide")
        while (myNode.lastChild) {
            myNode.removeChild(myNode.lastChild);
        }
        var vaisseauMap = document.createElement("div");
        vaisseauMap.setAttribute("id","mapAsteroideVaisseau")
        vaisseauMap.style.width = (8)+"px";
        vaisseauMap.style.height = (8)+"px";
        document.getElementById("mapAsteroide").appendChild(vaisseauMap);

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
    direction = "haut";
}
function vaisseauBas() {
    let vitesseVaisseau = document.getElementById("vitesse-vaiseaux").innerText;
    yVaisseau = yVaisseau - parseInt(vitesseVaisseau / 3.6);
    direction = "bas";
}
function vaisseauDroite() {
    let vitesseVaisseau = document.getElementById("vitesse-vaiseaux").innerText;
    xVaisseau = xVaisseau - parseInt(vitesseVaisseau / 3.6);
    direction = "droite";
}
function vaisseauGauche() {
    let vitesseVaisseau = document.getElementById("vitesse-vaiseaux").innerText;
    xVaisseau = xVaisseau + parseInt(vitesseVaisseau / 3.6);
    direction = "gauche";
}
function vaisseauElevation() {
    let vitesseVaisseau = document.getElementById("vitesse-vaiseaux").innerText;
    zVaisseau = zVaisseau + parseInt(vitesseVaisseau / 3.6);
    direction = "elevation";
}

function vaisseauAtterrissage() {
    let vitesseVaisseau = document.getElementById("vitesse-vaiseaux").innerText;
    zVaisseau = zVaisseau - parseInt(vitesseVaisseau / 3.6);
    direction = "atterrissage";
}

function stop(){
    direction = "";
}
function hasAsteroides() {
    let proba = parseInt(Math.random() * (20 - 1) + 1);
    if (proba == 2 && direction != "" && !touche) {
        xAsteroide = [];
        yAsteroide = [];
        asteroides = [];
        nbAsteroides = parseInt(Math.random() * (45 - 22) + 22);
        asteroidesRestants = nbAsteroides;
        for (numAsteroide = 0; numAsteroide < nbAsteroides; numAsteroide++){
            genereAsteroide()
            asteroides[numAsteroide] = true;
        }
        champAsteroide = true;
        document.getElementById("msgPDA3").style.color = "orange";
        document.getElementById("msgPDA3").innerText = "VOUS ENTREZ DANS UN CHAMP D'ASTEROIDES";
    }
}
function genereAsteroide() {
    if (numAsteroide < nbAsteroides) {
        var asteroide = document.createElement("div");
        asteroide.style.width = "1px";
        asteroide.style.height = "1px";
        asteroide.setAttribute("class","asteroide")
        asteroide.setAttribute("id", "asteroide" + numAsteroide);
        document.getElementById("mapAsteroide").appendChild(asteroide);
        xAsteroide[numAsteroide] = parseInt(Math.random() * ((xVaisseau + 800) - (xVaisseau - 800)) + (xVaisseau - 800));
        yAsteroide[numAsteroide] = parseInt(Math.random() * ((yVaisseau + 800) - (yVaisseau - 800)) + (yVaisseau - 800));   
    }
}

function verifAsteroide() {
    let distanceRestanteAsteroide = -1;
    let x = -1;
    let y = -1;
    let index = -1;

    for (let i = 0; i < nbAsteroides; i++) {
        dist = Math.sqrt(((xVaisseau - xAsteroide[i]) * (xVaisseau - xAsteroide[i])) + ((yVaisseau - yAsteroide[i]) * (yVaisseau - yAsteroide[i])))
        if ((distanceRestanteAsteroide == -1 || dist < distanceRestanteAsteroide) && asteroides[i]) {
            distanceRestanteAsteroide = dist;
            x = xAsteroide[i];
            y = yAsteroide[i];
            index = i;
        }
        
    }


    if (distanceRestanteAsteroide < 50 && distanceRestanteAsteroide != -1) {

        document.getElementById("msgPDA3").style.color = "red";
        document.getElementById("msgPDA3").innerText = "TOUCHE !";
        asteroidesRestants--;
        touche = true;
        asteroides[index] = false;
        vieVaisseau = vieVaisseau - 20;

    }
    if (distanceRestanteAsteroide > 1500 && champAsteroide) {
        document.getElementById("msgPDA3").style.color = "green";
        document.getElementById("msgPDA3").innerText = "ASTEROIDE EVITE !";
        champAsteroide = false;
        asteroidesRestants = 0;
    }

    if (distanceRestanteAsteroide < 1500 && !touche && distanceRestanteAsteroide != -1) {
            document.getElementById("msgPDA3").style.color = "yellow";
            document.getElementById("msgPDA3").innerText = "ASTEROIDE A " + parseInt(distanceRestanteAsteroide) + " METRES " + numAsteroide + " / " + nbAsteroides;
            if (x < xVaisseau && (Math.abs(yVaisseau - y)) < tailleVaisseau) {
                document.getElementById("msgPDA3").style.color = "orange";
                document.getElementById("msgPDA3").innerText = "ASTEROIDE A DROITE A " + (Math.abs(xVaisseau - x)) + " METRES !!";
            }
            if (xVaisseau < x && (Math.abs(yVaisseau - y)) < tailleVaisseau) {
                document.getElementById("msgPDA3").style.color = "orange";
                document.getElementById("msgPDA3").innerText = "ASTEROIDE A GAUCHE A " + (Math.abs(x - xVaisseau)) + " METRES !!";
            }
            if (yVaisseau < y && (Math.abs(xVaisseau - x)) < tailleVaisseau) {
                document.getElementById("msgPDA3").style.color = "orange";
                document.getElementById("msgPDA3").innerText = "ASTEROIDE EN FACE A " + (Math.abs(yVaisseau - y)) + " METRES !!";
            }
            if (y < yVaisseau && (Math.abs(xVaisseau - x)) < tailleVaisseau) {
                document.getElementById("msgPDA3").style.color = "orange";
                document.getElementById("msgPDA3").innerText = "ASTEROIDE EN ARRIERE A " + (Math.abs(y - yVaisseau)) + " METRES !!";
            }
        

    } 
    
        
    
}