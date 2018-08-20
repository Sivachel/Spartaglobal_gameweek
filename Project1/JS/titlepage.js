$(document).ready(function() {
  var instructions_div = $('#instructions_div').hide();
  var instructions_btn = $('#instructions_btn')

  $('#instructions_btn').click(function(){
    $('#instructions_div').slideToggle();
  });
});
