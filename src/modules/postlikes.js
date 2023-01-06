const listItems = document.querySelector(".list-items");
const like = document.createElement("span");
like.classList.add("heart");
like.innerText = "❤";
listItems.append(like);
const url =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/x1JnCaUrbuCma7kL4K33/likes";
like.addEventListener("click", async (e) => {
  e.preventDefault();
  await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      item_id: "item1",
    }),
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  });
  document.forms[0].reset();
});
const getid = (id) => {
  console.log(id, "hello");
};
export { getid as default };
