let selectPoke = document.getElementById("selectPoke");
const urlApi = "https://pokeapi.co/api/v2/pokemon?limit=5000";
const divImgPokemon = document.getElementById("imgPokemon");

const getPokemonesSelect = async() => {
    const response = await fetch(urlApi);
    if(response.ok){
        const responseJson = await response.json();  
        
        const arrayPokemones = Array.from(responseJson.results);
        arrayPokemones.forEach(pokemon => {
            let option = new Option(pokemon.name,pokemon.url);
            selectPoke.appendChild(option);
        })
    }
}


selectPoke.addEventListener("change",async() => {
    divImgPokemon.innerHTML = "";

    const response = await fetch(selectPoke.value);
    if(response.ok){
        const responseJson = await response.json();
        console.log(selectPoke.value);
        let urlImg = responseJson.sprites.front_default;
        let urlImgShiny = responseJson.sprites.front_shiny;
        let img = document.createElement("img");
        img.setAttribute("src", urlImg);
        let imgShiny = document.createElement("img");
        imgShiny.setAttribute("src", urlImgShiny);
    

        let defau = document.createElement("div");
        defau.classList.add("defauShiny");
        defau.textContent = "Default";

        let shiny = document.createElement("div");
        shiny.classList.add("defauShiny");
        shiny.textContent = "Shiny";

        divImgPokemon.appendChild(defau);
        divImgPokemon.appendChild(img);
        divImgPokemon.appendChild(shiny);
        divImgPokemon.appendChild(imgShiny);
    }
})


getPokemonesSelect();