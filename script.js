var vip = ['pichu', 'pikachu', 'raichu'];

for (let i = 0; i < vip.length; i++) {
  getMyPokemon(vip[i]);
}

function getMyPokemon(num){

  let xhr = new XMLHttpRequest();

  xhr.addEventListener('load', function() {
  	if (xhr.status !== 200) {
  		return;
  	}

  	var data = JSON.parse(xhr.responseText);

    // CREATE MAIN DIV
    let mainDiv = document.createElement('div');

    // CREATE CHILD DIV
    let addToDiv = document.createElement('div');

      // CREATE H1 AND ADD NAME CONTENT
      let nameData = document.createElement('h1');
      nameData.innerHTML = data.name.toUpperCase();
      addToDiv.appendChild(nameData);

      // CREATE LIST OF THE TYPE OF POKEMON WITH A HEADER
      let typeHeader = document.createElement('h3');
      typeHeader.innerHTML = ('Type:');
      addToDiv.appendChild(typeHeader);
      let listType = document.createElement('ul');
      for (let i = 0; i < data.types.length; i++) {
        let listTypeItem = document.createElement('li');
        listTypeItem.innerHTML = data.types[i].type.name;
        listType.appendChild(listTypeItem);
      }
      addToDiv.appendChild(listType);

      // CREATE IMAGE TAG AND ADD IMAGE
      let imgData = document.createElement('img');
      imgData.src = data.sprites.front_default;
      addToDiv.appendChild(imgData);
        // CREATE EVENT LISTNER FOR SHINY SPRITE
        function mouseOver() {
          imgData.src = data.sprites.front_shiny;
        }
        function mouseOut() {
          imgData.src = data.sprites.front_default;
        }
        imgData.addEventListener('mouseover', mouseOver);
        imgData.addEventListener('mouseout', mouseOut);

      // CREATE LIST OF THE POKEMON'S ABILITIES WITH A HEADER
      let abilityHeader = document.createElement('h3');
      abilityHeader.innerHTML = ('Ability:');
      addToDiv.appendChild(abilityHeader);
      let listAbility = document.createElement('ul');
      for (let r = 0; r < data.types.length; r++) {
        let listAbilityItem = document.createElement('li');
        listAbilityItem.innerHTML = data.abilities[r].ability.name;
        listAbility.appendChild(listAbilityItem);
      }
      addToDiv.appendChild(listAbility);

    // APPEND CHILD DIV TO MAIN DIV
    mainDiv.appendChild(addToDiv);

    console.log(data);
    // ADD MAIN DIV TO HTML DOCUMENT
    document.body.appendChild(mainDiv);
  });

  xhr.open('GET', 'http://pokeapi.co/api/v2/pokemon/' + num);
  console.log("Opening request");
  xhr.send();
}








//
// function addPokemon (data) {
//   let addToTable = document.getElementById('pkmnTable');
//
//   for (let i = 0; i < data.length; i++) {
//     let tableRows = document.createElement('tr');
//
//       let idData = document.createElement('td');
//       idData.innerHTML = pokemonToAdd[i].id;
//       tableRows.appendChild(idData);
//
//       let nameData = document.createElement('td');
//       nameData.innerHTML = pokemonToAdd[i].name;
//       tableRows.appendChild(nameData);
//
//       let typeData = document.createElement('td');
//       typeData.innerHTML = pokemonToAdd[i].type;
//       tableRows.appendChild(typeData);
//
//     addToTable.appendChild(tableRows);
//   }
// }
