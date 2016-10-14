(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "fb3f8ccd22f1442716a0fddae7abcd97e7661a39";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

function Search (userid, name, bio, photo, reponame, description) {
  this.userid = "";
  this.name = "";
  this.bio = "";
  this.photo = "";
  this.reponame = "";
  this. description = "";

}

Search.prototype.getUsers = function(displayUser, displayName, displayPhoto, displayBio) {
  var user = $('#user').val();
  $('#user').val("");
  $.get('https://api.github.com/users/'+ user +'?access_token=' + apiKey).then(function(response) {
    console.log(response);

      displayUser(response.login);
      displayName(response.name);
      displayPhoto(response.avatar_url);
      displayBio(response.bio);
}).fail(function(error){
     console.log(error.responseJSON.message);


   });
 };

 Search.prototype.getReposSearch = function (displayRepos, displayRepoDesc) {
   that = this;

   var repouser = $('#repouser').val();
    $('#repouser').val("");
   $.get('https://api.github.com/users/'+ repouser +'/repos?access_token=' + apiKey).then(function(repos) {
     console.log(repos);
      that.getRepos(repos);

     displayRepos(repos.name);
     displayRepoDesc(repos.description);

   });
};
  Search.prototype.getRepos = function (repos) {
    var reponamearray = [];
    var repodescarray = [];
    for (repo of repos) {
      var a = (repo.name);
      var b = (repo.description);
      reponame.push(a);
      repodesc.push(b);
    console.log(reponamearray);
    console.log(repodescarray);


        this.listRepos(reponamearray, repodesc);
    }
  };

Search.prototype.listRepos = function (reponamearray, respodescarray) {
    var reponame = "";
    var repodesc = "";
    for (var i = 0; i < reponamearray.length; i++) {
      reponame += i;
    }
    for (var j = 0; j < repodescarray.length; i++) {
      reponame += j;
    }
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

},{"./../js/github.js":2}]},{},[3]);
