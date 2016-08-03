var main = function() {
  $('.menuItem').click(function(){
    var clicked = $(this).text();
    if(clicked === 'Home') {
      window.location.href = '../pages/index.html';
    }else{
      window.location.href = '../pages/'+clicked+'.html';
    };
  });
};

$(document).ready(main);
