function BHS(){
  let school = {
    "name":"Bayside High School",
    "image":"https://imagescdn.homes.com/i2/DR3rh3ZAFGmxdce_vrcZB-VfI1qR7cPIq11ixKmzhCY/117/bayside-high-school-bayside-ny-2-schoolphoto.jpg",
    "address": "32-24 Corporal Kennedy Street, Bayside NY 11361"
  };
  let output = document.getElementById("output");

  //Challenge 1: Create and display a card of the information contained in the JSON variable school
  let build = "";
  build += `<div class="card">
                <h2>${school.name}</h2>
                <img src="${school.image}">
                <p>${school.address}</p>
            </div>`;
  output.innerHTML = build;
}
function artist(){
  //Challenge 2: Fill the JSON below with the specified information for your favorite artist
  let artist = {
    "name":"Taylor Swift",
    "image":"https://publish.purewow.net/wp-content/uploads/sites/2/2024/10/taylor-swift-hub.jpg",
    "album":"The Life of a Showgirl",
    "url":"https://www.taylorswift.com"
  };
  let output = document.getElementById("output");

  //Challenge 3: Build a card for the information in the JSON. Make the image a hyperlink to the url provided.
  let build = "";
  build += `<div class="card">
                <h2>${artist.name}</h2>
                <p>${artist.album}</p>
                <a href="${artist.url}" target="_blank">
                  <img src="${artist.image}">
                </a>                
            </div>`;
  output.innerHTML = build;
}


