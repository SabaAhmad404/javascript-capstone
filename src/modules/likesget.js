const getLikes = async (id2) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/x1JnCaUrbuCma7kL4K33/likes?item_id=${id2}`;
  const response = await fetch(url);
  const data = await response.json();
  data.forEach(element => {
    if(element.item_id === id2){
      console.log(element.item_id, element.likes)
      const likess = " ".concat(element.likes)
      sendLikes(likess);
    }   
  });
  
};

export const sendLikes = async (likes) => await likes;

export default getLikes;
