import show from '';
const getpost = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FoLdLIMn2LTHURuHPiiE/reservations?item_id=item1');
  const convert = await response.json();
  show(convert);
  return convert
};
export default getpost;