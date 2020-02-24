//*..........navbar..............*//

var btn_menu=document.getElementById("NJE_btn1");
var btn_close=document.getElementById("NJE_btn2");
var menu1=document.getElementById("NJE_menu");

btn_menu.onclick=function()
{
    btn_menu.style.display="none";
    btn_close.style.display="inline";
    menu1.style.display="inline";
}
btn_close.onclick=function()
{
    btn_menu.style.display="inline";
    btn_close.style.display="none";
    menu1.style.display="none";
}
//*slide1..................*//
var slideIndex = 1;
//showSlides(slideIndex);

function plusSlides(n) {
  document.getElementById('testh').style.display="none";
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
//*......slide2.....*//
var slideIndex1 = 1;
//showSlides1(slideIndex1);

function plusSlides1(n) {
  document.getElementById('testhh').style.display="none";
  showSlides1(slideIndex1 += n);
}

function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides1");
  var dots = document.getElementsByClassName("demo1");
  var captionText = document.getElementById("caption1");
  if (n > slides.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex1-1].style.display = "block";
  dots[slideIndex1-1].className += " active";
  captionText.innerHTML = dots[slideIndex1-1].alt;
}

/*............ vlidation du connexion.........*/

function validname(){
  var Letters =/^[A-Za-z]+$/;
  var nom =document.getElementById("name").value;
  
    if(Letters.test(nom)==true){
        alert('Le nom est valide');
    }
    else {
        alert('Le nom pas valide');
    }

}

function validpassword(){
  var pas =/^([A-Za-z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2})+$/;
  var password =document.getElementById("password").value;
  
    if(pas.test(password)==true){
        alert('Mot de passe est valide');
    }
    else {
        alert('Mot de passe pas valide');
    }

}
/*.....validation inscription......*/


function validfirstname(){
  var Letters =RegExp(/^[A-Za-z]+$/);
  var nom =document.getElementById("Text1");
  
    if(Letters.test(nom.value)==true){
        alert('Le nom est valide');
    }
    else {
        alert('Le nom pas valide');
    }

}
 function validlastname(){
  var Letters =RegExp("/^[A-Za-z]+$/");
   var nom =document.getElementById("Text2");
  
     if(Letters.test(nom.value)==true){
         alert('Le prénom est valide');
     }
     else {
         alert('Le prénom pas valide');
    }
  }

function validdate(){
  var Letters =RegExp("/^([0-31])+\([0-12])+\([1900-2020])+$/");
  var nom =document.getElementById("ds").value;
  
    if(Letters.test(nom)==true){
        alert('la date est valide');
    }
    else {
        alert('La date pas valide');
    }

}
 function validemail(){
   var Letters =RegExp("/^([A-Za-z]{3,10})+\@([A-Za-z])+\.)+\([a-zA-Z0-9]{2}$/");
   var nom =document.getElementById("email1").value;
  
    if(Letters.test(nom)===true){
         alert('email est valide');
    }
     else {
         alert('email pas valide');
     }

 }
function validpassword(){
  var pas =RegExp("/^([A-Za-z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2})+$/");
  var password =document.getElementById("pasword1");
  
    if(pas.test(password.value)){
        alert('Mot de passe est valide');
    }
    else {
        alert('Mot de passe pas valide');
    }

}

