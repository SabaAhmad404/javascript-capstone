const Pokemondisplay = document.getElementById('Pokemon-display');

const structure = (data) => {
  const imgurl = data.sprites.other.dream_world.front_default;
  Pokemondisplay.innerHTML = `
  <h1>Hello</h1>
    <img src=${imgurl} alt="${data.name}">
<div class="data">
<div>
<h3><span>Name:</span>  ${data.name}</h3>
<h3><span>Weight:</span>  ${data.weight}</h3>
</div>
<div>
<h3>height:  ${data.height}</h3>
<h3><span>base_experience:</span>${data.base_experience}</h3>
</div></div>`;
};

const pokidata = async (id) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    const get = await fetch(url);
    if (!get.ok) {
      throw Error(get.statusText);
    }
    const reposance = await get.json();
    // console.log(reposance);
    structure(reposance);
    return reposance;
  } catch (e) {
    return e;
  }
};

export default pokidata;