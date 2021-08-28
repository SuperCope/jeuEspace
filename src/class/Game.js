class Game {
    constructor() {
        this.vaisseau = new Vaisseau();
        this.player = new Player();
        this.gps = new GPS();
        this.thread = -1;
        // game.intervalId = null;
    }

    init() {
        setInterval(this.waterDesc.bind(this), 1000);
        setInterval(this.foodDesc.bind(this), 1000);
        setInterval(this.moveShip.bind(this), 1000);
        setInterval(this.analysePDA.bind(this), 300);
        setInterval(this.displayLife.bind(this), 2000)
        setInterval(this.updateLeaks.bind(this), 30000)
        setInterval(this.verifClim.bind(this), 39000)
        setInterval(this.updateHeat.bind(this), 40000)
        this.initPDA()
    }

    displayLife() { game.player.displayLife(game.vaisseau.oxygenDebit, game.vaisseau.oxygen) }

    menuOxygen() {
        let menuOxygene = game.clearInterface("Gerer l'oxygene");

        let item1 = document.createElement("div");
        item1.setAttribute("class", "itemClicablePDA");
        item1.setAttribute("onclick", "game.menuReloadOxygen()");
        item1.innerText = "Gerer l'oxygene";
        menuOxygene.appendChild(item1);
        menuOxygene.append("\n \n");

        let item2 = document.createElement("div");
        item2.setAttribute("class", "itemClicablePDA");
        item2.setAttribute("onclick", "Game.prototype.USBKeyMenu()");
        item2.innerText = "Lire une cle USB";
        menuOxygene.appendChild(item2);
        menuOxygene.append("\n \n");

        let item3 = document.createElement("div");
        item3.setAttribute("class", "itemClicablePDA");
        item3.setAttribute("onclick", "game.menuManageEnergy()");
        item3.innerText = "Gerer l'energie";
        menuOxygene.appendChild(item3);

    }
    closeUSB() {
        document.getElementById("cadreFichiers").remove();
        document.getElementById("operationsPanel").style.visibility = "visible"
    }
    showFiles() {
        document.getElementById("operationsPanel").style.visibility = "hidden"
        let menuOxygene = document.getElementById("items")
        let cadre = document.createElement("div");
        let quitterSpan = document.createElement("span");
        quitterSpan.setAttribute("id", "quitterSpan");
        quitterSpan.setAttribute("onclick", "Game.prototype.closeUSB()");
        quitterSpan.setAttribute("class", "fas fa-times");
        cadre.appendChild(quitterSpan);
        cadre.setAttribute("id", "cadreFichiers");
        for (let i = 0; i < game.vaisseau.fileTemp.length; i++) {
            if (game.vaisseau.fileTemp[i] == 1) {
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
            if (game.vaisseau.fileTemp[i] == 2) {
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
    ejectUSBKey() {
        document.body.appendChild(document.getElementById("cleUSB"))
        document.getElementById("cleUSB").remove();
        document.getElementById("msgCle1").style.visibility = "hidden";
        document.getElementById("ejecter").style.visibility = "hidden";
        document.getElementById("operationsPanel").style.visibility = "hidden";
    }
    insertCleUSB() {
        let typeFichier = 0;
        let nbFichiers = document.getElementById("cleUSB").getAttribute("nbFichiers");
        for (let i = 0; i < nbFichiers; i++) {
            typeFichier = parseInt(Math.random() * (3 - 1) + 1);
            game.vaisseau.fileTemp[i] = typeFichier;
        }
        document.getElementById("msgCle1").innerText = nbFichiers + " fichiers detectes";
        document.getElementById("msgCle1").style.visibility = "visible";
        document.getElementById("operationsPanel").style.visibility = "visible";
    }
    USBKeyMenu() {
        let menuOxygene = this.clearInterface("Lire une cle USB")
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
        item2.setAttribute("onclick", "Game.prototype.ejecterCleUSB()")
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
        item3A2.setAttribute("onclick", "Game.prototype.showFiles()")
        item3A2.innerText = "Consulter les fichiers";
        let item3B1 = document.createElement("span");
        item3B1.setAttribute("class", "fas fa-download")
        item3B1.setAttribute("id", "dossier")
        let item3B2 = document.createElement("div");
        item3B2.setAttribute("id", "consulterFichier")
        item3B2.setAttribute("onclick", "Game.prototype.download()")
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
        item4A2.setAttribute("onclick", "Game.prototype.showFiles()")
        item4A2.innerText = "Consulter les fichiers";
        let item4B1 = document.createElement("span");
        item4B1.setAttribute("id", "dossier")
        item4B1.setAttribute("class", "far fa-folder-open")
        let item4B2 = document.createElement("div");
        item4B2.setAttribute("id", "consulterFichier")
        item4B2.setAttribute("onclick", "Game.prototype.showFiles()")
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

    menuReloadOxygen() {
        let menuOxygene = game.clearInterface("Gerer l'oxygene");

        let item1 = document.createElement("div");
        item1.setAttribute("class", "itemClicablePDA");
        item1.setAttribute("onclick", "game.menuInsertBottleOxygen()");
        item1.innerText = "Inserer une bouteille d'oxygene";
        menuOxygene.appendChild(item1);
        menuOxygene.append("<br>");

        let item2 = document.createElement("div");
        item2.setAttribute("class", "itemClicablePDA");
        item2.setAttribute("onclick", "game.menuLoadOxygen()");
        item2.innerText = "Charger une bouteille d'oxygene";
        menuOxygene.appendChild(item2);
        menuOxygene.append("<br>");

        let item3 = document.createElement("div");
        item3.setAttribute("class", "itemClicablePDA");
        item3.setAttribute("onclick", "game.showCanalisations()");
        item3.innerText = "Consulter les canalisations";
        menuOxygene.appendChild(item3);
        menuOxygene.append("<br>");

        let item4 = document.createElement("div");
        item4.setAttribute("class", "itemClicablePDA");
        item4.setAttribute("onclick", "game.configDebitDiffuseur()");
        item4.innerText = "Regler le debit du diffuseur";
        menuOxygene.appendChild(item4);
        menuOxygene.append("<br>");

        let item5 = document.createElement("div");
        item5.setAttribute("class", "itemClicablePDA");
        item5.setAttribute("onclick", "game.menuInstallUpdatesOxygen()");
        item5.innerText = "Faire des mises a jour";
        menuOxygene.appendChild(item5);

        let boutonRetour = document.createElement("div");
        boutonRetour.setAttribute("id", "retour");
        boutonRetour.setAttribute("onclick", "game.menuOxygen()");
        boutonRetour.innerText = "Retour";
        menuOxygene.appendChild(boutonRetour);
    }

    menuLoadOxygen() {
        let menuOxygene = game.clearInterface("Charger une bouteille d'oxygene");
        let msgLoading = document.createElement("div");
        msgLoading.setAttribute("id", "msgChargementOxygene");
        msgLoading.innerText = "Choisissez une bouteille a charger";
        menuOxygene.appendChild(msgLoading);
        let qteOxygene = document.createElement("div");
        qteOxygene.setAttribute("id", "qteOxygene");
        qteOxygene.innerText = game.vaisseau.oxygen;
        for (let i = 0; i < game.vaisseau.oxygens.length; i++) {
            let bouteille = document.createElement("img");
            bouteille.setAttribute("width", "50px");
            bouteille.setAttribute("height", "100px");
            bouteille.setAttribute("idBouteille", "" + i + "");
            bouteille.setAttribute("onclick", "game.loadBottleOxygen(event)");
            if (game.vaisseau.oxygenFrame && i === game.vaisseau.oxygens.length - 1) {
                bouteille.setAttribute("oxy", "" + game.vaisseau.oxygenFrame + "");
            }
            if (i === game.vaisseau.oxygens.length - 1 && game.vaisseau.oxygenFrame > 0 && game.vaisseau.oxygenFrame < 8) {
                bouteille.setAttribute("src", "img/oxy" + game.vaisseau.oxygenFrame + ".png");
            } else {
                bouteille.setAttribute("src", "img/oxy9.png");
            }
            menuOxygene.appendChild(bouteille);
        }
        menuOxygene.appendChild(msgLoading);
        menuOxygene.appendChild(qteOxygene);
        let boutonRetour = document.createElement("div");
        boutonRetour.setAttribute("id", "retour");
        boutonRetour.setAttribute("onclick", "game.menuReloadOxygen()");
        boutonRetour.innerText = "Retour";
        menuOxygene.appendChild(boutonRetour);
    }

    loadBottleOxygen(event) {
        if (!document.getElementById("bouteille")) {
            event.target.onclick = null;
            game.vaisseau.leaks[1] -= parseInt(Math.random() * (12 - 4) + 4);
            if (game.vaisseau.leaks[1] < 0) game.vaisseau.leaks[1] = 0;
            let retour = document.getElementById("retour");
            retour.style.visibility = "hidden";
            let msgLoading = document.getElementById("msgChargementOxygene");
            msgLoading.style.color = "orange";
            msgLoading.style.animationName = "clignoter";
            msgLoading.style.animationDuration = "1s";
            msgLoading.style.animationIterationCount = "infinite";
            msgLoading.innerText = "Vidage du contenu de la bouteille dans le reservoir";
            event.target.setAttribute("id", "bouteille");
            if (event.target.getAttribute("oxy")) game.vaisseau.oxygenFrame = event.target.getAttribute("oxy");
            else game.vaisseau.oxygenFrame = 8;

            let audio = new Audio('./audio/air.mp3');
            audio.play();
            // audio = null;
            audio = new Audio('./audio/verin.wav');
            audio.play();

            setTimeout(function () { retour.style.visibility = "visible"; }, 3000)
        }
    }

    menuInsertBottleOxygen() {
        let menuOxygene = game.clearInterface("AJOUTER UNE BOUTEILLE");
        let msgLoading = document.createElement("div");
        msgLoading.setAttribute("id", "msgLoading");
        msgLoading.setAttribute("onclick", "game.addBottleOxygen()");
        msgLoading.setAttribute("class", "itemClicablePDA");
        msgLoading.innerText = "\n En attente d'une \n bouteille d'oxygene...";
        let loadingIcone = document.createElement("div");
        loadingIcone.setAttribute("id", "loadingIcone");
        loadingIcone.innerText = "||||||||";
        menuOxygene.appendChild(msgLoading);
        menuOxygene.appendChild(loadingIcone);
        let boutonRetour = document.createElement("div");
        boutonRetour.setAttribute("id", "retour");
        boutonRetour.setAttribute("onclick", "game.menuReloadOxygen()");
        boutonRetour.innerText = "Retour";
        menuOxygene.appendChild(boutonRetour);
    }

    addBottleOxygen() {
        let retour = document.getElementById("retour");
        retour.style.visibility = "hidden";
        let loadingIcone = document.getElementById("loadingIcone");
        loadingIcone.style.color = "cyan";
        loadingIcone.innerText = "Bouteille ajoutee";
        loadingIcone.style.animationName = "none";
        setTimeout(function () {
            loadingIcone.style.color = "yellow";
            loadingIcone.innerText = "Ajout de la bouteille au stock...";
            let audio = new Audio('./audio/lecture.mp3');
            audio.play();
        }, 1000);

        setTimeout(function () {
            if (game.vaisseau.leaks[0] > 0) {
                let audio = new Audio('./audio/bip6.wav');
                audio.play();
                loadingIcone.style.color = "green";
                loadingIcone.innerText = "Succes !";
                game.vaisseau.addBottleOxygen(new Oxygen());

                game.vaisseau.setLeaks(0, parseInt(Math.random() * (12 - 4) + 4));
            } else {
                let audio = new Audio('./audio/bip9.wav');
                audio.play();
                loadingIcone.style.color = "red";
                loadingIcone.innerText = "Erreur, conduit endommage";
            }

        }, 5000);
        setTimeout(function () { game.menuInsertBottleOxygen(); }, 8000);
    }

    animFrameOxygen() {
        let bouteille = document.getElementById("bouteille");
        if (bouteille) {
            let msgLoading = document.getElementById("msgChargementOxygene");
            if (game.vaisseau.leaks[1] === 0) {
                msgLoading.style.color = "red";
                msgLoading.style.animationName = "none";
                msgLoading.innerText = "Une erreur est survenue, le conduit est probablement endommage";
                let audio = new Audio('./audio/bip5.wav');
                game.vaisseau.oxygenFrame++;
                bouteille.remove();
                audio.play();
                return;
            }
            if (game.vaisseau.oxygen > game.vaisseau.oxygenMax) {
                msgLoading.style.color = "red";
                msgLoading.style.animationName = "none";
                msgLoading.innerText = "Une erreur est survenue, le reservoir d'oxygene est plein";
                let audio = new Audio('./audio/bip5.wav');
                audio.play();
                game.vaisseau.oxygenFrame++;
                bouteille.remove();
                game.vaisseau.useBottleOxygen(bouteille.getAttribute("idBouteille"));
                return;
            }
            bouteille.setAttribute("src", "img/oxy" + game.vaisseau.oxygenFrame + ".png");
            if (game.vaisseau.oxygenFrame <= 0 && game.vaisseau.oxygen < game.vaisseau.oxygenMax) {
                game.vaisseau.useBottleOxygen(bouteille.getAttribute("idBouteille"));
                bouteille.remove();
                msgLoading.style.color = "green";
                msgLoading.style.animationName = "none";
                msgLoading.innerText = "TERMINE";
                let audio = new Audio('./audio/bip7.wav');
                audio.play();
                game.vaisseau.oxygenFrame = -1;
            } else if (game.vaisseau.oxygenFrame != -1) {
                bouteille.setAttribute("oxy", "" + game.vaisseau.oxygenFrame + "")
                game.vaisseau.oxygenFrame--;
                game.vaisseau.oxygen += 100;
            }
        }
    }

    updateOxygen() {
        let barre = document.getElementById('barre-oxygen');
        if (game.vaisseau.oxygen !== 0) {
            if (game.vaisseau.oxygen < game.vaisseau.oxygenMax) {
                barre.style.width = (game.vaisseau.oxygen / 20) + "px";
            } else {
                barre.style.width = document.getElementById("barre-vide").offsetWidth + "px";
            }

            document.getElementById('oxygen-nb').innerText = game.vaisseau.oxygen;
            if (game.vaisseau.oxygen >= 60) barre.style.backgroundColor = "cyan";
            if (game.vaisseau.oxygen >= 30) barre.style.backgroundColor = "orange";
            if (game.vaisseau.oxygen >= 0) barre.style.backgroundColor = "red";
        }
    }

    updateJaugeOxygen() {
        if (document.getElementById("qteOxygene")) {
            document.getElementById("qteOxygene").innerText = game.vaisseau.oxygen;
        }
    }

    initPDA() {
        game.gps.nbInstructions = (Math.random() * (1 - 2) + 2);
        game.gps.idInstruction = 0;
        document.getElementById("oxygen-nb").innerText = game.vaisseau.oxygen;
        game.nextInstruction();
        for (let i = 0; i < game.vaisseau.leaks.length; i++) {
            game.vaisseau.leaks[i] = 100;
        }
        for (let i = 0; i < 10; i++) {
            game.vaisseau.updates[i] = null;
        }
        game.vaisseau.usage = 0;
        game.vaisseau.batteries[0] = 90000;
        game.vaisseau.batteries[1] = 4000;
        game.vaisseau.batteries[2] = 40000;
        game.vaisseau.batteriesMax[0] = 100000;
        game.vaisseau.batteriesMax[1] = 10000;
        game.vaisseau.batteriesMax[2] = 60000;
        game.vaisseau.temperature = 19;
        game.vaisseau.climPower = 50;
        game.menuOxygen();
    }
    nextInstruction() {
        document.getElementById("imgPDA2").setAttribute("src", "img/loading.gif");
        document.getElementById("imgPDA2").setAttribute("width", "250px");
        document.getElementById("imgPDA2").setAttribute("height", "150px");
        game.gps.x = parseInt(Math.random() * (19500 - 1500) + 1500);
        game.gps.y = parseInt(Math.random() * (19500 - 1500) + 1500);
        game.gps.distance = Math.sqrt(((game.vaisseau.x - game.gps.x) * (game.vaisseau.x - game.gps.x)) + ((game.vaisseau.y - game.gps.y) * (game.vaisseau.y - game.gps.y)));
        game.gps.distance = parseInt(game.gps.distance);
        game.gps.distance = Math.ceil(game.gps.distance / 100) * 100
        game.updatePDA();
    }
    configDebitDiffuseur() {
        let menuOxygene = game.clearInterface("Regler le debit \n du diffuseur \n \n");
        let item1 = document.createElement("input");
        item1.setAttribute("class", "form-range");
        item1.setAttribute("id", "jaugeDiffuseur");
        item1.setAttribute("onmouseup", "Game.prototype.configDiffuseur(event)");
        item1.setAttribute("min", "20");
        item1.setAttribute("max", "100");
        item1.setAttribute("step", "10");
        item1.setAttribute("type", "range");
        item1.setAttribute("value", game.vaisseau.oxygenDebit);
        item1.setAttribute("list", "reglageDiffuseur");
        item1.innerText = "Choisissez le debit du diffuseur";
        let item2 = document.createElement("datalist");
        item2.setAttribute("id", "reglageDiffuseur");
        let item2A = document.createElement("option");
        item2A.setAttribute("value", "90");
        item2A.setAttribute("label", "Risque de perte de vie");
        let item3 = document.createElement("div");
        item3.setAttribute("id", "textePertes");
        item3.style.textAlign = "center";
        item3.setAttribute("class", "itemClicablePDA");
        item3.style.color = "cyan";
        item3.style.fontSize = "24px";
        item3.innerText = "PERTES D'OXYGENE CUMULEES:";
        let item4 = document.createElement("div");
        item4.setAttribute("id", "scan");
        item4.innerText = "Lancer un scan des pertes";
        item4.style.textAlign = "center";
        item4.setAttribute("class", "itemClicablePDA");
        item4.setAttribute("onclick", "game.scanLoses()");
        let boutonRetour = document.createElement("div");
        boutonRetour.setAttribute("id", "retour");
        boutonRetour.setAttribute("onclick", "game.menuReloadOxygen()");
        boutonRetour.innerText = "Retour";
        document.getElementById("oxygeneTitre").appendChild(item1);
        menuOxygene.appendChild(item2);
        menuOxygene.innerHTML += ("<br>");
        menuOxygene.appendChild(item3);
        menuOxygene.innerHTML += ("<br>");
        menuOxygene.appendChild(item4);
        menuOxygene.innerHTML += ("<br>");
        menuOxygene.appendChild(boutonRetour);
        game.configDiffuseur(null);
    }

    configDiffuseur(event) {
        let value = event ? event.target.value : game.vaisseau.oxygenDebit;

        if (value <= 30) document.getElementById("jaugeDiffuseur").style.backgroundColor = "red";
        if (value <= 60) document.getElementById("jaugeDiffuseur").style.backgroundColor = "orange";

        game.vaisseau.oxygenDebit = value;
    }

    scanLoses() {
        let loading = document.getElementById("scan");
        loading.setAttribute("id", "loadingIcone")
        loading.style.textAlign = "center";
        loading.innerText = "Scan en cours...";
        let audio = new Audio('./audio/lecture.mp3');
        audio.play();
        setTimeout(function () {
            document.getElementById("loadingIcone").setAttribute("id", "pertes");
            game.updateLeaks();
        }, 3000)

    }

    updateLeaks() {
        if (document.getElementById("pertes")) {
            document.getElementById("pertes").innerText = game.vaisseau.updateLeaks();
        }
    }

    fixLeak(num) {
        if (game.vaisseau.leaks[num] >= game.vaisseau.lifeLeak && document.getElementById("fuite" + (num + 1)) != null) {
            game.vaisseau.leaks[num] = game.vaisseau.lifeLeak;
            game.vaisseau.oxygenRepair[num] = false;
            document.getElementById("fuite" + (num + 1)).innerText = "";
            document.getElementById("fuite" + (num + 1)).style = null;
            document.getElementById("fuite" + (num + 1)).style.opacity = "0%";
        }
        if ((game.vaisseau.oxygenRepair[num] && game.vaisseau.leaks[num] !== 0) || (game.vaisseau.oxygenRepairLongMode)) {
            if (game.vaisseau.oxygenRepairLongMode && parseInt(Math.random() * (6 - 1) + 1) === 2) {
                game.vaisseau.leaks[num] = game.vaisseau.leaks[num] + game.vaisseau.oxygenRepairLong;
            } else if (!game.vaisseau.oxygenRepairLongMode) {
                game.vaisseau.leaks[num] = game.vaisseau.leaks[num] + 10;
                let audio = new Audio('./audio/metal.wav');
                audio.play();
            }
            if (game.vaisseau.leaks[num] <= game.vaisseau.lifeLeak) {
                document.getElementById("fuite" + (num + 1)).innerText = ((Math.round(game.vaisseau.leaks[num]) * 10) / 10) + " %";
            }
        }
    }

    showCanalisations() {
        let menuOxygene = game.clearInterface("Consulter les canalisation");
        let map = document.createElement("div");
        map.setAttribute("id", "mapCanalisations");
        let divFuite1 = document.createElement("div");
        divFuite1.setAttribute("id", "fuite1");
        divFuite1.setAttribute("class", "fuite");
        let divFuite2 = document.createElement("div");
        divFuite2.setAttribute("id", "fuite2");
        divFuite2.setAttribute("class", "fuite");

        if (game.vaisseau.leaks[0] < game.vaisseau.lifeLeak) {
            divFuite1.innerText = game.vaisseau.leaks[0] + " %";
            divFuite1.style.backgroundColor = "cyan";
            divFuite1.setAttribute("onclick", "game.vaisseau.oxygenRepair[0] = true");
        }
        if (game.vaisseau.leaks[0] === 0) {
            divFuite1.innerText = "";
            divFuite1.style.backgroundImage = "url(./img/croix.png)";
            divFuite1.style.opacity = "100%";
        }
        if (game.vaisseau.leaks[1] < game.vaisseau.lifeLeak) {
            divFuite2.innerText = game.vaisseau.leaks[1] + " %";
            divFuite2.style.backgroundColor = "cyan";
            divFuite2.setAttribute("onclick", "game.vaisseau.oxygenRepair[1] = true");
        }
        if (game.vaisseau.leaks[1] === 0) {
            divFuite2.innerText = "";
            divFuite2.style.backgroundImage = "url(./img/croix.png)";
            divFuite2.style.opacity = "100%";
        }

        let boutonRetour = document.createElement("div");
        let item1 = document.createElement("div");
        item1.setAttribute("class", "itemClicablePDA");
        item1.setAttribute("id", "reparationLongue");
        item1.setAttribute("onclick", "game.vaisseau.oxygenRepairLongMode = true");
        item1.style.textAlign = "center";
        item1.innerText = "Lancer une reparation complete";
        boutonRetour.setAttribute("id", "retour2");
        boutonRetour.setAttribute("onclick", "game.menuReloadOxygen()");
        boutonRetour.innerText = "Retour";
        map.appendChild(divFuite1);
        map.appendChild(divFuite2);
        menuOxygene.appendChild(map);
        if (game.vaisseau.leaks[0] === 0 || game.vaisseau.leaks[1] === 0) {
            menuOxygene.appendChild(item1);
        }
        menuOxygene.appendChild(boutonRetour);
    }

    menuInstallUpdatesOxygen() {
        let menuOxygene = game.clearInterface("Faire des mises \n a jour \n \n")
        let item = null;
        let libelleMisesAJours = ["Augmenter la capacite du reservoir (1)", "Augmenter la capacite du reservoir (2)",
            "Reparation totale plus rapide (1)", "Reparation totale plus rapide (2)",
            "Canalisations resistantes (1)", "Canalisations resistantes (2)"];
        for (let i = 0; i < libelleMisesAJours.length; i++) {
            item = document.createElement("div");
            item.setAttribute("class", "miseAJourPDA1");
            let itemA = document.createElement("div");
            itemA.setAttribute("class", "itemClicablePDA")
            itemA.innerText = libelleMisesAJours[i];
            itemA.style.float = "left";
            let itemB = document.createElement("div");
            itemB.setAttribute("class", "miseAJourPDA2")
            itemB.setAttribute("id", "miseAJour" + i)
            itemB.setAttribute("onclick", "game.updateUpdatesOxygen2(" + i + ")")
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
        boutonRetour.setAttribute("onclick", "game.menuReloadOxygen()")
        boutonRetour.innerText = "Retour"
        item.appendChild(boutonRetour);

        for (let i = 0; i < game.vaisseau.updates.length; i++) {
            if (game.vaisseau.updates[i] != null) {
                game.updateUpdatesOxygen2(i);
                game.updateUpdatesOxygen(i);
            }
        }
    }

    updateUpdatesOxygen(j) {
        if (game.vaisseau.updates[j] < 100 && game.vaisseau.updates[j] != null) {
            if (document.getElementById("miseAJour" + j)) {
                document.getElementById("miseAJour" + j).innerText = "(";
            }
            for (let i = 0; i < game.vaisseau.updates[j]; i++) {
                if (i % 5 === 0) {
                    if (document.getElementById("miseAJour" + j)) {
                        document.getElementById("miseAJour" + j).style.color = "yellow";
                        document.getElementById("miseAJour" + j).innerText += "1";
                    }
                }
            }
            if (document.getElementById("miseAJour" + j)) {
                document.getElementById("miseAJour" + j).style.color = "orange";
            }
            for (let k = game.vaisseau.updates[j]; k < 100; k++) {
                if (k % 5 === 0) {
                    if (document.getElementById("miseAJour" + j)) {
                        document.getElementById("miseAJour" + j).innerText += ".";
                    }
                }
            }
            if (document.getElementById("miseAJour" + j)) {
                document.getElementById("miseAJour" + j).innerText += ")";
            }
            game.vaisseau.updates[j]++;
            if (game.vaisseau.updates[j] === 100) {
                if (document.getElementById("miseAJour" + j)) {
                    document.getElementById("miseAJour" + j).style.color = "greenyellow";
                    document.getElementById("miseAJour" + j).onclick = null;
                    document.getElementById("miseAJour" + j).innerText = "[ FAIT ]";
                }
                let audio = new Audio('./audio/bip3.wav');
                audio.play();
                if (j === 0 || j === 1) {
                    game.vaisseau.oxygenMax += 500;
                    document.getElementById("barre-vide").style.width = ((game.vaisseau.oxygenMax) / 20) + "px";
                }
                else if (j === 2) game.vaisseau.oxygenRepairLong = 3;
                else if (j === 3) game.vaisseau.oxygenRepairLong = 5;
                else if (j === 4 || j === 5) {
                    game.vaisseau.lifeLeak += 50;
                    for (let i = 0; i < game.vaisseau.leaks.length; i++) {
                        game.vaisseau.leaks[i] = game.vaisseau.lifeLeak;
                    }
                }
            }
        }
    }

    updateUpdatesOxygen2(i) {
        let event = document.getElementById("miseAJour" + i)
        event.style.color = "orange";
        event.style.fontSize = "20px";
        event.style.background = "none";
        event.innerText = "(....................)";
        if (!game.vaisseau.updates[i]) game.vaisseau.updates[i] = 0;
        else if (game.vaisseau.updates[i] === 100) {
            document.getElementById("miseAJour" + i).style.color = "greenyellow";
            document.getElementById("miseAJour" + i).onclick = null;
            document.getElementById("miseAJour" + i).innerText = "[ FAIT ]";
        }
    }

    analysePDA() {
        game.vaisseau.usage = 35;
        game.vaisseau.batteries[game.vaisseau.batteryActive] -= 35;
        if (game.vaisseau.detectionAsteroide) {
            game.vaisseau.usage += 10;
            game.vaisseau.batteries[game.vaisseau.batteryActive] -= 10;
        }
        if (game.vaisseau.clim) {
            game.vaisseau.usage += 10;
            game.vaisseau.batteries[game.vaisseau.batteryActive] -= 10;
        }
        if (game.vaisseau.usage > 40) game.vaisseau.heatAugment = 100 - game.vaisseau.usage;

        if (game.vaisseau.batteries[game.vaisseau.batteryActive] < 0) {
            game.vaisseau.batteries[game.vaisseau.batteryActive] = 0;
        }
        if (game.vaisseau.shieldActive) {
            game.vaisseau.shieldLife -= 1;
            game.vaisseau.shieldPower = 5;
        }
        if (game.vaisseau.shieldLife < 0) {
            game.vaisseau.shieldLife = 0;
            game.vaisseau.modules[1] = false;
            game.vaisseau.shieldActive = false;
        }

        if (game.vaisseau.oxygenFrame >= 0) {
            setInterval(game.animFrameOxygen(game.vaisseau.oxygenFrame), 300)
            setInterval(game.updateUpdatesOxygen(game.vaisseau.oxygenFrame), 300)
            setInterval(game.updateJaugeOxygen(game.vaisseau.oxygenFrame), 300)
        }

        game.vaisseau.oxygen -= Math.round((game.vaisseau.oxygenDebit) / 40);

        if (game.vaisseau.oxygen % 1 === 0) {
            setInterval(game.updateOxygen(), 3000)
            setInterval(game.updateJaugeOxygen(), 3000)
        }
        if (game.vaisseau.dlMod) {
            this.download2();
        }
        for (let i = 0; i < game.vaisseau.updates.length; i++) {
            setInterval(game.updateUpdatesOxygen(i), 8000)
        }

        let ok = false;

        if (game.vaisseau.oxygenRepairLongMode) {
            document.getElementById("retour2").style.visibility = "hidden";
            for (let i = 0; i < game.vaisseau.leaks.length; i++) {
                if (game.vaisseau.leaks[i] <= game.vaisseau.lifeLeak) {
                    setInterval(game.fixLeak(i), 10000)
                    ok = true;
                }

            }
            if (!ok) {
                if (document.getElementById("reparationLongue")) {
                    document.getElementById("reparationLongue").remove();
                }
                game.vaisseau.oxygenRepairLongMode = false;
            }
        } else {
            if (document.getElementById("retour2")) {
                document.getElementById("retour2").style.visibility = "visible";
            }
            for (let i = 0; i < game.vaisseau.oxygenRepair.length; i++) {
                setInterval(game.fixLeak(i), 500);
            }
        }
    }

    clearInterface(titre) {
        clearInterval(game.thread);
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

    updateHeat() {
        for (let i = 0; i < 60; i++) {
            if (i % game.vaisseau.heatAugment === 0) game.vaisseau.heat++
        }
    }

    verifClim() {
        if (game.vaisseau.clim) {
            for (let i = 0; i < 99; i++) {
                if (i % (100 - parseInt(game.vaisseau.climPower / 2)) === 0 && game.vaisseau.climPower > 0) {
                    game.vaisseau.heat--;
                }
            }
        }
    }

    enableAsteroidesDetection() {
        if (document.getElementById("activationDetectionAsteroide")) {
            document.getElementById("activationDetectionAsteroide").remove();
        }

        document.getElementById("mapAsteroide").style.visibility = "visible";
        document.getElementById("msgPDA3").style.visibility = "visible";

        if (!document.getElementById("mapAsteroideVaisseau")) {
            let vaisseauMap = document.createElement("div");
            vaisseauMap.setAttribute("id", "mapAsteroideVaisseau");
            vaisseauMap.style.width = (8) + "px";
            vaisseauMap.style.height = (8) + "px";
            document.getElementById("mapAsteroide").appendChild(vaisseauMap);
        }
    }

    energyRedirect() {
        document.getElementById("navigation-tab").setAttribute("class", "nav-link");
        document.getElementById("oxygen-tab").setAttribute("class", "nav-link active");
        document.getElementById("navigation").setAttribute("class", "tab-pane fade");
        document.getElementById("oxygen").setAttribute("class", "tab-pane fade show active");
        game.viewModule("Dectection asteroides", 0);
    }

    interactModule(i, interact, libelle) {
        switch (i) {
            case 0:
                if (!interact) {
                    game.vaisseau.detectionAsteroide = true;
                    game.vaisseau.modules[i] = true;
                } else {
                    game.vaisseau.detectionAsteroide = false;
                    game.vaisseaum.modules[i] = false;
                }

                break;
            case 1:
                if (!interact) {
                    game.vaisseau.clim = true;
                    game.vaisseau.modules[i] = true;
                } else {
                    game.vaisseau.clim = false;
                    game.vaisseau.modules[i] = false;
                }

                break;
            case 2:
                if (!interact) {
                    game.vaisseau.shieldActive = true;
                    game.vaisseau.modules[i] = true;
                } else {
                    game.vaisseau.shieldActive = false;
                    game.vaisseau.modules[i] = false;
                }

                break;
        }
        game.viewModule(libelle, i)
    }
    viewModule(libelleModule, i) {
        // game.clearInterval(game.thread);
        let menu = game.clearInterface(libelleModule);
        let item = document.createElement("div");
        item.setAttribute("class", "miseAJourPDA1");
        let itemA = document.createElement("div");
        itemA.setAttribute("class", "itemClicablePDA");
        itemA.setAttribute("id", "switch");
        itemA.style.float = "right";
        itemA.style.fontSize = "24px";
        itemA.setAttribute("onclick", "Game.prototype.interactModule(" + i + "," + game.vaisseau.modules[i] + ",'" + libelleModule + "')");
        let itemB = document.createElement("div");
        itemB.setAttribute("class", "itemClicablePDA");
        itemB.innerText = "Activer ce module";

        if (!game.vaisseau.modules[i]) itemA.setAttribute("class", "fas fa-toggle-off itemClicablePDA");
        else itemA.setAttribute("class", "fas fa-toggle-on itemClicablePDA");

        itemB.style.float = "left";
        item.innerHTML += "<br>";
        item.appendChild(itemB);
        item.appendChild(itemA);
        menu.appendChild(item);

        if (libelleModule === "Bouclier") {
            let item0 = document.createElement("div");
            item0.setAttribute("class", "itemClicablePDA");
            item0.setAttribute("onclick", "game.reloadShieldMenu()");
            item0.innerText = "Recharger le bouclier";
            menu.innerHTML += " <br><br>";
            menu.appendChild(item0);
        }

        if (libelleModule === "Climatisation") {
            let item1 = document.createElement("span")
            item1.setAttribute("id", "iconeTemperature");
            let item2 = document.createElement("span")
            item2.setAttribute("id", "valTemperature");
            game.thread = setInterval(function () {
                if (game.vaisseau.heat >= 35) {
                    document.getElementById("iconeTemperature").setAttribute("class", "fas fa-thermometer-full");
                    document.getElementById("iconeTemperature").style.color = "red";
                    document.getElementById("valTemperature").style.color = "red"
                }
                if (game.vaisseau.heat < 35) {
                    document.getElementById("iconeTemperature").setAttribute("class", "fas fa-thermometer-three-quarters");
                    document.getElementById("iconeTemperature").style.color = "oangered";
                    document.getElementById("valTemperature").style.color = "orangered"
                }
                if (game.vaisseau.heat < 26) {
                    document.getElementById("iconeTemperature").setAttribute("class", "fas fa-thermometer-half");
                    document.getElementById("iconeTemperature").style.color = "lightcoral";
                    document.getElementById("valTemperature").style.color = "lightcoral"
                }
                if (game.vaisseau.heat < 22) {
                    document.getElementById("iconeTemperature").setAttribute("class", "fas fa-thermometer-quarter");
                    document.getElementById("iconeTemperature").style.color = "cyan";
                    document.getElementById("valTemperature").style.color = "cyan"
                }
                if (game.vaisseau.heat < 18) {
                    document.getElementById("iconeTemperature").setAttribute("class", "fas fa-thermometer-empty")
                    document.getElementById("iconeTemperature").style.color = "blue";
                    document.getElementById("valTemperature").style.color = "blue"
                }
                document.getElementById("valTemperature").innerText = game.vaisseau.heat + " °C";
            }, 500)
            let item3 = document.createElement("div")
            item3.setAttribute("id", "jaugePuissanceClimatisationDiv");
            let item3A = document.createElement("span")
            item3A.setAttribute("id", "moinsPuissanceClimatisation");
            item3A.setAttribute("class", "fas fa-minus-square");
            item3A.setAttribute("onclick", "game.lessPowerClim()");
            let item3B = document.createElement("span")
            item3B.setAttribute("id", "plusPuissanceClimatisation");
            item3B.setAttribute("class", "fas fa-plus-square");
            item3B.setAttribute("onclick", "game.morePowerClim()");
            let item3C = document.createElement("div")
            item3C.setAttribute("id", "jaugePuissanceClimatisation");
            item3C.innerText = game.vaisseau.climPower + " %";
            item3.appendChild(item3A);
            item3.appendChild(item3C);
            item3.appendChild(item3B);
            menu.innerHTML += "<br><br>";
            menu.appendChild(item1);
            menu.innerHTML += "<br>";
            menu.appendChild(item2);
            menu.innerHTML += "<br><br>";
            menu.appendChild(item3);
        }

        let boutonRetour = document.createElement("div");
        boutonRetour.setAttribute("id", "retour")
        boutonRetour.setAttribute("onclick", "game.menuManageEnergy()")
        boutonRetour.innerText = "Retour"
        document.getElementById("oxygeneTitre").appendChild(boutonRetour);
    }

    morePowerClim() {
        game.vaisseau.climPower += 50;

        if (game.vaisseau.climPower === 100) {
            document.getElementById("plusPuissanceClimatisation").style.visibility = "hidden";
        }
        document.getElementById("moinsPuissanceClimatisation").style.visibility = "visible";
        document.getElementById("jaugePuissanceClimatisation").innerText = game.vaisseau.climPower+" %";
    }

    lessPowerClim() {
        game.vaisseau.climPower -= 50;
        if (game.vaisseau.climPower === 0) {
            document.getElementById("moinsPuissanceClimatisation").style.visibility = "hidden";
        }
        document.getElementById("plusPuissanceClimatisation").style.visibility = "visible";
        document.getElementById("jaugePuissanceClimatisation").innerText = game.vaisseau.climPower+" %";
    }

    gererBatteries() {
        let menu = game.clearInterface("Gerer les batteries")
        menu.style.display = "grid";
        for (let i = 0; i < game.vaisseau.batteries.length; i++) {
            let item1 = document.createElement("div");
            item1.setAttribute("id", "indicateurBatterie" + i);
            item1.setAttribute("class", "indicateurBatterie");
            item1.setAttribute("onclick", "game.vaisseau.batteryActive = " + i + "");
            item1.style.float = "left";
            let item1A = document.createElement("div");
            item1A.setAttribute("id", "indicateurBatterieA" + i);
            item1A.setAttribute("class", "indicateurBatterieA");
            item1A.innerText = "(";
            let item1B = document.createElement("div");
            item1B.setAttribute("id", "indicateurBatterieB" + i);
            item1B.setAttribute("class", "indicateurBatterieB");
            item1B.innerText = "";
            item1B.style.color = "yellow";
            let item1C = document.createElement("div");
            item1C.setAttribute("id", "indicateurBatterieC" + i);
            item1C.setAttribute("class", "indicateurBatterieC");
            let item1D = document.createElement("div");
            item1D.setAttribute("id", "indicateurBatterieA" + i);
            item1D.setAttribute("class", "indicateurBatterieA");
            item1D.innerText = ")";
            item1.appendChild(item1A);
            item1.appendChild(item1B);
            item1.appendChild(item1C);
            item1.appendChild(item1D);
            menu.appendChild(item1);
        }

        let item3 = document.createElement("div");
        item3.setAttribute("class", "itemClicablePDA");
        item3.setAttribute("onclick", "game.reloadShieldMenu()");
        item3.innerText = "Transferer de l'energie";
        this.thread = setInterval(this.updateCurrentBattery.bind(this), 300)
        menu.appendChild(item3)
        let boutonRetour = document.createElement("div");
        boutonRetour.setAttribute("id", "retour")
        boutonRetour.setAttribute("onclick", "game.menuManageEnergy()")
        boutonRetour.innerText = "Retour"
        menu.appendChild(boutonRetour)
    }
    updateCurrentBattery() {
        for (let i = 0; i < game.vaisseau.batteries.length; i++) {
            let res = game.updateJaugeEnergie(i)
            let texte = res[0];
            let texte2 = res[1];

            if (game.vaisseau.batteryActive === i) {
                document.getElementById("indicateurBatterie" + i).style.border = "blue 2px solid";
            } else if (document.getElementById("indicateurBatterie" + i)){
                document.getElementById("indicateurBatterie" + i).style.border = "";
            }

            document.getElementById("indicateurBatterieB" + i).innerText = texte;
            document.getElementById("indicateurBatterieC" + i).innerText = texte2;

            if (game.vaisseau.batteries[i] > 0) {
                document.getElementById("indicateurBatterieB" + i).style.color = "red";
            }
            if (game.vaisseau.batteries[i] > (0.2 * game.vaisseau.batteriesMax[i])) {
                document.getElementById("indicateurBatterieB" + i).style.color = "orange";
            }
            if (game.vaisseau.batteries[i] > (0.4 * game.vaisseau.batteriesMax[i])) {
                document.getElementById("indicateurBatterieB" + i).style.color = "yellow";
            }
            if (game.vaisseau.batteries[i] > (0.6 * game.vaisseau.batteriesMax[i])) {
                document.getElementById("indicateurBatterieB" + i).style.color = "greenyellow";
            }
            if (game.vaisseau.batteries[i] > (0.8 * game.vaisseau.batteriesMax[i])) {
                document.getElementById("indicateurBatterieB" + i).style.color = "green";
            }
        }
    }

    menuManageEnergy() {
        let menu = game.clearInterface("Gerer l'energie")
        menu.style.display = "";

        let item1 = document.createElement("div");
        item1.setAttribute("id", "indicateurBatterie" + game.vaisseau.batteryActive);
        item1.setAttribute("class", "indicateurBatterie2");
        item1.setAttribute("onclick", "game.vaisseau.batteryActive = 0");
        let item1A = document.createElement("div");
        item1A.setAttribute("id", "indicateurBatterieA" + game.vaisseau.batteryActive);
        item1A.setAttribute("class", "indicateurBatterieA");
        item1A.innerText = "(";
        let item1B = document.createElement("div");
        item1B.setAttribute("id", "indicateurBatterieB" + game.vaisseau.batteryActive);
        item1B.setAttribute("class", "indicateurBatterieB");
        item1B.innerText = "";
        item1B.style.color = "yellow";
        let item1C = document.createElement("div");
        item1C.setAttribute("id", "indicateurBatterieC" + game.vaisseau.batteryActive);
        item1C.setAttribute("class", "indicateurBatterieC");
        let item1D = document.createElement("div");
        item1D.setAttribute("id", "indicateurBatterieA" + game.vaisseau.batteryActive);
        item1D.setAttribute("class", "indicateurBatterieA");
        item1D.innerText = ")";
        item1.appendChild(item1A);
        item1.appendChild(item1B);
        item1.appendChild(item1C);
        item1.appendChild(item1D);
        menu.appendChild(item1);

        let item2 = document.createElement("div");
        item2.setAttribute("id", "itemAffichage");
        item2.setAttribute("class", "itemClicablePDA");
        item2.innerText = "Affichage : 35%";

        let item7 = document.createElement("div");
        item7.setAttribute("id", "itemAffichage");
        item7.setAttribute("class", "itemClicablePDA");
        item7.setAttribute("onclick", "game.manageBatteries()");
        item7.innerText = "Gerer les batteries";

        let boutonRetour = document.createElement("div");
        boutonRetour.setAttribute("id", "retour")
        boutonRetour.setAttribute("onclick", "game.menuOxygen()")
        boutonRetour.innerText = "Retour"
        let res = game.updateJaugeEnergie(game.vaisseau.batteryActive);
        let texte = res[0];
        let texte2 = res[1];

        document.getElementById("indicateurBatterieB" + game.vaisseau.batteryActive).innerText = texte;
        document.getElementById("indicateurBatterieC" + game.vaisseau.batteryActive).innerText = texte2;
        if (game.vaisseau.batteries[game.vaisseau.batteryActive] > 0) {
            document.getElementById("indicateurBatterieB" + game.vaisseau.batteryActive).style.color = "red";
        }
        if (game.vaisseau.batteries[game.vaisseau.batteryActive] > (0.2 * game.vaisseau.batteriesMax[game.vaisseau.batteryActive])) {
            document.getElementById("indicateurBatterieB" + game.vaisseau.batteryActive).style.color = "orange";
        }
        if (game.vaisseau.batteries[game.vaisseau.batteryActive] > (0.4 * game.vaisseau.batteriesMax[game.vaisseau.batteryActive])) {
            document.getElementById("indicateurBatterieB" + game.vaisseau.batteryActive).style.color = "yellow";
        }
        if (game.vaisseau.batteries[game.vaisseau.batteryActive] > (0.6 * game.vaisseau.batteriesMax[game.vaisseau.batteryActive])) {
            document.getElementById("indicateurBatterieB" + game.vaisseau.batteryActive).style.color = "greenyellow";
        }
        if (game.vaisseau.batteries[game.vaisseau.batteryActive] > (0.8 * game.vaisseau.batteriesMax[game.vaisseau.batteryActive])) {
            document.getElementById("indicateurBatterieB" + game.vaisseau.batteryActive).style.color = "green";
        }

        menu.innerHTML += "<br><br>";
        menu.appendChild(item7);
        menu.innerHTML += "<br><br>";
        menu.appendChild(item2);
        menu.innerHTML += "<br>";
        let libelleModules = ["Dectection asteroides", "Climatisation", "Bouclier"];

        game.vaisseau.modules[0] = game.vaisseau.detectionAsteroide;
        game.vaisseau.modules[1] = game.vaisseau.clim;
        game.vaisseau.modules[2] = game.vaisseau.shieldActive;

        let item = null;
        for (let i = 0; i < libelleModules.length; i++) {
            item = document.createElement("div");
            item.setAttribute("class", "miseAJourPDA1")
            let itemA = document.createElement("div");
            itemA.setAttribute("class", "itemClicablePDA")
            itemA.innerText = libelleModules[i];
            if (game.vaisseau.modules[i] && i !== 2) itemA.innerText += ": 10%";
            if (game.vaisseau.modules[i] && i === 2) itemA.innerText += ": Batterie individuelle";

            itemA.style.float = "left";
            let itemB = document.createElement("div");
            itemB.setAttribute("class", "miseAJourPDA2")
            itemB.setAttribute("id", "viewModule" + i)
            itemB.setAttribute("onclick", "game.viewModule('" + libelleModules[i] + "'," + i + ");");
            itemB.innerText = "consulter";
            itemB.style.float = "right";
            item.appendChild(itemA);
            item.appendChild(itemB);
            menu.appendChild(item);
            if (i < libelleModules.length - 1) item.innerHTML += "<br><br>";
        }

        item.innerHTML += "<br>"
        let item3 = document.createElement("div");
        item3.setAttribute("id", "jaugeVieBouclierDiv2");
        let item3A = document.createElement("div");
        item3A.setAttribute("id", "jaugeVieBouclier0");
        item3A.innerText = "(";
        let item3B = document.createElement("div");
        item3B.setAttribute("id", "jaugeVieBouclier1");
        item3B.innerText = "";
        let item3C = document.createElement("div");
        item3C.setAttribute("id", "jaugeVieBouclier2");
        item3C.innerText = "";
        let item3D = document.createElement("div");
        item3D.setAttribute("id", "jaugeVieBouclier0");
        item3D.innerText = ")";
        item3.appendChild(item3A)
        item3.appendChild(item3B)
        item3.appendChild(item3C)
        item3.appendChild(item3D)
        item.appendChild(item3)
        this.animJaugeShield();
        item.innerHTML += "<br><br>"
        item.appendChild(boutonRetour);
    }

    manageBatteries() {
        let menu = game.clearInterface("Gerer les batteries")
        menu.style.display = "grid";
        for (let i = 0; i < game.vaisseau.batteries.length; i++) {
            let item1 = document.createElement("div");
            item1.setAttribute("id", "indicateurBatterie" + i);
            item1.setAttribute("class", "indicateurBatterie");
            item1.setAttribute("onclick", "game.vaisseau.batteryActive = " + i + "");
            item1.style.float = "left";
            let item1A = document.createElement("div");
            item1A.setAttribute("id", "indicateurBatterieA" + i);
            item1A.setAttribute("class", "indicateurBatterieA");
            item1A.innerText = "(";
            let item1B = document.createElement("div");
            item1B.setAttribute("id", "indicateurBatterieB" + i);
            item1B.setAttribute("class", "indicateurBatterieB");
            item1B.innerText = "";
            item1B.style.color = "yellow";
            let item1C = document.createElement("div");
            item1C.setAttribute("id", "indicateurBatterieC" + i);
            item1C.setAttribute("class", "indicateurBatterieC");
            let item1D = document.createElement("div");
            item1D.setAttribute("id", "indicateurBatterieA" + i);
            item1D.setAttribute("class", "indicateurBatterieA");
            item1D.innerText = ")";
            item1.appendChild(item1A);
            item1.appendChild(item1B);
            item1.appendChild(item1C);
            item1.appendChild(item1D);
            menu.appendChild(item1);
        }

        let item3 = document.createElement("div");
        item3.setAttribute("class", "itemClicablePDA");
        item3.setAttribute("onclick", "game.reloadShieldMenu()");
        item3.innerText = "Transferer de l'energie";


        this.thread = setInterval(this.updateCurrentBattery.bind(this), 300)

        menu.appendChild(item3)
        let boutonRetour = document.createElement("div");
        boutonRetour.setAttribute("id", "retour")
        boutonRetour.setAttribute("onclick", "game.menuManageEnergy()")
        boutonRetour.innerText = "Retour"
        menu.appendChild(boutonRetour)
    }

    reloadShieldMenu() {
        let menu = game.clearInterface("Augmenter la puissance \n dediee au bouclier");
        let selection = -1;
        menu.style.display = "grid";
        for (let i = 0; i < game.vaisseau.batteries.length; i++) {
            if (i !== game.vaisseau.batteryActive) {
                let item1 = document.createElement("div");
                item1.setAttribute("id", "indicateurBatterie" + i);
                item1.setAttribute("class", "indicateurBatterie");
                item1.onclick = function () {
                    selection = i;
                    for (let j = 0; j < game.vaisseau.batteries.length; j++) {
                        if (j !== game.vaisseau.batteryActive) {
                            if (j === selection) {
                                document.getElementById("indicateurBatterie" + j).style.border = "2px blue solid";
                            } else {
                                document.getElementById("indicateurBatterie" + j).style.border = "";
                            }
                        }
                    }
                };
                item1.style.float = "left";
                let item1A = document.createElement("div");
                item1A.setAttribute("id", "indicateurBatterieA" + i);
                item1A.setAttribute("class", "indicateurBatterieA");
                item1A.innerText = "(";
                let item1B = document.createElement("div");
                item1B.setAttribute("id", "indicateurBatterieB" + i);
                item1B.setAttribute("class", "indicateurBatterieB");
                item1B.innerText = "";
                item1B.style.color = "yellow";
                let item1C = document.createElement("div");
                item1C.setAttribute("id", "indicateurBatterieC" + i);
                item1C.setAttribute("class", "indicateurBatterieC");
                let item1D = document.createElement("div");
                item1D.setAttribute("id", "indicateurBatterieA" + i);
                item1D.setAttribute("class", "indicateurBatterieA");
                item1D.innerText = ")";
                item1.appendChild(item1A);
                item1.appendChild(item1B);
                item1.appendChild(item1C);
                item1.appendChild(item1D);
                menu.appendChild(item1);
            }
        }


        for (let i = 0; i < game.vaisseau.batteries.length; i++) {
            if (i !== game.vaisseau.batteryActive) {
                let res = game.updateJaugeEnergie(i)
                let texte = res[0];
                let texte2 = res[1];

                document.getElementById("indicateurBatterieB" + i).innerText = texte;
                document.getElementById("indicateurBatterieC" + i).innerText = texte2;

                if (game.vaisseau.batteries[i] > 0) {
                    document.getElementById("indicateurBatterieB" + i).style.color = "red";
                }
                if (game.vaisseau.batteries[i] > (0.2 * game.vaisseau.batteriesMax[i])) {
                    document.getElementById("indicateurBatterieB" + i).style.color = "orange";
                }
                if (game.vaisseau.batteries[i] > (0.4 * game.vaisseau.batteriesMax[i])) {
                    document.getElementById("indicateurBatterieB" + i).style.color = "yellow";
                }
                if (game.vaisseau.batteries[i] > (0.6 * game.vaisseau.batteriesMax[i])) {
                    document.getElementById("indicateurBatterieB" + i).style.color = "greenyellow";
                }
                if (game.vaisseau.batteries[i] > (0.8 * game.vaisseau.batteriesMax[i])) {
                    document.getElementById("indicateurBatterieB" + i).style.color = "green";
                }
            }
        }

        let item1 = document.createElement("div");
        item1.setAttribute("id", "valeurBatterie3");
        setInterval(function () { item1.innerText = game.vaisseau.batteries[game.vaisseau.batteryActive] }, 100);
        let item2 = document.createElement("div");
        item2.setAttribute("id", "operationPuissanceBouclier");
        let item2A = document.createElement("div");
        item2A.setAttribute("id", "valeurEnergieDediee");
        game.thread = setInterval(function () {
            if (selection > -1) {
                item2A.innerText = game.vaisseau.batteries[selection];
                document.getElementById("ajoutBatterieBouclierSpan33").setAttribute("onclick", "game.improveShieldCapacity(true," + game.vaisseau.batteryActive + "," + selection + ")");
            } else item2A.innerText = "Choisir une batterie";
        }, 100);

        let item2B = document.createElement("div");
        item2B.setAttribute("id", "ajoutBatterieBouclierSpan11");
        item2B.setAttribute("class", "fas fa-plus");
        item2B.setAttribute("onclick", "Game.prototype.moreBatteryShield()");
        let item2C = document.createElement("div");
        item2C.setAttribute("id", "ajoutBatterieBouclierSpan22");
        item2C.setAttribute("class", "fas fa-minus");
        item2C.setAttribute("onclick", "Game.prototype.lessBatteryShield()");
        let item2D = document.createElement("div");
        item2D.setAttribute("id", "ajoutBatterieBouclierSpan33");
        item2D.setAttribute("class", "fas fa-check-circle");
        item2D.setAttribute("onclick", "Game.prototype.improveShieldCapacity(true," + game.vaisseau.batteryActive + "," + selection + ")");
        let item2E = document.createElement("div");
        item2E.setAttribute("id", "valBatterieAAjouter");
        item2E.innerText = "0";
        let boutonRetour = document.createElement("div");
        boutonRetour.setAttribute("id", "retour");
        boutonRetour.setAttribute("onclick", "Game.prototype.manageBatteries()");
        boutonRetour.innerText = "Retour";
        item2.appendChild(item2B);
        item2.appendChild(item2A);
        item2.appendChild(item2C);
        item2.appendChild(item2E);
        item2.appendChild(item2D);
        menu.appendChild(item1);
        menu.appendChild(item2);
        document.getElementById("oxygeneTitre").appendChild(boutonRetour);
    }
    lessBatteryShield() {
        let valBatterieAAjouter = parseInt(document.getElementById("valBatterieAAjouter").innerText)
        valBatterieAAjouter = valBatterieAAjouter - 20;
        if (valBatterieAAjouter < 0) {
            valBatterieAAjouter = 0;
        }
        document.getElementById("valBatterieAAjouter").innerText = valBatterieAAjouter
    }
    moreBatteryShield() {
        let valBatterieAAjouter = parseInt(document.getElementById("valBatterieAAjouter").innerText)
        valBatterieAAjouter = valBatterieAAjouter + 20;
        if (valBatterieAAjouter > game.vaisseau.batteries[game.vaisseau.batteryActive]) {
            valBatterieAAjouter = game.vaisseau.batteries[game.vaisseau.batteryActive];
        }
        document.getElementById("valBatterieAAjouter").innerText = valBatterieAAjouter;
    }

    transferEnergyInSheild() { setInterval(game.animJaugeShield(), 100) }

    animJaugeShield() {
        let valBatterieATransferer = -1;
        if (document.getElementById("valBatterieBouclier")) {
            valBatterieATransferer = parseInt(document.getElementById("valBatterieBouclier").innerText)
        }
        let cible2 = 0;
        let cible = 0;
        let chaine = "";
        let chaine2 = "";
        let msg = false;
        setInterval(function () {
            msg = false;
            if (game.vaisseau.shieldLife > game.vaisseau.shieldMax) {
                document.getElementById("msgBouclier").style.color = "red";
                document.getElementById("msgBouclier").innerText = "Erreur, la capacite du bouclier est insuffisante...";
                msg = true;
                game.vaisseau.shieldLife = game.vaisseau.shieldMax;
            }
            if (cible <= game.vaisseau.shieldLife) {
                chaine = "";
                for (let i = 0; i < cible; i++) {
                    if (i % 200 === 0) {
                        chaine += "1";
                    }
                }

                chaine2 = "";
                for (let i = cible; i < game.vaisseau.shieldMax; i++) {
                    if (i % 200 === 0) {
                        chaine2 += ".";
                    }
                }
                cible += 200;
            } else cible -= 200;

            if (valBatterieATransferer && document.getElementById("valBatterieBouclier") && cible2 < valBatterieATransferer) {
                game.vaisseau.shieldLife += 20;
            }
            if (document.getElementById("valBatterieBouclier") && valBatterieATransferer > 0 && cible2 < valBatterieATransferer) {
                if (!msg) {
                    document.getElementById("msgBouclier").style.color = "orange";
                    document.getElementById("msgBouclier").innerText = "Transfert en cours...";
                    msg = true
                }
                game.vaisseau.batteries[game.vaisseau.batteryActive] -= 20;
                cible2 = cible2 + 20;
                document.getElementById("valBatterieBouclier").innerText = (valBatterieATransferer - cible2)
            }
            if (document.getElementById("valBatterieBouclier") && valBatterieATransferer - cible2 === 0) {
                if (!msg && document.getElementById("msgBouclier")) {
                    document.getElementById("msgBouclier").style.color = "green";
                    document.getElementById("msgBouclier").innerText = "Succes";
                }
            }
            if (document.getElementById("jaugeVieBouclier1") && document.getElementById("jaugeVieBouclier2")) {
                document.getElementById("jaugeVieBouclier1").innerText = chaine;
                document.getElementById("jaugeVieBouclier2").innerText = chaine2;
            }
        }, 50);
    }

    improveShieldCapacity(boucle, i, j) {
        setInterval(function () {
            if (boucle) {
                if (parseInt(document.getElementById("valBatterieAAjouter").innerText) > 0 && game.vaisseau.batteries[j] < game.vaisseau.batteriesMax[j] && game.vaisseau.batteries[i] > 0) {
                    Game.prototype.lessBatteryShield();
                    game.vaisseau.batteries[i] = game.vaisseau.batteries[i] - 20;
                    game.vaisseau.batteries[j] = game.vaisseau.batteries[j] + 20;
                } else {
                    document.getElementById("valBatterieAAjouter").innerHTML = "0";
                    boucle = false;
                }
            }
        }, 100)
    }

    updateJaugeEnergie(j) {
        let aRenvoyer = ["", ""];
        for (let i = 0; i < game.vaisseau.batteries[j]; i++) {
            if (i % 2000 === 0) aRenvoyer[0] += "|";
        }
        for (let i = game.vaisseau.batteries[j]; i < game.vaisseau.batteriesMax[j]; i++) {
            if (i % 2000 === 0) aRenvoyer[1] += ".";
        }
        return aRenvoyer;
    }

    updateDirections() {
        let vitesseVaisseau = document.getElementById("vitesse-vaiseaux").innerText;
        document.getElementById("msgPDA").style.animationName = "none";
        document.getElementById("msgPDA").style.color = "cyan";
        if (game.gps.x < game.vaisseau.x && (game.vaisseau.x - game.gps.x) > parseInt(vitesseVaisseau) / 3.6) {
            document.getElementById("imgPDA2").setAttribute("src", "img/right.png");
            document.getElementById("imgPDA2").setAttribute("height", "60px");
            document.getElementById("imgPDA2").setAttribute("width", "100px");
            document.getElementById("msgPDA").innerText = "DISTANCE TOTALE : " + (game.gps.distance / 1000).toFixed(1) + " KILOMETRES \n DROITE SUR " + (game.vaisseau.x - game.gps.x) + " METRES \n PARTIE " + game.gps.idInstruction + " / " + parseInt(game.gps.nbInstructions)
        }
        if (game.gps.y < game.vaisseau.y && (game.vaisseau.y - game.gps.y) > parseInt(vitesseVaisseau) / 3.6) {
            document.getElementById("imgPDA2").setAttribute("src", "img/bottom.png");
            document.getElementById("imgPDA2").setAttribute("width", "60px");
            document.getElementById("imgPDA2").setAttribute("height", "100px");
            document.getElementById("msgPDA").innerText = "DISTANCE TOTALE : " + (game.gps.distance / 1000).toFixed(1) + " KILOMETRES \n EN ARRIERE SUR " + (game.vaisseau.y - game.gps.y) + " METRES \n PARTIE " + game.gps.idInstruction + " / " + parseInt(game.gps.nbInstructions)
        }
        if (game.gps.x > game.vaisseau.x && (game.gps.x - game.vaisseau.x) > parseInt(vitesseVaisseau) / 3.6) {
            document.getElementById("imgPDA2").setAttribute("src", "img/left.png");
            document.getElementById("imgPDA2").setAttribute("height", "60px");
            document.getElementById("imgPDA2").setAttribute("width", "100px");
            document.getElementById("msgPDA").innerText = "DISTANCE TOTALE : " + (game.gps.distance / 1000).toFixed(1) + " KILOMETRES \n GAUCHE SUR " + (game.gps.x - game.vaisseau.x) + " METRES  \n PARTIE " + game.gps.idInstruction + " / " + parseInt(game.gps.nbInstructions)
        }
        if (game.gps.y > game.vaisseau.y && (game.gps.y - game.vaisseau.y) > parseInt(vitesseVaisseau) / 3.6) {
            document.getElementById("imgPDA2").setAttribute("src", "img/top.png");
            document.getElementById("imgPDA2").setAttribute("width", "100px");
            document.getElementById("imgPDA2").setAttribute("height", "100px");
            document.getElementById("msgPDA").innerText = "DISTANCE TOTALE : " + (game.gps.distance / 1000).toFixed(1) + " KILOMETRES \n TOUT DROIT SUR " + (game.gps.y - game.vaisseau.y) + " METRES  \n PARTIE " + game.gps.idInstruction + " / " + parseInt(game.gps.nbInstructions)
        }
        game.vaisseau.speed = parseInt(document.getElementById("vitesse-vaiseaux").innerText);
    }

    updatePDA() {
        if (game.vaisseau.key) {
            game.vaisseau.key = false;
        }
        game.updateDirections()
        document.getElementById("msgPDA2").innerText = "HAUTEUR : " + game.vaisseau.z + " METRES";
        if (!game.vaisseau.detectionAsteroide) {
            game.disableAsteroidesDetection()
        } else {
            game.enableAsteroidesDetection()
        }
        if (game.vaisseau.detectionAsteroide) {
            game.updateMapAsteroide();
        }
        game.verifAltitude()
    }
    disableAsteroidesDetection() {
        document.getElementById("mapAsteroide").style.visibility = "hidden";
        document.getElementById("msgPDA3").style.visibility = "hidden";
        let item1 = document.createElement("div")
        item1.setAttribute("id", "activationDetectionAsteroide");
        let item1A = document.createElement("span")
        item1A.setAttribute("class", "fas fa-plus-circle");
        item1A.setAttribute("id", "activationDetectionAsteroideSpan");

        let item1B = document.createElement("div")
        item1B.setAttribute("id", "activationDetectionAsteroideTexte");
        item1B.setAttribute("onclick", "game.energieRedirect()");
        item1B.innerText = "Activer la detection d'asteroides"
        item1.appendChild(item1A);
        item1.appendChild(item1B);
        if (document.getElementById("msgPDA2").childNodes.length === 1) {
            document.getElementById("msgPDA2").appendChild(item1);
        }

    }
    energieRedirect() {
        document.getElementById("navigation-tab").setAttribute("class", "nav-link");
        document.getElementById("oxygen-tab").setAttribute("class", "nav-link active");
        document.getElementById("navigation").setAttribute("class", "tab-pane fade");
        document.getElementById("oxygen").setAttribute("class", "tab-pane fade show active");
        viewModule("Dectection asteroides", 0);

    }
    verifAltitude() {
        if (game.vaisseau.z <= 0 && (game.vaisseau.speed > 40 || game.gps.idInstruction < game.gps.nbInstructions)) {
            let audio = new Audio('./audio/explode.mp3');
            audio.play();
            document.getElementById("msgPDA").style.color = "red";
            document.getElementById("msgPDA").innerText = "LE VAISSEAU S'EST ECRASE";
            alert("PERDU")
            return;
        } else if (game.vaisseau.z <= 0) {
            document.getElementById("msgPDA").style.color = "green";
            document.getElementById("msgPDA").innerText = "LE VAISSEAU EST ATTERI";
        }
        if (game.vaisseau.z < 600 && game.vaisseau.speed > 40 && game.vaisseau.direction === "atterrissage") {
            let audio = new Audio('./audio/alarme.mp3');
            audio.play();
            document.getElementById("msgPDA").style.animationDuration = "1s";
            document.getElementById("msgPDA").style.animationName = "clignoter";
            document.getElementById("msgPDA").style.animationIterationCount = "infinite";
            document.getElementById("msgPDA").style.color = "orange";
            document.getElementById("msgPDA").innerText = "ATTENTION ! VITESSE TROP ELEVEE ! (" + (game.vaisseau.speed - 40) + " KM/H EN TROP)";
            return;
        }
        if (game.vaisseau.z < 600 && game.gps.idInstruction < game.gps.nbInstructions && game.vaisseau.direction === "atterrissage") {
            let audio = new Audio('./audio/alarme.mp3');
            audio.play();
            document.getElementById("msgPDA").style.animationDuration = "1s";
            document.getElementById("msgPDA").style.animationName = "clignoter";
            document.getElementById("msgPDA").style.animationIterationCount = "infinite";
            document.getElementById("msgPDA").style.color = "orange";
            document.getElementById("msgPDA").innerText = "ATTENTION ! VOUS NE VOUS TROUVEZ PAS AU DESSUS D'UN SOL PLAT !";
        }
    }

    updateMapAsteroide() {
        if (game.gps.champAsteroide) {
            for (let i = 0; i < nbAsteroides; i++) {
                if (game.gps.asteroides[i]) {
                    let x = (game.gps.asteroides[i].x - game.vaisseau.x);
                    let y = (game.gps.asteroides[i].y - game.vaisseau.y);
                    x /= 10;
                    y /= 10;
                    let vx = 47.5;
                    let vy = 80;
                    let ax = vx - x;
                    let ay = vy - y;
                    document.getElementById("asteroide" + i).style.left = ((ax) + "px");
                    document.getElementById("asteroide" + i).style.top = ((ay - 4) + "px");
                } else document.getElementById("asteroide" + i).style.visibility = "hidden";
            }
        }
    }

    verifInstruction() {
        let distanceRestante = Math.sqrt(((game.vaisseau.x - game.gps.x) * (game.vaisseau.x - game.gps.x)) + ((game.vaisseau.y - game.gps.y) * (game.vaisseau.y - game.gps.y)))
        let vitesseVaisseau = document.getElementById("vitesse-vaiseaux").innerText;
        game.updatePDA();
        if (distanceRestante < parseInt(vitesseVaisseau / 3.6 + 5)) {
            document.getElementById("imgPDA2").setAttribute("src", "img/valider.png");
            document.getElementById("imgPDA2").setAttribute("width", "100px")
            document.getElementById("msgPDA3").style.color = "green";
            document.getElementById("msgPDA3").innerText = "VOUS POUVEZ ATTERRIR !";
            game.gps.idInstruction++;
            if (game.gps.idInstruction < game.gps.nbInstructions) game.nextInstruction();
        }
    }
    moveShip() {
        switch (game.vaisseau.direction) {
            case "haut":
                game.shipUp()
                break;
            case "bas":
                game.shipDown()
                break;
            case "droite":
                game.shipRight()
                break;
            case "gauche":
                game.shipLeft()
                break;
            case "elevation":
                game.shipElevation()
                break;
            case "atterrissage":
                game.shipAtterir()
                break;
        }
        game.verifInstruction();

        if (game.vaisseau.direction !== "") {
            // game.carburantConsommation();
        }
        if (game.gps.countAsteroide === 0) {
            game.gps.champAsteroide = false;
            document.getElementById("msgPDA3").style.color = "green";
            document.getElementById("msgPDA3").innerText = "CHAMP D'ASTEROIDE EVITE !";

            let myNode = document.getElementById("mapAsteroide")
            while (myNode.lastChild) myNode.removeChild(myNode.lastChild);
            let vaisseauMap = document.createElement("div");
            vaisseauMap.setAttribute("id", "mapAsteroideVaisseau")
            vaisseauMap.style.width = (8) + "px";
            vaisseauMap.style.height = (8) + "px";
            document.getElementById("mapAsteroide").appendChild(vaisseauMap);
        }
        if (!game.gps.champAsteroide) game.hasAsteroides();
        else setInterval(game.verifAsteroide.bind(this), 1000);
    }

    shipUp() {
        let vitesseVaisseau = document.getElementById("vitesse-vaiseaux").innerText;
        game.vaisseau.y = game.vaisseau.y + parseInt(vitesseVaisseau / 3.6);
        game.vaisseau.direction = "haut";
    }
    shipDown() {
        let vitesseVaisseau = document.getElementById("vitesse-vaiseaux").innerText;
        game.vaisseau.y = game.vaisseau.y - parseInt(vitesseVaisseau / 3.6);
        game.vaisseau.direction = "bas";
    }
    shipRight() {
        let vitesseVaisseau = document.getElementById("vitesse-vaiseaux").innerText;
        game.vaisseau.x = game.vaisseau.x - parseInt(vitesseVaisseau / 3.6);
        game.vaisseau.direction = "droite";
    }
    shipLeft() {
        let vitesseVaisseau = document.getElementById("vitesse-vaiseaux").innerText;
        game.vaisseau.x = game.vaisseau.x + parseInt(vitesseVaisseau / 3.6);
        game.vaisseau.direction = "gauche";
    }
    shipElevation() {
        let vitesseVaisseau = document.getElementById("vitesse-vaiseaux").innerText;
        game.vaisseau.z = game.vaisseau.z + parseInt(vitesseVaisseau / 3.6);
        game.vaisseau.direction = "elevation";
    }
    shipAtterir() {
        let vitesseVaisseau = document.getElementById("vitesse-vaiseaux").innerText;
        game.vaisseau.z = game.vaisseau.z - parseInt(vitesseVaisseau / 3.6);
        if (game.vaisseau.z < 0) game.vaisseau.z = 0;
        game.vaisseau.direction = "atterrissage";
    }

    stop() { game.vaisseau.direction = "" }

    hasAsteroides() {
        let proba = parseInt(Math.random() * (20 - 1) + 1);
        if (proba === 2 && game.vaisseau.direction !== "" && game.vaisseau.direction !== "atterrissage" && game.vaisseau.direction !== "elevation" && !game.vaisseau.key) {
            game.gps.asteroides = [];
            game.gps.nbAsteroides = parseInt(Math.random() * (45 - 22) + 22);
            game.gps.countAsteroide = game.gps.nbAsteroides;
            for (let idAsteroide = 0; idAsteroide < game.gps.nbAsteroides; idAsteroide++) {
                game.genereAsteroide(idAsteroide);
            }
            game.gps.champAsteroide = true;
            document.getElementById("msgPDA3").style.color = "orange";
            document.getElementById("msgPDA3").innerText = "VOUS ENTREZ DANS UN CHAMP D'ASTEROIDES";
        }
    }

    genereAsteroide(idAsteroide) {
        if (idAsteroide < game.gps.asteroides.length) {
            let asteroide = document.createElement("div");
            asteroide.style.width = "1px";
            asteroide.style.height = "1px";
            asteroide.setAttribute("class", "asteroide")
            asteroide.setAttribute("id", "asteroide" + idAsteroide);
            document.getElementById("mapAsteroide").appendChild(asteroide);
            let xAsteroide = parseInt(Math.random() * ((game.vaisseau.x + 800) - (game.vaisseau.x - 800)) + (game.vaisseau.x - 800));
            let yAsteroide = parseInt(Math.random() * ((game.vaisseau.y + 800) - (game.vaisseau.y - 800)) + (game.vaisseau.y - 800));
            game.gps.asteroides = new Asteroide(idAsteroide, xAsteroide, yAsteroide);
        }
    }

    verifAsteroide() {
        let x = -1;
        let y = -1;
        let dist = -1;
        for (let i = 0; i < game.gps.nbAsteroides; i++) {
            dist = Math.sqrt(((game.vaisseau.x - game.gps.asteroides.x[i]) * (game.vaisseau.x - game.gps.asteroides[i].x)) + ((game.vaisseau.y - game.gps.asteroides[i].y) * (game.vaisseau.y - game.gps.asteroides[i].y)))
            if ((game.gps.distance === -1 || dist < game.gps.distance) && game.gps.asteroides[i] !== undefined) {
                game.gps.distance = dist;
                x = game.gps.asteroides[i].x;
                y = game.gps.asteroides[i].y;
            }
        }


        if (game.gps.distance < 50 && game.gps.distance !== -1) {
            document.getElementById("msgPDA3").style.color = "red";
            document.getElementById("msgPDA3").innerText = "TOUCHE !";
            let explosion = parseInt(Math.random() * (3 - 1) + 1);
            if (explosion === 1) {
                let audio = new Audio('./audio/explode.mp3');
                audio.play();
            }
            if (explosion === 2) {
                let audio = new Audio('./audio/explosion.mp3');
                audio.play();
            }
            game.gps.countAsteroide--;
            game.vaisseau.key = true;
            game.gps.asteroides[game.gps.nbAsteroides.length - 1] = false;
            switch (game.vaisseau.direction) {
                case "haut": game.vaisseau.life[0] = game.vaisseau.life[0] - 20;
                    break;
                case "bas": game.vaisseau.life[1] = game.vaisseau.life[1] - 20;
                    break;
                case "gauche": game.vaisseau.life[2] = game.vaisseau.life[2] - 20;
                    break;
                case "droite": game.vaisseau.life[3] = game.vaisseau.life[3] - 20;
                    break;
            }
        }
        if (game.gps.distance > 1500 && game.gps.champAsteroide) {
            document.getElementById("msgPDA3").style.color = "green";
            document.getElementById("msgPDA3").innerText = "ASTEROIDE EVITE !";
            game.gps.champAsteroide = false;
            game.gps.countAsteroide = 0;
        }

        if (game.gps.distance < 1500 && !game.vaisseau.key && game.gps.distance !== -1) {
            document.getElementById("msgPDA3").style.color = "yellow";
            document.getElementById("msgPDA3").style.animationName = "none";
            document.getElementById("msgPDA3").innerText = "ASTEROIDE A " + parseInt(game.gps.distance) + " METRES " + game.gps.nbAsteroides + " / " + game.gps.asteroides.length;
            if (x < game.vaisseau.x && (Math.abs(game.vaisseau.y - y)) < game.vaisseau.size) {
                document.getElementById("msgPDA3").style.color = "orange";
                document.getElementById("msgPDA3").style.animationDuration = "1s";
                document.getElementById("msgPDA3").style.animationName = "clignoter";
                document.getElementById("msgPDA3").style.animationIterationCount = "infinite";
                document.getElementById("msgPDA3").innerText = "ASTEROIDE A DROITE A " + (Math.abs(game.vaisseau.x - x)) + " METRES !!";
            }
            if (game.vaisseau.x < x && (Math.abs(game.vaisseau.y - y)) < game.vaisseau.size) {
                document.getElementById("msgPDA3").style.color = "orange";
                document.getElementById("msgPDA3").style.animationDuration = "1s";
                document.getElementById("msgPDA3").style.animationName = "clignoter";
                document.getElementById("msgPDA3").style.animationIterationCount = "infinite";
                document.getElementById("msgPDA3").innerText = "ASTEROIDE A GAUCHE A " + (Math.abs(x - game.vaisseau.x)) + " METRES !!";
            }
            if (game.vaisseau.y < y && (Math.abs(game.vaisseau.x - x)) < game.vaisseau.size) {
                document.getElementById("msgPDA3").style.color = "orange";
                document.getElementById("msgPDA3").style.animationDuration = "1s";
                document.getElementById("msgPDA3").style.animationName = "clignoter";
                document.getElementById("msgPDA3").style.animationIterationCount = "infinite";
                document.getElementById("msgPDA3").innerText = "ASTEROIDE EN FACE A " + (Math.abs(game.vaisseau.y - y)) + " METRES !!";
            }
            if (y < game.vaisseau.y && (Math.abs(game.vaisseau.x - x)) < game.vaisseau.size) {
                document.getElementById("msgPDA3").style.color = "orange";
                document.getElementById("msgPDA3").style.animationDuration = "1s";
                document.getElementById("msgPDA3").style.animationName = "clignoter";
                document.getElementById("msgPDA3").style.animationIterationCount = "infinite";
                document.getElementById("msgPDA3").innerText = "ASTEROIDE EN ARRIERE A " + (Math.abs(y - game.vaisseau.y)) + " METRES !!";
            }
        }
    }

    moveSpeedCursor(event) {
        let curseurVitesse = document.querySelector(".curseurVitesse");
        curseurVitesse.setAttribute("style", "top" + (event.pageY - 20) + "px; left:" + (event.pageX - 20) + "px;")
    }

    deceleration() {
        let vaisseau = document.getElementById("vitesse-vaiseaux");
        if (vaisseau.innerText === 0) alert("Les moteurs sont coupés !");
        else vaisseau.innerText -= 1;
        game.vaisseau.speed--;
    }

    acceleration() {
        let vaisseau = document.getElementById("vitesse-vaiseaux");
        if (vaisseau.innerText === 500) alert("Vitesse maximum !");
        else vaisseau.innerText = parseInt(vaisseau.innerText) + 1;
        game.vaisseau.speed++;
    }

    fill() {
        let carburant = 50;
        let barre = document.getElementById('carburant-plein');
        if ((barre.offsetWidth + carburant) < document.getElementsByClassName('carburant-vide')[0].offsetWidth) {
            barre.style.width = (barre.offsetWidth + carburant) + "px";
        } else {
            barre.style.width = document.getElementsByClassName('carburant-vide')[0].offsetWidth + "px";
        }
    }

    waterDesc() {
        let water = document.getElementById('jaugeWater');
        let lastWater = water.offsetHeight;

        if (lastWater > 2) {
            water.style.top = (Number((water.style.top).split("px")[0]) + 2) + "px";
            water.style.height = (lastWater - 2) + "px";
            game.player.water -= 2;
            game.numberWater();
        } else {
            document.getElementById('jaugeWater').style.visibility = "hidden";
        }

    }

    numberWater() {
        let water = document.getElementById('jaugeWater');
        let lastWater = water.offsetHeight;
        if (lastWater < 50) water.style["background-color"] = "red";
    }

    foodDesc() {
        let food = document.getElementById('jaugeFood');
        let lastFood = food.offsetHeight;
        let newFood = (lastFood - 2) + "px";
        let hauteur = (Number((food.style.top).split("px")[0]) + 2) + "px";
        game.player.water -= 2;
        food.style.top = hauteur;
        food.style.height = newFood;
        game.numberFood();
    }

    numberFood() {
        let food = document.getElementById('jaugeFood');
        let lastFood = food.offsetHeight;
        if (lastFood < 50) food.style["background-color"] = "red";
    }
    download() {
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
        game.vaisseau.dlMod = true;
        cadre.appendChild(downloadSpan);
        cadre.appendChild(download);
        divProgress.appendChild(progress);
        cadre.appendChild(divProgress);
        menuOxygene.appendChild(cadre);

    }
    download2() {
        let duree = parseInt(Math.random() * (900 - 300) + 300);
        for (let i = 0; i < game.vaisseau.fileTemp.length; i++) {
            let ratio = (100 / game.vaisseau.fileTemp.length)
            setTimeout(function () {
                document.getElementById("download").innerText = "Telechargement du fichier " + (i + 1) + " / " + game.vaisseau.fileTemp.length;
                if (i < game.vaisseau.fileTemp.length - 1) {
                    document.getElementById("barreTelechargement").style.width = (ratio + (ratio * i)) + "%";
                } else {
                    document.getElementById("barreTelechargement").style.width = "100%"
                }
                if (i == game.vaisseau.fileTemp.length - 1) {
                    document.getElementById("barreTelechargement").setAttribute("class", "progress-bar")
                }

            }, ((i * duree)))
        }
        game.vaisseau.dlMod = false;
        setTimeout(function () {
            document.getElementById("operationsPanel").style.visibility = "visible"
            document.getElementById("cadreFichiers").style.visibility = "hidden"
        }, ((game.vaisseau.fileTemp.length * duree)))
    }


}