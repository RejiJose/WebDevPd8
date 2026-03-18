let grades = [65, 79, 100, 59, 71, 86, 43, 24, 96, 83, 61, 70, 91, 75, 88];

function example1(){
  let output = document.getElementById("output");

  output.innerHTML = `Grade at index 1 is ${grades[1]}`;
}

function example2(){
  let output = document.getElementById("output");
  let i = parseInt(document.getElementById("index").value);

  output.innerHTML = `Grade at index ${i} is ${grades[i]}`;
}

function example3(){
  let output = document.getElementById("output");

  let build = `<table border="1">`;

  build += `<tr class="headings"><th>Exam</th><th>Grade</th></tr>`;

  for(let i = 0; i < grades.length; i+=1){
    build += `<tr><td>${i+1}</td><td>${grades[i]}</td></tr>`;
  }

  build += `</table>`;

  output.innerHTML = build;
}