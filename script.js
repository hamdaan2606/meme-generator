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
            loading.innerText = "Something went wrong. Try again.";
            btn.disabled = false;
        });

});
