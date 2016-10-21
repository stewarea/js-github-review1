(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "fb3f8ccd22f1442716a0fddae7abcd97e7661a39";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

function Search () {
}

Search.prototype.getUsers = function(displayUser, displayName, displayPhoto, displayBio, user) {


  $.get('https://api.github.com/users/'+ user +'?access_token=' + apiKey).then(function(response) {

    displayUser(response.login);
    displayName(response.name);
    displayPhoto(response.avatar_url);
    displayBio(response.bio);
  });
 };

 Search.prototype.getReposSearch = function (displayRepos, user) {
   $.get('https://api.github.com/users/'+ user +'/repos?per_page=100&access_token=' + apiKey).then(function(repos) {
      displayRepos(repos);
   });
};

exports.searchModule = Search;

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../js/github.js":2}]},{},[3]);
