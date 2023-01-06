const time = document.getElementById('time');
const show = (data) => {
  if (data.length > 0) {
    data.forEach((comment) => {
      time.innerHTML += `
              <span class="date">${comment.username} by </span>  ${comment.date_start} : ${comment.date_end} <br>`;
    });
  } else {
    time.innerHTML = '<span class="data">No data about this pokemon</span>';
  }
};
export default show;