var main = function() {
  $('.menuItem').click(function(){
    if($(this).text() === 'Home') {
      window.location.href = '../pages/index.html';
    }else{
      window.location.href = '../pages/' + $(this).text() +'.html';
    };
  });
};

$(document).ready(main);
