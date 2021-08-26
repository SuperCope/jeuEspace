let numInstruction;
let nbInstructions;
let xArrivee;
let yArrivee;
let distanceAParcourir;
let vieVaisseauHaut = 100;
let vieVaisseauBas = 100;
let vieVaisseauGauche = 100;
let vieVaisseauDroite = 100;
let energieTotale = 100000;
let energie = 90000;
let detectionAsteroide = false;
let vieJoueur = 100;
let xVaisseau = 0;
let yVaisseau = 0;
let zVaisseau = 1200;
let direction = "";
let activationBouclier;
let energieAuxiliaire = 4000;
let energieAuxiliaireMax = 10000;
let numBatterieActive = 0;
let vieBouclier = 1000;
let vieMaxBouclier = 5000;
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
let modeTelechargement;
let fichiersTemp = [];
let modules = [];



function initPDA() {
    modules[0] = detectionAsteroide;
    nbInstructions = Math.random() * (1 - 2) + 2;
    numInstruction = 0;
    document.getElementById("oxygen-nb").innerText = oxygene;
    nextInstruction();
    for (let i = 0; i < 2; i++) {
        fuites[i] = 100;
    }
    for (let i = 0; i < 10; i++) {
        misesAJours[i] = null;
    }



    oxygeneMenu();
}
function nextInstruction() {
    document.getElementById("imgPDA2").setAttribute("src", "img/loading.gif");
    document.getElementById("imgPDA2").setAttribute("width", "250px");
    document.getElementById("imgPDA2").setAttribute("height", "150px");
    xArrivee = parseInt(Math.random() * (19500 - 1500) + 1500);
    yArrivee = parseInt(Math.random() * (19500 - 1500) + 1500);
    distanceAParcourir = Math.sqrt(((xVaisseau - xArrivee) * (xVaisseau - xArrivee)) + ((yVaisseau - yArrivee) * (yVaisseau - yArrivee)));
    distanceAParcourir = parseInt(distanceAParcourir);
    distanceAParcourir = Math.ceil(distanceAParcourir / 100) * 100
    miseAJourPDA(distanceAParcourir)
}


function carburantConsommation() {
    let vitesse = document.getElementById('vitesse-vaiseaux');
    let decremente = (vitesse.innerText / 200);
    let barre = document.getElementById('carburant-plein');
    barre.style.width = (barre.offsetWidth - decremente) + "px";
}



