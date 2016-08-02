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
};

// while(holder){
//   alert("Spam!")
// }

$(document).ready(main);
