let pokemonArray = [];
const pokemonContainer = document.getElementById("pokemon-container");

fetch("https://pokeapi.co/api/v2/pokemon?limit=30&offset=30")
    .then(response => response.json())
    .then(data => { 
        pokemonArray = data.results;
        pokemonArray.forEach(obj => {
            fetch(obj.url)
            .then(response => response.json())
            .then(data => {
                const card = document.createElement("div")
                card.className = "card"
                pokemonContainer.appendChild(card);
                card.innerHTML = `
                                <img class="image" src='${data.sprites.other.showdown.front_default}'>
                                <div class="attributes">
                                    <p><span>Name: </span>${data.name}</p>
                                    <p><span>Weight: </span>${data.weight}</p>
                                    <div>
                                    Abilities: 
                                        <p>${data.abilities[0].ability.name}</p>
                                        <p>${data.abilities[1].ability.name}</p>
                                    </div>
                                </div>
                `
            })
        })
    });