
function mark(el){
    el.style.border="2px solid #4AD494";
    el.style.background="#4AD494";
    el.style.scale(1.05,1.05);
    el.style.color="white";
}

var modal = document.getElementById('modal-answer');

// Get the button that opens the modal
var btn = document.getElementById("submitButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
document.getElementById("o11").onclick = function() {changebackground()};
document.getElementById("o12").onclick = function() {changebackground()};
document.getElementById("o13").onclick = function() {changebackground()};
document.getElementById("o14").onclick = function() {changebackground()};
document.getElementById("o21").onclick = function() {changebackground()};
document.getElementById("o22").onclick = function() {changebackground()};
document.getElementById("o23").onclick = function() {changebackground()};
document.getElementById("o24").onclick = function() {changebackground()};
document.getElementById("o31").onclick = function() {changebackground()};
document.getElementById("o32").onclick = function() {changebackground()};
document.getElementById("o33").onclick = function() {changebackground()};
document.getElementById("o34").onclick = function() {changebackground()};
document.getElementById("o41").onclick = function() {changebackground()};
document.getElementById("o42").onclick = function() {changebackground()};
document.getElementById("o43").onclick = function() {changebackground()};
document.getElementById("o44").onclick = function() {changebackground()};
document.getElementById("o51").onclick = function() {changebackground()};
document.getElementById("o52").onclick = function() {changebackground()};
document.getElementById("o53").onclick = function() {changebackground()};
document.getElementById("o54").onclick = function() {changebackground()};
document.getElementById("o61").onclick = function() {changebackground()};
document.getElementById("o62").onclick = function() {changebackground()};
document.getElementById("o63").onclick = function() {changebackground()};
document.getElementById("o64").onclick = function() {changebackground()};

function changebackground() {
    var choices_r = $("input[type='radio'].r:checked").map(function(i, radio) {
        return parseInt($(radio).val());
      }).toArray();
      if (choices_r.length<1){
          choices_r=[14];
      }
      var choices_g = $("input[type='radio'].g:checked").map(function(i, radio) {
          return parseInt($(radio).val());
        }).toArray();
  
      if (choices_g.length<1){
          choices_g=[14];
      }  
      var choices_b = $("input[type='radio'].b:checked").map(function(i, radio) {
      return parseInt($(radio).val());
      }).toArray();
      if (choices_b.length<1){
          choices_b=[14];
      }
  
  
      function calculate(total, num){
          return total + num;
      }
      
  
      var color_r = 18 * choices_r.reduce(calculate);
      var color_g = 18 * choices_g.reduce(calculate);
      var color_b = 18 * choices_b.reduce(calculate);

      function componentToHex(c) {
          var hex = c.toString(16);
          return hex.length == 1 ? "0" + hex : hex;
      }
      
      var colorhex= componentToHex(color_r) + componentToHex(color_g) + componentToHex(color_b);
      document.body.style.background = "#"+colorhex;

}





$('#submit').on('click', function(e) {
    // gather all checked radio-button values
    var choices_r = $("input[type='radio'].r:checked").map(function(i, radio) {
      return parseInt($(radio).val());
    }).toArray();
    if (choices_r.length<1){
        choices_r=[14];
    }
    var choices_g = $("input[type='radio'].g:checked").map(function(i, radio) {
        return parseInt($(radio).val());
      }).toArray();

    if (choices_g.length<1){
        choices_g=[14];
    }  
    var choices_b = $("input[type='radio'].b:checked").map(function(i, radio) {
    return parseInt($(radio).val());
    }).toArray();
    if (choices_b.length<1){
        choices_b=[14];
    }


    function calculate(total, num){
        return total + num;
    }
    

    var color_r = 18 * choices_r.reduce(calculate);
    var color_g = 18 * choices_g.reduce(calculate);
    var color_b = 18 * choices_b.reduce(calculate);
    $('#you-got').text(color_r + ", " + color_g + ", " + color_b);
    const rgb = "'rgb("+color_r+","+color_g+","+color_b+")'";
    


    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
    
    var colorhex= componentToHex(color_r) + componentToHex(color_g) + componentToHex(color_b);
    $('#you-got').text("#"+colorhex);

    document.getElementById("modal-answer").style.background = "#"+colorhex;
    document.body.style.background = "#"+colorhex;
  });

//   rgb(parseInt(color_r), parseInt(color_g),parseInt(color_g))
