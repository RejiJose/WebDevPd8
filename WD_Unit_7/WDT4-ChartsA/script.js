let data;

let math = ["Math",79.0,80.0,79.9,78.8,73.4,77.2,74.5,78.7,76.8 ];
let english = ["English",79.7,78.8,81.6,80.6,82.3,77.4,79.5,78.6,77.9];
let science = ["Science",78.0,81.5,81.6,81.6,82.2,82.4,81.3,80.1,78.2];
let social = ["Social Studies",95.0,80.6,80.8,81.5,81.8,80.6,81.1,80.9,80.6];

let course_count = [
  ["Math",300],
  ["English",400],
  ["Science",500],
  ["Social Studies",600]
]
// Discussion 3: Review basic requirements to create a chart. (Start with the example of line chart from c3.js website)
function exploringCharts(){
  c3.generate({
    bindto: '#chart',
    data: {
      columns: [
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 50, 20, 10, 40, 15, 25]
      ],
      type:"line" // Discussion 4: Change the type of chart to bar or pie.(default is 'line')
    }
  });
}


//Discussion 5: Using concepts of modular programming, create a function displayChart() that accepts the data, an id for the div to display the chart, and the chart type.
function displayChart( data, chart_id, chart_type ){
  c3.generate({
    bindto: `#${chart_id}`, // id of the div to display chart
    data: {
      columns: data, // data must be an array of arrays
      type: chart_type // type of chart (pie/line/bar)
    }
  });
}

// Discussion 6: Use the displayChart() function to complete the event handlers below.
function lineChart(){
  data = [math, english];
  displayChart(data, "chart", "line");
}
function barChart(){
  data = [math, english, science, social ];
  displayChart(data, "chart", "bar");
}
function pieChart(){
  displayChart(course_count, "chart", "pie");
}



