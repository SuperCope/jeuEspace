<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Point and Click</title>
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="src/css/pda.css">
    <link rel="stylesheet" href="src/css/style2.css">
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
</head>

<body style="background-color: #0b283e">
<div class="row align-items-center justify-content-center">
    <!-- LeftMenuPrimary  -->
    <div class="col-2" style="background-color: #0b283e" id="leftMenuPrimary">
        <div class="d-flex align-items-center justify-content-center flex-column">
            <button id="buttonMenuOrdinateur" onclick="displayMenuOrdinateur();" class="btn btn-danger" style="font-size:2vw;height:75px;width:auto;margin-bottom: 50px">Ordinateur</button>
            <button id="buttonMenuPlayer" onclick="switchMenuPrimary(this);" class="btn btn-info" style="font-size:2vw;height:75px;width:auto;margin-bottom:50px">Player</button>
            <button id="buttonMenuVaisseau" onclick="switchMenuPrimary(this);" class="btn btn-info" style="font-size:2vw;height:75px;width:auto;margin-bottom:25px">Vaisseau</button>
            <button id="buttonMenuNavigation" onclick="switchMenuPrimary(this);" class="btn btn-info" style="font-size:2vw;height:75px;width:auto;margin-top:25px">Navigation</button>
            <button id="buttonMenuJardin" onclick="switchMenuPrimary(this);" class="btn btn-info" style="font-size:2vw;height:75px;width:auto;margin-top:50px">Jardin</button>
            <button id="buttonMenuPlanete" onclick="switchMenuPrimary(this);" class="btn btn-info" style="font-size:2vw;height:75px;width:auto;margin-top:50px">Planete</button>
        </div>
    </div>
    <!-- RightMenuPrimary  -->
    <div class="col" style="background-color: black" id="rightMenuPrimary">
        <div id="content">

            <!-- PLAYER -->
            <div class="card text-center" style="width: 80%;height: 80%;" id="displayMenuPlayer">
                <div class="card-body d-flex flex-column">
                    <div class="row">
                        <div class="col">
                            <div id="accordionPlayer">
                                <div>
                                    <div class="card-header" id="headingOnePlayer">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOnePlayer" aria-expanded="true" aria-controls="collapseOnePlayer">
                                                <div class="row justify-content-center align-items-center">
                                                    <div class="col">
                                                        <img src="src/img/heart.png" alt="">
                                                    </div>
                                                    <div class="col justify-content-center align-items-center">
                                                        <div class="progress">
                                                            <span id="vieJoueur" class="" style="width: 100%;background: #ff0000"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseOnePlayer" class="collapse" aria-labelledby="headingOnePlayer" data-parent="#accordionPlayer">
                                        <div class="card-body text-white">
                                            <button class="btn-primary btn">Utiliser un kit de soin</button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="card-header" id="headingTwoPlayer">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseTwoPlayer" aria-expanded="true" aria-controls="collapseTwoPlayer">
                                                <div class="row justify-content-center align-items-center">
                                                    <div class="col">
                                                        <img src="src/img/food.png" alt="">
                                                    </div>
                                                    <div class="col">
                                                        <div class="progress">
                                                            <span id="foodJoueur" style="width: 100%;background: #ee6f06"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseTwoPlayer" class="collapse" aria-labelledby="headingTwoPlayer" data-parent="#accordionPlayer">
                                        <div class="card-body">
                                            <button class="btn-primary btn">Utiliser une ration de nourriture</button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="card-header" id="headingThreePlayer">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseThreePlayer" aria-expanded="true" aria-controls="collapseThreePlayer">
                                                <div class="row justify-content-center align-items-center">
                                                    <div class="col">
                                                        <img src="src/img/water.png" alt="">
                                                    </div>
                                                    <div class="col">
                                                        <div class="progress">
                                                            <span id="weterJoueur" class="" style="width: 100%;background: #06c3ee"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseThreePlayer" class="collapse" aria-labelledby="headingThreePlayer" data-parent="#accordionPlayer">
                                        <div class="card-body">
                                            <button class="btn-primary btn">Utiliser une ration d'eau</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div id="carouselPlayer" class="carousel slide" data-ride="carousel show" data-touch="false" data-interval="false">
                                <div class="carousel-inner" id="inventaryShip">
                                </div>
                                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- VAISSEAU -->
            <div class="card text-center" style="width: 80%;height: 80%;" id="displayMenuVaisseau" hidden>
                <div class="card-body d-flex flex-column">
                    <div class="row">
                        <div class="col">
                            <div id="accordionVaisseau">
                                <div>
                                    <div class="card-header" id="headingOneVaisseau">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOneVaisseau" aria-expanded="true" aria-controls="collapseOneVaisseau">
                                                <div class="row justify-content-center align-items-center">
                                                    <div class="col">
                                                        <img src="src/img/carburant.png" alt="">
                                                    </div>
                                                    <div class="col">
                                                        <div class="progress">
                                                            <span id="jaugeCarburant" style="width: 100%;background: #ee6f06"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseOneVaisseau" class="collapse" aria-labelledby="headingOneVaisseau" data-parent="#accordionVaisseau">
                                        <div class="card-body text-white">
                                            <button class="btn-primary btn">Utiliser un bidon d'essence</button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="card-header" id="headingTwoVaisseau">
                                        <h5 class="mb-0">
                                            <button onclick="game.manageModules()" class="btn btn-link" data-toggle="collapse" data-target="#collapseTwoVaisseau" aria-expanded="true" aria-controls="collapseTwoVaisseau">
                                                <div class="row justify-content-center align-items-center">
                                                    <div class="col">
                                                        <img src="src/img/energy.png" alt="">
                                                    </div>
                                                    <div class="col">
                                                        <div class="progress">
                                                            <span id="jaugeEnergie" style="width: 100%;background: #d7c60b"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseTwoVaisseau" class="collapse" aria-labelledby="headingTwoVaisseau" data-parent="#accordionVaisseau">
                                        <div class="card-body">
                                            <div id="pdaEnergy" class="pda">
                                                <div id="titre" class="titre"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="card-header" id="headingThreeVaisseau">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link" data-toggle="collapse" onclick="game.menuReloadOxygen()" data-target="#collapseThreeVaisseau" aria-expanded="true" aria-controls="collapseThreeVaisseau">
                                                <div class="row justify-content-center align-items-center">
                                                    <div class="col">
                                                        <img src="src/img/o2.png" alt="">
                                                    </div>
                                                    <div class="col">
                                                        <div class="progress">
                                                            <span id="jaugeOxygene" style="width: 100%;background: #06c3ee"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseThreeVaisseau" class="collapse" aria-labelledby="headingThreeVaisseau" data-parent="#accordionVaisseau">
                                        <div class="card-body">
                                            <div id="pdaOxygen" class="pda">
                                                <div id="titre" class="titre"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" data-interval="false" data-wrap="false">
                                <div class="carousel-inner" id="inventaryPlayer">
                                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- NAVIGATION -->
            <div class="card text-center" style="width: 80%;height: 80%;" id="displayMenuNavigation" hidden>
                <div class="card-body d-flex align-items-center justify-content-center flex-column">
                    <div class="row justify-content-center align-items-center text-white" style="width:100%">
                        <div class="col" style="font-size: 2.5vw">
                            NAVIGATION
                            <div  class="pda">

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
                        </div>
                    </div>
                </div>
            </div>

            <!-- JARDIN -->
            <div class="card text-center" style="width: 80%;height: 80%;" id="displayMenuJardin" hidden>
                <div class="card-body d-flex align-items-center justify-content-center flex-column">
                    <div id="accordionJardin">
                        <div>
                            <div class="card-header" id="headingOneJardin">
                                <h5 class="mb-0">
                                    <button class="btn" data-toggle="collapse" data-target="#collapseOneJardin" aria-expanded="true" aria-controls="collapseOneJardin">
                                        <div class="row justify-content-center align-items-center">
                                            <div class="col">
                                                <img src="src/img/leaves.png" id="iconePlante1" width="120px" heigth="120px" alt="">
                                            </div>
                                            <div class="col justify-content-center align-items-center">
                                                <div class="progress" style="text-decoration:none">
                                                    <span id="progressPlant1" style="width: 0%;background: #00ff0c"></span>
                                                    <div id="recolter1" class="recolterBtn"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </h5>
                            </div>
                            <div id="collapseOneJardin" class="collapse" aria-labelledby="headingOneJardin" data-parent="#accordionJardin">
                                <div class="card-body text-white" id="jardinSerre1">

                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="card-header" id="headingTwoJardin">
                                <h5 class="mb-0">
                                    <button class="btn" data-toggle="collapse" data-target="#collapseTwoJardin" aria-expanded="true" aria-controls="collapseTwoJardin">
                                        <div class="row justify-content-center align-items-center">
                                            <div class="col">
                                                <img id="iconePlante2" width="120px" heigth="120px" src="src/img/leaves.png" alt="">
                                            </div>
                                            <div class="col">
                                                <div class="progress">
                                                    <span id="progressPlant2" style="width: 0%;background: #00ff0c"></span>
                                                    <div id="recolter2" class="recolterBtn"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </h5>
                            </div>
                            <div id="collapseTwoJardin" class="collapse" aria-labelledby="headingTwoJardin" data-parent="#accordionJardin">
                                <div class="card-body text-white" id="jardinSerre2">

                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="card-header" id="headingThreeJardin">
                                <h5 class="mb-0">
                                    <button class="btn" data-toggle="collapse" data-target="#collapseThreeJardin" aria-expanded="true" aria-controls="collapseThreeJardin">
                                        <div class="row justify-content-center align-items-center">
                                            <div class="col">
                                                <img id="iconePlante3" width="120px" heigth="120px" src="src/img/leaves.png" alt="">
                                            </div>
                                            <div class="col">
                                                <div class="progress">
                                                    <span id="progressPlant3" style="width: 0%;background: #00ff0c"></span>
                                                    <div id="recolter3" class="recolterBtn"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </h5>
                            </div>
                            <div id="collapseThreeJardin" class="collapse" aria-labelledby="headingThreeJardin" data-parent="#accordionJardin">
                                <div class="card-body text-white" id="jardinSerre3">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center align-items-center">
                        <div class="col">
                            <img src="src/img/water.png" alt="">
                        </div>
                        <div class="col">
                            <div class="progress">
                                <span class="" style="width: 0%;background: #06c3ee"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- LeftMenuOrdinateur  -->
    <div class="col-2" style="background-color: #0b283e" id="leftMenuOrdinateur" hidden>
        <div class="d-flex align-items-center justify-content-center flex-column">
            <button id="buttonMenuVaisseau" onclick="displayMenuPrimary(this);" class="btn btn-danger" style="font-size:2vw;height:75px;width:auto;margin-bottom:50px">Retour</button>
            <button id="buttonMenuOxygen" onclick="switchMenuOrdinateur(this);" class="btn btn-info" style="font-size:2vw;height:75px;width:auto;margin-bottom:50px">Oxygene</button>
            <button id="buttonMenuShield" onclick="switchMenuOrdinateur(this);" class="btn btn-info" style="font-size:2vw;height:75px;width:auto;margin-bottom:50px">Bouclier</button>
            <button id="buttonMenuClim" onclick="switchMenuOrdinateur(this);" class="btn btn-info" style="font-size:2vw;height:75px;width:auto;">Climatisation</button>
            <button id="buttonMenuData" onclick="switchMenuOrdinateur(this);" class="btn btn-info" style="font-size:2vw;height:75px;width:auto;margin-top:50px">CLE USB</button>
            <button id="buttonMenuBattery" onclick="switchMenuOrdinateur(this);" class="btn btn-info" style="font-size:2vw;height:75px;width:auto;margin-top:50px">Batteries</button>
            <button id="buttonMenuAsteroid" onclick="switchMenuOrdinateur(this);" class="btn btn-info" style="font-size:2vw;height:75px;width:auto;margin-top:50px">Asteroides</button>
        </div>
    </div>
    <!-- RightMenuOrdinateur  -->
    <div class="col" style="background-color: black" id="rightMenuOrdinateur" hidden>
        <div id="content">

            <!-- OXYGEN -->
            <div class="text-center row" style="width: 80%;height: 80%;" id="displayMenuOxygen">
                <div class="col">
                    <div class="card card-body">
                        <div class="" style="color: cyan;width: 100%">
                            <div class="" style="font-size: 2.5vw">
                                <button class="btn btn-primary" style="font-size:2vw;height:75px;width:auto;" id="buttonMenuOxygenCanalisation" onclick="displayMenuOxygen(this)"> Menu oxygen </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- SHIELD -->
            <div class="card text-center" style="width: 80%;height: 80%;" id="displayMenuShield" hidden>
                <div class="card-body d-flex align-items-center justify-content-center flex-column">
                    <div class=" justify-content-center align-items-center" style="color: cyan;width: 100%">
                        <div class="" style="font-size: 2.5vw">
                            Shield
                            <div id="pdaModule2" class="pda">
                                <div id="titre" class="titre"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- CLIM -->
            <div class="card text-center" style="width: 80%;height: 80%;" id="displayMenuClim" hidden>
                <div class="card-body d-flex align-items-center justify-content-center flex-column">
                    <div class="row justify-content-center align-items-center" style="color: cyan;width: 100%">
                        <div class="col" style="font-size: 2.5vw">
                            CLIM
                            <div id="pdaModule1" class="pda">
                                <div id="titre" class="titre"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- DATA -->
            <div class="card text-center" style="width: 80%;height: 80%;" id="displayMenuData" hidden>
                <div class="card-body d-flex align-items-center justify-content-center flex-column">
                    <div class="row justify-content-center align-items-center" style="color: cyan;width: 100%">
                        <div class="col" style="font-size: 2.5vw">
                            DATA
                            <div id="cleUSB" nbInstallations="4" nbFichiers="14" draggable="true" ondragstart="dragstart_handler(event)"></div>
                            <div id="pdaCleUSB" class="pda">
                                <div id="titre" class="titre"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- BATTERY -->
            <div class="card text-center" style="width: 80%;height: 80%;" id="displayMenuBattery" hidden>
                <div class="card-body d-flex align-items-center justify-content-center flex-column">
                    <div class="row justify-content-center align-items-center" style="color: cyan;width: 100%">
                        <div class="col" style="font-size: 2.5vw">
                            BATTERY
                            <div id="pdaBattery" class="pda">
                                <div id="titre" class="titre"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- DATA -->
            <div class="card text-center" style="width: 80%;height: 80%;" id="displayMenuAsteroid" hidden>
                <div class="card-body d-flex align-items-center justify-content-center flex-column">
                    <div class="row justify-content-center align-items-center" style="color: cyan;width: 100%">
                        <div class="col" style="font-size: 2.5vw">
                            ASTEROID
                            <div id="pdaModule0" class="pda">
                                <div id="titre" class="titre"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- LeftMenuOxygen  -->
    <div class="col-2" style="background-color: #0b283e" id="leftMenuOrdinateurOxygen" hidden>
        <div class="d-flex align-items-center justify-content-center flex-column">
            <button id="buttonMenuOrdinateur" onclick="displayMenuOrdinateur(this);" class="btn btn-danger" style="font-size:2vw;height:75px;width:auto;margin-bottom:50px">Retour</button>
            <button id="buttonMenuOxygenCanalisation" onclick="switchMenuOxygen(this);" class="btn btn-info" style="font-size:2vw;height:75px;width:auto;margin-bottom:50px">Canalisation</button>
            <button id="buttonMenuOxygenDebit" onclick="switchMenuOxygen(this);" class="btn btn-info" style="font-size:2vw;height:75px;width:auto;margin-bottom:50px">Debit</button>
        </div>
    </div>
    <!-- RightMenuOxygen  -->
    <div class="col" style="background-color: black" id="rightMenuOrdinateurOxygen" hidden>
        <div id="content">

            <!-- CANALISATION -->
            <div class="card text-center" style="width: 80%;height: 80%;" id="displayMenuOxygenCanalisation">
                <div class="card-body d-flex align-items-center justify-content-center flex-column">
                    <div class="row justify-content-center align-items-center" style="color: cyan;width: 100%">
                        <div class="col" style="font-size: 2.5vw">
                            CANALISATION
                            <div id="pdaCanalisation" class="pda">
                                <div id="titre" class="titre"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- DEBIT -->
            <div class="card text-center" style="width: 80%;height: 80%;" id="displayMenuOxygenDebit" hidden>
                <div class="card-body d-flex align-items-center justify-content-center flex-column">
                    <div class="row justify-content-center align-items-center" style="color: cyan;width: 100%">
                        <div class="col" style="font-size: 2.5vw">
                            DEBIT
                            <div id="pdaDebit" class="pda">
                                <div id="titre" class="titre"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