function cleUSBMenu() {
    let menuOxygene = clearInterface("Lire une cle USB")
    let lecteur = document.createElement("div");
    lecteur.setAttribute("id", "lecteur");
    lecteur.setAttribute("ondrop", "drop_handler(event)")
    lecteur.setAttribute("ondragover", "dragover_handler(event)")
    lecteur.innerText = "Cle"
    menuOxygene.appendChild(lecteur);
    let item1 = document.createElement("div");
    item1.setAttribute("id", "msgCle1")
    item1.innerText = "0 fichiers detectes";
    let item2 = document.createElement("div");
    item2.setAttribute("id", "ejecter")
    item2.setAttribute("onclick", "ejecterCleUSB()")
    item2.innerText = "ejecter";
    item2.style.visibility = "hidden";
    let item34 = document.createElement("div");
    item34.setAttribute("id", "operationsPanel")
    item34.style.visibility = "hidden";
    let item30 = document.createElement("div");
    item30.setAttribute("id", "operations")
    let item3 = document.createElement("div");
    item3.setAttribute("id", "usbGauche")
    let item3A1 = document.createElement("span");
    item3A1.setAttribute("class", "far fa-folder-open")
    item3A1.setAttribute("id", "dossier")
    let item3A2 = document.createElement("div");
    item3A2.setAttribute("id", "consulterFichier")
    item3A2.setAttribute("onclick", "consulterFichiers()")
    item3A2.innerText = "Consulter les fichiers";
    let item3B1 = document.createElement("span");
    item3B1.setAttribute("class", "fas fa-download")
    item3B1.setAttribute("id", "dossier")
    let item3B2 = document.createElement("div");
    item3B2.setAttribute("id", "consulterFichier")
    item3B2.setAttribute("onclick", "telechargerFichiers()")
    item3B2.innerText = "Telecharger les fichiers";

    let item40 = document.createElement("div");
    item40.setAttribute("id", "operations")
    let item4 = document.createElement("div");
    item4.setAttribute("id", "usbDroite")
    let item4A1 = document.createElement("span");
    item4A1.setAttribute("id", "dossier")
    item4A1.setAttribute("class", "far fa-folder-open")
    let item4A2 = document.createElement("div");
    item4A2.setAttribute("id", "consulterFichier")
    item4A2.setAttribute("onclick", "consulterFichiers()")
    item4A2.innerText = "Consulter les fichiers";
    let item4B1 = document.createElement("span");
    item4B1.setAttribute("id", "dossier")
    item4B1.setAttribute("class", "far fa-folder-open")
    let item4B2 = document.createElement("div");
    item4B2.setAttribute("id", "consulterFichier")
    item4B2.setAttribute("onclick", "consulterFichiers()")
    item4B2.innerText = "Consulter les fichiers";
    menuOxygene.innerHTML += "<br><br>";
    menuOxygene.appendChild(item1);
    menuOxygene.innerHTML += "<br><br>";
    menuOxygene.appendChild(item2);
    menuOxygene.innerHTML += "<br><br>";
    item3.appendChild(item3A1);
    item3.appendChild(item3A2);
    item3.appendChild(item3B1);
    item3.appendChild(item3B2);
    item30.appendChild(item3)
    item4.appendChild(item4A1);
    item4.appendChild(item4A2);
    item4.appendChild(item4B1);
    item4.appendChild(item4B2);
    item40.appendChild(item4)
    item34.appendChild(item3);
    item34.appendChild(item4);
    menuOxygene.appendChild(item34);
}
function quitterUSB() {
    document.getElementById("cadreFichiers").remove();
    document.getElementById("operationsPanel").style.visibility = "visible"
}
function consulterFichiers() {
    document.getElementById("operationsPanel").style.visibility = "hidden"
    let menuOxygene = document.getElementById("items")
    let cadre = document.createElement("div");
    let quitterSpan = document.createElement("span");
    quitterSpan.setAttribute("id", "quitterSpan");
    quitterSpan.setAttribute("onclick", "quitterUSB()");
    quitterSpan.setAttribute("class", "fas fa-times");
    cadre.appendChild(quitterSpan);
    cadre.setAttribute("id", "cadreFichiers");
    for (let i = 0; i < fichiersTemp.length; i++) {
        if (fichiersTemp[i] == 1) {
            let installation = document.createElement("div");
            installation.setAttribute("id", "installation");
            let installationSpan = document.createElement("span");
            installationSpan.setAttribute("class", "fas fa-toolbox")
            installationSpan.setAttribute("id", "installationSpan")
            let installationFichier = document.createElement("div");
            installationFichier.setAttribute("id", "installationFichier")
            installationFichier.innerText = " " + i;
            installation.appendChild(installationSpan);
            installation.appendChild(installationFichier);
            cadre.appendChild(installation)
        }
        if (fichiersTemp[i] == 2) {
            let texte = document.createElement("div");
            texte.setAttribute("id", "texte");
            let texteSpan = document.createElement("span");
            texteSpan.setAttribute("class", "far fa-file-alt")
            texteSpan.setAttribute("id", "texteSpan")
            let texteFichier = document.createElement("div");
            texteFichier.setAttribute("id", "texteFichier")
            texteFichier.innerText = " " + i;
            texte.appendChild(texteSpan);
            texte.appendChild(texteFichier);
            cadre.appendChild(texte)
        }
    }
    menuOxygene.appendChild(cadre);
}
function telechargerFichiers() {
    document.getElementById("operationsPanel").style.visibility = "hidden"
    let cadre = document.createElement("div");
    cadre.setAttribute("id", "cadreFichiers");
    let menuOxygene = document.getElementById("items")
    let downloadSpan = document.createElement("span");
    downloadSpan.setAttribute("id", "downloadSpan");
    downloadSpan.setAttribute("class", "fas fa-download");
    let download = document.createElement("div");
    download.setAttribute("id", "download");
    download.innerText = "Telechargement des fichiers en cours...";
    let divProgress = document.createElement("div");
    divProgress.setAttribute("class", "progress");
    let progress = document.createElement("div");
    progress.setAttribute("class", "progress-bar progress-bar-striped progress-bar-animated");
    progress.setAttribute("id", "barreTelechargement");
    progress.setAttribute("role", "progressbar");
    progress.setAttribute("aria-valuenow", "0");
    progress.setAttribute("aria-valuemin", "0");
    progress.setAttribute("aria-valuemax", "100");
    modeTelechargement = true;
    cadre.appendChild(downloadSpan);
    cadre.appendChild(download);
    divProgress.appendChild(progress);
    cadre.appendChild(divProgress);
    menuOxygene.appendChild(cadre);

}
function ejecterCleUSB() {
    document.body.appendChild(document.getElementById("cleUSB"))
    document.getElementById("cleUSB").remove();
    document.getElementById("msgCle1").style.visibility = "hidden";
    document.getElementById("ejecter").style.visibility = "hidden";
    document.getElementById("operationsPanel").style.visibility = "hidden";
}
function insererCleUSB() {
    let typeFichier = 0;
    let nbFichiers = document.getElementById("cleUSB").getAttribute("nbFichiers");
    for (let i = 0; i < nbFichiers; i++) {
        typeFichier = parseInt(Math.random() * (3 - 1) + 1);
        fichiersTemp[i] = typeFichier;
    }
    document.getElementById("msgCle1").innerText = nbFichiers + " fichiers detectes";
    document.getElementById("msgCle1").style.visibility = "visible";
    document.getElementById("operationsPanel").style.visibility = "visible";
}
function telechargement() {
    let duree = parseInt(Math.random() * (900 - 300) + 300);
    for (let i = 0; i < fichiersTemp.length; i++) {
        let ratio = (100 / fichiersTemp.length)
        setTimeout(function () {
            document.getElementById("download").innerText = "Telechargement du fichier " + (i + 1) + " / " + fichiersTemp.length;
            if (i < fichiersTemp.length - 1) {
                document.getElementById("barreTelechargement").style.width = (ratio + (ratio * i)) + "%";
            } else {
                document.getElementById("barreTelechargement").style.width = "100%"
            }
            if (i == fichiersTemp.length - 1) {
                document.getElementById("barreTelechargement").setAttribute("class", "progress-bar")
            }

        }, ((i * duree)))
    }
    modeTelechargement = false;
    setTimeout(function () {
        document.getElementById("operationsPanel").style.visibility = "visible"
        document.getElementById("cadreFichiers").style.visibility = "hidden"
    }, ((fichiersTemp.length * duree)))
}