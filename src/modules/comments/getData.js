const getData = (data) => {

    const id = "item".concat(data)
    console.log(id, "id");

    const userName = document.getElementById('User-name');
    const userComment = document.getElementById('User-comment');
    const submitComment = document.querySelector('.Csubmit');
    // const Pokemondisplay = document.getElementById('Pokemon-display');
    const Mycomment = document.querySelector('.mComment');
    // const PopupComment = document.querySelector('.popup-comment');

    // submitComment.addEventListener('click', async () => {
    //     // console.log("hit me");
    //     // e.preventDefault();
    //     await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Ug2YOBzfwDqlGqwReQpz/comments', {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             "item_id": id,
    //             "username": userName.value,
    //             "comment": userComment.value

    //         }),
    //         headers: {
    //             'Content-Type': 'application/json;charset=UTF-8',
    //         },
    //     });
    //     document.forms[0].reset();
    //     populatelist();

    // });
    submitComment.addEventListener('click', async () => {
        await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/3UwTaV5sdSHgEOmKuvSR/comments',
            {
                method: 'POST',
                body: JSON.stringify({
                    "item_id": id,
                    "username": userName.value,
                    "comment": userComment.value

                }),
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                },
            });
        getpost()
    });

    const getpost = async () => {
        const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/3UwTaV5sdSHgEOmKuvSR/comments?item_id='.concat(id));
        const convert = await response.json();
        console.log(convert);
        for( i = 0; i < convert.leng)
        
        forEach((comment) => {
            Mycomment.innerHTML += `
              <span class="date">${comment.username} by </span>  ${comment.creation_date} : ${comment.comment} <br>`;
        })
        return convert;
    };

    // /apps/abc234/comments?item_id=item1
    //  Ug2YOBzfwDqlGqwReQpz id

    const populatelist = async () => {
        const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Ug2YOBzfwDqlGqwReQpz/comments?item_id='.concat(id);
        const response = await fetch(url);
        await response.json().then((json) => {
            json.forEach((comment) => {
                console.log(comment)
                const luEl = document.createElement("li");
                luEl.classList.add("list-of-coments")
                Mycomment.append(luEl);
                luEl.innerHTML = `${comment.creation_date}  : ${comment.username} : ${comment.comment}`;

            });
            // const CountCom = document.querySelector('.coment-count');
        });
    };
}



export default getData;

// export default postdata;