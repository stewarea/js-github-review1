var apiKey = require('./../.env').apiKey;
var Search = require('./../js/github.js').searchModule;

var displayUser = function(user) {
  $('.userid').text("User ID: " + user);
};
var displayName = function(name) {
  $('.name').text("Name: " + name);
};
var displayPhoto = function(photo) {
  $('.photo').html("<img src="+ photo +">");
};
var displayBio = function(bio) {
  $('.bio').text(bio);
};

var displayRepos = function(repos) {
  $('.publicrepos').text("<li>" + reponame + "</li>");
};

$(document).ready(function() {
  $('#search').submit(function(event) {
    event.preventDefault();

});
      var user = $('#user').val();
      $('#user').val("");
      $(".result").show();

      newSearch = new Search(name, description);

      newSearch.getUsers(displayUser, displayName, displayPhoto, displayBio, displayRepos);
      newSearch.getRepos(displayRepoName, displayRepoDesc);
});



  });
