import show from './showinvo.js';

const getpost = async (id1) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FoLdLIMn2LTHURuHPiiE/reservations?item_id=${id1}`);
  const convert = await response.json();
  show(convert);
  return convert
};
export default getpost;