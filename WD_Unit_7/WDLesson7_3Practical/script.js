//Data Source: https://data.cityofnewyork.us/Public-Safety/Motor-Vehicle-Collisions-Crashes/h9gi-nx95

let data, info, output;

async function init(){
  //Challenge 3: Add the API endpoint needed to retrieve the data
  let link = "mvc.json"; //https://data.cityofnewyork.us/resource/h9gi-nx95.json?$limit=200";
  //Challenge 4: Load the information from the API url into a variable 'data'   
  info = await fetch(link);
  data = await info.json();
  console.log(data);
 
  // Vehicle types (just for informational purposes)
  let vehicle_types = [];
  for(let accident of data){
    if(!vehicle_types.includes(accident.vehicle_type_code1)){
      vehicle_types.push(accident.vehicle_type_code1)
    }
  }
  console.log(vehicle_types)
}


function accidentsByBorough(){
  //Challenge 5: Create and initialize variables to keep a count of accidents by borough
  let q = 0, bk = 0, bx = 0, m = 0, s = 0;  
  //Challenge 6: Traverse the data and use decisions to determine which count variable to increase.
  for(let i = 0; i < data.length; i++){
    let accident = data[i];
    if(accident.borough == "QUEENS"){
      q++;
    }else if(accident.borough == "MANHATTAN"){
      m++;
    }else if(accident.borough == "BROOKLYN"){
      bk++;
    }else if(accident.borough == "BRONX"){
      bx++;
    }else if(accident.borough == "STATEN ISLAND"){
      s++;
    }
  }
  //Challenge 7: Build the data structure required for charts (an array of arrays with the first position in each array representing the data label)
  let chartData = [
    ["QUEENS",q],
    ["MANHATTAN",m],
    ["BROOKLYN", bk],
    ["BRONX", bx],
    ["STATEN ISLAND", s]
  ];  
  //Challenge 8: Retrieve the type of chart from the user's selection in the drop down box.
  let chartType = document.getElementById("chartType").value;  
  
  //Challenge 9: Display the chart
  displayChart(chartData,"chart",chartType)
}

function accidentsByVehicle(){
  //Challenge 10: Create the same functionality as above for accidentsByVehicle by aggregating data for the following vehicles: 'Sedan', 'Station Wagon/Sport Utility Vehicle', 'Taxi', 'Bus', 'Motorcycle' and other.  "Other" isn't a vehicle type but simply meant to capture all other vehicles. 
   let s = 0, sw = 0, t = 0, b = 0, m = 0, o = 0;
  
  for( let i = 0; i < data.length; i++ ){
    if ( data[i].vehicle_type_code1 == "Sedan" ) {
      s++;
    }else if ( data[i].vehicle_type_code1 == "Station Wagon/Sport Utility Vehicle" ) {
      sw++;
    }else if ( data[i].vehicle_type_code1 == "Taxi" ) {
      t++;
    }else if ( data[i].vehicle_type_code1 == "Bus" ) {
      b++;
    }else if ( data[i].vehicle_type_code1 == "Motorcycle" ) {
      m++;
    }else {
      o++;
    }
  }
  
  let chartData2 = [
    ["Sedan", s],
    ["Station Wagon/Sport Utility Vehicle", sw],
    ["Taxi", t],
    ["Bus", b],
    ["Motorcycle", m], 
    ["Other", o]
  ]
  
  let type = document.getElementById("chartType").value;

  displayChart(chartData2, "chart", type);  
}


//Function that accepts the data, an id to the div to display the chart and the type of chart
function displayChart( data, id, type ){
  let chart = c3.generate({
    bindto: '#' + id,
    data: {
      columns: data,
      type:type
    }
  });
}