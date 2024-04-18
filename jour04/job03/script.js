$(document).ready(function(){

    async function pokedex(id, name, type){
        const pokedex = await fetch('pokedex.json');
        const pokemonData = await pokedex.json();

        if (!id && !name) {
            const filteredByType = pokemonData.filter(pokemon => pokemon.type.includes(type));
            if (filteredByType.length > 0) {
                const pokemonNames = filteredByType.map(pokemon => `<b>${pokemon.name.english}</b><br>`);
                $('#result').html(`<p>Pokémon of type ${type}:<br>${pokemonNames.join('')}</p>`);                
            } else {
                $('#result').text("No Pokémon found with the given type.");
            }
        } else if (!id && !type) {
            const filteredByName = pokemonData.filter(pokemon => pokemon.name.english.toLowerCase() == name.toLowerCase());
            if (filteredByName.length > 0) {
                const pokemon = filteredByName[0];
                const pokemonInfo = `
                        <p></p>
                        id: ${pokemon.id}
                        <p></p>
                        <br> Name: 
                        <br> &emsp;&emsp; English: ${pokemon.name.english}
                        <br> &emsp;&emsp; Japanese: ${pokemon.name.japanese}
                        <br> &emsp;&emsp; Chinese: ${pokemon.name.chinese}
                        <br> &emsp;&emsp; French: ${pokemon.name.french}
                        <p></p>
                        <br> Type: ${pokemon.type[0]}
                        <p></p>
                        <br> Base: 
                        <br> &emsp;&emsp; HP: ${pokemon.base.HP}
                        <br> &emsp;&emsp; Attack: ${pokemon.base.Attack}
                        <br> &emsp;&emsp; Defense: ${pokemon.base.Defense}
                        <br> &emsp;&emsp; Sp. Attack: ${pokemon.base["Sp. Attack"]}
                        <br> &emsp;&emsp; Sp. Defense: ${pokemon.base["Sp. Defense"]}
                        <br> &emsp;&emsp; Speed: ${pokemon.base.Speed}`;

                $('#result').html(pokemonInfo);
            } else {
                $('#result').text("No Pokémon found with the given name.");
            }
        }
        else if (!name && !type) {
            const filteredById = pokemonData.filter(pokemon => pokemon.id == id);
            if (filteredById.length > 0) {
                const pokemon = filteredById[0];
                const pokemonInfo = `
                        <p></p>
                        id: ${pokemon.id}
                        <p></p>
                        <br> Name: 
                        <br> &emsp;&emsp; English: ${pokemon.name.english}
                        <br> &emsp;&emsp; Japanese: ${pokemon.name.japanese}
                        <br> &emsp;&emsp; Chinese: ${pokemon.name.chinese}
                        <br> &emsp;&emsp; French: ${pokemon.name.french}
                        <p></p>
                        <br> Type: ${pokemon.type[0]}
                        <p></p>
                        <br> Base: 
                        <br> &emsp;&emsp; HP: ${pokemon.base.HP}
                        <br> &emsp;&emsp; Attack: ${pokemon.base.Attack}
                        <br> &emsp;&emsp; Defense: ${pokemon.base.Defense}
                        <br> &emsp;&emsp; Sp. Attack: ${pokemon.base["Sp. Attack"]}
                        <br> &emsp;&emsp; Sp. Defense: ${pokemon.base["Sp. Defense"]}
                        <br> &emsp;&emsp; Speed: ${pokemon.base.Speed}`;

                $('#result').html(pokemonInfo);
            } else {
                $('#result').text("No Pokémon found with the given name.");
            }
        }
        else {
            const filteredPokemon = pokemonData.filter(pokemon => {
                return pokemon.id == id &&
                       pokemon.name.english.toLowerCase() == name.toLowerCase() &&
                       pokemon.type.includes(type);
            });

            if (filteredPokemon.length > 0) {
                const pokemon = filteredPokemon[0];
                const pokemonInfo = `
                        <p></p>
                        id: ${pokemon.id}
                        <p></p>
                        <br> Name: 
                        <br> &emsp;&emsp; English: ${pokemon.name.english}
                        <br> &emsp;&emsp; Japanese: ${pokemon.name.japanese}
                        <br> &emsp;&emsp; Chinese: ${pokemon.name.chinese}
                        <br> &emsp;&emsp; French: ${pokemon.name.french}
                        <p></p>
                        <br> Type: ${pokemon.type[0]}
                        <p></p>
                        <br> Base: 
                        <br> &emsp;&emsp; HP: ${pokemon.base.HP}
                        <br> &emsp;&emsp; Attack: ${pokemon.base.Attack}
                        <br> &emsp;&emsp; Defense: ${pokemon.base.Defense}
                        <br> &emsp;&emsp; Sp. Attack: ${pokemon.base["Sp. Attack"]}
                        <br> &emsp;&emsp; Sp. Defense: ${pokemon.base["Sp. Defense"]}
                        <br> &emsp;&emsp; Speed: ${pokemon.base.Speed}`;

                $('#result').html(pokemonInfo);
            } else {
                $('#result').text("No Pokémon found with the given criteria.");
            }
        }
    }

    $('#filter').on("click", async function(){
        var idInput = parseInt($("#id").val());
        var nameInput = $('#name').val();
        var typeInput = $('#type').val();
        
        await pokedex(idInput, nameInput, typeInput);
    });
});
