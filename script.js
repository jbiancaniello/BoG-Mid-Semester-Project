const apiURL = "https://pokeapi.co/api/v2/pokemon/";
let id = 1;

async function getPokemon() {
    const response = await fetch(apiURL + id);
    const data = await response.json();
    setPhoto();
    setName(data);
    setTypes(data);
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
        curr = curr + " " + data.types[i].type.name;
    }
    document.getElementById("types").textContent = curr;
}
