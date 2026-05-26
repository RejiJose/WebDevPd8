window.onload = function(){  
  //Sample content
  let hulk = `<div class="container center">
                    <div class="card">
                        <p> This is an image of Hulk </p>
                    </div>
                    <div class="card">
                        <img src='images/hulk.png'>
                    </div>
              </div>`;

  let heroes = ["images/hulk.png", "images/captain_america.png", "images/black_widow.png", "images/blackpanther.jpg", "images/drstrange.jpg"];
  
  //Discussion 1a: Create a simple MODAL window with just text
  createModal("Click Me!","Hi There <br> I'm Hulk","modal1_output");

  //Discussion 1b: Create a MODAL window using the image of the Huzk and the content created for the Hulk
  createModal("<img src='images/hulk.png'>", hulk, "modal2_output");
 
  //Discussion 2a: Create a simple FLIP CARD using just text
  createFlipCard("Click Me!","Hi There","flipcard_output");

  //Discussion 2b: Create a FLIP CARD using the image of the Hulk and the content created for the hulk
  createFlipCard("<img src='images/hulk.png'>", hulk, "flipcard_output");

  //Discussion 3a: Create a simple COLLAPSIBLE section using just text
  createCollapsible("Click Me!", "Hi There","collapsible_output");

  //Discussion 3b: Create a COLLAPSIBLE section using the text "Hulk" and the hulk content
  createCollapsible("Hulk", hulk, "collapsible_output");

  //Discussion 4: Create a GALLERY using the images in the heroes array.
  createGallery(heroes, "gallery_output");
}