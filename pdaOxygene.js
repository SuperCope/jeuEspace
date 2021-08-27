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
function gererBatteries() {

    let menu = clearInterface("Gerer les batteries")
    menu.style.display = "grid";
    for (let i = 0; i < batteries.length; i++) {
        let item1 = document.createElement("div");
        item1.setAttribute("id", "indicateurBatterie" + i);
        item1.setAttribute("class", "indicateurBatterie");
        item1.setAttribute("onclick", "numBatterieActive = " + i + "");
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
        item1.appendChild(item1A)
        item1.appendChild(item1B)
        item1.appendChild(item1C)
        item1.appendChild(item1D)
        menu.appendChild(item1)
    }


    let item3 = document.createElement("div");
    item3.setAttribute("class", "itemClicablePDA");
    item3.setAttribute("onclick", "rechargerChargeBouclierMenu()");
    item3.innerText = "Transferer de l'energie";



    thread = setInterval(function () {
        for (let i = 0; i < batteries.length; i++) {
            res = updateJaugeEnergie(i)
            let texte = res[0];
            let texte2 = res[1];

            if (numBatterieActive == i) {
                document.getElementById("indicateurBatterie" + i).style.border = "blue 2px solid";
            } else {
                document.getElementById("indicateurBatterie" + i).style.border = "";
            }
            document.getElementById("indicateurBatterieB" + i).innerText = texte;
            document.getElementById("indicateurBatterieC" + i).innerText = texte2;
            if (batteries[i] > (0 * batteriesMax[i])) {
                document.getElementById("indicateurBatterieB" + i).style.color = "red";
            }
            if (batteries[i] > (0.2 * batteriesMax[i])) {
                document.getElementById("indicateurBatterieB" + i).style.color = "orange";
            }
            if (batteries[i] > (0.4 * batteriesMax[i])) {
                document.getElementById("indicateurBatterieB" + i).style.color = "yellow";
            }
            if (batteries[i] > (0.6 * batteriesMax[i])) {
                document.getElementById("indicateurBatterieB" + i).style.color = "greenyellow";
            }
            if (batteries[i] > (0.8 * batteriesMax[i])) {
                document.getElementById("indicateurBatterieB" + i).style.color = "green";
            }

        }
    }, 300);

    menu.appendChild(item3)
    let boutonRetour = document.createElement("div");
    boutonRetour.setAttribute("id", "retour")
    boutonRetour.setAttribute("onclick", "gererEnergieMenu()")
    boutonRetour.innerText = "Retour"
    menu.appendChild(boutonRetour)
}

