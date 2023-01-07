import itemCounter from './counter.js';

const reservationCount = document.getElementById('count_reservation');

const time = document.getElementById('time');
const show = (data) => {
  time.innerHTML = '';
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
    time.innerHTML = '';
  }

  itemCounter(reservationCount, time);
};
export default show;
