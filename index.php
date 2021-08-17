<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Point and Click</title>
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    <link rel="stylesheet" href="./src/css/style.css">
    <link rel="stylesheet" href="./src/css/vaisseau.css">
</head>

<body>
    <div class="main">
        <div class="oxygen">
            <h3>NIVEAU D'OXYGENE</h3>
            <div class="vide"></div>
            <div id="barre-vide"></div>
            <div id="barre-oxygen">
                <h3 id="oxygen-nb">58</h3>
            </div>
            <button>Planter</button>
        </div>
        <div class="vie">
            <div class="vaisseaux">
                <h3>VOTRE VAISSEAU</h3>
                <div id="haut"></div>
                <div id="centre"></div>
                <div id="gauche"></div>
                <div id="droite"></div>
                <div id="bas"></div>
                <div id="bas-bas"></div>
            </div>

            <div class="vitesse">
                <p>VITESSE EN KM/H</p>
                <h2 id="vitesse-vaiseaux"></h2>
            </div>
            <div class="puissance">
                <img id="iconeVaisseau" onmousedown="start()" onmouseup="stop()" width="100px" height="100px"
                    class="image" src="./img/vaisseau.png" alt="">
                <div id="vaisseau-view" style="opacity:0">
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
            <div class="info-joueur">
                <div class="primary-info">
                    <div class="besoin">
                        <img id="water" class="image" src="./img/water.png" alt="">
                    </div>
                    <div class="besoin">
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
    </div>
</body>
<!-- JavaScript Bundle with Popper -->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous">
</script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pixi.js/5.1.3/pixi.min.js"></script>
<script src="index.js"></script>

</html>