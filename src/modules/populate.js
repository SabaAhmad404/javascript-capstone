const recivedata = async () => {
  try {
    const repone = await fetch(url);

    if (!repone.ok) {
      throw Error(repone.statusText);
    }
    const data = await repone.json();
    console.log(data.results);
    return data.results;
  } catch (e) {
    console.log(e);
    return e;
  }
};

const url = "https://pokeapi.co/api/v2/pokemon?limit=9&offset=0";

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
        console.log(data, "please give me something");
        document.querySelector(".list-items").innerHTML += `
            <div class="poke-card">

            <div>
              <img
                src="${data.sprites.other["official-artwork"].front_default}"
                alt="${pokemonName}" class="Poke-img"
              />
            </div>
            <div class="pokemonInfos">
              <h1>${data.name}</h3>
              <p>Weight: ${data.weight}</p>
            </div>
            <div class="comment-section">
                <Span>❤</Span>
                <button class="comment">Comment</button>
                <button class="reservation">Reservation</button>
            </div>

            </div>
              `;
      });
  });
};

// display(data);

window.addEventListener("load", async () => {
  const data = await recivedata(url);
  display(data);
});

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
