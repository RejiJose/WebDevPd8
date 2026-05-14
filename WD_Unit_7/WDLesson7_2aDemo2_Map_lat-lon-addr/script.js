// Review LeafletJS API Documentation at https://leafletjs.com

let data, mapObj; // global variables

async function displayLocation(){
  // if user inputs lat & lon
  let lat = get("lat").value;
  let lon = get("lon").value;
  let location = [lat, lon];

  // if user inputs address
  let address = get("address").value;  
  if(address != ""){
    location = await geocodeWithNominatim(address);
  }
  
  showMap(location); //invoke map API in showMap() function
}
