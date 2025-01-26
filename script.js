document.getElementById("fetch-movie").addEventListener("click", () => {
    const imdbCode = document.getElementById("imdb-code").value;
    if (imdbCode) {
      const moviePlayer = document.getElementById("movie-player");
      moviePlayer.innerHTML = `
        <iframe 
          src="https://v2.vidsrc.me/embed/${imdbCode}" 
          width="100%" 
          height="400" 
          frameborder="0" 
          allowfullscreen>
        </iframe>`;
    } else {
      alert("Please enter a valid IMDB code!");
    }
  });