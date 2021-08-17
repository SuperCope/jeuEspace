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
    <link rel="stylesheet" href="./src/css/vaisseau.css">
    <!-- JS only -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</head>

<body>
    <div id="menu" >
        <ul>
            <li>Jours de Voyage : 000</li>
            <li>Planetes Rencontrees : 0</li>
            <li>Nombre de graines : 0000</li>
            <li>Sante : 0</li>
        </ul>
    </div>

    <div class="main">
        <div id="pda">
            <div id="msgPDA">Loading data...</div>
            <div class="row">
                <div class="col">
                    <button class="btn btn-primary" onclick="vaisseauHaut()" style="width:20%"><i class="fas fa-angle-double-up"></i></button>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <button class="btn btn-primary" onclick="vaisseauGauche()" style="width:20%"><i class="fas fa-angle-double-left"></i></button>
                    <button class="btn btn-primary" style="width:20%;opacity:0"></button>
                    <button class="btn btn-primary" onclick="vaisseauDroite()" style="width:20%"><i class="fas fa-angle-double-right"></i></button>
                </div>
            </div> 
            <div class="row">
                <div class="col">
                    <button class="btn btn-primary" onclick="vaisseauBas()" style="width:20%"><i class="fas fa-angle-double-down"></i></button>
                </div>
            </div><br>
            <button id="decoller" onclick="vaisseauElevation()">Decoller</button>
            <button id="atterir" onclick="vaisseauAtterrissage()">Atterir</button>
                    <div id="msgPDA2">Z : undefined</div>
        </div>
        <!-- Oxygen -->
        <div class="oxygen">
            <h3>NIVEAU D'OXYGENE</h3>
            <div class="vide"></div>
            <div id="barre-vide"></div>
            <div id="barre-oxygen">
                <h3 id="oxygen-nb" style="margin-top:25px">100</h3>
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
                        <h2 id="vitesse-vaiseaux">120</h2>
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
            <button id="btn-carburant" onmousedown="remplir()">Remplir</button>
        </div>
        
        
    </div>
        

            
        <!-- Puissance -->
        <div class="puissance">
            <button id="iconeVaisseau" onmousedown="deceleration()" class="btn-reacteur"></button>
            <button id="iconeVaisseau" onmousedown="acceleration()" class="btn-accelerateur"></button>

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
                    <h3 id="text-etat">SANTE DU JOUEUR : <span style="color: green;">BONNE<span></h3>
                </div>
            </div>
            <div id="barre-vide"></div>
            <div id="barre-fatigue"></div>
        </div>
    </div>
</body>

<script src="pda.js"></script>
<script src="index.js"></script>

</html>