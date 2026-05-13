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
  for(let i = 0; i < data.length; i++){
    let complaint = data[i];
    let lat = complaint.latitude;
    let lon = complaint.longitude;
    build += `<div class="fitted card">
                <h3>${complaint.complaint_type}</h3>
                <hr>
                <p>Location: ${complaint.incident_address}</p>
                <h4>${complaint.borough}</h4>`;
	  // button to show Map if lat and lon exist for JSON object
	  if(lat && lon){
        build += `<input type="button" value="Map" onclick="showMap( ${lat},${lon} )">`;
    }
    build += `</div>`;
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
        build += `<div class="fitted card">
                      <h3>${complaint.complaint_type}</h3> 
                      <hr>
                      <p>Location: ${complaint.incident_address}</p>
                      <h4>${complaint.borough}</h4>`;
        // button to show Map if lat and lon exist for JSON object
        if(complaint.latitude  && complaint.longitude){
          build += `<input type='button' value='Map' onclick="showMap( ${complaint.latitude},${complaint.longitude} )">`;
        }
        build += `</div>`;
      }
  }
  //Display results
  leftPanel.innerHTML = build; 
}

