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
