var main = function() {
  $('.menuItem').click(function(){
    alert('clickEvent')
    if($(this).text() === 'Home') {
      alert('0')
      window.location.href = '../pages/index.html';
    }else{
      alert('1');
      window.location.href = '../pages/' + $(this).text() +'.html';
    };
  });
};

$(document).ready(main);
