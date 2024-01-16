const nomeTitle = document.getElementById('nomeTitle')
const pokemonList = document.getElementById('pokemonList')


const searchParams = new URLSearchParams(window.location.search);

if(!searchParams.has('numb')){
   window.location.replace("index.html");
}

let param = [];
for (param of searchParams) {}
const id = param[1];



function insertHTML(res){
   const pokedet = convertPokeApiDetailToPokemon(res);
   console.table(pokedet);
   nomeTitle.innerHTML = pokedet.name;
   

   pokemonList.innerHTML =
   `
   <a href="pokeinfo.html?numb=${pokedet.number}" class="pokelink">
   <li class="pokemondetal ${pokedet.type}">
       <span class="number">#${pokedet.number}#</span>
       <span class="name">${pokedet.name}</span>

       <div class="detail">
           <ol class="types">
               ${pokedet.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
           </ol>
           <hr>
           <ol class="types">
               ${pokedet.abilities.map((ability) => `<li class="ability ${ability}">${ability}</li>`).join('')}
           </ol>

           <img src="${pokedet.photob}" alt="${pokedet.name}">
           <img src="${pokedet.photo}"  alt="${pokedet.name}">
       </div>
   </li>
</a>
`;
   
}

const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
const pokeDados = fetch(url) 
    .then((response) => response.json())
    .then((jsonBody) => (
      insertHTML(jsonBody)
    ))