<script>
    function switchMenuPrimary(e) {
        let id = e.id.split("buttonMenu")[1];
        let childs = $('#rightMenuPrimary').children()[0].childNodes;
        let index;
        for(let i = 0; i < childs.length; i++) {
            if(childs[i].id === "displayMenu" + id) index = i;
            if(childs[i].id && childs[i].id.startsWith("displayMenu")) childs[i].hidden = true;
        }
        if(index !== undefined) childs[index].hidden = false;
        game.loadInventaryPlayer();
    }
    function switchMenuOrdinateur(e) {
        let id = e.id.split("buttonMenu")[1];
        let childs = $('#rightMenuOrdinateur').children()[0].childNodes;
        let index;
        for(let i = 0; i < childs.length; i++) {
            if(childs[i].id === "displayMenu" + id) index = i;
            if(childs[i].id && childs[i].id.startsWith("displayMenu")) childs[i].hidden = true;
        }
        if(index !== undefined) childs[index].hidden = false;

        switch(e.id){
            case "buttonMenuShield":
                game.viewModule("Bouclier", 2)
                break;
            case "buttonMenuClim":
                game.viewModule("Climatisation", 1);
                break;
            case "buttonMenuAsteroid":
                game.viewModule("Dectection asteroides", 0);
                break;
            case "buttonMenuData":
                game.USBKeyMenu();
                break;
            case "buttonMenuBattery":
                game.manageBatteries();
                break;
        }

    }
    function switchMenuOxygen(e) {
        let id = e.id.split("buttonMenuOxygen")[1];
        let childs = $('#rightMenuOrdinateurOxygen').children()[0].childNodes;
        let index;
        for(let i = 0; i < childs.length; i++) {
            if(childs[i].id === "displayMenuOxygen" + id) index = i;
            if(childs[i].id && childs[i].id.startsWith("displayMenuOxygen")) childs[i].hidden = true;
        }
        if(index !== undefined) childs[index].hidden = false;
        game.configDebitDiffuseur();
    }

    function displayMenuOrdinateur() {
        $('#leftMenuPrimary')[0].hidden = true;
        $('#rightMenuPrimary')[0].hidden = true;
        $('#leftMenuOrdinateur')[0].hidden = false;
        $('#rightMenuOrdinateur')[0].hidden = false;
        $('#leftMenuOrdinateurOxygen')[0].hidden = true;
        $('#rightMenuOrdinateurOxygen')[0].hidden = true;
    }

    function displayMenuPrimary() {
        $('#leftMenuPrimary')[0].hidden = false;
        $('#rightMenuPrimary')[0].hidden = false;
        $('#leftMenuOrdinateur')[0].hidden = true;
        $('#rightMenuOrdinateur')[0].hidden = true;
        $('#leftMenuOrdinateurOxygen')[0].hidden = true;
        $('#rightMenuOrdinateurOxygen')[0].hidden = true;
    }

    function displayMenuOxygen() {
        $('#leftMenuPrimary')[0].hidden = true;
        $('#rightMenuPrimary')[0].hidden = true;
        $('#leftMenuOrdinateur')[0].hidden = true;
        $('#rightMenuOrdinateur')[0].hidden = true;
        $('#leftMenuOrdinateurOxygen')[0].hidden = false;
        $('#rightMenuOrdinateurOxygen')[0].hidden = false;
    }