function gererEnergieMenu() {
    let menu = clearInterface("Gerer l'energie")
    menu.style.display = "";

    let item1 = document.createElement("div");
    item1.setAttribute("id", "indicateurBatterie" + numBatterieActive);
    item1.setAttribute("class", "indicateurBatterie2");
    item1.setAttribute("onclick", "numBatterieActive = 0");
    let item1A = document.createElement("div");
    item1A.setAttribute("id", "indicateurBatterieA" + numBatterieActive);
    item1A.setAttribute("class", "indicateurBatterieA");
    item1A.innerText = "(";
    let item1B = document.createElement("div");
    item1B.setAttribute("id", "indicateurBatterieB" + numBatterieActive);
    item1B.setAttribute("class", "indicateurBatterieB");
    item1B.innerText = "";
    item1B.style.color = "yellow";
    let item1C = document.createElement("div");
    item1C.setAttribute("id", "indicateurBatterieC" + numBatterieActive);
    item1C.setAttribute("class", "indicateurBatterieC");
    let item1D = document.createElement("div");
    item1D.setAttribute("id", "indicateurBatterieA" + numBatterieActive);
    item1D.setAttribute("class", "indicateurBatterieA");
    item1D.innerText = ")";
    item1.appendChild(item1A)
    item1.appendChild(item1B)
    item1.appendChild(item1C)
    item1.appendChild(item1D)
    menu.appendChild(item1)


    let item2 = document.createElement("div");
    item2.setAttribute("id", "itemAffichage");
    item2.setAttribute("class", "itemClicablePDA");
    item2.innerText = "Affichage : 35%";

    let item7 = document.createElement("div");
    item7.setAttribute("id", "itemAffichage");
    item7.setAttribute("class", "itemClicablePDA");
    item7.setAttribute("onclick", "gererBatteries()");
    item7.innerText = "Gerer les batteries";

    let boutonRetour = document.createElement("div");
    boutonRetour.setAttribute("id", "retour")
    boutonRetour.setAttribute("onclick", "oxygeneMenu()")
    boutonRetour.innerText = "Retour"
    let res;
    thread = setInterval(function () {


        res = updateJaugeEnergie(numBatterieActive)
        let texte = res[0];
        let texte2 = res[1];

        if (true) {
            document.getElementById("indicateurBatterieB" + numBatterieActive).innerText = texte;
            document.getElementById("indicateurBatterieC" + numBatterieActive).innerText = texte2;
            if (batteries[numBatterieActive] > (0 * batteriesMax[numBatterieActive])) {

                document.getElementById("indicateurBatterieB" + numBatterieActive).style.color = "red";

            }
            if (batteries[numBatterieActive] > (0.2 * batteriesMax[numBatterieActive])) {
                document.getElementById("indicateurBatterieB" + numBatterieActive).style.color = "orange";
            }
            if (batteries[numBatterieActive] > (0.4 * batteriesMax[numBatterieActive])) {
                document.getElementById("indicateurBatterieB" + numBatterieActive).style.color = "yellow";
            }
            if (batteries[numBatterieActive] > (0.6 * batteriesMax[numBatterieActive])) {
                document.getElementById("indicateurBatterieB" + numBatterieActive).style.color = "greenyellow";
            }
            if (batteries[numBatterieActive] > (0.8 * batteriesMax[numBatterieActive])) {
                document.getElementById("indicateurBatterieB" + numBatterieActive).style.color = "green";
            }
        }



    }, 300);

    menu.innerHTML += "<br><br>"
    menu.appendChild(item7);
    menu.innerHTML += "<br><br>"
    menu.appendChild(item2);
    menu.innerHTML += "<br>"
    let libelleModules = ["Dectection asteroides", "Climatisation", "Bouclier"];

    modules[0] = detectionAsteroide;
    modules[1] = activationClimatisation;
    modules[2] = activationBouclier;


    for (let i = 0; i < libelleModules.length; i++) {
        item = document.createElement("div");
        item.setAttribute("class", "miseAJourPDA1")
        let itemA = document.createElement("div");
        itemA.setAttribute("class", "itemClicablePDA")
        itemA.innerText = libelleModules[i];
        if (modules[i] && i != 2) {
            itemA.innerText += ": 10%";
        }
        if (modules[i] && i == 2) {
            itemA.innerText += ": Batterie individuelle";
        }
        itemA.style.float = "left";
        let itemB = document.createElement("div");
        itemB.setAttribute("class", "miseAJourPDA2")
        itemB.setAttribute("id", "viewModule" + i)
        itemB.setAttribute("onclick", " viewModule('" + libelleModules[i] + "'," + i + ");");
        itemB.innerText = "consulter";
        itemB.style.float = "right";
        item.appendChild(itemA);
        item.appendChild(itemB);
        menu.appendChild(item);
        if (i < libelleModules.length - 1) {
            item.innerHTML += "<br><br>";
        }

    }
    item.innerHTML += "<br>";
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
    animJaugeBouclier()
    item.appendChild(boutonRetour);

}
function plusEnergieATransferer() {
    let val = Number(document.getElementById("valBatterieBouclier").innerText);
    val += 20;
    if (val > batteries[numBatterieActive]) {
        val = batteries[numBatterieActive];
    }
    document.getElementById("valBatterieBouclier").innerText = val;
}
function moinsEnergieATransferer() {
    let val = Number(document.getElementById("valBatterieBouclier").innerText);
    val -= 20;
    if (val < 20) {
        val = 0;
    }
    document.getElementById("valBatterieBouclier").innerText = val;
}
function transfererEnergieDansBouclier() {
    let valBatterieATransferer = parseInt(document.getElementById("valBatterieBouclier").innerText)

    setInterval(animJaugeBouclier(), 100)



}
function rechargerBouclierMenu() {
    let menu = clearInterface("Recharger le bouclier")
    let item1 = document.createElement("div");
    item1.setAttribute("id", "valeurBatterie");
    setInterval(function () { item1.innerText = batteries[numBatterieActive] }, 100);
    let item2 = document.createElement("div");
    item2.setAttribute("id", "ajoutBatterieBouclierDiv");
    let item2A = document.createElement("span");
    item2A.setAttribute("id", "ajoutBatterieBouclierSpan1");
    item2A.setAttribute("class", "fas fa-plus")
    item2A.setAttribute("onclick", "plusEnergieATransferer()");
    let item2B = document.createElement("div");
    item2B.setAttribute("id", "valBatterieBouclier");
    item2B.innerText = "0";
    let item2C = document.createElement("span");
    item2C.setAttribute("id", "ajoutBatterieBouclierSpan2");
    item2C.setAttribute("class", "fas fa-minus");
    item2C.setAttribute("onclick", "moinsEnergieATransferer()");
    let item2D = document.createElement("span");
    item2D.setAttribute("id", "ajoutBatterieBouclierSpan3");
    item2D.setAttribute("class", "fas fa-check-circle");
    item2D.setAttribute("onclick", "transfererEnergieDansBouclier()");
    item2.appendChild(item2A);
    item2.appendChild(item2B);
    item2.appendChild(item2C);
    item2.appendChild(item2D);
    let item3 = document.createElement("div");
    item3.setAttribute("id", "jaugeVieBouclierDiv");
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
    let item4 = document.createElement("div");
    item4.setAttribute("id", "msgBouclier");
    item4.setAttribute("onclick", "rechargerBouclier()");
    let item5 = document.createElement("div");
    item5.setAttribute("id", "valeurBatterie2");
    setInterval(function () { item5.innerText = vieBouclier + " / " + vieMaxBouclier }, 100);

    let boutonRetour = document.createElement("div");
    boutonRetour.setAttribute("id", "retour")
    boutonRetour.setAttribute("onclick", "viewModule('Bouclier', 1)")
    boutonRetour.innerText = "Retour"
    document.getElementById("oxygeneTitre").appendChild(boutonRetour);
    item3.appendChild(item3A);
    item3.appendChild(item3B);
    item3.appendChild(item3C);
    item3.appendChild(item3D);
    menu.innerHTML += "<br><br>";
    menu.appendChild(item1)
    menu.appendChild(item2)
    menu.appendChild(item3)
    menu.appendChild(item4)
    menu.appendChild(item5)
    transfererEnergieDansBouclier()
}
function animJaugeBouclier() {
    let delai = 50;
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
        if (vieBouclier > (vieMaxBouclier)) {
            document.getElementById("msgBouclier").style.color = "red";
            document.getElementById("msgBouclier").innerText = "Erreur, la capacite du bouclier est insuffisante...";
            msg = true;
            vieBouclier = vieMaxBouclier;
        }
        if (cible <= vieBouclier) {

            chaine = "";
            for (let i = 0; i < cible; i++) {
                if (i % 200 == 0) {
                    chaine += "1";
                } else {

                }

            }

            chaine2 = "";
            for (let i = cible; i < vieMaxBouclier; i++) {
                if (i % 200 == 0) {
                    chaine2 += ".";
                }
            }
            cible += 200;

        } else {
            cible = cible - 200;
        }

        if (valBatterieATransferer && document.getElementById("valBatterieBouclier") && cible2 < valBatterieATransferer) {
            vieBouclier = vieBouclier += 20;
        }
        if (document.getElementById("valBatterieBouclier") && valBatterieATransferer > 0 && cible2 < valBatterieATransferer) {
            if (!msg) {
                document.getElementById("msgBouclier").style.color = "orange";
                document.getElementById("msgBouclier").innerText = "Transfert en cours...";
                msg = true
            }

            batteries[numBatterieActive] = batteries[numBatterieActive] - 20;
            cible2 = cible2 + 20;
            document.getElementById("valBatterieBouclier").innerText = (valBatterieATransferer - cible2)

        }
        if (document.getElementById("valBatterieBouclier") && valBatterieATransferer - cible2 == 0) {
            if (!msg && document.getElementById("msgBouclier")) {
                document.getElementById("msgBouclier").style.color = "green";
                document.getElementById("msgBouclier").innerText = "Succes";
            }


        }
        if (document.getElementById("jaugeVieBouclier1") && document.getElementById("jaugeVieBouclier2")) {
            document.getElementById("jaugeVieBouclier1").innerText = chaine;
            document.getElementById("jaugeVieBouclier2").innerText = chaine2;
        }

    }, delai);

}
function viewModule(libelleModule, i) {
    clearInterval(52)
    let menu = clearInterface(libelleModule);
    item = document.createElement("div");
    item.setAttribute("class", "miseAJourPDA1")
    let itemA = document.createElement("div");
    itemA.setAttribute("class", "itemClicablePDA")
    itemA.setAttribute("id", "switch")
    itemA.style.float = "right";
    itemA.style.fontSize = "24px";
    itemA.setAttribute("onclick", "interactModule(" + i + "," + modules[i] + ",'" + libelleModule + "')")
    let itemB = document.createElement("div");
    itemB.setAttribute("class", "itemClicablePDA")
    itemB.innerText = "Activer ce module";
    if (!modules[i]) {
        itemA.setAttribute("class", "fas fa-toggle-off itemClicablePDA")
    } else {
        itemA.setAttribute("class", "fas fa-toggle-on itemClicablePDA")
    }
    itemB.style.float = "left";
    item.innerHTML += "<br>";
    item.appendChild(itemB);
    item.appendChild(itemA);
    menu.appendChild(item);

    if (libelleModule == "Bouclier") {
        let item0 = document.createElement("div");
        item0.setAttribute("class", "itemClicablePDA");
        item0.setAttribute("onclick", "rechargerBouclierMenu()");
        item0.innerText = "Recharger le bouclier";
        menu.innerHTML += " <br><br>"
        menu.appendChild(item0)
    }

    if (libelleModule == "Climatisation") {
        let item1 = document.createElement("span")
        item1.setAttribute("id", "iconeTemperature");
        let item2 = document.createElement("span")
        item2.setAttribute("id", "valTemperature");
        thread = setInterval(function () {
            if (temperature > 35) {
                document.getElementById("iconeTemperature").setAttribute("class", "fas fa-thermometer-full");
                document.getElementById("iconeTemperature").style.color = "red";
                document.getElementById("valTemperature").style.color = "red"
            }
            if (temperature < 35) {
                document.getElementById("iconeTemperature").setAttribute("class", "fas fa-thermometer-three-quarters");
                document.getElementById("iconeTemperature").style.color = "oangered";
                document.getElementById("valTemperature").style.color = "orangered"
            }
            if (temperature < 26) {
                document.getElementById("iconeTemperature").setAttribute("class", "fas fa-thermometer-half");
                document.getElementById("iconeTemperature").style.color = "lightcoral";
                document.getElementById("valTemperature").style.color = "lightcoral"
            }
            if (temperature < 22) {
                document.getElementById("iconeTemperature").setAttribute("class", "fas fa-thermometer-quarter");
                document.getElementById("iconeTemperature").style.color = "cyan";
                document.getElementById("valTemperature").style.color = "cyan"
            }
            if (temperature < 18) {
                document.getElementById("iconeTemperature").setAttribute("class", "fas fa-thermometer-empty")
                document.getElementById("iconeTemperature").style.color = "blue";
                document.getElementById("valTemperature").style.color = "blue"
            }
            item2.innerText = temperature + " °C";
        }, 500)
        let item3 = document.createElement("div")
        item3.setAttribute("id", "jaugePuissanceClimatisationDiv");
        item3.innerText = puissanceClimatisation + " %";
        let item3A = document.createElement("span")
        item3A.setAttribute("id", "moinsPuissanceClimatisation");
        item3A.setAttribute("class", "fas fa-minus-square");
        item3A.setAttribute("onclick", "moinsPuissanceClimatisation()");
        let item3B = document.createElement("span")
        item3B.setAttribute("id", "jaugePuissanceClimatisation");
        item3B.setAttribute("class", "fas fa-plus-square");
        item3B.setAttribute("onclick", "plusPuissanceClimatisation()");
        let item3C = document.createElement("div")
        item3C.setAttribute("id", "plusPuissanceClimatisation");
        item3C.setAttribute("onclick", "plusPuissanceClimatisation()");
        item3C.innerText = puissanceClimatisation + " %";
        item3.appendChild(item3A);
        item3.appendChild(item3C);
        item3.appendChild(item3B);
        menu.innerHTML += "<br><br>"
        menu.appendChild(item1)
        menu.innerHTML += "<br>"
        menu.appendChild(item2)
        menu.innerHTML += "<br>"
        menu.appendChild(item3)
    }

    let boutonRetour = document.createElement("div");
    boutonRetour.setAttribute("id", "retour")
    boutonRetour.setAttribute("onclick", "gererEnergieMenu()")
    boutonRetour.innerText = "Retour"
    document.getElementById("oxygeneTitre").appendChild(boutonRetour);
}
function plusPuissanceClimatisation() {
    puissanceClimatisation = puissanceClimatisation + 50;
    if (puissanceClimatisation == 100) {
        document.getElementById("plusPuissanceClimatisation").style.visibility = "hidden";
        document.getElementById("moinsPuissanceClimatisation").style.visibility = "visible";
    }

    document.getElementById("jaugePuissanceClimatisation").innerText = puissanceClimatisation;
}
function moinsPuissanceClimatisation() {
    puissanceClimatisation = puissanceClimatisation - 50;
    if (puissanceClimatisation == 0) {
        document.getElementById("moinsPuissanceClimatisation").style.visibility = "hidden";
        document.getElementById("plusPuissanceClimatisation").style.visibility = "visible";
    }
    document.getElementById("moinsPuissanceClimatisation").style.visibility = "hidden";
    document.getElementById("jaugePuissanceClimatisation").innerText = puissanceClimatisation;
}
function rechargerBouclier() {
    document.getElementById("valeurBatterie2").style.visibility = "visible";
    document.getElementById("valeurBatterie").style.visibility = "visible";
    document.getElementById("ajoutBatterieBouclierDiv").style.visibility = "visible";
    document.getElementById("jaugeVieBouclierDiv").style.visibility = "visible";
    document.getElementById("msgBouclier").style.visibility = "visible";
    document.getElementById("valeurBatterie2").style.visibility = "visible";
}
function ajoutCapaciteBouclier(boucle, i, j) {
    setInterval(function () {
        if (boucle) {
            if (parseInt(document.getElementById("valBatterieAAjouter").innerText) > 0 && batteries[j] < batteriesMax[j] && batteries[i] > 0) {
                moinsBatterieBouclier();
                batteries[i] = batteries[i] - 20;
                batteries[j] = batteries[j] + 20;
            } else {
                document.getElementById("valBatterieAAjouter").innerHTML = "0";
                boucle = false;
            }
        }


    }, 100)

}
function plusBatterieBouclier() {
    let valBatterieAAjouter = parseInt(document.getElementById("valBatterieAAjouter").innerText)
    valBatterieAAjouter = valBatterieAAjouter + 20;
    if (valBatterieAAjouter > batteries[numBatterieActive]) {
        valBatterieAAjouter = batteries[numBatterieActive];
    }
    document.getElementById("valBatterieAAjouter").innerText = valBatterieAAjouter
}
function moinsBatterieBouclier() {
    let valBatterieAAjouter = parseInt(document.getElementById("valBatterieAAjouter").innerText)
    valBatterieAAjouter = valBatterieAAjouter - 20;
    if (valBatterieAAjouter < 0) {
        valBatterieAAjouter = 0;
    }
    document.getElementById("valBatterieAAjouter").innerText = valBatterieAAjouter
}

