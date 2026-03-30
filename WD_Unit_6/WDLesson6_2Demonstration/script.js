/*
//In a previous lesson we store related information in separate parallel arrays. Not a good approach!
let meat_titles = ["Beef Tips","Brisket","Ribeye","Steak"];
let meat_images = ["beeftips.jpg","brisket.jpg","ribeye.jpg","steak.jpg"];
let meat_prices = [18.99,27.99,21.99,15.99];
*/
function example1(){
  let meat1 = {
    "name":"Beef Tips",
    "image":"beeftips.jpg",
    "price":18.99,
  }
  console.log(meat1.name);
  console.log(meat1.image);
  console.log(meat1.price);

}
function example2(){
  let meat2 = {
    "name":"Brisket", "image":"brisket.jpg",  "price":27.99
  };

  let meat3 = {"name":"Ribeye", "image":"ribeye.jpg", "price":21.99 };

  let meat4 = {"name":"Steak", "image":"steak.jpg", "price":15.99 };

  let output = document.getElementById("output");
 
  let build = `   <div class="card">
                      <h3>${meat2.name}</h3>
                      <img src="images/${meat2.image}">
                      <p>${meat2.price}</p>
                  </div>`;

  build += `      <div class="card">
                      <h3>${meat3.name}</h3>
                      <img src="images/${meat3.image}">
                      <p>${meat3.price}</p>
                  </div>`;

  build += `      <div class="card">
                      <h3>${meat4.name}</h3>
                      <img src="images/${meat4.image}">
                      <p>${meat4.price}</p>
                  </div>`;

  output.innerHTML = build;
}