let data; // global variable

async function init(){  
  let link = "https://raw.githubusercontent.com/rcastro2/WebDevelopment/refs/heads/main/data/countries.json";
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");

  // create HTML output using the retrieved data
  let build = ``;

  for(let i = 0; i < data.length; i+=1){
    let country = data[i];
    build += `<div class="card">
                <h2>${country.name}</h2>
                <img src="${country.flag_url}" class="fit">
                <p>Language: ${country.primary_language}</p>
                <p>Population: ${country.population}</p>
                <p>Continent: ${country.continent}</p>
                <a href="${country.googleMaps}" target="_blank"> Map </a>
              </div>`;
  }

  output.innerHTML = build;
}
