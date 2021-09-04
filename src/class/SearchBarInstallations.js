function updateValSearch() {
    let myNode = document.getElementById("suggestions")
    while (myNode.lastChild) myNode.removeChild(myNode.lastChild);
    let text = document.getElementById("searchBarInstallation").value;
    text = text.toLowerCase();
    let suggestion = "";
    let autocomplete = false;
    let suggestions = [];
    let dejaFait = [];
    console.log(game)
    for (let i = 0; i < game.vaisseau.updates.length; i++) {
        if ((game.vaisseau.updates[i].category).includes(text)) {
            if (game.vaisseau.updates[i].category != suggestion && suggestion != "") {
                autocomplete = false;
                suggestion = ""
            } else {
                autocomplete = true;
                suggestion = game.vaisseau.updates[i].category;
            }
            if (!dejaFait[game.vaisseau.updates[i].category]) {
                suggestions[i] = game.vaisseau.updates[i].category;
                dejaFait[game.vaisseau.updates[i].category] = true;
            }

        }
    }
    if (autocomplete) {
        document.getElementById("searchBarInstallation").value = suggestion;
        document.getElementById("searchIcon").setAttribute("class", "fas fa-arrow-right");
        document.getElementById("searchIcon").setAttribute("onclick", "redirect('" + suggestion + "')");
        document.getElementById("suggestions").style.visibility = "hidden";
    } else if (text != "") {
        document.getElementById("cancelSearchIcon").style.visibility = "visible";
        document.getElementById("searchIcon").setAttribute("class", "fas fa-search");
        document.getElementById("searchIcon").setAttribute("onclick", "none");
        let suggestionsDiv = document.getElementById("suggestions");
        for (let i = 0; i < suggestions.length; i++) {
            if (suggestions[i]) {
                let suggestionDiv = document.createElement("div");
                suggestionDiv.innerText = suggestions[i];
                suggestionDiv.setAttribute("id", "suggestion");
                suggestionDiv.setAttribute("onclick", "autocomplete('" + suggestions[i] + "')");
                suggestionsDiv.appendChild(suggestionDiv)
            }

        }
        if (suggestions.length > 0) {
            suggestionsDiv.style.visibility = "visible";
        }
    }
    if (text == "") {
        document.getElementById("searchIcon").setAttribute("class", "fas fa-search");
        document.getElementById("cancelSearchIcon").style.visibility = "hidden";
        document.getElementById("suggestions").style.visibility = "hidden";
    }
}
function cancelSearch() {
    document.getElementById("cancelSearchIcon").style.visibility = "hidden";
    document.getElementById("searchBarInstallation").value = "";
    document.getElementById("suggestions").style.visibility = "hidden";
}
function autocomplete(suggestion) {
    document.getElementById("searchBarInstallation").value = suggestion;
    document.getElementById("searchIcon").setAttribute("class", "fas fa-arrow-right");
    document.getElementById("searchIcon").setAttribute("onclick", "redirect('" + suggestion + "')");
    document.getElementById("suggestions").style.visibility = "hidden";
}
function redirect(suggestion) {
    game.menuInstallUpdates(suggestion)
}