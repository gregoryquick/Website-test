
var varName;

var toggledropdown1Mode = function(){
  var Vardropdown1 = $('.dropdown1');
  if(Vardropdown1.attr("loggedIn") === "false"){
    Vardropdown1.attr("loggedIn","true");
    varName = $("#Name").val();
    alert(varName);
  }else{
    Vardropdown1.attr("loggedIn","false");
  };
};

var menu = function() {
  //Menu clode
    //normal menu item click handleing
    $('.menuItem').click(function(){
      var clicked = $(this).text();
      if(clicked === 'Home') {
        window.location.href = '../pages/index.html';
      }else{
        window.location.href = '../pages/'+clicked+'.html';
      };
    });
    //toggle menu toggleing
    $('.listButton').click(function(){
      $('.dropdown1').slideToggle();
    });
};

var main = function() {
  //runs menu clode
  menu();
};

$(document).ready(main);