function rechargerChargeBouclierMenu() {
    let menu = clearInterface("Augmenter la puissance \n dedie au bouclier")
    let selection = -1;
    menu.style.display = "grid";
    for (let i = 0; i < batteries.length; i++) {
        if (i != numBatterieActive) {
            let item1 = document.createElement("div");
            item1.setAttribute("id", "indicateurBatterie" + i);
            item1.setAttribute("class", "indicateurBatterie");
            item1.onclick = function () {
                selection = i;
                for (let j = 0; j < batteries.length; j++) {
                    if (j != numBatterieActive) {
                        if (j == selection) {
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
            item1.appendChild(item1A)
            item1.appendChild(item1B)
            item1.appendChild(item1C)
            item1.appendChild(item1D)
            menu.appendChild(item1)
        }

    }
    thread = setInterval(function () {
        for (let i = 0; i < batteries.length; i++) {
            if (i != numBatterieActive) {
                res = updateJaugeEnergie(i)
                let texte = res[0];
                let texte2 = res[1];


                document.getElementById("indicateurBatterieB" + i).innerText = texte;
                document.getElementById("indicateurBatterieC" + i).innerText = texte2;
                if (batteries[i] > (0 * batteriesMax[i])) {
                    document.getElementById("indicateurBatterieB" + i).style.color = "red";
                }
                if (batteries[i] > (0.2 * batteriesMax[i])) {
                    document.getElementById("indicateurBatterieB" + i).style.color = "orange";
                }
                if (batteries[i] > (0.4 * batteriesMax[i])) {
                    document.getElementById("indicateurBatterieB" + i).style.color = "yellow";
                }
                if (batteries[i] > (0.6 * batteriesMax[i])) {
                    document.getElementById("indicateurBatterieB" + i).style.color = "greenyellow";
                }
                if (batteries[i] > (0.8 * batteriesMax[i])) {
                    document.getElementById("indicateurBatterieB" + i).style.color = "green";
                }
            }


        }
    }, 300);
    let item1 = document.createElement("div");
    item1.setAttribute("id", "valeurBatterie3");
    setInterval(function () { item1.innerText = batteries[numBatterieActive] }, 100);
    let item2 = document.createElement("div");
    item2.setAttribute("id", "operationPuissanceBouclier");
    let item2A = document.createElement("div");
    item2A.setAttribute("id", "valeurEnergieDediee");
    thread = setInterval(function () {
        if (selection > -1) {
            item2A.innerText = batteries[selection]
            document.getElementById("ajoutBatterieBouclierSpan33").setAttribute("onclick", "ajoutCapaciteBouclier(true," + numBatterieActive + "," + selection + ")");
        } else {
            item2A.innerText = "Choisir une batterie";
        }
    }, 100);

    let item2B = document.createElement("div");
    item2B.setAttribute("id", "ajoutBatterieBouclierSpan11");
    item2B.setAttribute("class", "fas fa-plus");
    item2B.setAttribute("onclick", "plusBatterieBouclier()");
    let item2C = document.createElement("div");
    item2C.setAttribute("id", "ajoutBatterieBouclierSpan22");
    item2C.setAttribute("class", "fas fa-minus");
    item2C.setAttribute("onclick", "moinsBatterieBouclier()");
    let item2D = document.createElement("div");
    item2D.setAttribute("id", "ajoutBatterieBouclierSpan33");
    item2D.setAttribute("class", "fas fa-check-circle");
    item2D.setAttribute("onclick", "ajoutCapaciteBouclier(true," + numBatterieActive + "," + selection + ")");
    let item2E = document.createElement("div");
    item2E.setAttribute("id", "valBatterieAAjouter");
    item2E.innerText = "0";
    let boutonRetour = document.createElement("div");
    boutonRetour.setAttribute("id", "retour")
    boutonRetour.setAttribute("onclick", "gererBatteries()")
    boutonRetour.innerText = "Retour"
    item2.appendChild(item2B)
    item2.appendChild(item2A)
    item2.appendChild(item2C)
    item2.appendChild(item2E)
    item2.appendChild(item2D)
    menu.appendChild(item1)
    menu.appendChild(item2)
    document.getElementById("oxygeneTitre").appendChild(boutonRetour);
}
function interactModule(i, interact, libelle) {
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
        case 1:
            if (!interact) {
                activationClimatisation = true;
                modules[i] = true;
            } else {
                activationClimatisation = false;
                modules[i] = false;
            }

            break;
        case 2:
            if (!interact) {
                activationBouclier = true;
                modules[i] = true;
            } else {
                activationBouclier = false;
                modules[i] = false;
            }

            break;
    }
    viewModule(libelle, i)
}
function updateJaugeEnergie(j) {
    let aRenvoyer = [];
    aRenvoyer[0] = "";
    for (let i = 0; i < batteries[j]; i++) {
        if (i % 2000 == 0) {
            aRenvoyer[0] += "|";
        }
    }
    aRenvoyer[1] = "";
    for (let i = batteries[j]; i < batteriesMax[j]; i++) {
        if (i % 2000 == 0) {
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
        divFuite1.innerText = fuites[0] + " %";
        divFuite1.style.backgroundColor = "cyan"
        divFuite1.setAttribute("onclick", "reparation[0] = true")
    }
    if (fuites[0] == 0) {
        divFuite1.innerText = "";
    }
    if (fuites[0] == 0) {
        divFuite1.style.backgroundImage = "url(./img/croix.png)"
        divFuite1.style.opacity = "100%"
    }
    if (fuites[1] < vieCanalisation) {
        divFuite2.innerText = fuites[1] + " %";
        divFuite2.style.backgroundColor = "cyan"
        divFuite2.setAttribute("onclick", "reparation[1] = true")
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
    for (let i = 0; i < nbBouteillesOxygene; i++) {
        let bouteille = document.createElement("img");
        bouteille.setAttribute("width", "50px");
        bouteille.setAttribute("height", "100px");
        bouteille.setAttribute("onclick", "chargerBouteilleOxygene(event)");
        if (oxy && i == nbBouteillesOxygene - 1) {
            bouteille.setAttribute("oxy", "" + oxy + "");
        }

        if (i == nbBouteillesOxygene - 1 && oxy > 0 && oxy < 8) {
            bouteille.setAttribute("src", "img/oxy" + oxy + ".png");
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
    if (!document.getElementById("bouteille")) {
        event.target.onclick = null;
        fuites[1] -= parseInt(Math.random() * (12 - 4) + 4);
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
        event.target.setAttribute("id", "bouteille")

        if (event.target.getAttribute("oxy")) {
            oxy = event.target.getAttribute("oxy");
        } else {
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

function insererBouteilleOxygeneMenu() {
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
    }, 1000);


    setTimeout(function () {
        if (fuites[0] > 0) {
            let audio = new Audio('./audio/bip6.wav');
            audio.play();
            loadingIcone.style.color = "green";
            loadingIcone.innerText = "Succes !";
            nbBouteillesOxygene++;

            fuites[0] -= parseInt(Math.random() * (12 - 4) + 4);
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
            oxy++;
            bouteille.remove();
            audio.play();
            return;
        }
        if (oxygene > oxygeneMax) {

            msgLoading.style.color = "red";
            msgLoading.style.animationName = "none"
            msgLoading.innerText = "Une erreur est survenue, le reservoir d'oxygene est plein";
            let audio = new Audio('./audio/bip5.wav');
            audio.play();
            oxy++;
            bouteille.remove();
            oxygene = oxygeneMax - 1;
            return;
        }
        bouteille.setAttribute("src", "img/oxy" + oxy + ".png")
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
            bouteille.setAttribute("oxy", "" + oxy + "")
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
    item1B.setAttribute("onclick", "energieRedirect()");
    item1B.innerText = "Activer la detection d'asteroides"
    item1.appendChild(item1A);
    item1.appendChild(item1B);
    if (document.getElementById("msgPDA2").childNodes.length == 1) {
        document.getElementById("msgPDA2").appendChild(item1);
    }

}
function energieRedirect() {
    document.getElementById("navigation-tab").setAttribute("class", "nav-link");
    document.getElementById("oxygen-tab").setAttribute("class", "nav-link active");
    document.getElementById("navigation").setAttribute("class", "tab-pane fade");
    document.getElementById("oxygen").setAttribute("class", "tab-pane fade show active");
    viewModule("Dectection asteroides", 0);

}
function activeDetectionAsteroides() {
    if (document.getElementById("activationDetectionAsteroide")) {
        document.getElementById("activationDetectionAsteroide").remove();
    }

    document.getElementById("mapAsteroide").style.visibility = "visible";
    document.getElementById("msgPDA3").style.visibility = "visible";

    if (!document.getElementById("mapAsteroideVaisseau")) {
        let vaisseauMap = document.createElement("div");
        vaisseauMap.setAttribute("id", "mapAsteroideVaisseau")
        vaisseauMap.style.width = (8) + "px";
        vaisseauMap.style.height = (8) + "px";
        document.getElementById("mapAsteroide").appendChild(vaisseauMap);
    }

}

function miseAJourTemperature() {
    for (let i = 0; i < 60; i++) {
        if (i % augmentationTemp == 0) {
            temperature++
        }

    }
}
function verifClimatisation() {
    if (activationClimatisation) {
        for (let i = 0; i < 99; i++) {
            if (i % (100 - parseInt(puissanceClimatisation / 2)) == 0 && puissanceClimatisation > 0) {
                console.log("CLIM")
                temperature--;
            }
        }
    }

}

function analysePDA() {
    usage = 35;
    batteries[numBatterieActive] = batteries[numBatterieActive] -= 35;
    if (detectionAsteroide) {
        usage += 10;
        batteries[numBatterieActive] -= 10;
    }
    if (activationClimatisation) {
        usage += 10;
        batteries[numBatterieActive] -= 10;
    }
    if (usage > 40) {
        augmentationTemp = 100 - usage;
    }
    if (batteries[numBatterieActive] < 0) {
        batteries[numBatterieActive] = 0;
    }
    if (activationBouclier) {
        vieBouclier -= 1;
        puissanceBouclier = 5;
    }
    if (vieBouclier < 0) {
        vieBouclier = 0;
        modules[1] = false;
        activationBouclier = false;
    }


    if (oxy >= 0) {
        setInterval(animOxy(oxy), 300)
        setInterval(miseAJourOxygene(oxy), 300)
        setInterval(qteOxygene(oxy), 300)
    }
    oxygene = oxygene - Math.round((debitOxygene) / 40);
    if (oxygene % 1 == 0) {
        setInterval(miseAJourOxygene(), 3000)
        setInterval(qteOxygene(), 3000)
    }
    if (modeTelechargement) {
        telechargement();
    }

    for (let i = 0; i < misesAJours.length; i++) {

        setInterval(updateMiseAJour(i), 8000)


    }

    let ok = false;

    if (reparationLongue) {
        document.getElementById("retour2").style.visibility = "hidden";

        for (let i = 0; i < fuites.length; i++) {
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

        for (let i = 0; i < reparation.length; i++) {
            setInterval(repareFuite(i), 500)
        }
    }


}
function miseAJourOxygene() {
    let barre = document.getElementById('barre-oxygen');
    if (oxygene !== 0) {
        if (oxygene < oxygeneMax) {
            barre.style.width = (oxygene / 20) + "px";
        } else {
            barre.style.width = document.getElementById("barre-vide").offsetWidth + "px";
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
    if (fuites[num] >= vieCanalisation && document.getElementById("fuite" + (num + 1)) != null) {
        fuites[num] = vieCanalisation;
        reparation[num] = false;
        document.getElementById("fuite" + (num + 1)).innerText = "";
        document.getElementById("fuite" + (num + 1)).style = null;
        document.getElementById("fuite" + (num + 1)).style.opacity = "0%";

    }
    let ajout = 0;
    if ((reparation[num] === true && fuites[num] != 0) || (reparationLongue)) {
        let random = Math.random() * (6 - 1) + 1;
        if (reparationLongue && parseInt(random) == 2) {
            fuites[num] = fuites[num] + valReparationLongue;
        } else if (!reparationLongue) {
            fuites[num] = fuites[num] + 10;
            let audio = new Audio('./audio/metal.wav');
            audio.play();
        }


        if (fuites[num] <= vieCanalisation) {
            document.getElementById("fuite" + (num + 1)).innerText = ((Math.round(fuites[num]) * 10) / 10) + " %";
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
        , "Reparation totale plus rapide (1)", "Reparation totale plus rapide (2)", "Canalisations resistantes (1)", "Canalisations resistantes (2)"]
    for (let i = 0; i < libelleMisesAJours.length; i++) {
        item = document.createElement("div");
        item.setAttribute("class", "miseAJourPDA1")
        let itemA = document.createElement("div");
        itemA.setAttribute("class", "itemClicablePDA")
        itemA.innerText = libelleMisesAJours[i];
        itemA.style.float = "left";
        let itemB = document.createElement("div");
        itemB.setAttribute("class", "miseAJourPDA2")
        itemB.setAttribute("id", "miseAJour" + i)
        itemB.setAttribute("onclick", "updateMiseAJour2(" + i + ")")
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
    let event = document.getElementById("miseAJour" + i)
    event.style.color = "orange";
    event.style.fontSize = "20px";
    event.style.background = "none";
    event.innerText = "(....................)";
    if (!misesAJours[i]) {
        misesAJours[i] = 0;
    } else if (misesAJours[i] == 100) {
        document.getElementById("miseAJour" + i).style.color = "greenyellow";
        document.getElementById("miseAJour" + i).onclick = null;
        document.getElementById("miseAJour" + i).innerText = "[ FAIT ]";
    }

}
function updateMiseAJour(j) {

    if (misesAJours[j] < 100 && misesAJours[j] != null) {
        if (document.getElementById("miseAJour" + j)) {
            document.getElementById("miseAJour" + j).innerText = "(";
        }
        for (let i = 0; i < misesAJours[j]; i++) {
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
        for (let k = misesAJours[j]; k < 100; k++) {
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
                    for (let i = 0; i < fuites.length; i++) {
                        fuites[i] = vieCanalisation;
                    }
                    break;
                case 5:
                    vieCanalisation += 50;
                    for (let i = 0; i < fuites.length; i++) {
                        fuites[i] = vieCanalisation;
                    }
                    break;
            }
        }
    }

}
function clearInterface(titre) {
    clearInterval(thread)
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