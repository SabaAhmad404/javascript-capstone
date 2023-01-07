const postLikes = async (id) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/x1JnCaUrbuCma7kL4K33/likes';

  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
};
export default postLikes;
