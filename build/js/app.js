(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "fb3f8ccd22f1442716a0fddae7abcd97e7661a39";

},{}],2:[function(require,module,exports){
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
      $('.name').text(" Name: " + name);
      $('.photo').html("<img src="+ photo +">");
      $('.bio').text(bio);
      $('.repos').text("Public Repos: " + repositories);
      console.log(repositories);
     }).fail(function(error){
       console.log(error.responseJSON.message);
     });
  });
});

},{"./../.env":1}]},{},[2]);
