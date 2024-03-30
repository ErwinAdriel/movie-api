let movieName = document.getElementById('movie-name');
let buscarBtn = document.getElementById('btn-search');
let main = document.getElementById('main');


let getMovie = () => {
    let name = movieName.value;
    let url = `http://www.omdbapi.com/?t=${name}&apikey=${key}`;

    if(name.length <= 0){
        main.innerHTML = '<h3 class="mensaje">Ingresar el nombre de la pelicula</h3>';
    }

    else{
        fetch(url).then((resp) => resp.json()).then((data) => {
            //si la pelicula esta en database
            if(data.Response == "True"){
                main.innerHTML = `
                    <div class="izquierda">
                        <div class="imagen">
                            <img src=${data.Poster} class="poster">
                        </div>
                        <div class="detalles">
                            <span>${data.Rated}</span>
                            <span>${data.Year}</span>
                            <span>${data.Runtime}</span>
                        </div>
                    </div>
                    <div class="derecha">
                        <h1>${data.Title}</h1>
                        <div class="genero">
                            ${data.Genre.split(",").join("</div><div>")}
                        </div>
                        <div class="sinopsis">
                            <h3>Sinopsis:</h3>
                            <p>${data.Plot}</p>
                        </div>
                        <div class="elenco">
                            <h3>Elenco:</h3>
                            <p>${data.Actors}</p>
                        </div>
                    </div>
                `;
            }
            //si la pelicula no existe
            else{
                main.innerHTML = `<h3 class="mensaje">${data.Error}</h3>`;
            }
        })

        .catch(() => {
            main.innerHTML = '<h3 class="mensaje">Error 404</h3>';
        });
    }
};

buscarBtn.addEventListener("click", getMovie);
window.addEventListener("load", getMovie);
