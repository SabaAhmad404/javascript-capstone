import pokidata from './reservation/getdatapoki.js';

const reseclose = document.getElementById('reseclose');

const recivedata = async () => {
  try {
    const repone = await fetch(
      'https://pokeapi.co/api/v2/pokemon?limit=9&offset=0',
    );

    if (!repone.ok) {
      throw Error(repone.statusText);
    }
    const data = await repone.json();
    return data.results;
  } catch (e) {
    return e;
  }
};

const url = 'https://pokeapi.co/api/v2/pokemon?limit=9&offset=0';
// let id1 = '';
const popupData = async (id) => {
  // id1 = 'item'.concat(id);
  await pokidata(id);
};

const display = (data) => {
  const nameArray = [];
  data.forEach((element) => {
    nameArray.push(element.name);
  });
  // console.log(nameArray, "This is now what i want");

  nameArray.forEach((pokemonName) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => response.json())
      .then((data) => {
        const pokeList = document.querySelector('.list-items');
        const pokecontainer = document.createElement('div');
        pokecontainer.classList.add('poke-card');
        const pokeImgDiv = document.createElement('div');
        pokeImgDiv.innerHTML = `<img
        src="${data.sprites.other['official-artwork'].front_default}"
        alt="${pokemonName}" class="Poke-img"
      />`;
        const pokeInfoDiv = document.createElement('div');
        pokeInfoDiv.classList.add('pokemonInfos');
        const pokeNameIcon = document.createElement('h3');
        pokeNameIcon.innerText = data.name;
        const likesBtn = document.createElement('span');
        likesBtn.innerText = '❤';
        likesBtn.classList.add('heart');
        const pokeWeight = document.createElement('p');
        pokeWeight.innerText = `weight: ${data.weight}`;
        const pokeCommentSec = document.createElement('div');
        pokeCommentSec.classList.add('comment-section');
        const BtnComment = document.createElement('button');
        BtnComment.innerText = 'Comment';
        BtnComment.classList.add('comment');
        const BtnConserve = document.createElement('button');
        BtnConserve.innerText = 'Reservation';
        BtnConserve.classList.add('reservation');
        pokeList.append(pokecontainer);
        pokecontainer.append(pokeImgDiv, pokeInfoDiv, pokeWeight, pokeCommentSec);
        pokeInfoDiv.append(pokeNameIcon, likesBtn);
        pokeCommentSec.append(BtnComment, BtnConserve);

        BtnComment.addEventListener('click', () => {
          popupData(data.id);
        });

        likesBtn.addEventListener('click', () => {
        });

        BtnConserve.addEventListener('click', () => {
          popupData(data.id);
          document.getElementById('resevation').classList.remove('resevationhide');
        });
      });
  });
};

// display(data);

window.addEventListener('load', async () => {
  const data = await recivedata(url);
  display(data);
});

reseclose.addEventListener('click', () => document.getElementById('resevation').classList.add('resevationhide'))

// const getData = async () => {
//   const response = await fetch(
//     "https://pokeapi.co/api/v2/pokemon?limit=9&offset=0"
//   );
//   const data = await response.json();
//   console.log(data);
//   const listItems = document.querySelector(".list-items");
//   const displayData = (data) => {
//     data.results.forEach((e) => {
//       const card = document.createElement("div");
//       card.classList.add("lists");
//       listItems.append(card);
//       const image = document.createElement("img");
//       image.src = e.url;
//       card.append(image);
//       const cardDiv = document.createElement("div");
//       cardDiv.classList.add("second");
//       card.append(cardDiv);
//       const heading = document.createElement("h2");
//       heading.innerText = e.name;
//       cardDiv.append(heading);
//       // const heart = document.createElement("i");
//       // heart.classList.add("fa-light");
//       // heart.classList.add("fa-heart");
//       // cardDiv.append(heart);
//       const heart = document.createElement("span");
//       heart.innerText = "❤";
//       cardDiv.append(heart);
//       const buttonDiv = document.createElement("div");
//       buttonDiv.classList.add("last");
//       cardDiv.append(buttonDiv);
//       const paragraph = document.createElement("p");
//       paragraph.classList.add("paras");
//       paragraph.innerText = "5 likes";
//       buttonDiv.append(paragraph);
//       const buttonOne = document.createElement("button");
//       buttonOne.innerText = "Comment";
//       buttonDiv.append(buttonOne);
//       const buttonTwo = document.createElement("button");
//       buttonTwo.innerText = "Reservation";
//       buttonDiv.append(buttonTwo);
//     });
//   };
//   displayData(data);
// };
export { recivedata as default };