</script>
<script src="./src/class/Jardin.js"></script>
<script src="./src/class/Planete.js"></script>
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
    init();
    function init() {
        game = new Game();
        game.init()
        setTimeout(game.init(),3000);

        document.getElementById("shipUp").onclick = function() { game.shipUp() };
        document.getElementById("shipLeft").onclick = function() { game.shipLeft() };
        document.getElementById("shipRight").onclick = function() { game.shipRight() };
        document.getElementById("shipDown").onclick = function() { game.shipDown() };
        document.getElementById("decoller").onclick = function() { game.shipElevation() };
        document.getElementById("atterir").onclick = function() { game.shipAtterir() };
        // document.getElementById("btn-carburant").onclick = function() { game.fill() };
        // document.getElementById("iconeVaisseau1").onclick = function() { game.deceleration() };
        // document.getElementById("iconeVaisseau2").onclick = function() { game.acceleration() };
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
            game.insertCleUSB()
        }
    }
    function useItemMenu(element,event,type){
        if(document.getElementById("ctxmenu1")){
            document.getElementById("ctxmenu1").remove();
        }

        event.preventDefault();
        let menu = document.createElement("div")
        menu.setAttribute('class', 'ctxmenu');
        menu.setAttribute('id', 'ctxmenu1');
        menu.style.display = "block";
        menu.style.top = event.y+"px";
        menu.style.left = event.x+"px";
        console.log(menu)
        let menuItem1 = document.createElement("p")
        menuItem1.setAttribute("class","ctxline")
        menuItem1.onclick = function(){
            menu.style.display = "none";
        }
        if(type == "tomate" || type == "patate" || type == "radis"){
            menuItem1.innerText = "Manger";
            menuItem1.setAttribute("label","Manger");
        }
        menu.appendChild(menuItem1);
        document.body.appendChild(menu);
        return false;
    }
    document.onclick = function(){if(document.getElementById("ctxmenu1")){document.getElementById("ctxmenu1").remove();}}
</script>

</html>