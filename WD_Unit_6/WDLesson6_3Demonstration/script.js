let teachers = [
                { "name":"Benn", "course":"Programming Technologies", "image":"programmingtech.jpg"},
                { "name":"Joseph", "course":"Web Development", "image":"webdev.png" },
                { "name":"Porchetta", "course":"Intro to Computer Science", "image":"introcs.jpg" },
                { "name":"Castro", "course":"CS Career Development", "image":"cscareerdev.jpg" }
              ];

//prints output in Console
function example1(){

  console.log(teachers[0]);
  console.log(teachers[1].course);
  console.log(teachers[2].name);
  console.log(teachers[3].image);
}

// displays info from array of JSON in a div
function example2(){
  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < teachers.length; i++){
    let teacher = teachers[i];
    build += `<div class="card">
                <h3>${teachers[i].course}</h3>
                <img src="${teachers[i].image}">
                <h3>${teachers[i].name}</h3>
              </div>`;
  }
  
  output.innerHTML = build;
}