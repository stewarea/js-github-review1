var apiKey = require('./../.env').apiKey;


$(document).ready(function() {
  $('#search').submit(function(event) {
    event.preventDefault();
    var user = $('#user').val();
    $('#user').val("");
    $.get('https://api.github.com/users/'+ user +'?access_token=' + apiKey).then(function(response) {
      var userid = response.login;
      var name = response.name;
      var photo = response.avatar_url;
      var repositorties = response.public_repos
      $('.userid').text("User ID: " + user);
      $('.name').text(" Name: " + name);
      $('.photo').text("Photo: " + "<img src=" + photo + ">");
      $('.repos').text("Public Repos: " + repositories);
     }).fail(function(error){
       console.log(error.responseJSON.message);
     });
  });
});
