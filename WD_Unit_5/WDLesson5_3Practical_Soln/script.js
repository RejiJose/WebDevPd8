/* Challenge: Complete the Compound Interest Calculator
        1) Retrieve and store all the information in appropriate values. 
           Note: Typically user enter rates as percentages. Divide the value retrieved by 100.
                 Remember principal and rate have decimals.
        2) Create a build variable to start the table
        3) Establish the for loop to iterate over the number of years in the investment
        4) Calculate the balance using compound interest for each year. (Hint: Loop variable)
        5) Build each row for the balance after each year
           Note: When interpolating the balance, use toFixed(2) to adjust the amounts to two decimal places.  
        6) After the for loop, complete building the table and display it
*/

function balance(){
// variables
    let output = document.getElementById("output");
    let P = parseFloat(document.getElementById("p").value);
    let r = parseFloat(document.getElementById("r").value);
    let years = parseInt(document.getElementById("t").value);
    let build = "";
    build +=`<table>
                  <tr>  <th>Year</th>  <th>Balance</th>  </tr>`;
    // calculate and create table rows
    for (let t=0; t<=years; t++){
        let A = P * Math.pow(1 + (r/100), t);
        build += `<tr>
                        <td>${t}</td>
                        <td>$${A.toFixed(2)}</td>
                  </tr>`;
    }
    build += "</table>";
    // display in div
    output.innerHTML = build;
}

/* Challenge Bonus: Allow the user to enter a value for "n". This will require you to modify as follows:
        1) Retrieve the value of n from the user.
        2) Modify the formula to incorporate the value of n
        3) Adjust the heading to reflect the compounding period. Below are some typical n values.
              a. n = 1 when interest is compounded yearly
              b. n = 4 when interest is compounded quarterly
              c. n = 12 when interest is compounded monthly              
*/
function balance2(){
// variables
    let output = document.getElementById("output");
    let P = parseFloat(document.getElementById("p").value);
    let r = parseFloat(document.getElementById("r").value);
    let n = parseInt(document.getElementById("n").value);
    let years = parseInt(document.getElementById("t").value);
    let build = "";
    build +=`<table>
                  <tr>
                        <th>Year</th>
                        <th>Balance</th>
                  </tr>`;

    // calculate and create table rows
    for (let t=0; t<=years; t++){
        let A = P * Math.pow(1 + (r/100)/n, n*t);
        build += `<tr>
                        <td>${t}</td>
                        <td>$${A.toFixed(2)}</td>
                  </tr>`;
    }
    build += "</table>";
    // display in div
    output.innerHTML = build;
}