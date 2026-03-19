const btn = document.getElementById('btn');
const img = document.getElementById('meme');
const loading = document.getElementById('loading');
const title = document.getElementById('title');

btn.addEventListener('click', () => {

    btn.disabled = true;
    loading.innerText = "Loading...";
    img.src = "";
    title.innerText = "";

    fetch('https://meme-api.com/gimme')
        .then(res => {
            if (!res.ok) {
                throw new Error("API error");
            }
            return res.json();
        })
        .then(data => {
            img.src = data.url;
            img.alt = data.title;
            title.innerText = data.title;
            loading.innerText = "";
            btn.disabled = false;
        })
        .catch(() => {
            loading.innerText = "Error loading meme. Please try again.";
            btn.disabled = false;
        });

});

// Keyboard accessibility
btn.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        btn.click();
    }
});
