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

var displayRepos = function(reponame) {

  $('#showrepos').append("<p>" + reponame + "</p>");
};

var displayRepoDesc = function (repodesc) {

  $('#showdesc').append("<p>" + repodesc + "</p>");
};

$(document).ready(function() {
  $('#search').submit(function(event) {
    event.preventDefault();

      $(".result").show();
      var description = "stuff";
      var reponame = "name";

      newSearch = new Search(user);

      newSearch.getUsers(displayUser, displayName, displayPhoto, displayBio);
      newSearch.getReposSearch(displayRepos, displayRepoDesc);
    });
  });
