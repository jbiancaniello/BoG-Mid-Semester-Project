const apiURL = "https://pokeapi.co/api/v2/pokemon/";
let id = 3;

async function getPokemon() {
    const response = await fetch(apiURL + id);
    const data = await response.json();
    getPhoto();
    setName(data);
}

document.getElementById("prevButton").addEventListener("click", () => {
    if (id > 1 || id < 905) { //fix this
        id--;
        document.getElementById("prevButton").textContent = id;
        getPokemon();
    }
});

function getPhoto() {
    document.getElementById("photo").src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}

function setName(data) {
    document.getElementById("textBox").textContent = data.name;
}
