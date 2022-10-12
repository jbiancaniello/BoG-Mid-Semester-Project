const apiURL = "https://pokeapi.co/api/v2/pokemon/";
let id = 1;
let info = "";
let moves = "";

async function getPokemon() {
    const response = await fetch(apiURL + id);
    const data = await response.json();
    setPhoto();
    setName(data);
    setTypes(data);
    getInfo(data);
    getMoves(data);
    setInfo();
}

document.getElementById("prevButton").addEventListener("click", () => {
    id--;
    if (id >= 1 & id < 905) {
        getPokemon();
    } else {
        id++;
    }
});

document.getElementById("nextButton").addEventListener("click", () => {
    if (id >= 1 & id < 905) {
        id++;
        getPokemon();
    }
});

function setPhoto() {
    document.getElementById("photo").src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}

function setName(data) {
    document.getElementById("textBox").textContent = data.name;
}

function setTypes(data) {
    let curr = "";

    for (let i = 0; i < data.types.length; i++) {
        //curr = curr + " " + data.types[i].type.name;
        curr = curr + " <p id=" + data.types[i].type.name + ">" + data.types[i].type.name + "</p>";
    }



    document.getElementById("types").innerHTML = curr;


}

function getInfo(data) {
    let height = data.height / 10;
    let weight = data.weight;
    let curr = "height: " + height + "m<br>" + "weight: " + weight + "kg<br>";
    for (let i = 0; i < data.stats.length; i++) {
        curr = curr + " " + data.stats[i].stat.name + ": " + data.stats[i].base_stat + "<br>";
    }
    info = curr;
}

function setInfo() {
    document.getElementById("infoBox").innerHTML = info;
    document.getElementById("infoButton").style.backgroundColor = "7CFF79";
    document.getElementById("movesButton").style.backgroundColor = "E8E8E8";
    document.getElementById("rightLabel").textContent = "Info";
}

function getMoves(data) {
    let curr = "";
    for (let i = 0; i < data.moves.length; i++) {
        curr = curr + " " + data.moves[i].move.name + "<br>";
    }
    moves = curr;
}

function setMoves() {
    document.getElementById("movesButton").style.backgroundColor = "7CFF79";
    document.getElementById("infoButton").style.backgroundColor = "E8E8E8";
    document.getElementById("infoBox").innerHTML = moves;
    document.getElementById("rightLabel").textContent = "Moves";
}

document.getElementById("infoButton").addEventListener("click", () => {
    setInfo()
});

document.getElementById("movesButton").addEventListener("click", () => {
    setMoves();
});