var apiKey = require('./../.env').apiKey;

function Search (userid, name, bio, photo, rname, rdesc) {
  this.userid = userid;
  this.name = name;
  this.bio = bio;
  this.photo = photo;
  this.rname = rname;
  this.rdesc = rdesc;

}

Search.prototype.getUsers = function(displayUser, displayName, displayPhoto, displayBio) {
  var user = $('#user').val();

  $.get('https://api.github.com/users/'+ user +'?access_token=' + apiKey).then(function(response) {

    displayUser(response.login);
    displayName(response.name);
    displayPhoto(response.avatar_url);
    displayBio(response.bio);
  }).fail(function(error){
     console.log(error.responseJSON.message);


   });
 };

 Search.prototype.getReposSearch = function (displayRepos) {
   that = this;
   var user = $('#user').val();
   console.log(displayRepos);

   $.get('https://api.github.com/users/'+ user +'/repos?per_page=100&access_token=' + apiKey).then(function(repos) {
   console.log(displayRepos);
      displayRepos(repos);
   });
};

exports.searchModule = Search;
