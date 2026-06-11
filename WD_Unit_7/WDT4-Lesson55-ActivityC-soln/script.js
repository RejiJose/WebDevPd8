let data;

async function searchMeal(){
  //clear 'output' div before adding new content
  document.getElementById("output").innerHTML = "";
  
  //API Source: https://www.themealdb.com/  
  //1: Research theMealDB API and understand how to request a particular meal. Preview the data returned using a JSON editor online.

  //2: Retrieve the meal from the user via the text input
  let meal = document.getElementById("meal").value;
  
  //3: Build the link using the base of the RESTful API call along with the meal being requested by the user.
  let link = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`;
  
  //4: Get the data. Display to the console in order to verify and explore the information returned.
  let info = await fetch(link);
  data = await info.json();
  console.log(data);

  //5: Build an appropriate card using the information provided.  
  //Create a for loop to traverse all the meals in the array. 
  for(let i = 0; i < data.meals.length; i++){
    let meal = data.meals[i];
    //Create a collapsible using the meal name as the 'text' value and card(meal) as the 'content' value. 
    createCollapsible( meal.strMeal, card(meal), "output" );
  }
   
}

function getYouTube(utube_link){
  let id = utube_link.slice(32);  
  let build = `<iframe width="320" height="180" src="https://www.youtube.com/embed/${id}?si=tPoMsVdMdt3imVyD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  return build;
}

function card(m){
  let build = "";
  build += `<div class="card">`;
  build += `   <h1> ${m.strMeal}</h1><hr>`;
  build += `   <div class="container">`;
  build += `      <div style="flex:1;padding:10px">`
  build += `          <h3>Ingredients</h3>`
  build += `          <table>`
  
  for(let i = 1; i <= 10; i++){
    build += `    <tr><td>${m[`strMeasure` + i]}</td><td>${m[`strIngredient` + i]}</td></tr>`
  }
  
  build += `           </table>`
  build += `      </div>`
  build += `      <div style="flex:2;padding:10px;">`
  build += `         <img src="${m.strMealThumb}"><br><hr>`;
  build += `         <p>${m.strInstructions}</p>`;
  build +=       getYouTube(m.strYoutube);
  build += `      </div>`
  build += `   </div>`
  build += `</div>`
  return build;
}