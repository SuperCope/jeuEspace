let numInstruction;
let nbInstructions;
let xArrivee;
let yArrivee;
let distanceAParcourir;
let vieVaisseauHaut = 100;
let vieVaisseauBas = 100;
let vieVaisseauGauche = 100;
let vieVaisseauDroite = 100;
let vieJoueur = 100;
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
let oxygeneMax = 10000;
let vitesseVaisseau = 120;
let touche = false;
let asteroidesRestants;
let nbBouteillesOxygene = 3;
let oxy;
let oxygene = 8000;
let fuites = [];
let pertesOxygene = 0;
let reparation = [];
let reparationLongue;
let debitOxygene = 100;
let misesAJours = [];
let valReparationLongue = 1;
let vieCanalisation = 100;


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
    for (let i = 0; i < 2; i++){
        fuites[i] = 100;
    }
    for (let i = 0; i < 10; i++){
        misesAJours[i] = null;
    }
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
    let audio = new Audio('./audio/clic.mp3');
    audio.play();
    let titremenuOxygene = document.getElementById("oxygeneTitre")
    titremenuOxygene.innerText = "Gerer \n l'oxygene";
    let menuOxygene = document.getElementById("items")
    while (menuOxygene.lastChild) {
        menuOxygene.removeChild(menuOxygene.lastChild);
    }
    let item1 = document.createElement("div");
    item1.setAttribute("class", "itemClicablePDA")
    item1.setAttribute("onclick", "rechargerBouteilleOxygeneMenu()")
    item1.innerText = "Gerer l'oxygene"
    menuOxygene.appendChild(item1)
    
}
function rechargerBouteilleOxygeneMenu() {
    let audio = new Audio('./audio/clic.mp3');
    audio.play();
    let titremenuOxygene = document.getElementById("oxygeneTitre")
    titremenuOxygene.innerText = "Gerer \n l'oxygene";
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
    let item3 = document.createElement("div");
    item3.setAttribute("class", "itemClicablePDA")
    item3.setAttribute("onclick", "consulterCanalisations()")
    item3.innerText = "Consulter les canalisations"
    let item4 = document.createElement("div");
    item4.setAttribute("class", "itemClicablePDA")
    item4.setAttribute("onclick", "reglerDebitDiffuseur()")
    item4.innerText = "Regler le debit du diffuseur"
    let item5 = document.createElement("div");
    item5.setAttribute("class", "itemClicablePDA")
    item5.setAttribute("onclick", "installerMisesAJours()")
    item5.innerText = "Faire des mises a jour";
    let boutonRetour = document.createElement("div");
    boutonRetour.setAttribute("id", "retour")
    boutonRetour.setAttribute("onclick", "oxygeneMenu()")
    boutonRetour.innerText = "Retour"
    menuOxygene.appendChild(item1)
    menuOxygene.append("<br>")
    menuOxygene.appendChild(item2)
    menuOxygene.append("<br>")
    menuOxygene.appendChild(item3)
    menuOxygene.append("<br>")
    menuOxygene.appendChild(item4)
    menuOxygene.append("<br>")
    menuOxygene.appendChild(item5)
    menuOxygene.appendChild(boutonRetour)

}
function consulterCanalisations() {
    let audio = new Audio('./audio/clic.mp3');
    audio.play();
    let titremenuOxygene = document.getElementById("oxygeneTitre")
    titremenuOxygene.innerText = "Consulter \n les canalisations";
    let menuOxygene = document.getElementById("items")
    while (menuOxygene.lastChild) {
        menuOxygene.removeChild(menuOxygene.lastChild);
    }
    let map = document.createElement("div");
    map.setAttribute("id", "mapCanalisations");
    let divFuite1 = document.createElement("div");
    divFuite1.setAttribute("id", "fuite1");
    divFuite1.setAttribute("class", "fuite");
    let divFuite2 = document.createElement("div");
    divFuite2.setAttribute("id", "fuite2");
    divFuite2.setAttribute("class", "fuite");
    if (fuites[0] < vieCanalisation) {
        divFuite1.innerText = fuites[0]+" %";
        divFuite1.style.backgroundColor = "cyan"
        divFuite1.setAttribute("onclick","reparation[0] = true")
    }
    if (fuites[0] == 0) {
        divFuite1.innerText = "";
    }
    if (fuites[0] == 0) {
        divFuite1.style.backgroundImage = "url(./img/croix.png)"
        divFuite1.style.opacity = "100%"
    }
    if (fuites[1] < vieCanalisation) {
        divFuite2.innerText = fuites[1]+" %";
        divFuite2.style.backgroundColor = "cyan"
        divFuite2.setAttribute("onclick","reparation[1] = true")
    }
    if (fuites[1] == 0) {
        divFuite2.style.backgroundImage = "url(./img/croix.png)"
        divFuite2.style.opacity = "100%"
    }
    if (fuites[1] == 0) {
        divFuite2.innerText = "";
    }
    let boutonRetour = document.createElement("div");
    let item1 = document.createElement("div");
    item1.setAttribute("class", "itemClicablePDA")
    item1.setAttribute("id", "reparationLongue")
    item1.setAttribute("onclick", "reparationLongue = true")
    item1.style.textAlign = "center";
    item1.innerText = "Lancer une reparation complete"
    boutonRetour.setAttribute("id", "retour2")
    boutonRetour.setAttribute("onclick", "rechargerBouteilleOxygeneMenu()")
    boutonRetour.innerText = "Retour"
    map.appendChild(divFuite1)
    map.appendChild(divFuite2)
    menuOxygene.appendChild(map);
    if (fuites[0] == 0 || fuites[1] == 0) {
        menuOxygene.appendChild(item1);
    }

    menuOxygene.appendChild(boutonRetour)

}
function chargerBouteilleOxygeneMenu() {
    let audio = new Audio('./audio/clic.mp3');
    audio.play();
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
    for (let i = 0; i < nbBouteillesOxygene; i++){
        let bouteille = document.createElement("img");
        bouteille.setAttribute("src", "img/oxy9.png");
        bouteille.setAttribute("width", "50px");
        bouteille.setAttribute("height", "100px");
        bouteille.setAttribute("onclick", "chargerBouteilleOxygene(event)");
        menuOxygene.appendChild(bouteille)
    }
    menuOxygene.appendChild(msgLoading)
    menuOxygene.appendChild(qteOxygene)
    let boutonRetour = document.createElement("div");
    boutonRetour.setAttribute("id", "retour")
    boutonRetour.setAttribute("onclick", "rechargerBouteilleOxygeneMenu()")
    boutonRetour.innerText = "Retour"
    menuOxygene.appendChild(boutonRetour)
}
function chargerBouteilleOxygene(event) {
    if (!oxy || oxy <= 0) {
        event.target.onclick = null;
        fuites[1]-= parseInt(Math.random() * (12 - 4) + 4);
        if (fuites[1] < 0) {
            fuites[1] = 0;
        }
        let retour = document.getElementById("retour");
        retour.style.visibility = "hidden";
        let msgLoading = document.getElementById("msgChargementOxygene");
        msgLoading.style.color = "orange";
        msgLoading.style.animationName = "clignoter"
        msgLoading.style.animationDuration = "1s";
        msgLoading.style.animationIterationCount = "infinite";
        msgLoading.innerText = "Vidage du contenu de la bouteille dans le reservoir";
        event.target.setAttribute("id","bouteille");
        oxy = 8;
        let audio = new Audio('./audio/air.mp3');
        audio.play();
        audio = null;
        audio = new Audio('./audio/verin.wav');
        audio.play();
        setTimeout(function () {
            retour.style.visibility = "visible";
        }, 3000)
    }



}

