var apiKey = require('./../.env').apiKey;

function Search () {
}

Search.prototype.getUsers = function(displayUser, displayName, displayPhoto, displayBio, user) {


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
