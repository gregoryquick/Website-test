var main = function() {
  $('.menuItem').click(function(){
    if($(this).text() === 'Home') {
      window.location.href = '/main/index.html';
    }else{
      window.location.href = '/main/pages/' + $(this).text() +'.html';
    };
  });
};

$(document).ready(main);
