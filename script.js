const endpoint = "https://api.imgflip.com/get_memes";
const memeElement = document.getElementById("meme-image");

//test
fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        const memes = data.data.memes;
        const randomIndex = Math.floor(Math.random() * memes.length);
        const randomMeme = memes[randomIndex];

        memeElement.src = randomMeme.url;
    })
    .catch(error => console.error(error));
