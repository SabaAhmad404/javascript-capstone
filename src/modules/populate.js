import pokidata from './reservation/getdatapoki.js';
import postdata from './reservation/postdatainvo.js';
import getpost from './reservation/getdatainvo.js';
// import getid from './likesget.js';
import postLikes from './postlikes.js';
// import sendLikes from './likesget.js';

import commentPopup from './commentPoke.js';
// import { getDiffieHellman } from "crypto";

const reseclose = document.getElementById('reseclose');
const submit = document.getElementById('submit');
const subname = document.getElementById('name');
const start = document.getElementById('sdate');
const end = document.getElementById('edate');

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
let id1 = '';
const popupData = async (id) => {
  id1 = 'item'.concat(id);
  await pokidata(id);
  await getpost(id1);
  // await getid(id1);
};

const display = (data) => {
  const nameArray = [];
  data.forEach((element) => {
    nameArray.push(element.name);
  });

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
        const getLikes = async (id2) => {
          const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/x1JnCaUrbuCma7kL4K33/likes?item_id=${id2}`;
          const response = await fetch(url);
          const data = await response.json();
          data.forEach((element) => {
            if (element.item_id === id2) {
              likesBtn.innerHTML = `<span> ❤${element.likes}</span>`;
            }
          });
        };
        likesBtn.classList.add('heart');
        likesBtn.textContent = '❤';
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
        pokecontainer.append(
          pokeImgDiv,
          pokeInfoDiv,
          pokeWeight,
          pokeCommentSec,
        );
        pokeInfoDiv.append(pokeNameIcon, likesBtn);
        pokeCommentSec.append(BtnComment, BtnConserve);

        BtnComment.addEventListener('click', () => {
          commentPopup(data);
          document
            .querySelector('.CommentPopupSection')
            .classList.remove('hidden');
          document.querySelector('.overlay').classList.remove('hidden');
          // overlay.classList.remove('hidden');
        });

        likesBtn.addEventListener('click', async () => {
          const id2 = 'item'.concat(data.id);
          await postLikes(id2);
          await getLikes(id2);
        }, {once: true});

        BtnConserve.addEventListener('click', () => {
          popupData(data.id);
          document
            .getElementById('resevation')
            .classList.remove('resevationhide');
        });
      });
  });
};

// display(data);

window.addEventListener('load', async () => {
  const data = await recivedata(url);
  display(data);
});

reseclose.addEventListener('click', () => document.getElementById('resevation').classList.add('resevationhide'));

submit.addEventListener('click', async () => {
  const namev = subname.value;
  const sdate = start.value.toString();
  const edate = end.value.toString();
  await postdata({
    item_id: id1,
    username: namev,
    date_start: sdate,
    date_end: edate,
  });
  await getpost(id1);
});
export { recivedata as default };
