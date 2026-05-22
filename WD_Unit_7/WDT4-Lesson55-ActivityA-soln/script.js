let data;

async function getMovies(){
  //Challenge 1: get API key for the MovieDB. Note: DO NOT REUSE!! Replace with your own API key.
  key = "f2229fbb5023f200425b64fc0d324e5d";
  //clear 'output' div before adding new content
  document.getElementById("output").innerHTML = "";  
  mov = document.getElementById("movie").value;
  
  let link = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${mov}`;
  let info = await fetch(link);
  data = await info.json();
  
  let build = ``;

  for(let i = 0; i < data.results.length; i++){
    movie = data.results[i];
    //Challenge 6: Call createModal() with the movie
    createModal(movie); 
  }  
}

function getYouTube(id){
  let build = `<iframe width="320" height="180" src="https://www.youtube.com/embed/${id}" title="YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  return build;
}

async function showMovie(id){
  let link = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}`;
  let stuff1 = await fetch(link);
  let info = await stuff1.json();
  //console.log(info);

  link = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}`;
  let stuff2 = await fetch(link);
  let video = await stuff2.json();
  //console.log(video);

  link = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${key}`;
  let stuff3 = await fetch(link);
  let similar = await stuff3.json();
  //console.log(similar);

  let build ="";
  build += `<div class="card movie">`;
  build += `   <h1>${info.original_title}</h1><hr>`;
  build += `   <img class="left" src='https://image.tmdb.org/t/p/w185/${info.poster_path}'>`;
  build += `   <h3 class="larger">${info.tagline}</h3>`;
  build += `   <p>${info.overview}</p>`;
  build += `   <p>Running Time: ${info.runtime}</p>`; 
  build += `   <hr class="divider">`;
  if(video.results.length > 0){
    build += getYouTube(video.results[0].key);
    build += `   <hr class="divider">`;
  }
  build += `   <h3> Similar Movies </h3>`;
  build += `   <div class="container">`;
  for(let i = 0; i < similar.results.length; i++){
    let sim_mov = similar.results[i];
    build += getPoster(sim_mov);
  }
  build += `   </div>`;
  build += `</div>`;
  
  return build;
}

function getPoster(movie){
  let build = "";
  build += `<div class="fitted card">`
  build += `   <h3>${movie.original_title}</h3>`
  build += `   <img src='https://image.tmdb.org/t/p/w185${movie.poster_path}'>`
  build += `</div>` 
  return build;
}

function createModal(movie){
  //Challenge 2: Create a variable "text" and retrieve the poster of the movie using getPoster() with the movie.
  let text = getPoster(movie);

  //Challenge 3: Create a variable "content" and retrieve the movie information using showMovie() with the movie id
  let content = showMovie(movie.id);

  //Challenge 4: Create a modal object using the "text" and "content" from the previous challenges
  let modal = new Modal(text,content);

  //Challenge 5: Render the modal object to the "output" container
  modal.render("output");
}
