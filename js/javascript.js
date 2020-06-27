const requestURL = 'https://rachsg7.github.io/pkmntypechart/js/pkmn.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject); // temporary cecking for valid response and data parsing
        const types = jsonObject['types'];
        for (let i = 0; i < types.length; i++) {
            let card = document.createElement('div');
            let span = document.createElement('span');

            span.textContent = types[i];

            card.appendChild(span);

            document.querySelector('grid-container').appendChild(card);
        }
    })