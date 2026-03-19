const btn = document.getElementById('btn');
const img = document.getElementById('meme');
const loading = document.getElementById('loading');
const title = document.getElementById('title');

btn.addEventListener('click', () => {

    loading.innerText = "Loading...";
    img.src = "";
    title.innerText = "";

    fetch('https://meme-api.com/gimme')
        .then(res => res.json())
        .then(data => {
            img.src = data.url;
            title.innerText = data.title;
            loading.innerText = "";
        })
        .catch(() => {
            loading.innerText = "Failed to load meme. Try again.";
        });

});
