import itemCounter from '../reservation/counter.js';

const getData = (data) => {
  const id = 'item'.concat(data);

  const userName = document.getElementById('User-name');
  const userComment = document.getElementById('User-comment');
  const submitComment = document.querySelector('.Csubmit');
  const CommentCount = document.querySelector('.coment-count');

  const Mycomment = document.querySelector('.mComment');

  const show = (data) => {
    if (data.length > 0) {
      Mycomment.innerHTML = '';
      data.forEach((comment) => {
        const li = document.createElement('li');
        li.classList.add('newComentList');
        Mycomment.append(li);
        li.innerHTML += `${comment.creation_date} ${comment.username} : ${comment.comment}`;
        itemCounter(CommentCount, Mycomment);
      });
    } else {
      Mycomment.innerHTML = '<span class="data">No data about this pokemon</span>';
    }
  };

  const getpost = async () => {
    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DTPQtYJyysvaJ8E5Wp3M/comments?item_id='.concat(id));
    const convert = await response.json();
    show(convert);
    return convert;
  };
  getpost();
  submitComment.addEventListener('click', async () => {
    if (userName.value !== '' && userComment.value !== '') {
      await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DTPQtYJyysvaJ8E5Wp3M/comments',
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
      userName.value = '';
      userComment.value = '';
    }
  });
};

export default getData;