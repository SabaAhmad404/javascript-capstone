/* eslint-diable */
const time = document.getElementById('time');
const show = (data) => {
  if (data.length > 0) {
    time.innerHTML = '';
    data.forEach((comment) => {
      const li = document.createElement('li');
      li.classList.add('time-li');
      li.innerHTML += `
      <span class="date">${comment.username} by </span>  ${comment.date_start} : ${comment.date_end} <br>`;
      time.appendChild(li);
    });
  } else {
    time.innerHTML = '<span class="data">No data about this pokemon</span>';
  }
};
export default show;