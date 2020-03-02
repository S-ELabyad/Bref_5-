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
     
    }
   

}

function validpassword1(){
  var pas =/^[A-Za-z0-9_]+$/;
  var password =document.getElementById("password").value;
  
    if(pas.test(password)==true){
      
    }
  

}
function confirmation_password()
{
  var password =document.getElementById("password").value;
  var conf_password =document.getElementById("confirmation").value;
  if(password === conf_password)
  {
    alert("confirmation est correcte");
  }
  else
  {
    alert("confirmation pas correcte");
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
  var Letters =RegExp(/^[A-Za-z]+$/);
   var nom =document.getElementById("Text2");
  
     if(Letters.test(nom.value)==true){
         alert('Le prénom est valide');
     }
     else {
         alert('Le prénom pas valide');
    }
  }

function validdate(){
  var nom =(new Date().getFullYear())-(new Date(document.getElementById("ds").value).getFullYear());
  
    if(nom>=18){
        alert('la date est valide');
    }
    else {
        alert('Vous êtes mineur.');
    }

}
 function validemail(){
   var Letters =RegExp(/^([A-Za-z]{3,10})+\@([A-Za-z])+\.)+\([a-zA-Z0-9]{2}$/);
   var nom =document.getElementById("email1").value;
  
    if(Letters.test(nom)===true){
         alert('email est valide');
    }
     else {
         alert('email pas valide');
     }

 }
 
function validpassword(){
  var pas =RegExp(/^[A-Za-z0-9_]+$/);
  var password =document.getElementById("pasword1");
  var conf_password =document.getElementById("pasword2");
    if(pas.test(password.value)){
      if(password.value==conf_password.value)
      {
        alert('confirmation est valide');
      }
      else {
        alert('confirmation pas valide');
      }
    }
    else {
        alert('Mot de passe pas valide');
    }

}





/*....validation de popup..*/
function age(){
    var anneeNaissance;
    var age;
    var phrase;
    var annee = new Date().getFullYear()
    var nom = document.getElementById("name").value;
    var prd=document.getElementById("PeroideL").value;
    var NBRPersonne=document.getElementById("NbrL").value;
   
    anneeNaissance = parseInt(document.getElementById("YY").value);
      age = annee-anneeNaissance;
      //condition pour l'attribution de la valeur c selon l'age de la personne
      if(age<18){
        alert("Vous êtes mineur.");
      }
    else{
        //confirm("Votre age est: "+age+" ans!"+"\n"+"Le modèle de voiture sélectionné est: "+CarSelected+"\n"+"Nom: " +nom);
        confirm("Votre Nom est: " + nom+"\n"+"Votre Age est: "+age+"\n"+"Peroide de location est: "+prd+"\n"+"Nombre de personne est: "+NBRPersonne);
    }

    }