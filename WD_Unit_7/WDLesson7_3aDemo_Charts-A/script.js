//global variables
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

// Discussion 3: Basic requirements to create a chart. (See e.g. of line chart from c3js.org)
function exploringCharts(){
  c3.generate({
    bindto: '#chart', // id of div to display chart
    data: {
      columns: [
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 50, 20, 10, 40, 15, 25]
      ], // "columns" is an array of arrays containing your data for the chart
      type:"line" // Change the type of chart to bar or pie.(default type is 'line')
    }
  });
}


// Discussion 5: Generic function to draw chart. Create a function displayChart() that accepts the following: 
// the chart data, an id for the div to display the chart, and the chart type.
function displayChart( data, chart_id, chart_type ){
  c3.generate({
    bindto: `#${chart_id}`, // id of the div to display chart
    data: {
      columns: data, // data structure: array of arrays
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
