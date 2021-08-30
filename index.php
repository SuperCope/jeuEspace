<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Point and Click</title>
    <!-- CSS only -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="./src/css/style.css">
    <link rel="stylesheet" href="./src/css/pda.css">
    <!-- JS only -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</head>

<body onload="init()">
    <div id="menu" >
        <ul>
            <li>Jours de Voyage : 000</li>
            <li>Planetes Rencontrees : 0</li>
            <li>Nombre de graines : 0000</li>
            <li>Sante : 0</li>
        </ul>
    </div>

    <div class="main">
        <div id="cleUSB" nbInstallations="4" nbFichiers="14" draggable="true" ondragstart="dragstart_handler(event)"></div>
        <div id="pda">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="navigation-tab" data-toggle="tab" href="#navigation" role="tab" aria-controls="navigation" aria-selected="true">Navigation</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="oxygen-tab" data-toggle="tab" href="#oxygen" role="tab" aria-controls="oxygen" aria-selected="false">Gestionnaire</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Mises e jour</a>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="navigation" role="tabpanel" aria-labelledby="navigation-tab">
                    <div id="imgPDA">
                        <div id="msgPDA">Loading data...</div>
                        <img id="imgPDA2" width="250px" height="150px" src="img/loading.gif" alt="">
                    </div>
                    <div id="msgPDA2">HAUTEUR : ANALYSE EN COURS...</div>
                    <div id="mapAsteroide"></div>
                    <div id="msgPDA3">Pas de champ d'asteroide detecte</div>
                    <div class="row">
                        <div class="col">
                            <button class="btn btn-primary" id="shipUp" onclick="game.shipUp()" style="width:20%"><i class="fas fa-angle-double-up"></i></button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <button class="btn btn-primary" id="shipLeft" onclick="game.shipLeft()" style="width:20%"><i class="fas fa-angle-double-left"></i></button>
                            <button class="btn btn-danger" id="stop" onclick="game.stop()" style="width:20%"><i class="fas fa-ban"></i></button>
                            <button class="btn btn-primary" id="shipRight" onclick="game.shipRight()" style="width:20%"><i class="fas fa-angle-double-right"></i></button>
                        </div>
                    </div> 
                    <div class="row">
                        <div class="col">
                            <button class="btn btn-primary" id="shipDown" onclick="shipDown()" style="width:20%"><i class="fas fa-angle-double-down"></i></button>
                        </div>
                    </div><br>
                    <button id="decoller" onclick="game.shipElevation()">Decoller</button>
                    <button id="atterir" onclick="game.shipAtterir()">Atterir</button>
                </div>
                <div class="tab-pane fade" id="oxygen" role="tabpanel" aria-labelledby="oxygen-tab">
                    <div id="oxygeneTitre">Gerer l'oxygene</div>
                        <div id="items">

                        </div>
                    </div>
                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                    <div id="oxygeneTitre">Rechercher une installation</div>
                    <div id="items"><br>
                        <input type="text" onkeyup="updateValSearch()" id="searchBarInstallation" size="200" max="200"></input>
                        <span class="fas fa-search" id="searchIcon" onclick=""></span>
                        <span class="fas fa-times" id="cancelSearchIcon" onclick="cancelSearch()"></span>
                        <br><br><div id="suggestions"></div>
                    </div>
                    
                </div>
            </div>

        </div>
        <!-- Oxygen -->
        <div class="oxygen">
            <h3>NIVEAU D'OXYGENE</h3>
            <div class="vide"></div>
            <div id="barre-vide"></div>
            <div id="barre-oxygen">
                <h3 id="oxygen-nb" style="margin-top:25px">----</h3>
            </div>
            <button class="btn btn-oxygen">Recharge (Restant : 1 )</button>
            <button class="btn btn-jardin">Acceder au Jardin</button>
        </div>

        <!-- Vie Vaisseaux -->
        <div class="vie">
            <div class="vaisseaux">
                <h3>VOTRE VAISSEAU</h3>
                <div id="haut">
                    <div id="barre-vide2"></div>
                    <div id="barre-vie">
                        <h6 id="vie-nb1">100</h6>
                    </div>
                </div>
                <div id="centre">
                    <div id="barre-vide2"></div>
                    <div id="barre-vie">
                        <h6 id="vie-nb">100</h6>
                    </div>
                </div>
                <div id="gauche">
                    <div id="barre-vide2"></div>
                    <div id="barre-vie">
                        <h6 id="vie-nb">100</h6>
                    </div>
                </div>
                <div id="droite">
                    <div id="barre-vide2"></div>
                    <div id="barre-vie">
                        <h6 id="vie-nb">100</h6>
                    </div>
                </div>
                <div id="bas">
                    <div id="barre-vide2"></div>
                    <div id="barre-vie">
                        <h6 id="vie-nb">100</h6>
                    </div>
                </div>
                <div id="bas-bas">
                    <div id="barre-vide2"></div>
                    <div id="barre-vie">
                        <h6 id="vie-nb">100</h6>
                    </div>
                </div>
            </div>
        </div>

        <!-- Panneau des vitesses -->

        <div class="control">
            <div class="tableaux-bord">
                <div>
                    <div>
                        <h3>Panneau de Control</h3>
                    </div>
                    <div class="affichage">
                        <div class="vitesse-atterissage">
                            <p>VITESSE ATTERISSAGE</p>
                            <h2 id="vitesse-atterisage-vaiseaux">13</h2>
                        </div>
                        <div class="gravite">
                            <p>GRAVITE</p>
                            <h2 id="gravite-vaiseaux">78</h2>
                        </div>
                        <div class="vitesse">
                            <p>VITESSE EN KM/H</p>
                            <div id="vitesse-vaiseaux">120</div>
                        </div>
                        <div class="temperature">
                            <p>TEMPERATURE</p>
                            <h2 id="temperature-vaiseaux">35</h2>
                        </div>
                            <div class="pression">
                            <p>PRESSION</p>
                            <h2 id="pression-vaiseaux">12</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carburant">
                <h3>Carburant</h3>
                <div class="carburant-vide">

                </div>
                <div id="carburant-plein">

                </div>
                <button id="btn-carburant" onmousedown="game.fill()">Remplir</button>
                <?php 
                    for($i=0; $i < 3 ; $i++){
                        $html = '<img class="jerrycan" src="./img/jerrycan.png" alt="Utile pour remplir le carburant">';
                    }
                    echo $html;
                ?>
            </div>
        </div>
        <div id="mapPlanetes"></div>
        <!-- Puissance -->
        <div class="puissance">
            <button id="iconeVaisseau1" onmousedown="game.deceleration()" class="btn-reacteur"></button>
            <button id="iconeVaisseau2" onmousedown="game.acceleration()" class="btn-accelerateur"></button>

            <div id="vaisseau-view" hidden>
                <div class="fire0">
                    <div class="flames0">
                        <div class="flame0"></div>
                        <div class="flame0"></div>
                        <div class="flame0"></div>
                        <div class="flame0"></div>
                    </div>
                </div>
                <div class="fire1">
                    <div class="flames1">
                        <div class="flame1"></div>
                        <div class="flame1"></div>
                        <div class="flame1"></div>
                        <div class="flame1"></div>
                    </div>
                </div>
                <div class="fire2">
                    <div class="flames2">
                        <div class="flame2"></div>
                        <div class="flame2"></div>
                        <div class="flame2"></div>
                        <div class="flame2"></div>
                    </div>
                </div>
                <div class="fire3">
                    <div class="flames3">
                        <div class="flame3"></div>
                        <div class="flame3"></div>
                        <div class="flame3"></div>
                        <div class="flame3"></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Info Joueurs -->
        <div class="info-joueur">
            <div class="primary-info">
                <div class="besoin water" id="jaugeWater">
                    <img id="water" class="image" src="./img/water.png"  alt="">
                </div>
                <div class="besoin food" id="jaugeFood">
                    <img id="food" class="image" src="./img/food.png" alt="">
                </div>
                <div class="etat">
                    <h3 id="text-etat">SANTE DU JOUEUR : <span style="color: green;" id="santeJoueur">-------<span></h3>
                </div>
            </div>
            <div id="barre-vide"></div>
            <div id="barre-fatigue"></div>
        </div>
    </div>
