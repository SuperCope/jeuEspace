function oxygeneMenu() {
    let menuOxygene = clearInterface("Gerer l'oxygene")
    let item1 = document.createElement("div");
    item1.setAttribute("class", "itemClicablePDA")
    item1.setAttribute("onclick", "rechargerBouteilleOxygeneMenu()")
    item1.innerText = "Gerer l'oxygene"
    let item2 = document.createElement("div");
    item2.setAttribute("class", "itemClicablePDA")
    item2.setAttribute("onclick", "cleUSBMenu()")
    item2.innerText = "Lire une cle USB"
    let item3 = document.createElement("div");
    item3.setAttribute("class", "itemClicablePDA")
    item3.setAttribute("onclick", "gererEnergieMenu()")
    item3.innerText = "Gerer l'energie"
    menuOxygene.appendChild(item1)
    menuOxygene.append("\n \n")
    menuOxygene.appendChild(item2)
    menuOxygene.append("\n \n")
    menuOxygene.appendChild(item3)
}
function gererEnergieMenu() {
    let menu = clearInterface("Gerer l'energie")
    let item1 = document.createElement("div");
    item1.setAttribute("id", "indicateurBatterie");
    let item1A = document.createElement("div");
    item1A.setAttribute("id", "indicateurBatterie0");
    item1A.innerText = "(";
    let item1B = document.createElement("div");
    item1B.setAttribute("id", "indicateurBatterie1");
    item1B.innerText = "";
    item1B.style.color = "yellow";
    let item1C = document.createElement("div");
    item1C.setAttribute("id", "indicateurBatterie2");
    let item1D = document.createElement("div");
    item1D.setAttribute("id", "indicateurBatterie0");
    item1D.innerText = ")";

    let item2 = document.createElement("div");
    item2.setAttribute("id", "itemAffichage");
    item2.innerText = "Affichage : 35%";
    
    let boutonRetour = document.createElement("div");
    boutonRetour.setAttribute("id", "retour")
    boutonRetour.setAttribute("onclick", "oxygeneMenu()")
    boutonRetour.innerText = "Retour"
    let res;
    setInterval(function(){
        res = updateJaugeEnergie()
        let texte = res[0];
        let texte2 = res[1];

        item1B.innerText = texte;
        item1C.innerText = texte2;
        if (energie > 0) {
            item1B.style.color = "red";
        }
        if (energie > 2000) {
            item1B.style.color = "orange";
        }
        if (energie > 4000) {
            item1B.style.color = "yellow";
        }
        if (energie > 6000) {
            item1B.style.color = "greenyellow";
        }
        if (energie > 8000) {
            item1B.style.color = "green";
        }
    },300);
    console.log(res);





    item1.appendChild(item1A)
    item1.appendChild(item1B)
    item1.appendChild(item1C)
    item1.appendChild(item1D)
    menu.appendChild(item1);
    menu.append("\n \n");
    menu.appendChild(item2);
    menu.append("\n \n \n");
    let libelleModules = ["Dectection asteroides"];
    let modules = [];
    modules[0] = detectionAsteroide;
    modules[1] = detectionAsteroide;

    for (let i = 0; i < libelleModules.length; i++){
        item = document.createElement("div");
        item.setAttribute("class", "miseAJourPDA1")
        let itemA = document.createElement("div");
        itemA.setAttribute("class", "itemClicablePDA")
        itemA.innerText = libelleModules[i];
        if (modules[i]) {
            itemA.innerText += ": 10%";
        } else {
            itemA.innerText += ": 0%";
        }
        itemA.style.float = "left";
        let itemB = document.createElement("div");
        itemB.setAttribute("class", "miseAJourPDA2")
        itemB.setAttribute("id", "viewModule"+i)
        console.log("MODULES-------1>"+modules[0]);
        console.log("MODULES-------1>"+modules);
        itemB.setAttribute("onclick", "viewModule('" + libelleModules[i] + "',[" + modules + "]," + i + ")");
        itemB.innerText = "consulter";
        itemB.style.float = "right";
        item.innerHTML += "<br>";
        item.appendChild(itemA);
        item.appendChild(itemB);
        menu.appendChild(item);
    }
    item.innerHTML += "<br><br>";
    item.appendChild(boutonRetour);

}
function viewModule(libelleModule, modules, i) {
    let menu = clearInterface(libelleModule);
    item = document.createElement("div");
    item.setAttribute("class", "miseAJourPDA1")
    let itemA = document.createElement("div");
    itemA.setAttribute("class", "itemClicablePDA")
    itemA.setAttribute("id", "switch")
    itemA.style.float = "right";
    itemA.style.fontSize = "24px";
    itemA.setAttribute("onclick", "interactModule(" + i + "," + modules[i] + ",["+ modules +"],'"+ libelleModule +"')")
    let itemB = document.createElement("div");
    itemB.setAttribute("class", "itemClicablePDA")
    itemB.innerText = "Activer ce module";
    if (!modules[i]) {
        itemA.setAttribute("class","fas fa-toggle-off itemClicablePDA")
    } else {
        itemA.setAttribute("class","fas fa-toggle-on itemClicablePDA")
    }
    itemB.style.float = "left";
    item.innerHTML += "<br>";
    item.appendChild(itemB);
    item.appendChild(itemA);
    menu.appendChild(item);
    let boutonRetour = document.createElement("div");
    boutonRetour.setAttribute("id", "retour")
    boutonRetour.setAttribute("onclick", "gererEnergieMenu()")
    boutonRetour.innerText = "Retour"
    document.getElementById("oxygeneTitre").appendChild(boutonRetour);
}
function interactModule(i, interact, modules, libelle) {
    switch (i) {
        case 0:
            if (!interact) {
                detectionAsteroide = true;
                modules[i] = true;
            } else {
                detectionAsteroide = false;
                modules[i] = false;
            }

        break;
    }
    viewModule(libelle,modules,i)
}
function updateJaugeEnergie() {
    let aRenvoyer = [];
    aRenvoyer[0] = "";
    for (let i = 0; i < energie; i++){
        if (i % 200 == 0) {
            aRenvoyer[0] += "|";
        }
    }
    aRenvoyer[1] = "";
    for (let i = energie; i < energieTotale; i++){
        if (i % 200 == 0) {
            aRenvoyer[1] += ".";
        }
    }
    return aRenvoyer;
}
function rechargerBouteilleOxygeneMenu() {
    let menuOxygene = clearInterface("Gerer l'oxyegne")
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
    let menuOxygene = clearInterface("Consulter les canalisation")
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
    let menuOxygene = clearInterface("Charger une bouteille d'oxygene")
    let msgLoading = document.createElement("div");
    msgLoading.setAttribute("id", "msgChargementOxygene")
    msgLoading.innerText = "Choisissez une bouteille a charger";
    menuOxygene.appendChild(msgLoading)
    let qteOxygene = document.createElement("div");
    qteOxygene.setAttribute("id", "qteOxygene")
    qteOxygene.innerText = oxygene;
    for (let i = 0; i < nbBouteillesOxygene; i++){
        let bouteille = document.createElement("img");
        bouteille.setAttribute("width", "50px");
        bouteille.setAttribute("height", "100px");
        bouteille.setAttribute("onclick", "chargerBouteilleOxygene(event)");
        if (i == nbBouteillesOxygene - 1 && oxy > 0 && oxy < 8) {
            bouteille.setAttribute("src", "img/oxy"+oxy+".png");
        } else {
            bouteille.setAttribute("src", "img/oxy9.png");
        }
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
        if (oxy <= 0 || !oxy) {
            oxy = 8;
        }

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
    let menuOxygene = clearInterface("AJOUTER UNE BOUTEILLE")
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
    console.log(oxy)
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
            bouteille.remove();
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
function desactiveDetectionAsteroides() {
    document.getElementById("mapAsteroide").style.visibility = "hidden";
    document.getElementById("msgPDA3").style.visibility = "hidden";
    let item1 = document.createElement("div")
    item1.setAttribute("id", "activationDetectionAsteroide");
    let item1A = document.createElement("span")
    item1A.setAttribute("class", "fas fa-plus-circle");
    item1A.setAttribute("id", "activationDetectionAsteroideSpan");

    let item1B = document.createElement("div")
    item1B.setAttribute("id", "activationDetectionAsteroideTexte");
    item1B.innerText = "Activer la detection d'asteroides"
    item1.appendChild(item1A);
    item1.appendChild(item1B);
    if (document.getElementById("msgPDA2").childNodes.length == 1) {
        document.getElementById("msgPDA2").appendChild(item1);
    }

}
function activeDetectionAsteroides() {
    if (document.getElementById("activationDetectionAsteroide")) {
        document.getElementById("activationDetectionAsteroide").remove();
    }

    document.getElementById("mapAsteroide").style.visibility = "visible";
    document.getElementById("msgPDA3").style.visibility = "visible";

    if (!document.getElementById("mapAsteroideVaisseau")) {
        let vaisseauMap = document.createElement("div");
        vaisseauMap.setAttribute("id","mapAsteroideVaisseau")
        vaisseauMap.style.width = (8)+"px";
        vaisseauMap.style.height = (8) + "px";
        document.getElementById("mapAsteroide").appendChild(vaisseauMap);
    }

}
function analysePDA() {
    energie = energie - 1;
    if(energie<0){
        energie = 0;
    }
    
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
    if (modeTelechargement) {
        telechargement();
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
    let menuOxygene = clearInterface("Regler le debit \n du diffuseur \n \n")
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
    document.getElementById("oxygeneTitre").appendChild(item1)
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
    let menuOxygene = clearInterface("Faire des mises \n a jour \n \n")
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
function clearInterface(titre) {
    let audio = new Audio('./audio/clic.mp3');
    audio.play();
    let titremenuOxygene = document.getElementById("oxygeneTitre")
    titremenuOxygene.innerText = titre;
    let menuOxygene = document.getElementById("items")
    while (menuOxygene.lastChild) {
        menuOxygene.removeChild(menuOxygene.lastChild);
    }
    return menuOxygene;
}