let data; // global variable (useable throughout the program)

async function init(){
  
  let link = "https://raw.githubusercontent.com/rcastro2/WebDevelopment/refs/heads/main/data/countries.json";
  info = await fetch(link);
  data = await info.json();
  
  console.log(data);

  let output = document.getElementById("output");
  let build = `Data Retrieved.<br><br> This lesson will focus on simply confirming if the data was retrieved properly.<br>
  View the Console(use F12) to see the retrieved contents of 'data'.`;

  output.innerHTML = build;
}
