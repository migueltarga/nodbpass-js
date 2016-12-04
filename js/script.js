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
        var qntChar = 14;
        var hash = md5($('#username').val()+$('#service').val()+$('#password').val()).substring(0,qntChar);
        console.log(hash);
        hash = $('#username').val().slice(-1).toUpperCase() + hash.slice(1);
        $('#hash').html(hash);
        $('#password_hash').show();
        $(this).find("input[type=text],input[type=password]").val("");
    });

  $('#recover-form').on('submit', function(e){
        e.preventDefault();
        $('#password_error_2').hide();
        $('#password_hash_2').hide();
        var qntChar = 14;
        var hash = md5($('#username_2').val()+$('#service_2').val()+$('#password_2').val()).substring(0,qntChar);
        console.log(hash);
        hash = $('#username_2').val().slice(-1).toUpperCase() + hash.slice(1);
        $('#hash_2').html(hash);
        $('#password_hash_2').show();
        $(this).find("input[type=text],input[type=password]").val("");
    });
});
