var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);

}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
  rollBg();
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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
}

// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2700); // Change image every 2 seconds
// }

function add(e) {
  
  // alert("alert");   
  // let str =str + " "+ e.cap.value; 
  // str = str + " "+ e.fline.value;
  // str= str+ " "+ e.sline.value;
  // str = str+" "+e.tline.value;
  // alert(str);

  var x = document.createElement("DIV").setAttribute("class","mySlides fae");

  var caption = document.createElement("DIV").setAttribute("class","text");
  var description  = document.createElement("DIV").setAttribute("class","des");
   
  var child_caption = document.createTextNode(e.cap.value);
  caption.appendChild(child_caption);

  var fline_child_description = document.createTextNode(e.fline.value);
  var sline_child_description = document.createTextNode(e.sline.value);
  var tline_child_description = document.createTextNode(e.tline.value);
  description.appendChild(fline_child_description);
  description.appendChild(sline_child_description);
  description.appendChild(tline_child_description);
  
  
  x.appendChild(caption);
  x.appendChild(description);
  
  document.getElementById("main").appendChild(x);
  
}

// function randomGen() {
// // var x = Math. floor(Math. random() * 256);
// // var y = Math. floor(Math. random() * 256);
// // var z = Math. floor(Math. random() * 256);
// // var bgColor = "rgb(" + x + "," + y + "," + z + ")";
// // var nextColor = "rgb(" + x + "," + y + "," + z + ")";

// var c1 = {
//   r: Math.floor(Math.random()*255),
//   g: Math.floor(Math.random()*255),
//   b: Math.floor(Math.random()*255)
// };

// var c2 = {
//   r: Math.floor(Math.random()*255),
//   g: Math.floor(Math.random()*255),
//   b: Math.floor(Math.random()*255)
// };

// c1.rgb = 'rgb('+c1.r+','+c1.g+','+c1.b+')';
// c2.rgb = 'rgb('+c2.r+','+c2.g+','+c2.b+')';
// document.body.style.background= 'radial-gradient(at top left, '+c1.rgb+', '+c2.rgb+')';


// }



function newGradient() {
  var c1 = {
    r: Math.floor(Math.random()*255),
    g: Math.floor(Math.random()*255),
    b: Math.floor(Math.random()*255)
  };
  var c2 = {
    r: Math.floor(Math.random()*255),
    g: Math.floor(Math.random()*255),
    b: Math.floor(Math.random()*255)
  };
  c1.rgb = 'rgb('+c1.r+','+c1.g+','+c1.b+')';
  c2.rgb = 'rgb('+c2.r+','+c2.g+','+c2.b+')';
  return 'radial-gradient(at top left, '+c1.rgb+', '+c2.rgb+')';
}

function rollBg() {
  $('.bg.hidden').css('background', newGradient());
  $('.bg').toggleClass('hidden');
}