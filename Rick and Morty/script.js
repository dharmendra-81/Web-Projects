"use strict";
const charactersContainer = document.getElementById('characters-container');

fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        const characters = data.results; 

        characters.forEach(character => {
            // console.log(~Name: ${character.name}, Status: ${character.status}, Species: ${character.species}~);
            const characterDiv = document.createElement('div');
            characterDiv.className = 'card';
            characterDiv.innerHTML = `
                <img src="${character.image}" alt="${character.name}" class="character-image">
                <p class="character-detail"> <span class="attribute"> Name:  </span> ${character.name} </p>
                <p class="character-detail"> <span class="attribute"> Status:</span> ${character.status} </p>
                <p class="character-detail"> <span class="attribute"> Species</span> ${character.species} </p>`;
                charactersContainer.appendChild(characterDiv);
            });
    })
    .catch(error => console.error('Error fetching data:', error));

