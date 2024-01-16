const nomeTitle = document.getElementById('nomeTitle')


const searchParams = new URLSearchParams(window.location.search);

if(!searchParams.has('numb')){
   window.location.replace("index.html");
}

let param = [];
for (param of searchParams) {}
const id = param[1];



function tratarDados(res){
   console.log(res);
   nomeTitle.innerHTML = res.name;
   
}

const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
const pokeDados = fetch(url) 
    .then((response) => response.json())
    .then((jsonBody) => (
      tratarDados(jsonBody)
    ))