function login(){
  let user = document.getElementById("user").value;
  let pwd = document.getElementById("pwd").value;
  let output = document.getElementById("example1");
  let message = "";

  if(user == "admin" && pwd == "1234"){
    message = "Access Granted";
  }else{
    message = "Access Denied";
  }
  
  output.innerHTML = message;
}

function eligible(){
  let grd = document.getElementById("gradelevel").value;
  let gpa = document.getElementById("gpa").value;
  let output = document.getElementById("example2");
  let status = "";

  if(grd >= 11 || gpa > 90){
    message = "Eligible";
  }else{
    message = "Not Eligible";
  }

  output.innerHTML = message;
}


