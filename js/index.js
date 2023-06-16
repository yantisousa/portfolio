$(document).ready(function() {
    $(window).scroll(function() {
      var scrollPos = $(window).scrollTop()
    
      if (scrollPos > 835) {
        $('.html, .css, .js, .bts, .php, .laravel, .jquery, .mysql, .git').css('animation', 'effects 2s ease forwards');
      }
      if (scrollPos < 835) {
        $('.html, .css, .js, .bts, .php, .laravel, .jquery, .mysql, .git').css('animation', 'statis 2s ease forwards');
      }
      if(scrollPos > 1121){
        $('.projetos').css('animation', 'width 2s ease forwards')
      }
    });
  });
$('#enviar').click(function () { 
  let email = $('.email').val();
  let telefone = $('.telefone').val();
  $.ajax({
    type: "post",
    url: "form.php",
    data: {email, telefone},
    success: function (response) {
      if(email == ''){
        $('#msg-error').show();
        setTimeout(() => {
          $('#msg-error').hide();
          
        }, 2000);
      }else {
        $('#msg-success').show();
        $('.email').val('');
        $('.telefone').val('');
        setTimeout(() => {
          $('#msg-success').hide();
          
        }, 2000);
      }
    }
  });
  
});