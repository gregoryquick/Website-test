var main = function() {
  $('.menuItem').click(function(){
    if($(this).text() === 'Home') {
      window.location.href = 'index.html';
    };
  });
};

$(document).ready(main);
