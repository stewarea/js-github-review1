var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#search').click(function() {
    var user = $('#user').val();
    $('#user').val("");
    $.get('https://api.github.com/users/' + user +'?access_token=' + apiKey).then(function(response) {
      console.log(response);
     }).fail(function(error){
       console.log(error.responseJSON.message);
     });
  });
});
