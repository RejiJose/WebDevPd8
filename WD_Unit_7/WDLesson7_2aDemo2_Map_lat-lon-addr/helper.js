// get() returns the element using document.getElementById().
function get(id){
  return document.getElementById(id);
}

//showMap() displays the map for a location array [lat, lon]
function showMap(location){	
  //Line below needed to create the map object once.
  if(!mapObj){
      mapObj = L.map("map");
  }
  
  // draws map at specified zoom level
  let map = mapObj.setView(location, 14); // [lat, lon], zoom

  const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
  }).addTo(map);

  let marker = L.marker(location).addTo(map);// places marker on map
}     

// function to accept address and return [lat, lon]
const geocodeWithNominatim = async (address) => {
  const encoded = encodeURIComponent(address);
  const url = `https://nominatim.openstreetmap.org/search?q=${encoded}&format=json`;

  try {
    const response = await fetch(url);
    const results = await response.json();

    if (results.length > 0) {
      const { lat, lon } = results[0];
      console.log(`Latitude: ${lat}, Longitude: ${lon}`);
      return [lat,lon];
    } else {
      console.log('No results found.');
    }
  } catch (err) {
    console.error('Error:', err);
  }
};