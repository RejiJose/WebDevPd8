//Data Source: https://data.cityofnewyork.us/Social-Services/311-Service-Requests-from-2010-to-Present/erm2-nwe9

//global variables
let data, info, output;

async function init(){
  let link = "311.json"; //https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=200";
  info = await fetch(link);
  data = await info.json();
  console.log(data);
}

function ByAgency(){
  //Create and initialize variables to keep a count of complaints by agency.
  let nypd = 0, dot = 0, hpd = 0, other = 0;

  //Task 1: Traverse the data and increment the appropriate tally variable using the agency of the complaint. Use the tally variable "other" to capture all the other agencies.
  for(let i = 0; i < data.length; i++){
    let complaint = data[i];
    


  }
  //Task 2: Construct the chart data using the full agency name. (Hint: Go to the data source)
  let chartData = [
      


    ];

  //Task 3: Retrieve the chart type from the user via the drop down menu
  let chartType = 

  //Task 4: Display the chart of the breakdown of complaints by agency.
  displayChart(            );
}


// displayChart() accepts the data, an id of the container where to display the chart, and the type of chart to display in the container.
function displayChart( data, chart_id, chart_type ){
  let chart = c3.generate({
    bindto: `#${chart_id}`,
    data: {
      columns: data,
      type: chart_type
    }
  });
}