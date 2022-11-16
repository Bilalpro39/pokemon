fetch('pokemon.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        displayPokemonCards(data);
    });

function displayPokemonCards(pokemonInfo) {
    let pokemonDiv = document.getElementById("pokemonContainer");
    let rows = pokemonInfo.length / 10;
    for (let eachrow = 0; eachrow < rows; eachrow++) {
        pokemonDiv.innerHTML += "<div class='row' id='row" + eachrow + "'></div>";
        let rowId = "row" + eachrow;
        for (let i = 0; i < 10; i++) {
            let currentItem = eachrow * 10 + i;
            let pokemonTypeColour = "default";
            if (pokemonInfo[currentItem] != null || pokemonInfo[currentItem] != undefined) {

                if (pokemonInfo[currentItem].type[0] == "Grass") {
                    pokemonTypeColour = "grass";
                } else if (pokemonInfo[currentItem].type[0] == "Fire") {
                    pokemonTypeColour = "fire";
                } else if (pokemonInfo[currentItem].type[0] == "Water") {
                    pokemonTypeColour = "water";
                } else if (pokemonInfo[currentItem].type[0] == "Bug") {
                    pokemonTypeColour = "bug";
                } else if (pokemonInfo[currentItem].type[0] == "Normal") {
                    pokemonTypeColour = "normal";
                } else if (pokemonInfo[currentItem].type[0] == "Poison") {
                    pokemonTypeColour = "poisen";
                } else if (pokemonInfo[currentItem].type[0] == "Electric") {
                    pokemonTypeColour = "electric";
                } else if (pokemonInfo[currentItem].type[0] == "Ground") {
                    pokemonTypeColour = "ground"
                } else if (pokemonInfo[currentItem].type[0] == "Fighting") {
                    pokemonTypeColour = "fighting"
                } else if (pokemonInfo[currentItem].type[0] == "Psychic") {
                    pokemonTypeColour = "psychic"
                } else if (pokemonInfo[currentItem].type[0] == "Rock") {
                    pokemonTypeColour = "rock"
                } else if (pokemonInfo[currentItem].type[0] == "Ghost") {
                    pokemonTypeColour = "ghost"
                } else if (pokemonInfo[currentItem].type[0] == "Ice") {
                    pokemonTypeColour = "ice"
                } else if (pokemonInfo[currentItem].type[0] == "Dragon") {
                    pokemonTypeColour = "dragon"
                } else {
                    console.log(pokemonInfo[currentItem].type[0] + " Does not have a color!")
                }
                document.getElementById(rowId).innerHTML +=
                    "<div class='col'>" +
                    "<div class='card h-100 " + pokemonTypeColour + " '>" +
                    "<img src='" + pokemonInfo[currentItem].img + "'onclick='pokemonClick(" + JSON.stringify(pokemonInfo[currentItem]) + ")' + class='card-img-top'>" +
                    "<div class='card-body' id='card-color'>" +
                    "<p class='card-text'>" + pokemonInfo[currentItem].name + "</p></div>" +
                    "</div></div>";
            }
        }
    }
}

function pokemonClick(pokemonInfo) {

    alert("Hello My Name is: " + pokemonInfo.name + " I Am Weak Against: " +
        pokemonInfo.weaknesses + " Pokemon, And I Am A: " +
        pokemonInfo.type + " Type!")
}