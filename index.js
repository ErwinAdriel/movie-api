let movieName = document.getElementById('movie-name');
let buscarBtn = document.getElementById('btn-search');
let main = document.getElementById('main');


let getMovie = () => {
    let name = movieName.value;
    let url = `http://www.omdbapi.com/?t=${name}&apikey=${key}`;
}
