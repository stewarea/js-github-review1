(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "fb3f8ccd22f1442716a0fddae7abcd97e7661a39";

},{}],2:[function(require,module,exports){
function Search (name, description) {
  this.userid = userid;
  this.name = name;
  this.bio = bio;
  this. description = description;

}

Search.prototype.getUsers = function(displayUser, displayName, displayPhoto, displayBio) {
  $.get('https://api.github.com/users/'+ user +'?access_token=' + apiKey).then(function(response) {

    // var userid = response.login;
    // var name = response.name;
    // var photo = response.avatar_url;
    // var bio = response.bio;

    console.log(response);
   }).fail(function(error){
     console.log(error.responseJSON.message);
     displayUser(response.login);
     displayName(response.name);
     displayPhoto(response.avatar_url);
     displayBio(response.bio);

   });
 };

 Search.prototype.getRepos = function (repos, displayRepos) {
   reponame = [];
   repodesc = [];
   $.get('https://api.github.com/users/'+ user +'/repos?access_token=' + apiKey).then(function(repos) {
     var reponame = (repos.name);
     console.log(reponame);

     console.log(repos);
   }).fail(function(error){
     console.log(error.responseJSON.message);
     displayRepoName(repos.name);
     displayRepoDesc(repos.description);

     this.getRepoNames(name, desc);

  });

  Search.prototype.getRepoNames = function (name, desc) {
    name = [];
    desc = [];

  };

};

exports.searchModule = Search;

},{}],3:[function(require,module,exports){
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
      var user = $('#user').val();
      $('#user').val("");
      $(".result").show();

      newSearch = new Search(name, description);

      newSearch.getUsers(displayUser, displayName, displayPhoto, displayBio, displayRepos);
      newSearch.getRepos(displayRepoName, displayRepoDesc);
});



  });

},{"./../.env":1,"./../js/github.js":2}]},{},[3]);
