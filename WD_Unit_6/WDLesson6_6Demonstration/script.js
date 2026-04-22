let data, info; // global variables

async function init(){
  
  let link = "311.json"; //let link = "https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=1000";
  info = await fetch(link);
  data = await info.json();
  
  //console.log(data);

  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let complaint = data[i];
    build += `<div class="fitted card">
                 <h3>${complaint.complaint_type}</h3>
                 <hr>
                 <p>${complaint.borough}</p>
                 <p>${complaint.incident_zip}</p>
                 <p>${complaint.descriptor}</p>
                 <hr>
                 <p>${complaint.created_date}</p>
                 <hr>
                 <p>${complaint.agency}</p>
              </div>`    
  }

  output.innerHTML = build;
}

function filterByBorough(){
  let output = document.getElementById("output");
  let result = document.getElementById("result");

  let borough = document.getElementById("borough").value;
  
  let build = "";
  let ct = 0; // counter to display # of results found

  for(let i = 0; i < data.length; i+=1){
    let complaint = data[i];
    if(complaint.borough == borough){
      build += `<div class="fitted card">
                  <h3>${complaint.complaint_type}</h3>
                  <hr>
                  <p>${complaint.borough}</p>
                  <p>${complaint.incident_zip}</p>
                  <p>${complaint.descriptor}</p>
                  <hr>
                  <p>${complaint.created_date}</p>
                  <hr>
                  <p>${complaint.agency}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}