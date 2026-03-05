function example1(){
  let output = document.getElementById("output");  
  let build = "";

  for(let i = 0; i < 10; i++){
    build += `<div class="card flash">`
    build += `  <h3> Title </h3>`
    build += `  <img src = "smile.png">`
    build += `  <p> ~~~~~~~~<br>~~~~~~~~<br>~~~~~~~~<br>~~~~~~~~</p>`
    build += `</div>`
  }
  output.innerHTML = build;
}

function example2(){
  let output = document.getElementById("output");
  let build = "";

  for(let i = 1; i <=8 ; i++){
    //Building HTML (chunli images)
    build += `<div class="card flash">`
    build += `  <img src="chunli/intro0${i}.gif">`
    build += `</div>`
  }
  output.innerHTML = build;
}

function example3(){
  let output = document.getElementById("output");
  let num = parseInt(document.getElementById("num").value);
  let build = "";

  for(let i = 0; i < num; i++){
    // building addition problems with random #s: 1 to 10
    let n1 = Math.floor(Math.random()*10 + 1);
    let n2 = Math.floor(Math.random()*10 + 1);

    build += `<div class="card flash">`
    build += `  <h3>&nbsp; ${n1}</h3>` //&nbsp; inserts a single space
    build += `  <h3>+ ${n2}</h3>`
    build += `  <hr>`
    build += `  <br><br>`
    build += `</div>`
  }
  output.innerHTML = build;
}
