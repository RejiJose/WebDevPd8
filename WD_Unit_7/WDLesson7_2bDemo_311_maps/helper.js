// get() returns the element using document.getElementById().
function get(id){
  return document.getElementById(id);
}

// showMap() displays the map for a location [lat, lon] in the right panel
function showMap(lat,lon){
  let location = [lat, lon];
  //Line below needed to create the map object once.
  if(!mapObj){
      mapObj = L.map("map");
  } 
  let map = mapObj.setView(location, 14);// [lat, lon], zoom

  const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
  }).addTo(map);

  let marker = L.marker(location).addTo(map);// places marker on map
}   
// function to generate an info card
function card( info ){ 
  let build = `<div class="card fitted">
                  <h3>${info.complaint_type}</h3>
                  <hr>
                  <p>Location: ${info.incident_address}</p>
                  <h5>${info.borough}</h5>`;
                  if(info.latitude && info.longitude){
                    build += `<input type="button" value="Map" onclick="showMap( ${info.latitude}, ${info.longitude} )">`;
                  }
    build +=    `</div>`;
  return build;
}
