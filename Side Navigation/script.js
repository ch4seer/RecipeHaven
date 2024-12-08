document.addEventListener("DOMContentLoaded", function () {

  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
 
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    


  
    if (username === "IIT406" && password === "LETRAN") {
 
   
       alert(" Click okay to redirect");
    
      window.location.href = "menu.html";
    } else {
     
      document.getElementById("errorMessage").textContent = "Invalid username or password.";
    }
  });
});
