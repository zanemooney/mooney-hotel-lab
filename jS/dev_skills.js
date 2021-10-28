$(function() {
  const togglePassword = document.querySelector("#togglePassword");
  const password = document.querySelector("#id_password");
  
  togglePassword.addEventListener("click", function (e) {
    // toggle the type attribute
    const type =
      password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    // toggle the eye slash icon
    this.classList.toggle("fa-eye-slash");
  });
    

const games = [
  {
    title: "Doge Game (Pretty Wow)",
    link: "https://zanemoon13.github.io/lab-echo/pages/wow_game.html", 
    author: "Zane Mooney"
  }
];
// iterate over the JSON array
$.each(games, function (index, item) {
  console.log("Game Title: " + item.title);
  console.log("Game URL: " + item.link);
  console.log("Game Author: " + item.author);

  // create a brand new HTML element JUST with code

var el = `<div class='card text-center mx-auto bg-dark blue' style="width: 200px"> \
  <button class='cardOpen2 btn btn-outline-info'> ${ item.title } </button> \
   <div class='cardHide'> \
       <br> \
       <a href="${ item.link }" target="_blank" class="link-info" >GAME LINK</a> \
       <p class="text-white">Create by: ${ item.author } </p> \
       <br> \
       <button class='btn btn-outline-info cardClose2'>Close</button><br>\
   </div>
 </div>`; 

 console.log(el); 


$('#firstCard').append(el);

$('.nav-dropdown').append($(`<li><a href="#!"> ${item.author} </a></li>`));

});


});