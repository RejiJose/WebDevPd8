//Data Source: https://data.cityofnewyork.us/Public-Safety/Motor-Vehicle-Collisions-Crashes/h9gi-nx95

let data, info, leftPanel, mapObj; //global variables

async function init(){
  let link = "mvc.json"; //https://data.cityofnewyork.us/resource/h9gi-nx95.json?$limit=100";
  //Challenge 5: Get the data using the API link and analyze it
  
  
  let leftPanel = get("leftPanel");
  let build = "";

  //Challenge 6: Build info cards with button to show map if lat and lon values exist
  for(let i = 0; i < data.length; i++){
    let crash = data[i];
    
    
  }
  //Challenge 7: Display cards in the div with id "leftPanel"
  
}

//Challenge 8: Create a function filterByBoro() that retrieves the borough from the user via text input, filters the data and generates cards for this subset of the data.
function filterByBoro(){
  

}