</body>
<script src="./src/class/Planete.js"></script>
<script src="./src/class/mapPlanetes.js"></script>
<script src="./src/class/SearchBarInstallations.js"></script>
<script src="./src/class/Update.js"></script>
<script src="./src/class/Asteroide.js"></script>
<script src="./src/class/GPS.js"></script>
<script src="./src/class/Oxygen.js"></script>
<script src="./src/class/Vaisseau.js"></script>
<script src="./src/class/Player.js"></script>
<script src="./src/class/Game.js"></script>
<script>
    let game;
    function init() {
        game = new Game();
        setTimeout(game.init(),3000);

        document.getElementById("shipUp").onclick = function() { game.shipUp() };
        document.getElementById("shipLeft").onclick = function() { game.shipLeft() };
        document.getElementById("shipRight").onclick = function() { game.shipRight() };
        document.getElementById("shipDown").onclick = function() { game.shipDown() };
        document.getElementById("decoller").onclick = function() { game.shipElevation() };
        document.getElementById("atterir").onclick = function() { game.shipAtterir() };
        document.getElementById("btn-carburant").onclick = function() { game.fill() };
        document.getElementById("iconeVaisseau1").onclick = function() { game.deceleration() };
        document.getElementById("iconeVaisseau2").onclick = function() { game.acceleration() };
    }

    function dragstart_handler(ev) {
        console.log(ev.target)
        // On ajoute l'identifiant de l'élément cible à l'objet de transfert
        ev.dataTransfer.setData("application/my-app", ev.target.id);
        ev.dataTransfer.dropEffect = "move";
    }

    function dragover_handler(ev) {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = "move"
    }

    function drop_handler(ev) {
        ev.target.innerText = "";
        ev.preventDefault();
        // On obtient l'identifiant de la cible et on ajoute l'élément déplacé
        // au DOM de la cible
        let data = ev.dataTransfer.getData("application/my-app");
        ev.target.appendChild(document.getElementById(data));
        console.log(ev.target)
        if (ev.target.getAttribute("id") === "lecteur") {
            document.getElementById(data).style.width = "35px";
            document.getElementById(data).style.height = "100px";
            game.insertCleUSB()
        }
    }
</script>
</html>