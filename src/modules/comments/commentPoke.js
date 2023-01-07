const closeCommentBtn = document.querySelector('.close-coments');

const commentPopup = (data) => {
  const comentPopSection = document.querySelector('.CommentPopupSection');
  const PSecComents = document.querySelector('.pComments');
  const overlay = document.querySelector('.overlay');

  const url = (data.sprites.other['official-artwork'].front_default);
  PSecComents.innerHTML = `
    <div>
        <img src="${url}" alt="pokemon" class="comentImg">
    </div>

    <div class="pokedata">
    <div>
            <h3><span>Name:</span>  ${data.name}</h3>
            <h3><span>Weight:</span>  ${data.weight}</h3>
    </div>
    <div>
            <h3>height:  ${data.height}</h3>
            <h3><span>base_experience:</span>${data.base_experience}</h3>
    </div>
    </div>

    </div>    
    `;

  closeCommentBtn.addEventListener('click', () => {
    window.location.reload(true);
    comentPopSection.classList.add('hidden');
    overlay.classList.add('hidden');
  });
};

export default commentPopup;
