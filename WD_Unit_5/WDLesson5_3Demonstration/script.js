function generate(){
  let output = document.getElementById("output");
  let startX = parseInt(document.getElementById("startX").value);
  let endX = parseInt(document.getElementById("endX").value);
  
  let build ="";
  build += `<table border="1">
                    <tr class="headings">
                      <th>X</th>
                      <th>Y</th>
                    </tr>`;

  for(let x = startX; x <= endX; x++){
    let y = x ** 2;
    build += `<tr class="data">
                  <td>${x}</td>
                  <td>${y}</td>
              </tr>`;
  }
  
  build += `</table>`;

  output.innerHTML = build;
}