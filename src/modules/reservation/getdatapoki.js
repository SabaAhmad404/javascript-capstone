const Pokemondisplay = document.getElementById('Pokemon-display');

const structure = (data) => {
  const imgurl = data.sprites.other.dream_world.front_default;
  Pokemondisplay.innerHTML = `
    <img src=${imgurl} alt="${data.name}">

    <ul class="data">
    <li><span>Name:</span>  ${data.name}</li>
    <li><span>Weight:</span>  ${data.weight}</li>
    <li>height:  ${data.height}</li>
    <li><span>base_experience:</span>${data.base_experience}</li>
    </ul>
`;
};

const pokidata = async (id) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    const get = await fetch(url);
    if (!get.ok) {
      throw Error(get.statusText);
    }
    const reposance = await get.json();
    structure(reposance);
    return reposance;
  } catch (e) {
    return e;
  }
};

export default pokidata;