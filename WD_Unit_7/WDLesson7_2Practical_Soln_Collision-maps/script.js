//Data Source: https://data.cityofnewyork.us/Public-Safety/Motor-Vehicle-Collisions-Crashes/h9gi-nx95

let data, info, leftPanel, mapObj; //global variables

async function init(){
  let link = "mvc.json"; //https://data.cityofnewyork.us/resource/h9gi-nx95.json?$limit=100";
  //Challenge 4: Get the data using the API link and analyze it
  info = await fetch(link);
  data = await info.json();
  
  let leftPanel = get("leftPanel");
  let build = "";

  //Challenge 5: Build info cards with button to show map
  for(let i = 0; i < data.length; i++){
    let accident = data[i];
    build += `<div class="card">
                  <h3>${accident.contributing_factor_vehicle_1}</h3>
                  <hr>
                  <p>${accident.on_street_name}</p>
                  <h4>${accident.borough}</h4>`;
      
      if(accident.latitude  && accident.longitude){
        build += `<input type="button" value="Map" onclick="showMap(${accident.latitude},${accident.longitude})">`;
      }
    build += `</div>`; 
  }
  //Challenge 6: Display cards in the div with id "leftPanel"
  leftPanel.innerHTML = build;
}

//Challenge 7: Create a function filterByBoro() that retrieves the borough from the user via text input, filters the data and generates cards for this subset of the data.
function filterByBoro(){
  let boro = get("borough").value;
  let build = "";
  
  for(let i = 0; i < data.length; i++){
    let accident = data[i];
    if(accident.borough == boro){
        build += `<div class="card">
                      <h3>${accident.contributing_factor_vehicle_1}</h3>
                      <hr>
                      <p>${accident.on_street_name}</p>
                      <h4>${accident.borough}</h4>`;
        
          if(accident.latitude  && accident.longitude){
            build += `<input type="button" value="Map" onclick="showMap(${accident.latitude},${accident.longitude})">`;
          }
        build += `</div>`; 
      }
  }
  leftPanel.innerHTML = build; 
}