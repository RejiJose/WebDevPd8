let data, mapObj;

async function init(){
  let link = "311.json"; //"https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=100";
  info = await fetch(link);
  data = await info.json();  
}

function getComplaints(){
  let boro = document.getElementById("borough").value;
  
  for(let i = 0; i < data.length; i++){
    let complaint = data[i];
    if(complaint.borough == boro){
      let front = "";
      mapObj=null;
      front = `<div class="fitted card" style="height:300px;">
                  <h3>${complaint.complaint_type}</h3>
                  <p>${complaint.borough}</p>
                  <p>${complaint.incident_zip}</p>
                  <p>${complaint.descriptor}</p><hr>
                  <p>${complaint.agency_name}<br>(${complaint.status})</p>
                </div>`;

      // let back = `<div id="map" id=${complaint.unique_key} > Complaint ID: ${complaint.unique_key}</div>`;
      
      let back ="";
      if (complaint.latitude && complaint.longitude){
        let location = [complaint.latitude, complaint.longitude];
        back = `<div id="map{i}" style="height:300px; margin:5px; border:1px solid black;"></div>`;
      }else{
        back = `<div>Complaint ID: ${complaint.unique_key}<br> has no location information</div>`;
      }
      createFlipCard(front, back, "output");
      
      //Produce Map after the div for the map on the flipcard is rendered
      //showMap(complaint.latitude,complaint.longitude,complaint.unique_key );
      showMap(location, i);

    }
  }
}

// showMap() displays the map for a location [lat, lon] in the right panel
function showMap(lat,lon, i){
  let location = [lat, lon];
  //Line below needed to create the map object once.
  if(!mapObj){
      mapObj = L.map("map" + i);
  } 
  let map = mapObj.setView(location, 14);// [lat, lon], zoom

  const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
  }).addTo(map);

  let marker = L.marker(location).addTo(map);// places marker on map
}   


// function showMap(lat,lon,id){
//   let location = [lat,lon]
//   map = L.map(id).setView(location, 14);
//   const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//     maxZoom: 18,
//     attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
//   }).addTo(map);

//   let marker = L.marker(location).addTo(map);// ******** places marker on map
// } 
