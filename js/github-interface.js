var apiKey = require('./../.env').apiKey;


$(document).ready(function() {
  $('#search').submit(function(event) {
    event.preventDefault();
    var user = $('#user').val();
    $('#user').val("");
    $.get('https://api.github.com/users/'+ user +'?access_token=' + apiKey).then(function(response) {
      $(".result").show();
      var userid = response.login;
      var name = response.name;
      var photo = response.avatar_url;
      var repositories = response.public_repos;
      var bio = response.bio;
      $('.userid').text("User ID: " + user);
      $('.name').text"Name: " + name);
      $('.photo').html("<img src="+ photo +">");
      $('.bio').text(bio);
      $('.repos').text("Public Repos: " + repositories);
      console.log(repositories);
     }).fail(function(error){
       console.log(error.responseJSON.message);
     });
  });
});
