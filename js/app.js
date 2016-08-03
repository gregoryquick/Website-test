var holder = false;
var toggle = function() {
  if(holder){
    holder = false;
  } else {
    holder = true;
  }
};

var main = function() {
  // alert("The page has loaded");
  // $('.spambutton').animate({left: "285px"}, 200);
  $('.spambutton').click(function(){
    alert("You clicked an image!");
    // $('.spambutton').animate({left: "2085px"}, 200);
  });

  $('.lpfgt1').click(function(){
    $(this).toggleClass('lpfgt2');
  });

  $(document).keypress(function(event){
    if(event.which <= 122 && event.which >= 65){
      alert("You pressed letter key!\n"+ event.which);
    }else{
    alert("You pressed a button!\n"+ event.which);
    }
  });
};

// while(holder){
//   alert("Spam!")
// }

$(document).ready(main);
