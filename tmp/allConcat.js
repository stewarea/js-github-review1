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
    $("#showrepos tbody").empty();
    for (repo of repos) {
      $("#showrepos tbody").append("<tr><td>" + repo.name + "</td><td>" + repo.description + "</td></tr>");
  }

};



$(document).ready(function() {
  $('#search').submit(function(event) {
    event.preventDefault();

      $(".result").show();
      var user = $('#user').val();
      newSearch = new Search(user);

      newSearch.getUsers(displayUser, displayName, displayPhoto, displayBio, user);
      newSearch.getReposSearch(displayRepos, user);

    });
  $('#clear').click(function() {
    location.reload();
    });
  });