function insererBouteilleOxygeneMenu(){
    let audio = new Audio('./audio/clic.mp3');
    audio.play();
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
    let retour = document.getElementById("retour");
    retour.style.visibility = "hidden";
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
        if (fuites[0] > 0) {
            let audio = new Audio('./audio/bip6.wav');
            audio.play();
            loadingIcone.style.color = "green";
            loadingIcone.innerText = "Succes !";
            nbBouteillesOxygene++;

            fuites[0]-= parseInt(Math.random() * (12 - 4) + 4);
            if (fuites[0] < 0) {
                fuites[0] = 0;
            }
        } else {
            let audio = new Audio('./audio/bip9.wav');
            audio.play();
            loadingIcone.style.color = "red";
            loadingIcone.innerText = "Erreur, conduit endommage";
        }

    }, 5000);
    setTimeout(function () {
        insererBouteilleOxygeneMenu();
    }, 8000);

}

function animOxy() {
    let bouteille = document.getElementById("bouteille")
    if (bouteille) {
        let msgLoading = document.getElementById("msgChargementOxygene");
        if (fuites[1] == 0) {
            msgLoading.style.color = "red";
            msgLoading.style.animationName = "none"
            msgLoading.innerText = "Une erreur est survenue, le conduit est probablement endommage";
            let audio = new Audio('./audio/bip5.wav');
            audio.play();
            return;
        }
        if (oxygene > oxygeneMax) {

            msgLoading.style.color = "red";
            msgLoading.style.animationName = "none"
            msgLoading.innerText = "Une erreur est survenue, le reservoir d'oxygene est plein";
            let audio = new Audio('./audio/bip5.wav');
            audio.play();
            oxygene = oxygeneMax -1;
            return;
        }
        bouteille.setAttribute("src","img/oxy"+oxy+".png")
        if (oxy <= 0 && oxygene < oxygeneMax) {
            nbBouteillesOxygene--;
            bouteille.remove();
            msgLoading.style.color = "green";
            msgLoading.style.animationName = "none"
            msgLoading.innerText = "TERMINE";
            let audio = new Audio('./audio/bip7.wav');
            audio.play();
            oxy = -1;
        } else {
            oxy--;
            oxygene += 100;
        }
    }


}
function miseAJourFuites() {
    for (let i = 0; i < fuites.length; i++) {
        if (fuites[i] < vieCanalisation) {
            pertesOxygene += (vieCanalisation - fuites[i]);
            oxygene -= (vieCanalisation - fuites[i]);
        }
    }
    if (document.getElementById("pertes")) {
        document.getElementById("pertes").innerText = pertesOxygene;
    }


}
function analysePDA() {
    if (oxy >= 0) {
        setInterval(animOxy(oxy),300)
        setInterval(miseAJourOxygene(oxy),300)
        setInterval(qteOxygene(oxy),300)
    } else {
        oxygene = oxygene - Math.round((debitOxygene) / 40);
        if (oxygene % 1 == 0) {
            setInterval(miseAJourOxygene(),3000)
            setInterval(qteOxygene(),3000)
        }

    }


    for (let i = 0; i < misesAJours.length; i++){

        setInterval(updateMiseAJour(i), 8000)
        

    }
    
    let ok = false;

    if (reparationLongue) {
        document.getElementById("retour2").style.visibility = "hidden";

        for (let i = 0; i < fuites.length; i++){
            if (fuites[i] <= vieCanalisation) {
                setInterval(repareFuite(i), 10000)
                ok = true;
            }

        }
        if (!ok) {
            if (document.getElementById("reparationLongue")) {
                document.getElementById("reparationLongue").remove();
            }
            reparationLongue = false; 
        }

    } else {
        if (document.getElementById("retour2")) {
            document.getElementById("retour2").style.visibility = "visible";
        }

        for (let i = 0; i < reparation.length; i++){
            setInterval(repareFuite(i),500)
        }
    }


}
function miseAJourOxygene() {
    let barre = document.getElementById('barre-oxygen');
    if (oxygene !== 0) {
        if (oxygene < oxygeneMax) {
            barre.style.width = (oxygene / 20) + "px";
        } else {
            barre.style.width = document.getElementById("barre-vide").offsetWidth+"px";
        }

        document.getElementById('oxygen-nb').innerText = oxygene;
        if (oxygene > 60) {
            barre.style.backgroundColor = "cyan";
        } else {
            if (oxygene < 30) barre.style.backgroundColor = "red";
            else if (oxygene <= 60) barre.style.backgroundColor = "orange";
        }

    }


}
function qteOxygene() {
    if (document.getElementById("qteOxygene")) {
        document.getElementById("qteOxygene").innerText = oxygene;
    }

}