function validradio(){
  var Letters = RegExp("/^([0-31])+\([0-12])+\([1900-2020])+$/");
  var msex =document.getElementById("radio").value;
  
    if(Letters.test(msex)==true){
        alert('sex est valide');
    }
    else {
        alert('sex pas valide');
    }

}
/*......*/
$(document).ready(function() {
  $('#email').blur(function() {
      var email = $('#email').val();
      if (IsEmail(email) == false) {
          $('#sign-up').attr('disabled', true);
          $('#popover-email').removeClass('hide');
      } else {
          $('#popover-email').addClass('hide');
      }
  });
  $('#password').keyup(function() {
      var password = $('#password').val();
      if (checkStrength(password) == false) {
          $('#sign-up').attr('disabled', true);
      }
  });
  $('#confirm-password').blur(function() {
      if ($('#password').val() !== $('#confirm-password').val()) {
          $('#popover-cpassword').removeClass('hide');
          $('#sign-up').attr('disabled', true);
      } else {
          $('#popover-cpassword').addClass('hide');
      }
  });
  $('#contact-number').blur(function() {
      if ($('#contact-number').val().length != 10) {
          $('#popover-cnumber').removeClass('hide');
          $('#sign-up').attr('disabled', true);
      } else {
          $('#popover-cnumber').addClass('hide');
          $('#sign-up').attr('disabled', false);
      }
  });
  $('#sign-up').hover(function() {
      if ($('#sign-up').prop('disabled')) {
          $('#sign-up').popover({
              html: true,
              trigger: 'hover',
              placement: 'below',
              offset: 20,
              content: function() {
                  return $('#sign-up-popover').html();
              }
          });
      }
  });

  function IsEmail(email) {
      var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (!regex.test(email)) {
          return false;
      } else {
          return true;
      }
  }

  function checkStrength(password) {
      var strength = 0;


      //If password contains both lower and uppercase characters, increase strength value.
      if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
          strength += 1;
          $('.low-upper-case').addClass('text-success');
          $('.low-upper-case i').removeClass('fa-file-text').addClass('fa-check');
          $('#popover-password-top').addClass('hide');


      } else {
          $('.low-upper-case').removeClass('text-success');
          $('.low-upper-case i').addClass('fa-file-text').removeClass('fa-check');
          $('#popover-password-top').removeClass('hide');
      }

      //If it has numbers and characters, increase strength value.
      if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) {
          strength += 1;
          $('.one-number').addClass('text-success');
          $('.one-number i').removeClass('fa-file-text').addClass('fa-check');
          $('#popover-password-top').addClass('hide');

      } else {
          $('.one-number').removeClass('text-success');
          $('.one-number i').addClass('fa-file-text').removeClass('fa-check');
          $('#popover-password-top').removeClass('hide');
      }

      //If it has one special character, increase strength value.
      if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
          strength += 1;
          $('.one-special-char').addClass('text-success');
          $('.one-special-char i').removeClass('fa-file-text').addClass('fa-check');
          $('#popover-password-top').addClass('hide');

      } else {
          $('.one-special-char').removeClass('text-success');
          $('.one-special-char i').addClass('fa-file-text').removeClass('fa-check');
          $('#popover-password-top').removeClass('hide');
      }

      if (password.length > 7) {
          strength += 1;
          $('.eight-character').addClass('text-success');
          $('.eight-character i').removeClass('fa-file-text').addClass('fa-check');
          $('#popover-password-top').addClass('hide');

      } else {
          $('.eight-character').removeClass('text-success');
          $('.eight-character i').addClass('fa-file-text').removeClass('fa-check');
          $('#popover-password-top').removeClass('hide');
      }




      // If value is less than 2

      if (strength < 2) {
          $('#result').removeClass()
          $('#password-strength').addClass('progress-bar-danger');

          $('#result').addClass('text-danger').text('Very Week');
          $('#password-strength').css('width', '10%');
      } else if (strength == 2) {
          $('#result').addClass('good');
          $('#password-strength').removeClass('progress-bar-danger');
          $('#password-strength').addClass('progress-bar-warning');
          $('#result').addClass('text-warning').text('Week')
          $('#password-strength').css('width', '60%');
          return 'Week'
      } else if (strength == 4) {
          $('#result').removeClass()
          $('#result').addClass('strong');
          $('#password-strength').removeClass('progress-bar-warning');
          $('#password-strength').addClass('progress-bar-success');
          $('#result').addClass('text-success').text('Strength');
          $('#password-strength').css('width', '100%');

          return 'Strong'
      }

  }

});

