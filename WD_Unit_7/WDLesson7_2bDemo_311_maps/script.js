//311 Data Source: https://data.cityofnewyork.us/Social-Services/311-Service-Requests-from-2010-to-Present/erm2-nwe9

//Global variables
let data, info, leftPanel, mapObj;

async function init(){
  //Challenge 1: Provide the API link to the 311 data.
  let link ="311.json"; //https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=50";
  //Challenge 2: Get the data using the link and analyze it
  info = await fetch(link);
  data = await info.json();
  //console.log(data);
  leftPanel = get("leftPanel");
  let build = "";

  // generate cards
  for(let i = 0; i < data.length; i+=1) {
    let complaint = data[i];
    build += card(complaint);
  }

  //Display results
  leftPanel.innerHTML = build;  
}

function filterByBoro(){
  let boro = get("borough").value;
  let build = "";
  
  for(let i = 0; i < data.length; i++){
      let complaint = data[i];
      if (complaint.borough == boro){		
        build += card(complaint);
      }
  }
  //Display results
  leftPanel.innerHTML = build; 
}

