var colorhex2;
var choices_r;
var choices_g;
var choices_b;
var modal = document.getElementById('modal-answer');
var span = document.getElementsByClassName("close")[0];


// Modal functions adapted from W3Schools
document.getElementById("submitButton").onclick = function() {
  modal.style.display = "block";
  $("").toggleClass();
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function compute(){
  // gather R values
  choices_r = $("input[type='radio'].r:checked").map(function(i, radio) {
    return parseInt($(radio).val());
  }).toArray();
  if (choices_r.length<1){
      choices_r=[14];
  }
  // gather G values
  choices_g = $("input[type='radio'].g:checked").map(function(i, radio) {
      return parseInt($(radio).val());
    }).toArray();

  if (choices_g.length<1){
      choices_g=[14];
  }  
  // gather B values
  choices_b = $("input[type='radio'].b:checked").map(function(i, radio) {
  return parseInt($(radio).val());
  }).toArray();
  if (choices_b.length<1){
      choices_b=[14];
  }
}
function calculate(total, num){
  return total + num;
}

// componentToHex adapted from W3Schools
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

// Changing background
document.onclick = function() {changebackground()};
function changebackground() {
  compute();

  var color_r = 18 * choices_r.reduce(calculate);
  var color_r2= 13 * choices_r.reduce(calculate);
  var color_g = 18 * choices_g.reduce(calculate);
  var color_g2= 13 * choices_g.reduce(calculate);
  var color_b = 18 * choices_b.reduce(calculate);
  var color_b2= 13 * choices_b.reduce(calculate);
  
  var colorhex= componentToHex(color_r) + componentToHex(color_g) + componentToHex(color_b);

  colorhex2= componentToHex(color_r2) + componentToHex(color_g2) + componentToHex(color_b2);     
  document.body.style.background = "#"+colorhex;
  var elements = document.querySelectorAll('label');
    for(var i=0; i<elements.length; i++){
        elements[i].style.borderColor = "#"+colorhex2;
    } 
    document.getElementById("submitButton").style.background = "#"+colorhex2;
    document.getElementById("modal-color").style.borderColor = "#"+colorhex2;
    document.getElementById("intro-border").style.borderColor = "#"+colorhex2;
}

// Submit Button
$('#submit').on('click', function(e) {
  compute();

  // error message
  if (choices_r.length<2 || choices_g.length<2 || choices_b.length<2){
    document.getElementById("not-enough").style.display = "block";
  }
  // no error
  if (choices_r.length>1 && choices_g.length>1 && choices_b.length>1){
    document.getElementById("not-enough").style.display = "none";
  }
  
  var color_r = 18 * choices_r.reduce(calculate);
  var color_g = 18 * choices_g.reduce(calculate);
  var color_b = 18 * choices_b.reduce(calculate);
  
  // modifying modal box and message
  var colorhex= componentToHex(color_r) + componentToHex(color_g) + componentToHex(color_b);
  $('#you-got').text("#"+colorhex);
  document.getElementById("modal-answer").style.background = "#"+colorhex;
  document.body.style.background = "#"+colorhex;

  // animate modal
  $('#modal-color').stop().animate({opacity: 1}, 1000);
});

// animate answers as you click
$('label.one').click(function() {
  $('label.one').not(this).stop().animate({opacity: 0.5}, 200);
  $(this).stop().animate({opacity: 1.0}, 200);
});
$('label.two').click(function() {
  $('label.two').not(this).stop().animate({opacity: 0.5}, 200);
  $(this).stop().animate({opacity: 1.0}, 200);
});
$('label.three').click(function() {
  $('label.three').not(this).stop().animate({opacity: 0.5}, 200);
  $(this).stop().animate({opacity: 1.0}, 200);
});
$('label.four').click(function() {
  $('label.four').not(this).stop().animate({opacity: 0.5}, 200);
  $(this).stop().animate({opacity: 1.0}, 200);
});
$('label.five').click(function() {
  $('label.five').not(this).stop().animate({opacity: 0.5}, 200);
  $(this).stop().animate({opacity: 1.0}, 200);
});
$('label.six').click(function() {
  $('label.six').not(this).stop().animate({opacity: 0.5}, 200);
  $(this).stop().animate({opacity: 1.0}, 200);
});

