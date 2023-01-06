const getLikes = async () => {
  const url =
    "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/x1JnCaUrbuCma7kL4K33/likes";
  const response = await fetch(url);
  const data = await response.json();
  const listItems = document.querySelector(".list-items");
  const getFunction = (data) => {
    data.results.forEach(() => {
      const paragraph = document.createElement("p");
      paragraph.classList.add("paras");
      paragraph.innerText = "5 likes";
      listItems.append(paragraph);
    });
  };
  getFunction(data);
};

export { getLikes as default };
