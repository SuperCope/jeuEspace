let numInstruction;
let nbInstructions;
let xArrivee;
let yArrivee;
let distanceAParcourir;
let vieVaisseauHaut = 100;
let vieVaisseauBas = 100;
let vieVaisseauGauche = 100;
let vieVaisseauDroite = 100;
let xVaisseau = 0;
let yVaisseau = 0;
let zVaisseau = 1200;
let direction = "";
let champAsteroide = false;
let tailleVaisseau = 50;
let numAsteroide = 0;
let nbAsteroides = 0;
let xAsteroide;
let yAsteroide;
let asteroides;
let vitesseVaisseau = 120;
let touche = false;
let asteroidesRestants;
let nbBouteillesOxygene = 3;
let oxy;
let oxygene = 100;


function initPDA() {
    nbInstructions = Math.random() * (1 - 2) + 2;
    numInstruction = 0;
    let vaisseauMap = document.createElement("div");
    vaisseauMap.setAttribute("id","mapAsteroideVaisseau")
    vaisseauMap.style.width = (8)+"px";
    vaisseauMap.style.height = (8)+"px";
    document.getElementById("mapAsteroide").appendChild(vaisseauMap);
    document.getElementById("oxygen-nb").innerText = oxygene;
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
    document.getElementById("msgPDA").style.animationName = "none";
    document.getElementById("msgPDA").style.color = "cyan";
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
    verifHauteur()
}
function verifHauteur() {
    if (zVaisseau <= 0 && (vitesseVaisseau > 40 || numInstruction < nbInstructions)) {
        let audio = new Audio('./audio/explode.mp3');
        audio.play();
        document.getElementById("msgPDA").style.color = "red";
        document.getElementById("msgPDA").innerText = "LE VAISSEAU S'EST ECRASE";
        alert("PERDU")
        return;
    } else if(zVaisseau <= 0) {
        document.getElementById("msgPDA").style.color = "green";
        document.getElementById("msgPDA").innerText = "LE VAISSEAU EST ATTERI";
    }
    if (zVaisseau < 600 && vitesseVaisseau > 40 && direction == "atterrissage") {
        let audio = new Audio('./audio/alarme.mp3');
        audio.play();
        document.getElementById("msgPDA").style.animationDuration = "1s";
        document.getElementById("msgPDA").style.animationName = "clignoter";
        document.getElementById("msgPDA").style.animationIterationCount = "infinite";
        document.getElementById("msgPDA").style.color = "orange";
        document.getElementById("msgPDA").innerText = "ATTENTION ! VITESSE TROP ELEVEE ! ("+(vitesseVaisseau - 40)+" KM/H EN TROP)";
        return;
    }
    if (zVaisseau < 600 && numInstruction < nbInstructions && direction == "atterrissage") {
        let audio = new Audio('./audio/alarme.mp3');
        audio.play();
        document.getElementById("msgPDA").style.animationDuration = "1s";
        document.getElementById("msgPDA").style.animationName = "clignoter";
        document.getElementById("msgPDA").style.animationIterationCount = "infinite";
        document.getElementById("msgPDA").style.color = "orange";
        document.getElementById("msgPDA").innerText = "ATTENTION ! VOUS NE VOUS TROUVEZ PAS AU DESSUS D'UN SOL PLAT !";
    }
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
        document.getElementById("imgPDA2").setAttribute("src","img/valider.png");
        document.getElementById("imgPDA2").setAttribute("width","100px")
        document.getElementById("msgPDA3").style.color = "green";
        document.getElementById("msgPDA3").innerText = "VOUS POUVEZ ATTERRIR !";
        numInstruction++;
        if (numInstruction < nbInstructions) {
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
    if (direction != "") {
        carburantConsommation();
    }

    if (asteroidesRestants == 0) {
        champAsteroide = false;
        document.getElementById("msgPDA3").style.color = "green";
        document.getElementById("msgPDA3").innerText = "CHAMP D'ASTEROIDE EVITE !";

        const myNode = document.getElementById("mapAsteroide")
        while (myNode.lastChild) {
            myNode.removeChild(myNode.lastChild);
        }
        let vaisseauMap = document.createElement("div");
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
    if (zVaisseau < 0) {
        zVaisseau = 0;
    }
    direction = "atterrissage";
}

function stop(){
    direction = "";
}
function hasAsteroides() {
    let proba = parseInt(Math.random() * (20 - 1) + 1);
    if (proba == 2 && direction != "" && direction!="atterrissage" && direction != "elevation" && !touche) {
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
        let asteroide = document.createElement("div");
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
        let explosion = parseInt(Math.random() * (3 - 1) + 1);
        if (explosion == 1) {
            let audio = new Audio('./audio/explode.mp3');
            audio.play();
        }
        if (explosion == 2) {
            let audio = new Audio('./audio/explosion.mp3');
            audio.play();
        }
        asteroidesRestants--;
        touche = true;
        asteroides[index] = false;
        switch (direction) {
            case "haut":
                vieVaisseauHaut = vieVaisseauHaut - 20;
            break;
            case "bas":
                vieVaisseauBas = vieVaisseauBas - 20;
            break;
            case "gauche":
                vieVaisseauGauche = vieVaisseauGauche - 20;
            break;
            case "droite":
                vieVaisseauDroite = vieVaisseauDroite - 20;
            break;
        }

    }
    if (distanceRestanteAsteroide > 1500 && champAsteroide) {
        document.getElementById("msgPDA3").style.color = "green";
        document.getElementById("msgPDA3").innerText = "ASTEROIDE EVITE !";
        champAsteroide = false;
        asteroidesRestants = 0;
    }

    if (distanceRestanteAsteroide < 1500 && !touche && distanceRestanteAsteroide != -1) {
        document.getElementById("msgPDA3").style.color = "yellow";
        document.getElementById("msgPDA3").style.animationName = "none";
            document.getElementById("msgPDA3").innerText = "ASTEROIDE A " + parseInt(distanceRestanteAsteroide) + " METRES " + numAsteroide + " / " + nbAsteroides;  
            if (x < xVaisseau && (Math.abs(yVaisseau - y)) < tailleVaisseau) {
                document.getElementById("msgPDA3").style.color = "orange";
                document.getElementById("msgPDA3").style.animationDuration = "1s";
                document.getElementById("msgPDA3").style.animationName = "clignoter";
                document.getElementById("msgPDA3").style.animationIterationCount = "infinite";
                document.getElementById("msgPDA3").innerText = "ASTEROIDE A DROITE A " + (Math.abs(xVaisseau - x)) + " METRES !!";
            }
            if (xVaisseau < x && (Math.abs(yVaisseau - y)) < tailleVaisseau) {
                document.getElementById("msgPDA3").style.color = "orange";
                document.getElementById("msgPDA3").style.animationDuration = "1s";
                document.getElementById("msgPDA3").style.animationName = "clignoter";
                document.getElementById("msgPDA3").style.animationIterationCount = "infinite";
                document.getElementById("msgPDA3").innerText = "ASTEROIDE A GAUCHE A " + (Math.abs(x - xVaisseau)) + " METRES !!";
            }
            if (yVaisseau < y && (Math.abs(xVaisseau - x)) < tailleVaisseau) {
                document.getElementById("msgPDA3").style.color = "orange";
                document.getElementById("msgPDA3").style.animationDuration = "1s";
                document.getElementById("msgPDA3").style.animationName = "clignoter";
                document.getElementById("msgPDA3").style.animationIterationCount = "infinite";
                document.getElementById("msgPDA3").innerText = "ASTEROIDE EN FACE A " + (Math.abs(yVaisseau - y)) + " METRES !!";
            }
            if (y < yVaisseau && (Math.abs(xVaisseau - x)) < tailleVaisseau) {
                document.getElementById("msgPDA3").style.color = "orange";
                document.getElementById("msgPDA3").style.animationDuration = "1s";
                document.getElementById("msgPDA3").style.animationName = "clignoter";
                document.getElementById("msgPDA3").style.animationIterationCount = "infinite";
                document.getElementById("msgPDA3").innerText = "ASTEROIDE EN ARRIERE A " + (Math.abs(y - yVaisseau)) + " METRES !!";
            }
        

    } 
    
        
    
}
function oxygeneMenu() {
    let titremenuOxygene = document.getElementById("oxygeneTitre")
    titremenuOxygene.innerText = "Recharger de \n l'oxygene";
    let menuOxygene = document.getElementById("items")
    while (menuOxygene.lastChild) {
        menuOxygene.removeChild(menuOxygene.lastChild);
    }
    let item1 = document.createElement("div");
    item1.setAttribute("class", "itemClicablePDA")
    item1.setAttribute("onclick", "rechargerBouteilleOxygeneMenu()")
    item1.innerText = "Recharger de l'oxygene"
    menuOxygene.appendChild(item1)
    
}
function rechargerBouteilleOxygeneMenu() {
    let titremenuOxygene = document.getElementById("oxygeneTitre")
    titremenuOxygene.innerText = "Recharger de \n l'oxygene";
    let menuOxygene = document.getElementById("items")
    while (menuOxygene.lastChild) {
        menuOxygene.removeChild(menuOxygene.lastChild);
    }
    let item1 = document.createElement("div");
    item1.setAttribute("class", "itemClicablePDA")
    item1.setAttribute("onclick", "insererBouteilleOxygeneMenu()")
    item1.innerText = "Inserer une bouteille d'oxygene"
    let item2 = document.createElement("div");
    item2.setAttribute("class", "itemClicablePDA")
    item2.setAttribute("onclick", "chargerBouteilleOxygeneMenu()")
    item2.innerText = "Charger une bouteille d'oxygene"
    let boutonRetour = document.createElement("div");
    boutonRetour.setAttribute("id", "retour")
    boutonRetour.setAttribute("onclick", "oxygeneMenu()")
    boutonRetour.innerText = "Retour"
    menuOxygene.appendChild(item1)
    menuOxygene.append("<br>")
    menuOxygene.appendChild(item2)
    menuOxygene.appendChild(boutonRetour)
}
function chargerBouteilleOxygeneMenu() {
    let titremenuOxygene = document.getElementById("oxygeneTitre")
    titremenuOxygene.innerText = "Charger une bouteille \n d'oxygene";
    let menuOxygene = document.getElementById("items")
    while (menuOxygene.lastChild) {
        menuOxygene.removeChild(menuOxygene.lastChild);
    }
    let msgLoading = document.createElement("div");
    msgLoading.setAttribute("id", "msgChargementOxygene")
    msgLoading.innerText = "Choisissez une bouteille a charger";
    menuOxygene.appendChild(msgLoading)
    let qteOxygene = document.createElement("div");
    qteOxygene.setAttribute("id", "qteOxygene")
    qteOxygene.innerText = oxygene;
    menuOxygene.appendChild(msgLoading)
    for (let i = 0; i < nbBouteillesOxygene; i++){
        let bouteille = document.createElement("img");
        bouteille.setAttribute("src", "img/oxy9.png");
        bouteille.setAttribute("width", "50px");
        bouteille.setAttribute("height", "100px");
        bouteille.setAttribute("onclick", "chargerBouteilleOxygene(event)");
        menuOxygene.appendChild(bouteille)
    }
    menuOxygene.appendChild(qteOxygene)
    let boutonRetour = document.createElement("div");
    boutonRetour.setAttribute("id", "retour")
    boutonRetour.setAttribute("onclick", "rechargerBouteilleOxygeneMenu()")
    boutonRetour.innerText = "Retour"
    menuOxygene.appendChild(boutonRetour)
}
function chargerBouteilleOxygene(event) {
    let msgLoading = document.getElementById("msgChargementOxygene");
    msgLoading.color = "orange";
    msgLoading.style.animationName = "clignoter"
    msgLoading.innerText = "Vidage du contenu de la bouteille dans le reservoir";
    event.target.setAttribute("id","bouteille");
    oxy = 8;    

}

function insererBouteilleOxygeneMenu(){
    let titremenuOxygene = document.getElementById("oxygeneTitre")
    titremenuOxygene.innerText = "Inserer une bouteille d'oxygene";
    let menuOxygene = document.getElementById("items")
    while (menuOxygene.lastChild) {
        menuOxygene.removeChild(menuOxygene.lastChild);
    }
    let msgLoading = document.createElement("div");
    msgLoading.setAttribute("id", "msgLoading")
    msgLoading.setAttribute("onclick", "bouteilleInseree()")
    msgLoading.setAttribute("class", "itemClicablePDA")
    msgLoading.innerText = "\n En attente d'une \n bouteille d'oxygene...";
    let loadingIcone = document.createElement("div");
    loadingIcone.setAttribute("id", "loadingIcone")
    loadingIcone.innerText = "||||||||";
    menuOxygene.appendChild(msgLoading)
    menuOxygene.appendChild(loadingIcone)
    let boutonRetour = document.createElement("div");
    boutonRetour.setAttribute("id", "retour")
    boutonRetour.setAttribute("onclick", "rechargerBouteilleOxygeneMenu()")
    boutonRetour.innerText = "Retour"
    menuOxygene.appendChild(boutonRetour)
}
function bouteilleInseree() {
    let loadingIcone = document.getElementById("loadingIcone");
    loadingIcone.style.color = "cyan";
    loadingIcone.innerText = "Bouteille inseree";
    loadingIcone.style.animationName = "none"
    setTimeout(function () {
        loadingIcone.style.color = "yellow";
        loadingIcone.innerText = "Ajout de la bouteille au stock...";
        let audio = new Audio('./audio/lecture.mp3');
        audio.play();
    },1000);


    setTimeout(function () {
        loadingIcone.style.color = "green";
        loadingIcone.innerText = "Succes !";
        nbBouteillesOxygene++;
    }, 3000);

}

function animOxy() {
    let bouteille = document.getElementById("bouteille")
    if (bouteille) {
        bouteille.setAttribute("src","img/oxy"+oxy+".png")
        if (oxy <= 0) {
            bouteille.remove();
            let msgLoading = document.getElementById("msgChargementOxygene");
            msgLoading.color = "green";
            msgLoading.style.animationName = "none"
            msgLoading.innerText = "TERMINE";
        } else {
            oxy--;
            oxygene += 10;
        }
    }


}
function analysePDA() {
    if (oxy >= 0) {
        setInterval(animOxy(oxy), 300)
    }
    miseAJourOxygene()
    qteOxygene()

}
function miseAJourOxygene() {
    let decremente = 2;
    let barre = document.getElementById('barre-oxygen');
    let barreVide = document.getElementById('barre-vide');
    if (oxygene !== 0) {
        oxygene -= decremente;
        if (oxygene < 100) {
            barre.style.width = (oxygene * 5) + "px";
        } else {
            barre.style.width = document.getElementById("barre-vide").offsetWidth+"px";
        }

        document.getElementById('oxygen-nb').innerText = oxygene;
        if (oxygene < 30) barre.style.backgroundColor = "red";
        else if (oxygene <= 60) barre.style.backgroundColor = "orange";
    }


}
function qteOxygene() {
    if (document.getElementById("qteOxygene")) {
        document.getElementById("qteOxygene").innerText = oxygene;
    }

}