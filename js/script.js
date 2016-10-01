$(function() {
  $('#generate-form-link').click(function(e) {
    $("#generate-form").delay(100).fadeIn(100);
    $("#recover-form").fadeOut(100);
    $('#recover-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });
  $('#recover-form-link').click(function(e) {
    $("#recover-form").delay(100).fadeIn(100);
    $("#generate-form").fadeOut(100);
    $('#generate-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });

  $('#generate-form').on('submit', function(e){
        e.preventDefault();
        $('#password_error').hide();
        $('#password_hash').hide();
        if($('#password').val() != $('#password-again').val()){
          $('#password_error').show();
          return;
        }
        var qntChar = 12;
        var hash = md5($('#username').val()+$('#service').val()+$('#password').val()).substring(0,qntChar);
        hash = (!/^[a-f]$/.test(hash)) ? hash.replace(/^\d/, $('#username').val().slice(-1).toUpperCase()) : hash.charAt(0).toUpperCase() + hash.slice(1);
        $('#hash').html(hash);
        $('#password_hash').show();
        $(this).find("input[type=text],input[type=password]").val("");
    });
});
