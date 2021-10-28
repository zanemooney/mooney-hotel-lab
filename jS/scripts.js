$(function() {

    
    
    $('.cardClose1').click (function() {  
      $('.cardHide').hide();
    });
  
    $('.cardOpen1').click (function() {  
      $('.cardHide').show();
    });
  
    $('.cardClose2').click (function() {  
      $('.cardHide').hide();
    });
  
    $('.cardOpen2').click (function() {  
      $('.cardHide').show();
    });
  
    $('.cardClose3').click (function() {  
      $('.cardHide').hide();
    });
  
    $('.cardOpen3').click (function() {  
      $('.cardHide').show();
    });
  
  
  
  
      // $('#dragInfo').hide();
      // $('#positionInfo').hide();
  
      // $('#dragButton').click(function() {
      //   $('#dragInfo').show();
      // });
  
      // $('#dragClose').click(function() {
      //   $('#dragInfo').hide();
      // });
  
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
      
    });

