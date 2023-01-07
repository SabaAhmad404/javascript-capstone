const getData = (data) => {
  const id = 'item'.concat(data);
  console.log(id, 'id');

  const userName = document.getElementById('User-name');
  const userComment = document.getElementById('User-comment');
  const submitComment = document.querySelector('.Csubmit');
 
  const Mycomment = document.querySelector('.mComment');

  submitComment.addEventListener('click', async () => {
    await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/QMi7IVnLIBx9LsDFnmic/comments',
      {
        method: 'POST',
        body: JSON.stringify({
          item_id: id,
          username: userName.value,
          comment: userComment.value,

        }),
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
        },
      });
    getpost();
  });

  const getpost = async () => {
    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/QMi7IVnLIBx9LsDFnmic/comments?item_id='.concat(id));
    const convert = await response.json();
    show(convert);
    return convert;
  };

  const show = (data) => {
    if (data.length > 0) {
      Mycomment.innerHTML = '';
      data.forEach((comment) => {
        const li = document.createElement('li');
        li.classList.add("newComentList")
        Mycomment.append(li);
        li.innerHTML += `${comment.creation_date} ${comment.username} : ${comment.comment}`;
      });
    } else {
      Mycomment.innerHTML = '<span class="data">No data about this pokemon</span>';
    }
  };

};

export default getData;