function repareFuite(num) {
    if (fuites[num] >= vieCanalisation && document.getElementById("fuite" + (num+1)) != null) {
        fuites[num] = vieCanalisation;
        reparation[num] = false;
        document.getElementById("fuite" + (num+1)).innerText = "";
        document.getElementById("fuite" + (num+1)).style = null;
        document.getElementById("fuite" + (num + 1)).style.opacity = "0%";
 
    }
    let ajout = 0;
    if ((reparation[num] === true && fuites[num]!= 0) || (reparationLongue)) {
        let random = Math.random() * (6 - 1) + 1;
        if (reparationLongue && parseInt(random) == 2) {
            fuites[num] = fuites[num] + valReparationLongue;
        } else if(!reparationLongue){
            fuites[num] = fuites[num] + 10;
            let audio = new Audio('./audio/metal.wav');
            audio.play();
        }

        
        if (fuites[num] <= vieCanalisation) {
            document.getElementById("fuite" + (num+1)).innerText = ((Math.round(fuites[num])*10)/10)+" %";
        }
    }

    
}
function reglerDebitDiffuseur() {
    let audio = new Audio('./audio/clic.mp3');
    audio.play();
    let titremenuOxygene = document.getElementById("oxygeneTitre")
    titremenuOxygene.innerText = "Regler le debit \n du diffuseur \n \n";
    let menuOxygene = document.getElementById("items")
    while (menuOxygene.lastChild) {
        menuOxygene.removeChild(menuOxygene.lastChild);
    }
    let item1 = document.createElement("input");
    item1.setAttribute("class", "form-range")
    item1.setAttribute("id", "jaugeDiffuseur")
    item1.setAttribute("onmouseup", "reglerDiffuseur(event)")
    item1.setAttribute("min", "20")
    item1.setAttribute("max", "100")
    item1.setAttribute("step", "10")
    item1.setAttribute("type", "range")
    item1.setAttribute("value", debitOxygene)
    item1.setAttribute("list", "reglageDiffuseur")
    item1.innerText = "Choisissez le débit du diffuseur";
    let item2 = document.createElement("datalist");
    item2.setAttribute("id", "reglageDiffuseur")
    let item2A = document.createElement("option");
    item2A.setAttribute("value", "90")
    item2A.setAttribute("label", "Risque de perte de vie")
    let item3 = document.createElement("div");
    item3.setAttribute("id", "textePertes")
    item3.style.textAlign = "center";
    item3.setAttribute("class", "itemClicablePDA")
    item3.style.color = "cyan";
    item3.style.fontSize = "24px";
    item3.innerText = "PERTES D'OXYGENE CUMULEES:";
    let item4 = document.createElement("div");
    item4.setAttribute("id", "scan")
    item4.innerText = "Lancer un scan des pertes";
    item4.style.textAlign = "center";
    item4.setAttribute("class", "itemClicablePDA");
    item4.setAttribute("onclick", "scanPertes()");
    let boutonRetour = document.createElement("div");
    boutonRetour.setAttribute("id", "retour")
    boutonRetour.setAttribute("onclick", "rechargerBouteilleOxygeneMenu()")
    boutonRetour.innerText = "Retour"
    titremenuOxygene.appendChild(item1)
    menuOxygene.appendChild(item2)
    menuOxygene.append("<br>")
    menuOxygene.appendChild(item3)
    menuOxygene.append("<br>")
    menuOxygene.appendChild(item4)
    menuOxygene.append("<br>")
    menuOxygene.appendChild(boutonRetour)
    reglerDiffuseur(null);
    
}
function scanPertes() {

    let loading = document.getElementById("scan");
    loading.setAttribute("id", "loadingIcone")
    loading.style.textAlign = "center";
    loading.innerText = "Scan en cours...";
    let audio = new Audio('./audio/lecture.mp3');
    audio.play();
    setTimeout(function () {
        document.getElementById("loadingIcone").setAttribute("id", "pertes");
        miseAJourFuites();
    }, 3000)
}
function reglerDiffuseur(event) {
    let value = -1;
    if (event) {
        value = event.target.value;
    } else {
        value = debitOxygene;
    }
    if (value <= 30) {
        document.getElementById("jaugeDiffuseur").style.backgroundColor = "red";
    }
    if (value <= 60) {
        document.getElementById("jaugeDiffuseur").style.backgroundColor = "orange";
    }
    debitOxygene = value


}
function installerMisesAJours() {
    let audio = new Audio('./audio/clic.mp3');
    audio.play();
    let titremenuOxygene = document.getElementById("oxygeneTitre")
    titremenuOxygene.innerText = "Faire des mises \n a jour \n \n";
    let menuOxygene = document.getElementById("items")
    while (menuOxygene.lastChild) {
        menuOxygene.removeChild(menuOxygene.lastChild);
    }
    let item = null;
    let libelleMisesAJours = ["Augmenter la capacite du reservoir (1)", "Augmenter la capacite du reservoir (2)"
    ,"Reparation totale plus rapide (1)","Reparation totale plus rapide (2)","Canalisations resistantes (1)","Canalisations resistantes (2)"]
    for (let i = 0; i < libelleMisesAJours.length; i++){
        item = document.createElement("div");
        item.setAttribute("class", "miseAJourPDA1")
        let itemA = document.createElement("div");
        itemA.setAttribute("class", "itemClicablePDA")
        itemA.innerText = libelleMisesAJours[i];
        itemA.style.float = "left";
        let itemB = document.createElement("div");
        itemB.setAttribute("class", "miseAJourPDA2")
        itemB.setAttribute("id", "miseAJour"+i)
        itemB.setAttribute("onclick", "updateMiseAJour2("+i+")")
        itemB.innerText = "installer";
        itemB.style.float = "right";
        item.appendChild(itemA);
        item.appendChild(itemB);
        menuOxygene.innerHTML += "<br><br>";
        menuOxygene.appendChild(item);
    }
    item.innerHTML += "<br><br><br>";
    let boutonRetour = document.createElement("div");
    boutonRetour.setAttribute("id", "retour")
    boutonRetour.setAttribute("onclick", "rechargerBouteilleOxygeneMenu()")
    boutonRetour.innerText = "Retour"
    item.appendChild(boutonRetour); 

    for (let i = 0; i < misesAJours.length; i++) {
        if (misesAJours[i] != null) {
            updateMiseAJour2(i);
            updateMiseAJour(i);
        }
    }
}
function updateMiseAJour2(i) {
    let event  = document.getElementById("miseAJour"+i)
    event.style.color =  "orange";
    event.style.fontSize =  "20px";
    event.style.background =  "none";
    event.innerText = "(....................)";
    if (!misesAJours[i]) {
        misesAJours[i] = 0;
    }else if(misesAJours[i]==100){
        document.getElementById("miseAJour" + i).style.color = "greenyellow";
        document.getElementById("miseAJour" + i).onclick = null;
        document.getElementById("miseAJour" + i).innerText = "[ FAIT ]";
    }

}
function updateMiseAJour(j) {

    if (misesAJours[j] < 100 && misesAJours[j] != null ) {
        if (document.getElementById("miseAJour" + j)) {
            document.getElementById("miseAJour" + j).innerText = "(";
        }
        for (let i = 0; i < misesAJours[j]; i++){
            if (i % 5 == 0) {
                if (document.getElementById("miseAJour" + j)) {
                    document.getElementById("miseAJour" + j).style.color = "yellow";
                    document.getElementById("miseAJour" + j).innerText += "1";
                }

            }
        }
        if (document.getElementById("miseAJour" + j)) {
            document.getElementById("miseAJour" + j).style.color = "orange";
        }
        for (let k = misesAJours[j]; k < 100; k++){
            if (k % 5 == 0) {
                if (document.getElementById("miseAJour" + j)) {
                    document.getElementById("miseAJour" + j).innerText += ".";
                }
            }
        }
        if (document.getElementById("miseAJour" + j)) {
            document.getElementById("miseAJour" + j).innerText += ")";
        }
        misesAJours[j]++;
        if (misesAJours[j] == 100) {
            if (document.getElementById("miseAJour" + j)) {
                document.getElementById("miseAJour" + j).style.color = "greenyellow";
                document.getElementById("miseAJour" + j).onclick = null;
                document.getElementById("miseAJour" + j).innerText = "[ FAIT ]";
            }
            let audio = new Audio('./audio/bip3.wav');
            audio.play();
            switch (j) {
                case 0:
                    oxygeneMax += 500;
                    document.getElementById("barre-vide").style.width = ((oxygeneMax) / 20) + "px";
                break;
                case 1:
                    oxygeneMax += 500;
                    document.getElementById("barre-vide").style.width = ((oxygeneMax) / 20) + "px";
                break;
                case 2:
                    valReparationLongue = 3;
                break;
                case 3:
                    valReparationLongue = 5;
                break;
                case 4:
                    vieCanalisation += 50;
                    for (let i = 0; i < fuites.length; i++){
                        fuites[i] = vieCanalisation;
                    }
                break;
                case 5:
                    vieCanalisation += 50;
                    for (let i = 0; i < fuites.length; i++){
                        fuites[i] = vieCanalisation;
                    }
                break;
            }
        } 
    }

}