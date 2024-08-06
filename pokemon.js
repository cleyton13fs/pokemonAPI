document.getElementById('searchButton').addEventListener('click', function() {
    let pokemonNameOrId = document.getElementById('pokemonInput').value.toLowerCase();
    let apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            let pokemonInfo = `
                <h2>${data.name.charAt(0).toUpperCase() + data.name.slice(1)} (#${data.id})</h2>
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <p><strong>Type:</strong> ${data.types.map(type => type.type.name).join(', ')}</p>
                <p><strong>Height:</strong> ${data.height / 10} m</p>
                <p><strong>Weight:</strong> ${data.weight / 10} kg</p>
            `;
            document.getElementById('pokemonInfo').innerHTML = pokemonInfo;
        })
        .catch(error => {
            document.getElementById('pokemonInfo').innerHTML = '<p>Pokémon not found. Please try another name or number.</p>';
        });
});
