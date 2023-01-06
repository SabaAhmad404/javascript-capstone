const postdata = async (body) => {
    console.log(body)
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FoLdLIMn2LTHURuHPiiE/reservations/', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
};
export default postdata;