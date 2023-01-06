const time = document.getElementById('time');
const show = (data) => {
  data.forEach((comment) => {
    time.innerHTML += `
      <span class="date">${comment.username} by </span>  ${comment.date_start} : ${comment.date_end} <br>`;
  });
};
export default show;