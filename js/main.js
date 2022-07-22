var pokemon = pokemons;
var elWrapper = document.querySelector("#pokemonWrapper");

function renderPokemon(array, wrapper) {
    wrapper.textContent = null

   for (const item of array) {
       var newH3 = document.createElement("h3");
       newH3.textContent = item.name;
       newH3.classList = "pokemon-heading text-center";

       var newWeight = document.createElement("p");
       newWeight.textContent = "Weight: " + item.weight;
       newWeight.classList = "pokemon-weight text-center"

       var newHeight = document.createElement("p");
       newHeight.textContent = "Height: " + item.height;
       newHeight.classList = "pokemon-height text-center";

       var textWrapper = document.createElement("div");
       textWrapper.classList = "pokemon-wrapper";
       textWrapper.appendChild(newH3);
       textWrapper.appendChild(newWeight);
       textWrapper.appendChild(newHeight);

       var newImg = document.createElement("img");
       newImg.src = item.img;
       newImg.width = "120"
       newImg.height = "120"

       var mainWrapper = document.createElement("div");
       mainWrapper.classList = "wrapper bg-warning col-12 d-flex flex-column align-items-center rounded"
       mainWrapper.appendChild(newImg);
       mainWrapper.appendChild(textWrapper);

       var newLi = document.createElement("li");
       newLi.classList = "pokemon-item col-12 col-lg-3 col-md-6 ps-2 pe-2 mb-3";
       newLi.appendChild(mainWrapper);

       wrapper.appendChild(newLi)
   }

   
}

renderPokemon(pokemon, elWrapper);