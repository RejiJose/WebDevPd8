//The function get() below accepts an id of an element and returns the actual element with that id.
//This function serves to shorten the code previously used to get an element with getElementByID().
function get(id){
  return document.getElementById(id);
}

//Challenge 1: Create a function card() that accepts the JSON data for each violation, then generates and returns an appropriate card for the violation.

function card( cardInfo ){
  let build = "";
  build = `<div class="fitted card">
                <h3>Summons#: ${cardInfo.summons_number}</h3>
                <hr>
                <p>Plate: ${cardInfo.plate}</p>
                <p>Licence type: ${cardInfo.license_type}</p>
                <p>${cardInfo.violation}</p>
                <hr>
                <p>Issued on: ${cardInfo.issue_date}</p>
                <hr>
                <p>${cardInfo.issuing_agency}</p>
            </div>`;

  return build;
}